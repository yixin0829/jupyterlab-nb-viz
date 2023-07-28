import { Node, Edge, Connection } from "reactflow";
import dagre from 'dagre';

export const getLayoutedElements = (nodes:Node[], edges:Edge[], direction='TB') => {
    const dagreGraph = new dagre.graphlib.Graph();
    const nodeWidth:number = 60;
    const nodeHeight:number = 20;
    const isHorizontal = direction === 'LR';

    dagreGraph.setDefaultEdgeLabel(() => ({}));
    dagreGraph.setGraph({ rankdir: direction, nodesep: 80});

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

        if (node.data.nodeType === 'insight') {
            node.position.y = node.position.y + 100;
        }

        return node;
    });
    return { nodes: nodes, edges: edgesAfterCleanUp };
};

// function getEdgeLabel(sourceId: String, targetId: String, allEdges: Edge[]) {
//     // Find the edge weight between sourceId and targetId
//     const edge = allEdges.find((e) => e.source === sourceId && e.target === targetId);
//     if (edge === undefined || edge.label === undefined) {
//         return undefined;
//     }
//     return edge.label;
// }

function getNodeById(nodeId: string, allNodes: Node[]) {
    const node = allNodes.find((n) => n.id === nodeId);
    if (node === undefined) {
        throw new Error(`[getNodeById] Node with id=${nodeId} is not found`);
    }
    return node;
}

function getSubtreeElements(node: Node, 
    curNodes: Node[], 
    allEdges: Edge[], 
    skipSubtreeOfEtc: boolean = true, 
    includeRootEdges: boolean = true) {
    // Find all the nodes that belongs to the subtree whose root is node
    // subtree does NOT include the node itself
    const subtreeNodes:Node[] = [];
    // const subtreeEdges:Edge[] = [];
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
        });
    }
    const subtreeEdgesExceptRoot = allEdges.filter((e) => subtreeNodes.some((sn) => sn.id === e.target) && subtreeNodes.some((sn) => sn.id === e.source)); 
    if (includeRootEdges) {
        const rootEdges = allEdges.filter((e) => (e.source === node.id) && subtreeNodes.some((sn) => sn.id === e.target));
        const subtreeEdges = subtreeEdgesExceptRoot.concat(rootEdges);
        return { subtreeNodes, subtreeEdges };
    }
    const subtreeEdges = subtreeEdgesExceptRoot;
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
    
    const {subtreeNodes: subtreeNodes, subtreeEdges: subtreeEdges} = getSubtreeElements(selectedNode, allNodes, allEdges, true, false);
    const newNodes = curNodes.concat(subtreeNodes).filter((n) => n.id !== selectedNode.id);
    // const newEdges = curEdges.concat(subtreeEdges).map((e) => {
    //     if (e.source === selectedNode.id) {
    //         e.source = selectedNode.data.parent;
    //     }
    //     return e;
    // }).filter((e) => e.target !== selectedNode.id);
    const directChildrenOfEtc = allNodes.filter((n) => n.data.parent === selectedNode.id);
    const parentNodeId = selectedNode.data.parent;
    const parentDirectChildrenEdges: Edge[] = directChildrenOfEtc.map((child) => {
        return {
            id: `${parentNodeId}-${child.id}`,
            source: parentNodeId,
            target: child.id,
        };
    })
    const parentEtcEdge = curEdges.find((e) => e.source === parentNodeId && e.target === selectedNode.id);
    // newEdges = curEdges - parentEtcEdge + subtreeEdges + parentDirectChildrenEdges
    const newEdges = curEdges.filter((e) => e.id !== parentEtcEdge!.id).concat(subtreeEdges).concat(parentDirectChildrenEdges);
    console.log(`[expandEtcNode] After expandEtcNode:\nedges=${JSON.stringify(newEdges)}\nallEdges=${JSON.stringify(allEdges)}`);

    return { nodes: newNodes, edges: newEdges};
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
    const newNodesAfterLabelChange = newNodes.map((n) => {
        if (n.id === selectedNode.id && n.data.label.endsWith(" (+)")) {
            const curLabel = n.data.label;
            n.data = {...n.data, label: curLabel.substring(0, curLabel.length - 4)} 
        };
        return n;
        }
    );
    return { nodes: newNodesAfterLabelChange, edges: newEdges };
}


function collapseBackEtcNode(parentNode: Node|null, curNodes: Node[]|null, curEdges: Edge[]|null, allNodes: Node[], allEdges: Edge[]) {
    if (parentNode === null || curNodes === null || curEdges === null) {
        console.log(`[TreeUtils] Invalid input: selectedNode=${parentNode}`);
        return { nodes: curNodes, edges: curEdges };
    }
    const etcNode = allNodes.find((n) => n.data.parent === parentNode.id && n.data.nodeType === 'etc');
    if (! etcNode) {
        console.log('No etc node found in children so cannot do collapseNonTop');
        return {nodes: curNodes, edges: curEdges};
    }
    const {subtreeNodes: etcSubtreeNodes, subtreeEdges: etcSubtreeEdges} = getSubtreeElements(etcNode!, allNodes, allEdges, false, false);
    const newNodes = curNodes.filter((n) => !etcSubtreeNodes.some((sn) => sn.id === n.id)).concat(etcNode); // remove all the nodes in subtree
    const parentChildrenEdges = curEdges.filter((e) => e.source === parentNode.id && getNodeById(e.target, allNodes).data.parent === etcNode.id);
    const etcEdge = allEdges.filter((e) => e.target === etcNode.id && e.source === parentNode.id);
    // newEdges = curEdges - etcSubtreeEdges (without root edges) - parentChildrenEdges + etcNodeEdge
    const newEdges = curEdges.filter((e) => !etcSubtreeEdges.some((se) => se.id === e.id)).filter((e) => !parentChildrenEdges.some((pce) => pce.id === e.id)).concat(etcEdge);
    // add the etcNode to newNodes
    console.log(`[expandEtcNode] After expandEtcNode:\nedges=${JSON.stringify(newEdges)}\nallEdges=${JSON.stringify(allEdges)}`);
    return { nodes: newNodes, edges: newEdges };
}

function collapseSubtree(selectedNode: Node|null, curNodes: Node[]|null, curEdges: Edge[]|null, allNodes: Node[], allEdges: Edge[]) {
    if (selectedNode === null || curNodes === null || curEdges === null) {
        console.log(`[TreeUtils] Invalid input: selectedNode=${selectedNode}`);
        return { nodes: curNodes, edges: curEdges };
    }
    const { nodes: nodesAfterCollapseEtcBack, edges: edgesAfterCollapseEtcBack } = collapseBackEtcNode(selectedNode, curNodes, curEdges, allNodes, allEdges);
    const {subtreeNodes: subtreeNodes, subtreeEdges: subtreeEdges} = getSubtreeElements(selectedNode, allNodes, allEdges, false);
    const newNodes = nodesAfterCollapseEtcBack!.filter((n) => !subtreeNodes.some((sn) => sn.id === n.id)); // remove all the nodes in subtree
    console.log(`[collapseSubtree] prevNodes length=${curNodes.length}, newNodes length=${newNodes.length}`);
    const labelWhenCollapse = selectedNode.data.rawData + ' (+)';
    const newNodesAfterLabelChange = newNodes.map((n) => {
        if (n.id === selectedNode.id) {
            n.data = {...n.data, label: labelWhenCollapse} 
        };
        return n;
        }
    );
    const newEdges = edgesAfterCollapseEtcBack!.filter((e) => !subtreeEdges.some((se) => se.id === e.id)); // remove all the edges in subtree
    const newEdgesAfterCleanUp = newEdges.filter((e) => !subtreeNodes.some((sn) => sn.id === e.source)); // remove all edges that has source in subtree
    return { nodes: newNodesAfterLabelChange, edges: newEdgesAfterCleanUp };
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
            return collapseBackEtcNode(selectedNode, curNodes, curEdges, allNodes, allEdges);
        }
        default: {
            console.log(`[getNewNodesAndEdges] invalid command: ${command}`);
            return { nodes: curNodes, edges: curEdges}
        }
    }
}

export interface EdgeOperation {
    operation: string, // add / remove
    edge: Edge
}

export function applyEdgeOperations(edgeOperations: EdgeOperation[], curNodes: Node[]|null, curEdges: Edge[]|null) {
    if (curEdges === null || curNodes === null) {
        console.log('[applyEdgeOperations] curEdges or curNodes is null');
        return curEdges;
    }
    for(let edgeOp of edgeOperations) {
        const sourceNode = curNodes.find((n) => n.id === edgeOp.edge.source);
        const targetNode = curNodes.find((n) => n.id === edgeOp.edge.target);
        if (sourceNode === undefined || targetNode === undefined) {
            continue;
        }
        if(edgeOp.operation === 'add') {
            curEdges.push(edgeOp.edge);
        }
        else if (edgeOp.operation === 'remove') {
            curEdges = curEdges.filter((e) => e.id !== edgeOp.edge.id);
        }
        else {
            console.log(`[applyEdgeOperations] invalid operation: ${edgeOp.operation}`);
        }
    }
    return curEdges;
}


export function translateTreeUtilCommand(command:string,
    selectedNode: Node|null,
    curNodes: Node[]|null,
    curEdges: Edge[]|null,
    allNodes: Node[]|null,
    allEdges: Edge[]|null,
    edgeOperations: EdgeOperation[]) {
    const { nodes: newNodes, edges: newEdges } = getNewNodesAndEdges(command, selectedNode, curNodes, curEdges, allNodes, allEdges);
    const updatedEdges = applyEdgeOperations(edgeOperations, newNodes, newEdges);
    const { nodes:layoutedNodes, edges: layoutedEdges} = getLayoutedElements(newNodes!, updatedEdges!);
    return { nodes: layoutedNodes, edges: layoutedEdges };
}

function getTargetNode(selectedEdge: Edge, curNodes: Node[]|null) {
    if (curNodes === null || selectedEdge === null || selectedEdge === undefined) {
        return null;
    }  
    // the target node must have at least 1 edge connected to it
    const targetNode = curNodes.find((n) => n.id === selectedEdge.target);
    return targetNode;
}

export function isEdgeRemoveable(selectedEdge: Edge, curNodes: Node[]|null, curEdges: Edge[]|null) {
    if (curEdges === null || curNodes === null || !selectedEdge) {
        console.log('[removeEdge] curEdges or curNodes or selectedEdge is null');
    }
    const targetNode = getTargetNode(selectedEdge, curNodes);
    if (targetNode === undefined || targetNode === null) {
        return true;
    }
    if (targetNode.data.nodeType !== 'insight') {
        return false;
    }
    const edgesConnectedToTarget = curEdges!.filter((e) => e.target === targetNode.id);
    return edgesConnectedToTarget.length > 1;
}

export function isEdgeConnectable(connection: Connection, curNodes: Node[] | null) {
    console.log(`[isEdgeConnectable] newEdge.target_id=${connection.target}`);
    if (curNodes === null || !connection) {
        console.log('[removeEdge] curEdges or curNodes or selectedEdge is null');
        return false;
    }
    // print the ids of curNodes as a array
    console.log(`[isEdgeConnectable] curNodes=${JSON.stringify(curNodes)}`);
    const targetNode = curNodes!.find((n) => n.id === connection.target);
    if (targetNode === undefined || targetNode === null) {
        console.log(`[isEdgeConnectable] the target of newEdge is not found`);
        return false;
    }
    console.log(`[isEdgeConnectable] targetNode.data.nodeType=${targetNode.data.nodeType}`)
    return targetNode.data.nodeType === 'insight';

}

export function removeEdge(selectedEdge: Edge, curNodes: Node[]|null, curEdges: Edge[]|null) {
    if (curEdges === null || curNodes === null) {
        console.log('[removeEdge] curEdges or curNodes is null');
        return {nodes: curNodes, edges: curEdges};
    }    
    const newEdges = curEdges!.filter((e) => e.id !== selectedEdge.id);
    const { nodes:layoutedNodes, edges: layoutedEdges} = getLayoutedElements(curNodes, newEdges);
    return { nodes: layoutedNodes, edges: layoutedEdges };
}


export function isEdgeUpdatable(selectedEdge: Edge, curNodes: Node[]|null) {
    if (selectedEdge === undefined || selectedEdge === null || curNodes === null) {
        console.log('[isEdgeUpdatable] selectedEdge or curNodes is null');
        return false;
    }
    const targetNode = curNodes.find((n) => n.id === selectedEdge.target);
    console.log(`[isEdgeUpdatable] targetNode=${targetNode}`);
    if (targetNode === undefined) {
        console.log(`[isEdgeUpdatable] the target of selectedEdge is not found`);
        return false;
    }
    console.log(`[isEdgeUpdatable] targetNode.data.nodeType=${targetNode.data.nodeType}`);
    return targetNode.data.nodeType === 'insight';
}

export function getPathVariableCombination(selectedNode: Node|null, allNodes: Node[]|null) {
    // get the column combination of the path from root to leafNode
    if (allNodes === null || selectedNode === null) {
        return [];
    }
    if (selectedNode.data.nodeType !== 'recommended') {
        console.log(`[getPathVariableCombination] selectedNode is not a recommended node`)
        return [];
    }
    console.log(`[getPathVariableCombination] selectedNode=${selectedNode}`);
    const pathVariables = [];
    const validNodeTypes = ['raw', 'implicit', 'recommended'];
    let currentNode = selectedNode;
    // if the selectedNode is not a leaf node, find its child until it's a leaf node
    while (currentNode.data.children !== undefined && currentNode.data.children.length > 0) {
        const childNode = getNodeById(currentNode.data.children[0], allNodes);
        console.log(`[getPathVariableCombination] childNode=${JSON.stringify(childNode)}`);
        if (childNode.data.nodeType !== 'recommended') {
           break;
        }
        currentNode = childNode;
    }
    while (currentNode.data.parent !== undefined) {
        if (validNodeTypes.includes(currentNode.data.nodeType)) {
            pathVariables.push(currentNode.data.rawData);
        }
        const parent = getNodeById(currentNode.data.parent, allNodes);
        currentNode = parent;
    }
    // console.log(`[getPathVariableCombination] get pathVariables=${pathVariables}`);
    pathVariables.reverse();
    return pathVariables;
}

export interface SrcNbAndCode {
    sourceNotebook: string;
    sourceCode: string[];
}

export function createEdgesBasedOnNodes(curNodes: Node[]) {
    // create edges to connect nodes based on the parent-child relationships
    const edges: Edge[] = [];
    for (let node of curNodes) {
        if (node.data.parent !== undefined) {
            const animated = node.data.nodeType === 'recommended';
            edges.push({
                id: `${node.data.parent}-${node.id}`,
                source: node.data.parent,
                target: node.id,
                animated: animated,
            });
        }
    }
    return edges;
}