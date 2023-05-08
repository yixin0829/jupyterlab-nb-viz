import React, { useCallback, MouseEvent } from "react";
import { ReactWidget } from '@jupyterlab/apputils'; // for converting a react component to a react widget in JL
import "reactflow/dist/style.css";

import ReactFlow, {
  Node,
  addEdge,
  Background,
  Edge,
  useNodesState,
  useEdgesState,
  MiniMap,
  Controls,
  SelectionMode,
  ConnectionLineType
} from "reactflow";
import dagre from 'dagre';
import { NotebookPanel } from '@jupyterlab/notebook';
import { INotebookTracker } from '@jupyterlab/notebook';

// import allNodes from './Nodes.json'
// import allEdges from './Edges.json'

import allNodes from './NB1/Nodes.json'
import allEdges from './NB1/Edges.json'

const panOnDrag = [1, 2];

// Node colour schema
const nodeColor = (node: Node) => {
  switch (node.data.nodeType) {
    case 'root':
      return '#e8a9a9';
    case 'raw':
      return '#e8ac6e';
    case 'secondary':
      return '#f0c633';
    case 'plot':
      return '#9ab75e';
    default:
      return '#ffffff';
  }
};

const nodeWidth:number = 60;
const nodeHeight:number = 20;

const getLayoutedElements = (nodes:Node[], edges:Edge[], direction='TB') => {
    const dagreGraph = new dagre.graphlib.Graph();
    dagreGraph.setDefaultEdgeLabel(() => ({}));
    const isHorizontal = direction === 'LR';
    dagreGraph.setGraph({ rankdir: direction });

    // set the postiions to 0
    nodes.forEach((node:Node) => {
        return {...node, position: { x: 0, y: 0 } }
    });

    // Add nodes and edges into dagreGraph ob ect
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

        return node;
    });

    return { nodes, edges };
};


const getEdgeLabel = (sourceId: String, targetId: String) => {
    // Find the edge weight between sourceId and targetId
    const edge = allEdges.find((e) => e.source === sourceId && e.target === targetId);
    if (edge === undefined || edge.label === undefined) {
        return undefined;
    }
    return edge.label;
}

const getSubtreeElements = (node: Node, nodes: Node[], skipEtc: boolean = true) => {
    // Find all the nodes that belongs to the subtree whose root is node
    // subtree does NOT include the node itself
    const subtreeNodes:Node[] = [];
    const subtreeEdges:Edge[] = [];
    const queue:Node[] = [node];
    while (queue.length > 0) {
        const currentNode: Node = queue.shift()!;
        if (currentNode !== node) {
            subtreeNodes.push(currentNode);
            if (skipEtc && currentNode.data.nodeType === 'etc') {
                continue;
            }
        }
        const children = nodes.filter((n) => n.data.parent === currentNode.id);
        children.forEach((child) => {
            queue.push(child);
            subtreeEdges.push({
                id: `${currentNode.id}-${child.id}`,
                source: currentNode.id,
                target: child.id,
                label: getEdgeLabel(currentNode.id, child.id) });
        });
    }
    // console.log(`Subtree nodes for node ${node.data.label}: ${subtreeNodes.map((n) => n.data.label)}`);
    return { subtreeNodes, subtreeEdges };
}


const getInitialElements = (nodes: Node[]) => {
    // Find the root node
    const rootNode = nodes.find((n) => n.data.label === 'root');
    if (rootNode === undefined) {
        throw new Error('No root node found');
    }
    // Find all the nodes that belongs to the subtree whose root is rootNode
    const {subtreeNodes: initialNodes, subtreeEdges: initialEdges} = getSubtreeElements(rootNode, nodes);
    initialNodes.push(rootNode);
    return { initialNodes, initialEdges };
}


const {initialNodes: initialNodes, initialEdges: initialEdges} = getInitialElements(allNodes);


// Get layouted nodes and edges with assigned x/y coordinates using dagre
const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(
  initialNodes,
  initialEdges,
);

// const nodeTypes = {
//     root: CustomNode,
//     raw: CustomNode,
//     secondary: CustomNode,
//     plot: CustomNode,
//     etc: CustomNode
// }


interface FlowComponentProps {
    notebookPanel: NotebookPanel | null;
    notebookTracker: INotebookTracker | null;
}

const FlowComponent = (props: FlowComponentProps) => {
    const [nodes, setNodes, onNodesChange] = useNodesState(layoutedNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(layoutedEdges);
    
    const onConnect = useCallback(
        (params) =>
          setEdges((eds) =>
            addEdge({ ...params, type: ConnectionLineType.SmoothStep, animated: true }, eds)
          ),
        []
    );

    // useEffect(() =>{
    //     console.log(`Nodes : ${nodes.map((n) => n.data.label + '\n')}`);
    // }, [nodes]);
    
    const handleNodeClick = (event: MouseEvent, node: Node) => {
        if (node.data.nodeType === 'etc') {
            const nodeAsSourceEdge = edges.filter((e) => e.source === node.id);
            if (nodeAsSourceEdge.length === 0) {
                // expand the subtree
                const {subtreeNodes: subtreeNodes, subtreeEdges: subtreeEdges} = getSubtreeElements(node, allNodes);
                const newNodes = nodes.concat(subtreeNodes).map((n) => {
                    if (n.id === node.id) {
                        n.data = {...n.data, label: '-'} 
                    };
                    return n;
                    }
                );
                const newEdges = edges.concat(subtreeEdges);
                const { nodes: layoutedNewNodes, edges: layoutedNewEdges } = getLayoutedElements(newNodes, newEdges);
                setNodes(layoutedNewNodes);
                setEdges(layoutedNewEdges);
            }
            else {
                // collapse the subtree
                const {subtreeNodes: subtreeNodes, subtreeEdges: subtreeEdges} = getSubtreeElements(node, nodes, false);
                const newNodes = nodes.filter((n) => !subtreeNodes.some((sn) => sn.id === n.id)); // remove all the nodes in subtree
                const newNodesAfterLabelChange = newNodes.map((n) => {
                    if (n.id === node.id) {
                        n.data = {...n.data, label: n.data.numberOfChildren} 
                    };
                    return n;
                    }
                );
                const newEdges = edges.filter((e) => !subtreeEdges.some((se) => se.id === e.id)); // remove all the edges in subtree
                const newEdgesAfterCleanUp = newEdges.filter((e) => !subtreeNodes.some((sn) => sn.id === e.source)); // remove all edges that has source in subtree
                const { nodes: layoutedNewNodes, edges: layoutedNewEdges } = getLayoutedElements(newNodesAfterLabelChange, newEdgesAfterCleanUp);
                setNodes(layoutedNewNodes);
                setEdges(layoutedNewEdges);
            }
        }
        else if (node.data.nodeType === 'plot') {
            console.log('PlotNode clicked');
            // change note color
            if(props.notebookTracker && props.notebookTracker.currentWidget) {
                const newNodes = nodes.map((prevNode)=> {
                    if (prevNode.id === node.id) {
                        prevNode.style = {...prevNode.style, background: '#e06666'};
                    }
                    else {
                        if (prevNode.data.nodeType === 'plot') {
                            prevNode.style = {...prevNode.style, background: '#9AB75E'};
                        }
                    }
                    return prevNode;
                });
                setNodes(newNodes);
                // jump to the corresponding notebook and cell
                const cellIndex = node.data.cellIndex;
                props.notebookTracker.currentWidget.content.activeCellIndex = cellIndex;
                const activeCell = props.notebookTracker.currentWidget.content.activeCell!;
                props.notebookTracker.currentWidget.content.scrollToCell(activeCell);
                console.log(`activeCellIndex after setFocusCell: ${props.notebookTracker.currentWidget.content.activeCellIndex}`);
            }
            else {
                console.log('FlowWidget: No notebookTracker');
            }
        }

    }



  return (
        <ReactFlow
            nodes={nodes}
            edges={edges}
            // nodeTypes={nodeTypes}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onNodeClick={handleNodeClick}
            connectionLineType={ConnectionLineType.SmoothStep}
            fitView
            panOnScroll
            selectionOnDrag
            panOnDrag={panOnDrag}
            selectionMode={SelectionMode.Partial}
        >
        <Background />
        <MiniMap nodeColor={nodeColor} nodeStrokeWidth={3} zoomable pannable />
        <Controls/>
        </ReactFlow>
  );
};

/**
 * A Lumino Widget that wraps a FlowComponent.
 */
export class FlowWidget extends ReactWidget {
  /**
   * Constructs a new FlowWidget.
   */
    private _notebookPanel: NotebookPanel | null = null;
    private _notebookTracker: INotebookTracker | null = null;
    
    set notebookPanel(notebook: NotebookPanel | null) {
        this._notebookPanel = notebook;
    }

    set notebookTracker(tracker: INotebookTracker | null) {
        this._notebookTracker = tracker;
    }

    constructor(panel?: NotebookPanel | null, tracker?: INotebookTracker | null) {
        super();
        console.log('FlowWidget created');
        console.log('notebook panel assigned to FlowWidget:');
        console.log(this._notebookPanel);
        this._notebookPanel = panel ? panel : null;
        this._notebookTracker = tracker ? tracker : null;
    }


    render(): JSX.Element {
        console.log(`notebookTracker passed to FlowComponent: ${this._notebookTracker}`);
        console.log(`notebookPanel passed to FlowComponent: ${this._notebookPanel}`);
        return <FlowComponent notebookPanel={this._notebookPanel} notebookTracker={this._notebookTracker}/>;
    }
}
