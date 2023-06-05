import React, { useCallback, MouseEvent } from "react";
import { useState } from "react";
import { ReactWidget } from '@jupyterlab/apputils'; // for converting a react component to a react widget in JL
import "reactflow/dist/style.css";
import '../style/node.css'

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

import axios from "axios";
import { usePromiseTracker } from "react-promise-tracker";
import { trackPromise } from 'react-promise-tracker';
import { ThreeDots } from 'react-loader-spinner';

import { translateTreeUtilCommand } from "./TreeUtils";
import InsightNode from "./InsightNode";
import { Legend } from "./Legend";

// import allNodes from './Nodes.json'
// import allEdges from './Edges.json'

import allNodesStatic from './NodesAndEdges/NB1/Nodes.json'
import allEdgesStatic from './NodesAndEdges/NB1/Edges.json'
// import allNodesStatic from './NodesAndEdges/backend/Nodes.json'
// import allEdgesStatic from './NodesAndEdges/backend/Edges.json'


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
    case 'insight':
        return '#a2d2bc';
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
    dagreGraph.setGraph({ rankdir: direction, nodesep: 80 });

    // set the postiions to 0
    nodes.forEach((node:Node) => {
        return {...node, position: { x: 0, y: 0 } }
    });

    // edge cleanup to avoid orphan edges
    const edgesAfterCleanUp = edges.filter((e) => nodes.some((n) => n.id === e.source) && nodes.some((n) => n.id === e.target));

    // Add nodes and edges into dagreGraph ob ect
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

    console.log(`[getLayoutedElements] Layouted nodes and edges.`);
    return { nodes: nodes, edges: edgesAfterCleanUp };
};


const getEdgeLabel = (sourceId: String, targetId: String, allEdges: Edge[]) => {
    // Find the edge weight between sourceId and targetId
    const edge = allEdges.find((e) => e.source === sourceId && e.target === targetId);
    if (edge === undefined || edge.label === undefined) {
        return undefined;
    }
    return edge.label;
}

const getSubtreeElements = (node: Node, curNodes: Node[], allEdges: Edge[], skipSubtreeOfEtc: boolean = true) => {
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


const getInitialElements = (allNodes: Node[], allEdges: Edge[]) => {
    // Find the root node
    const rootNode = allNodes.find((n) => n.data.label === 'root');
    if (rootNode === undefined) {
        throw new Error('No root node found');
    }
    // Find all the nodes that belongs to the subtree whose root is rootNode
    const {subtreeNodes: initialNodes, subtreeEdges: initialEdges} = getSubtreeElements(rootNode, allNodes, allEdges);
    initialNodes.push(rootNode);
    return { initialNodes, initialEdges };
}

const LoadIndicator = () => {
    const { promiseInProgress } = usePromiseTracker();
    return promiseInProgress ? (
    <div style={{marginRight: 5}}>
        <ThreeDots height="80" width="80" radius="9" color="#e8ac6e" ariaLabel="three-dots-loading" visible={true}/>
    </div>) : (<></>);
}

const nodeTypes = {
    insight: InsightNode,
};

const { nodes: initialNodesStatic, edges: initialEdgesStatic } = translateTreeUtilCommand(
    'GetInitial',
    null,
    null,
    null,
    allNodesStatic,
    allEdgesStatic
)

interface FlowComponentProps {
    notebookPanel: NotebookPanel | null;
    notebookTracker: INotebookTracker | null;
}

const FlowComponent = (props: FlowComponentProps) => {
    const [selectedNode, setSelectedNode] = useState<Node | null>(null);;
    const [canExpandAll, setCanExpandAll] = useState(false);
    const [canCollapseAll, setCanCollapseAll] = useState(false);
    const [canCollapseNonTop, setCanCollapseNonTop] = useState(false);

    const [allNodes, setAllNodes] = useState(allNodesStatic);
    const [allEdges, setAllEdges] = useState(allEdgesStatic);

    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodesStatic);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdgesStatic);
    
    const onConnect = useCallback(
        (params) =>
          setEdges((eds) =>
            addEdge({ ...params, type: ConnectionLineType.SmoothStep, animated: true }, eds)
          ),
        []
    );

    const collapseBackToInitial = () => {
        // collapse the tree to initial state
        const { nodes: newNodes, edges: newEdges } = translateTreeUtilCommand(
            'CollapseBackToInitial',
            null,
            nodes,
            edges,
            allNodes,
            allEdges
        )
        setNodes(newNodes);
        setEdges(newEdges);
    }
    
    const handleNodeClick = (event: MouseEvent, node: Node) => {
        setSelectedNode(node);
        // change node color
        const newNodes = nodes.map((prevNode)=> {
            if (prevNode.id === node.id) {
                // prevNode.style = {...prevNode.style, background: '#e06666'};
                prevNode.style = {...prevNode.style, borderWidth: '2px'};
            }
            else {
                prevNode.style = {...prevNode.style, borderWidth: '1px'};
            }
            return prevNode;
        });
        setNodes(newNodes);

        if (node.data.nodeType !== 'plot') {
            const selectedNodeHasChildren = nodes.some((n) => n.data.parent === node.id);
            setCanExpandAll(!selectedNodeHasChildren);
            setCanCollapseAll(selectedNodeHasChildren);
            const etcNodeInChildren = allNodes.find((n) => n.data.parent === node.id && n.data.nodeType === 'etc');
            const etcNodeAlreadyExists = nodes.find((n) => n.data.parent === node.id && n.data.nodeType === 'etc');
            const selectedNodeCanCollapseNonTop = (etcNodeAlreadyExists === undefined) && (etcNodeInChildren !== undefined) && !(nodes.some((n) => {n.data.parent === etcNodeInChildren.id}));
            setCanCollapseNonTop(selectedNodeCanCollapseNonTop);
            if (node.data.nodeType === 'etc') {
                const { nodes: newNodes, edges: newEdges } = translateTreeUtilCommand(
                    'ExpandEtcNode',
                    node,
                    nodes,
                    edges,
                    allNodes,
                    allEdges
                )
                setNodes(newNodes);
                setEdges(newEdges);
                return;
            }
        }
        else {
            console.log('PlotNode clicked');
            // disable buttons
            setCanExpandAll(false);
            setCanCollapseAll(false);
            if(props.notebookTracker && props.notebookTracker.currentWidget) {
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

    const handleExpandAllButtonClick = () => {
        if(selectedNode && canExpandAll) {
            const { nodes: newNodes, edges: newEdges} = translateTreeUtilCommand(
                'ExpandSubtree',
                selectedNode,
                nodes,
                edges,
                allNodes,
                allEdges
            );
            setNodes(newNodes);
            setEdges(newEdges);
            setCanExpandAll(false);
        }
        else {
            console.log(`Cannot do expandAll to this node.`);
        }

    }

    const handleCollapseAllButtonClick = () => {
        if(canCollapseAll) {
            const { nodes: newNodes, edges: newEdges} = translateTreeUtilCommand(
                'CollapseSubtree',
                selectedNode,
                nodes,
                edges,
                allNodes,
                allEdges
            );
            setNodes(newNodes);
            setEdges(newEdges);
            setCanCollapseAll(false);
        }
        else {
            console.log('Cannot do collapseAll to this node!');
        }
    }

    const handleCollapseNonTopButtonClick = () => {
        if (canCollapseNonTop) {
            const { nodes: newNodes, edges: newEdges} = translateTreeUtilCommand(
                'CollapseNonTop',
                selectedNode,
                nodes,
                edges,
                allNodes,
                allEdges
            );
            setNodes(newNodes);
            setEdges(newEdges);
            setCanCollapseNonTop(false);
        }
        else {
            console.log('Cannot do collapseNonTop to this node!');
        }
    }

    const handleExpandAllNodesButtonClick = () => {
        const { nodes: newNodes, edges: newEdges } = translateTreeUtilCommand(
            'ExpandAllNodes',
            null,
            nodes,
            edges,
            allNodes,
            allEdges
        )
        setNodes(newNodes);
        setEdges(newEdges);
    }

    const resetNodeStyles = () => {
        // const resetNodes = nodes.map((prevNode)=> {prevNode.style = {...prevNode.style, background: nodeColor(prevNode)}; return prevNode;});
        const resetNodes = nodes.map((prevNode)=> {prevNode.style = {...prevNode.style, borderWidth: '1px'}; return prevNode;});
        setNodes(resetNodes);
    }

    const refreshSMITree = () => {
        console.log('[refreshSMITree] refreshSMITree.');
        resetNodeStyles();
        setSelectedNode(null);
        if (!props.notebookPanel) {
            console.log('[refreshSMITree] no notebook panel to be passed!');
            return;
        }
        const request = {
            notebook: JSON.stringify(props.notebookPanel!.model!.toJSON()),
        }
        trackPromise(
        axios.post('http://localhost:5000/smi-tree', request).then((response) => {
            console.log(`[refreshSMITree] get response.`);
            const refreshedNodes = response.data.nodes;
            const refreshedEdges = response.data.edges;
            console.log(`[refreshSMITree] refreshedNodes: ${JSON.stringify(refreshedNodes)}`);
            setAllNodes(refreshedNodes);
            setAllEdges(refreshedEdges);
            const {initialNodes: initialRefreshedNodes, initialEdges: initialRefreshedEdges} = getInitialElements(refreshedNodes, refreshedEdges);
            const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(initialRefreshedNodes, initialRefreshedEdges);
            setNodes(layoutedNodes);
            setEdges(layoutedEdges);
            console.log(`[refreshSMITree] successfully refreshed nodes and edges.`);
        }).catch((error) => {
            console.log(`[refreshSMITree] error: ${error}`);
        }));
    }

    
  return (
        <ReactFlow
            nodes={nodes}
            edges={edges}
            nodeTypes={nodeTypes}
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
            onPaneClick={() => {
                resetNodeStyles()
                setSelectedNode(null)
              }}
        >
        <Background />
        <div style={{ position: 'absolute', left: 10, top: 10, zIndex: 4 }}>
            <Legend />
        </div>
        <div style={{ position: 'absolute', right: 10, top: 10, zIndex: 4 }}>
            <button onClick={handleCollapseAllButtonClick} disabled={!canCollapseAll} style={{ marginRight: 5 }}>
                Collapse all children
            </button>
            <button onClick={handleCollapseNonTopButtonClick} disabled={!canCollapseNonTop} style={{ marginRight: 5 }}>
                Collapse non-top-3 children
            </button>
            <button onClick={handleExpandAllButtonClick} disabled={!canExpandAll} style={{ marginRight: 5 }}>
                Expand all children
            </button>
            <button onClick={collapseBackToInitial} style={{ marginRight: 5 }}>
                Collapse back to initial
            </button>
            <button onClick={handleExpandAllNodesButtonClick} style={{ marginRight: 5 }}>
                Expand all nodes
            </button>
        </div>
        <div style={{ position: 'absolute', right: 10, top: 50, zIndex: 4 }}>
            <button onClick={refreshSMITree} style={{marginRight: 5}}>Refresh the tree</button>
            <LoadIndicator/>
        </div>
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
        // this._notebookPanel = panel ? panel : null;
        this._notebookTracker = tracker ? tracker : null;
        this._notebookPanel = tracker ? tracker.currentWidget : null;
    }


    render(): JSX.Element {
        console.log(`notebookTracker passed to FlowComponent: ${this._notebookTracker}`);
        console.log(`notebookPanel passed to FlowComponent: ${this._notebookPanel}`);
        return <FlowComponent notebookPanel={this._notebookPanel} notebookTracker={this._notebookTracker}/>;
    }
}
