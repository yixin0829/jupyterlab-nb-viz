import { Node, Edge } from "reactflow";
import dagre from 'dagre';

export const getLayoutedElements = (nodes:Node[], edges:Edge[], direction='TB') => {
    const dagreGraph = new dagre.graphlib.Graph();
    const nodeWidth:number = 60;
    const nodeHeight:number = 20;
    const isHorizontal = direction === 'LR';

    dagreGraph.setDefaultEdgeLabel(() => ({}));
    dagreGraph.setGraph({ rankdir: direction, nodesep: 80 });

    // set the postiions to 0
    nodes.forEach((node:Node) => {
        return {...node, position: { x: 0, y: 0 } }
    });

    // edge cleanup to avoid orphan edges
    const edgesAfterCleanUp = edges.filter((e) => nodes.some((n) => n.id === e.source) && nodes.some((n) => n.id === e.target));

    // Add nodes and edges into dagreGraph
    nodes.forEach((node:Node) => {
        dagreGraph.setNode(node.id, { width: nodeWidth, height: nodeHeight });
    });
    edgesAfterCleanUp.forEach((edge:Edge) => {
        dagreGraph.setEdge(edge.source, edge.target);
    });

    dagre.layout(dagreGraph);

    nodes.forEach((node:any) => {
        const nodeWithPosition = dagreGraph.node(node.id);
        node.targetPosition = isHorizontal ? 'left' : 'top';
        node.sourcePosition = isHorizontal ? 'right' : 'bottom';

        // We are shifting the dagre node position (anchor=center center) to the top left
        // so it matches the React Flow node anchor point (top left).
        node.position = {
            x: nodeWithPosition.x - nodeWidth / 2,
            y: nodeWithPosition.y - nodeHeight / 2,
        };

        return node;
    });

    // console.log(`[getLayoutedElements] from TreeUitls`);
    return { nodes: nodes, edges: edgesAfterCleanUp };
};

function getEdgeLabel(sourceId: String, targetId: String, allEdges: Edge[]) {
    // Find the edge weight between sourceId and targetId
    const edge = allEdges.find((e) => e.source === sourceId && e.target === targetId);
    if (edge === undefined || edge.label === undefined) {
        return undefined;
    }
    return edge.label;
}

function getSubtreeElements(node: Node, curNodes: Node[], allEdges: Edge[], skipSubtreeOfEtc: boolean = true) {
    // Find all the nodes that belongs to the subtree whose root is node
    // subtree does NOT include the node itself
    const subtreeNodes:Node[] = [];
    const subtreeEdges:Edge[] = [];
    const queue:Node[] = [node];
    while (queue.length > 0) {
        const currentNode: Node = queue.shift()!;
        if (currentNode !== node) {
            subtreeNodes.push(currentNode);
            if (skipSubtreeOfEtc && currentNode.data.nodeType === 'etc') {
                continue;
            }
        }
        const children = curNodes.filter((n) => n.data.parent === currentNode.id);
        children.forEach((child) => {
            queue.push(child);
            subtreeEdges.push({
                id: `${currentNode.id}-${child.id}`,
                source: currentNode.id,
                target: child.id,
                label: getEdgeLabel(currentNode.id, child.id, allEdges)});
        });
    }
    return { subtreeNodes, subtreeEdges };
}

export function getInitialElements(allNodes: Node[], allEdges: Edge[]) {
    // Find the root node
    const rootNode = allNodes.find((n) => n.data.label === 'root');
    if (rootNode === undefined) {
        throw new Error('No root node found');
    }
    // Find all the nodes that belongs to the subtree whose root is rootNode
    const {subtreeNodes: initialNodes, subtreeEdges: initialEdges} = getSubtreeElements(rootNode, allNodes, allEdges);
    initialNodes.push(rootNode);
    return { nodes: initialNodes, edges: initialEdges };
}

function expandAllNodes(allNodes: Node[], allEdges: Edge[]) {
    const newNodes = allNodes.filter((n) => n.data.nodeType !== 'etc');
        let edgesToRemove = allEdges.filter((e) => (e.target.startsWith('etc')));
        // change the edge whose source is etc to its parent
        const etcNodes = allNodes.filter((n) => n.data.nodeType === 'etc');
        const newEdges = allEdges.map((e) => {
            if (etcNodes.some((n) => n.id === e.source)) {
                e.source = etcNodes.find((n) => n.id === e.source)!.data.parent!;
            }
            return e;
        })
    const newEdgesAfterCleanUp = newEdges.filter((e) => !edgesToRemove.some((et) => et.id === e.id));
    const { nodes: layoutedNewNodes, edges: layoutedNewEdges } = getLayoutedElements(newNodes, newEdgesAfterCleanUp);
    return { nodes: layoutedNewNodes, edges: layoutedNewEdges };
}

function expandEtcNode(selectedNode: Node|null, curNodes: Node[]|null, curEdges: Edge[]|null, allNodes: Node[], allEdges: Edge[]) {
    if (selectedNode === null || curNodes === null || curEdges === null || selectedNode.data.nodeType !== 'etc') {
        console.log(`[TreeUtils] Invalid input: selectedNode=${selectedNode}, nodeType=${selectedNode?.data.nodeType}}`);
        return { nodes: curNodes, edges: curEdges };
    }
    
    const {subtreeNodes: subtreeNodes, subtreeEdges: subtreeEdges} = getSubtreeElements(selectedNode, allNodes, allEdges);
    const newNodes = curNodes.concat(subtreeNodes).filter((n) => n.id !== selectedNode.id);
    let newEdges = curEdges.concat(subtreeEdges).map((e) => {
        if (e.source === selectedNode.id) {
            e.source = selectedNode.data.parent;
        }
        return e;
    }).filter((e) => e.target !== selectedNode.id);;
    return { nodes: newNodes, edges: newEdges };
}

function expandSubtree(selectedNode: Node|null, curNodes: Node[]|null, curEdges: Edge[]|null, allNodes: Node[], allEdges: Edge[]) {
    if (selectedNode === null || curNodes === null || curEdges === null) {
        console.log(`[TreeUtils] Invalid input: selectedNode=${selectedNode}`);
        return { nodes: curNodes, edges: curEdges };
    }
    
    if (selectedNode.data.nodeType === 'etc') {
        return expandEtcNode(selectedNode, curNodes, curEdges, allNodes, allEdges);    
    }
    const {subtreeNodes: subtreeNodes, subtreeEdges: subtreeEdges} = getSubtreeElements(selectedNode, allNodes, allEdges);
    const newNodes = curNodes.concat(subtreeNodes);
    const newEdges = curEdges.concat(subtreeEdges);
    return { nodes: newNodes, edges: newEdges };
}

function collapseSubtree(selectedNode: Node|null, curNodes: Node[]|null, curEdges: Edge[]|null, allNodes: Node[], allEdges: Edge[]) {
    if (selectedNode === null || curNodes === null || curEdges === null) {
        console.log(`[TreeUtils] Invalid input: selectedNode=${selectedNode}`);
        return { nodes: curNodes, edges: curEdges };
    }
    const {subtreeNodes: subtreeNodes, subtreeEdges: subtreeEdges} = getSubtreeElements(selectedNode, allNodes, allEdges, false);
    console.log(`[collapseSubtree] subtreeNodes length=${subtreeNodes.length}`);
    const newNodes = curNodes.filter((n) => !subtreeNodes.some((sn) => sn.id === n.id)); // remove all the nodes in subtree
    console.log(`[collapseSubtree] prevNodes length=${curNodes.length}, newNodes length=${newNodes.length}`);
    const labelWhenCollapse = selectedNode.data.rawData + ' (+)';
    const newNodesAfterLabelChange = newNodes.map((n) => {
        if (n.id === selectedNode.id) {
            n.data = {...n.data, label: labelWhenCollapse} 
        };
        return n;
        }
    );
    const newEdges = curEdges.filter((e) => !subtreeEdges.some((se) => se.id === e.id)); // remove all the edges in subtree
    const newEdgesAfterCleanUp = newEdges.filter((e) => !subtreeNodes.some((sn) => sn.id === e.source)); // remove all edges that has source in subtree
    return { nodes: newNodesAfterLabelChange, edges: newEdgesAfterCleanUp };
}

function collapseNonTopChildren(selectedNode: Node|null, curNodes: Node[]|null, curEdges: Edge[]|null, allNodes: Node[], allEdges: Edge[]) {
    if (selectedNode === null || curNodes === null || curEdges === null) {
        console.log(`[TreeUtils] Invalid input: selectedNode=${selectedNode}`);
        return { nodes: curNodes, edges: curEdges };
    }
    
    const etcNode = allNodes.find((n) => n.data.parent === selectedNode.id && n.data.nodeType === 'etc');
    if (! etcNode) {
        console.log('No etc node found in children so cannot do collapseNonTop');
        return {nodes: curNodes, edges: curEdges};
    }
    const {subtreeNodes: etcSubtreeNodes, subtreeEdges: etcSubtreeEdges} = getSubtreeElements(etcNode!, allNodes, allEdges, false);
    const newNodes = curNodes.filter((n) => !etcSubtreeNodes.some((sn) => sn.id === n.id)); // remove all the nodes in subtree
    const newEdges = curEdges.filter((e) => !etcSubtreeEdges.some((se) => se.id === e.id)); // remove all the edges in subtree
    // add the etcNode to newNodes
    const newNodesWithEtc = newNodes.concat(etcNode);
    const newEdgesWithEtc = newEdges.concat(allEdges.filter((e) => e.target === etcNode.id));
    return { nodes: newNodesWithEtc, edges: newEdgesWithEtc };
}



function getNewNodesAndEdges(command:string, selectedNode: Node|null, curNodes: Node[]|null, curEdges: Edge[]|null, allNodes: Node[]|null, allEdges: Edge[]|null) {
    console.log(`[getNewNodesAndEdges] command=${command}, selectedNode=${selectedNode?.data.label}`);
    if (allNodes === null || allEdges === null) {
        return { nodes: curNodes, edges: curEdges};
    }
    switch (command) {
        case 'GetInitial': {
            return getInitialElements(allNodes, allEdges);
        }
        case 'ExpandAllNodes': {
            return expandAllNodes(allNodes, allEdges);
        }
        case 'CollapseBackToInitial': {
            return getInitialElements(allNodes, allEdges);
        }
        case 'ExpandEtcNode': {
            return expandEtcNode(selectedNode, curNodes, curEdges, allNodes, allEdges);
        }
        case 'ExpandSubtree': {
            return expandSubtree(selectedNode, curNodes, curEdges, allNodes, allEdges);
        }
        case 'CollapseSubtree': {
            return collapseSubtree(selectedNode, curNodes, curEdges, allNodes, allEdges);
        }
        case 'CollapseNonTop': {
            return collapseNonTopChildren(selectedNode, curNodes, curEdges, allNodes, allEdges);
        }
        default: {
            console.log(`[getNewNodesAndEdges] invalid command: ${command}`);
            return { nodes: curNodes, edges: curEdges}
        }
    }
}


export function translateTreeUtilCommand(command:string, selectedNode: Node|null, curNodes: Node[]|null, curEdges: Edge[]|null, allNodes: Node[]|null, allEdges: Edge[]|null) {
    const { nodes: newNodes, edges: newEdges } = getNewNodesAndEdges(command, selectedNode, curNodes, curEdges, allNodes, allEdges);
    const { nodes:layoutedNodes, edges: layoutedEdges} = getLayoutedElements(newNodes!, newEdges!);
    return { nodes: layoutedNodes, edges: layoutedEdges };
}