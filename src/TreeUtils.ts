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

    // Add nodes and edges into dagreGraph
    nodes.forEach((node:Node) => {
        dagreGraph.setNode(node.id, { width: nodeWidth, height: nodeHeight });
    });
    edges.forEach((edge:Edge) => {
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
    return { nodes: nodes, edges: edges };
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
    nodeId = nodeId.toString();
    const node = allNodes.find((n) => n.id === nodeId);
    if (node === undefined) {
        throw new Error(`[getNodeById] Node with id=${nodeId} is not found`);
    }
    return node;
}


// function getSubtreeNodes(rootNode: Node, allNodesBackend: Node[]) {
//     // get all Nodes that belongs to the subtree whose root is node
//     const subtreeNodes:Node[] = [];
//     const queue:Node[] = [rootNode];
//     while (queue.length > 0) {
//         const currentNode: Node = queue.shift()!;
//         subtreeNodes.push(currentNode);
//         const children = currentNode.data.children.map((id: string) => getNodeById(id, allNodesBackend));
//         children.forEach((child: Node) => {
//             queue.push(child);
//         });
//     }
//     return subtreeNodes;
// }

const etcNodeStyle = {
    color: "black",
    fontSize: "12px",
    width: "50px",
    height: "15px",
    padding: "5px 5px 20px",
    backgroundColor:"#ffffff",
    zIndex: -1,
}

function createEtcNode(parentNode: Node, etcThreshold: number = 3) {
    const etcNode: Node = {
        id: `etc${parentNode.id}`,
        type: `default`,
        data: {
            nodeType: "etc",
            label: `${parentNode.data.children.length - etcThreshold}`,
            parent: parentNode.id,
            rawData: `${parentNode.data.children.length - etcThreshold}`,
        },
        position: { x: 0, y: 0 },
        style: etcNodeStyle,
        };
    return etcNode;
}

export function getInitialNodes(allNodesBackend: Node[], etcThreshold: number = 3) {
    // Get initial elements, add etc nodes to allNodesBackend
    // Find the root node
    const rootNode = allNodesBackend.find((n) => n.data.label === 'root');
    if (rootNode === undefined) {
        throw new Error('No root node found');
    }
    // traverse the tree and only keep top 3 children of each node
    const initialNodes: Node[] = [];
    const queue: Node[] = [rootNode];
    while (queue.length > 0) {
        const currentNode = queue.shift()!;
        initialNodes.push(currentNode);
        const topChildrenId = currentNode.data.children.slice(0, etcThreshold);
        const topChildren = topChildrenId.map((id: string) => getNodeById(id, allNodesBackend));
        topChildren.forEach((child: Node) => {queue.push(child);});
        if (currentNode.data.children.length > etcThreshold) {
            // create Etc node if there are more than 3 children
            const etcNode = createEtcNode(currentNode, etcThreshold);
            initialNodes.push(etcNode);
            }
    }
    return initialNodes;
}


function expandEtcNode(selectedNode: Node|null, curNodes: Node[]|null, allNodesBackend: Node[]) {
    if (selectedNode === null || curNodes === null || selectedNode.data.nodeType !== 'etc') {
        console.log(`[TreeUtils] Invalid input: selectedNode=${selectedNode}, nodeType=${selectedNode?.data.nodeType}}`);
        return curNodes;
    }
    // replace the etcNode with the original children of the parent
    const etcNode = selectedNode;
    const parentNode = getNodeById(etcNode.data.parent, allNodesBackend);
    const parentChildrenId = parentNode!.data.children;
    const parentChildren = parentChildrenId.map((id: string) => getNodeById(id, allNodesBackend));
    const childrenNotInCurNodes = parentChildren.filter((c: Node) => !curNodes.some((n) => n.id === c.id));
    const queue: Node[] = childrenNotInCurNodes;
    const subtreeNodes: Node[] = [];
    // find all the subtree nodes of the nodes collapsed in etcNode
    while (queue.length > 0) {
        const currentNode = queue.shift()!;
        subtreeNodes.push(currentNode);
        const curNodeChildrenId = currentNode.data.children;
        const curNodeChildren = curNodeChildrenId.map((id: string) => getNodeById(id, allNodesBackend));
        curNodeChildren.forEach((child: Node) => {queue.push(child);});
    }
    const newNodesAfterRemoveEtc = curNodes.filter((n) => n.id !== etcNode.id)
    const newNodes = newNodesAfterRemoveEtc.concat(subtreeNodes);
    return newNodes;
}


function expandAllNodes(allNodesBackend: Node[]) {
    // change the label back
    const newNodes = allNodesBackend.map((n) => {
        if (n.data.label.endsWith(' (+)')) {
            n.data = {...n.data, label: n.data.rawData}
        }
        return n;
    });
    return newNodes;
}


function expandSubtree(selectedNode: Node|null, curNodes: Node[]|null, allNodes: Node[], etcThreshold: number = 3) {
    if (selectedNode === null || curNodes === null) {
        console.log(`[TreeUtils] Invalid input: selectedNode=${selectedNode}, curNodes=${curNodes}`);
        return curNodes;
    }
    if (selectedNode.data.nodeType === 'etc') {
        return expandEtcNode(selectedNode, curNodes, allNodes);    
    }
    // expand all children of selected node, but only keep top a few children and add etcNode
    const subtreeNodes:Node[] = [];
    const queue:Node[] = [selectedNode];
    while (queue.length > 0) {
        const currentNode: Node = queue.shift()!;
        subtreeNodes.push(currentNode);
        const topChildrenId = currentNode.data.children.slice(0, etcThreshold);
        const topChildren = topChildrenId.map((id: string) => getNodeById(id, allNodes));
        topChildren.forEach((child: Node) => {queue.push(child);});
        // create Etc node if there are more than 3 children
        if (currentNode.data.children.length > etcThreshold) {
            const etcNode = createEtcNode(currentNode, etcThreshold);
            subtreeNodes.push(etcNode);
        }
    }
    const newNodes = curNodes.concat(subtreeNodes);
    const newNodesAfterLabelChange = newNodes.map((n) => {
        if (n.id === selectedNode.id) {
            n.data = {...n.data, label: selectedNode.data.rawData}
        } 
        return n;
        });
    return newNodesAfterLabelChange;
}


// function expandNonTop(selectedNode: Node|null, curNodes: Node[]|null, allNodes: Node[], etcThreshold: number = 3) {
//     if (selectedNode === null || curNodes === null) {
//         console.log(`[TreeUtils] Invalid input: selectedNode=${selectedNode}, curNodes=${curNodes}`);
//         return curNodes;
//     }
//     if (selectedNode.data.children.length <= etcThreshold) {
//         return expandSubtree(selectedNode, curNodes, allNodes, etcThreshold);
//     }
//     // add top children and its subtree nodes + etcNodes to curNodes
//     const topChildrenId = selectedNode.data.children.slice(0, etcThreshold);
//     const topChildren = topChildrenId.map((id: string) => getNodeById(id, allNodes));
//     const etcNode = createEtcNode(selectedNode, etcThreshold);
//     const topChildrenSubtreeNodes: Node[] = [etcNode, ];
//     const queue:Node[] = topChildren;
//     while (queue.length > 0) {
//         const currentNode: Node = queue.shift()!;
//         topChildrenSubtreeNodes.push(currentNode);
//         const topChildrenOfCurNodeId = currentNode.data.children.slice(0, etcThreshold);
//         const topChildrenOfCurNode = topChildrenOfCurNodeId.map((id: string) => getNodeById(id, allNodes));
//         const etcNodeOfCurNode = createEtcNode(currentNode, etcThreshold);
//         topChildrenOfCurNode.forEach((child: Node) => {queue.push(child);});
//         topChildrenSubtreeNodes.push(etcNodeOfCurNode);
//     }
//     const newNodesAfterAddTop = curNodes.concat(topChildrenSubtreeNodes);
//     return newNodesAfterAddTop;
// }


function collapseBackEtcNode(selectedNode: Node|null, curNodes: Node[]|null, allNodes: Node[], etcThreshold: number = 3) {
    if (selectedNode === null || curNodes === null) {
        console.log(`[TreeUtils] Invalid input: selectedNode=${selectedNode}, curNodes=${curNodes}`);
        return curNodes;
    }
    if (selectedNode.data.label.endsWith('(+)')) {
        // do nothing if the node is already "collapsed-all"
        return curNodes;
    }
    if (selectedNode.data.children.length <= etcThreshold) {
        return curNodes;
    }
    // remove all non-top nodes and their subtree nodes from curNodes and add etcNode back
    const nonTopChildrenId = selectedNode.data.children.slice(etcThreshold);
    const nonTopChildren = nonTopChildrenId.map((id: string) => getNodeById(id, allNodes));
    const nonTopChildrenSubtreeNodes:Node[] = [];
    const queue:Node[] = nonTopChildren;
    while (queue.length > 0) {
        const currentNode: Node = queue.shift()!;
        nonTopChildrenSubtreeNodes.push(currentNode);
        const children = currentNode.data.children.map((id: string) => getNodeById(id, allNodes));
        children.forEach((child: Node) => {queue.push(child);});
    }
    const newNodesAfterRemoveNonTop = curNodes.filter((n) => !nonTopChildrenSubtreeNodes.some((c: Node) => c.id === n.id));
    const etcNode = createEtcNode(selectedNode, etcThreshold);
    const newNodes = newNodesAfterRemoveNonTop.concat(etcNode);
    return newNodes;
}


function collapseSubtree(selectedNode: Node|null, curNodes: Node[]|null, allNodes: Node[]) {
    if (selectedNode === null || curNodes === null ) {
        console.log(`[TreeUtils] Invalid input: selectedNode=${selectedNode}`);
        return curNodes;
    }
    if (selectedNode.data.children.length <= 0) {
        return curNodes;
    }
    // create newNodes with all nodes belonging to subtree of selectedNode removed
    const subtreeNodes: Node[] = [];
    const queue:Node[] = [selectedNode];
    while (queue.length > 0) {
        const currentNode: Node = queue.shift()!;
        subtreeNodes.push(currentNode);
        // get all nodes in curNodes whose parent is currentNode
        const childrenInCurNodes = curNodes.filter((n) => n.data.parent === currentNode.id);
        childrenInCurNodes.forEach((child: Node) => {queue.push(child);});
    }
    // console.log(`[collapseSubtree] subtreeNodes=${JSON.stringify(subtreeNodes)}`);
    const newNodesWithoutSelectedNode = curNodes.filter((n) => !subtreeNodes.some((sn) => sn.id === n.id));
    // change the label selectedNode by adding (+)
    selectedNode.data.label = `${selectedNode.data.rawData} (+)`;
    const newNodes = newNodesWithoutSelectedNode.concat(selectedNode);
    return newNodes;
}

function collapseTreeBackToInitial(allNodesBackend: Node[], etcThreshold: number = 3) {
    const newNodes = getInitialNodes(allNodesBackend, etcThreshold);
    const newNodesAfterLabelChange = newNodes.map((n) => {
        if (n.data.label.endsWith('(+)')) {
            n.data = {...n.data, label: n.data.rawData}
        }
        return n;
    });
    return newNodesAfterLabelChange;
}


function getNewNodesAndEdges(command:string, 
            selectedNode: Node|null, 
            curNodes: Node[]|null, 
            curEdges: Edge[]|null, 
            allNodes: Node[]|null, 
            // allEdges: Edge[]|null
            ) {
    console.log(`[getNewNodesAndEdges] command=${command}, selectedNode=${selectedNode?.data.label}`);
    if (allNodes === null) {
        return { nodes: curNodes, edges: curEdges};
    }
    switch (command) {
        case 'GetInitial': {
            const initialNodes = getInitialNodes(allNodes);
            return {nodes: initialNodes, edges: createEdgesBasedOnNodes(initialNodes)};
        }
        case 'ExpandAllNodes': {
            const newNodes = expandAllNodes(allNodes)
            return { nodes: newNodes, edges: createEdgesBasedOnNodes(newNodes)};
        }
        case 'CollapseBackToInitial': {
            const initialNodes = collapseTreeBackToInitial(allNodes);
            return { nodes: initialNodes, edges: createEdgesBasedOnNodes(initialNodes)};
        }
        case 'ExpandEtcNode': {
            const newNodes = expandEtcNode(selectedNode, curNodes, allNodes);
            return { nodes: newNodes, edges: createEdgesBasedOnNodes(newNodes)};
        }
        case 'ExpandSubtree': {
            const newNodes = expandSubtree(selectedNode, curNodes, allNodes);
            return { nodes: newNodes, edges: createEdgesBasedOnNodes(newNodes)};
        }
        // case "ExpandNonTop": {
        //     const newNodes = expandNonTop(selectedNode, curNodes, allNodes);
        //     return { nodes: newNodes, edges: createEdgesBasedOnNodes(newNodes)};
        // }
        case 'CollapseSubtree': {
            const newNodes = collapseSubtree(selectedNode, curNodes,allNodes);
            return { nodes: newNodes, edges: createEdgesBasedOnNodes(newNodes)};
        }
        case 'CollapseNonTop': {
            const newNodes = collapseBackEtcNode(selectedNode, curNodes, allNodes);
            return { nodes: newNodes, edges: createEdgesBasedOnNodes(newNodes)};
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
    //allEdges: Edge[]|null,
    edgeOperations: EdgeOperation[]) {
    // console.log(`[translateTreeUtilCommand] command=${command}`);
    const { nodes: newNodes, edges: newEdges } = getNewNodesAndEdges(command, selectedNode, curNodes, curEdges, allNodes);
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

// export interface SrcNbAndCode {
//     sourceNotebook: string;
//     sourceCode: string[];
// }

export function createEdgesBasedOnNodes(curNodes: Node[] | null) {
    // create edges to connect nodes based on the parent-child relationships
    if (curNodes === null) {
        console.log(`[createEdgesBasedOnNodes] curNodes is null`);
        return [];
    }
    const edges: Edge[] = [];
    for (let node of curNodes) {
        if (node.data.parent !== undefined) {
            // if edges already exists, skip
            if (edges.some((e) => e.source === node.data.parent && e.target === node.id)
                || edges.some((e) => e.source === node.id && e.target === node.data.parent)) {
                continue;
            }
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