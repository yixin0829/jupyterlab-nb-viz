import React, { useCallback } from "react";
// for converting a react component to a react widget in JL
import { ReactWidget } from '@jupyterlab/apputils';

import "reactflow/dist/style.css";

import ReactFlow, {
  Node,
  addEdge,
  Background,
  Edge,
  useNodesState,
  useEdgesState,
  Handle,
  NodeProps,
  Position,
  Panel,
  MiniMap,
  Controls,
  SelectionMode,
  ConnectionLineType
} from "reactflow";
import dagre from 'dagre';
import initialNodes from './Nodes.json'
import initialEdges from './Edges.json'

const panOnDrag = [1, 2];

const CustomNode = ({
  data,
  isConnectable,
  targetPosition = Position.Top,
  sourcePosition = Position.Bottom
}: NodeProps) => {
  return (
    <>
      <Handle
        type="target"
        position={targetPosition}
        isConnectable={isConnectable}
      />
      {data?.label}
      <Handle
        type="source"
        position={sourcePosition}
        isConnectable={isConnectable}
      />
    </>
  );
};

CustomNode.displayName = "CustomNode";

const nodeTypes = {
  custom: CustomNode
};

const dagreGraph = new dagre.graphlib.Graph();
dagreGraph.setDefaultEdgeLabel(() => ({}));

const nodeWidth:number = 60;
const nodeHeight:number = 20;

const getLayoutedElements = (nodes:Node[], edges:Edge[], direction='TB') => {
  const isHorizontal = direction === 'LR';
  dagreGraph.setGraph({ rankdir: direction });

  // Add nodes and edges into dagreGraph object
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

// Check whether the node in initialNodes has a position field. If not, add it
// and assign it the value of position
// const position = { x: 0, y: 0 };
// const processedNodes:Node[] = initialNodes.map((node) => {
//   return { ...node, position }
// });

// Add edgeType field to each node
// const edgeType = 'smoothstep';
// const processedEdges:Edge[] = initialEdges.map((edge) => {
//   return { ...edge, edgeType }
// });

// Get layouted nodes and edges with assigned x/y coordinates using dagre
const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(
  initialNodes,
  initialEdges,
);


const FlowComponent = () => {
    const [nodes, setNodes, onNodesChange] = useNodesState(layoutedNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(layoutedEdges);
    
    // const onConnect = useCallback(
    //     (params: Edge | Connection) => setEdges((els) => addEdge(params, els)),
    //     [setEdges]
    // );
    const onConnect = useCallback(
        (params) =>
          setEdges((eds) =>
            addEdge({ ...params, type: ConnectionLineType.SmoothStep, animated: true }, eds)
          ),
        []
    );

  const onLayout = useCallback(
    (direction) => {
      const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(
        nodes,
        edges,
        direction
      );

      setNodes([...layoutedNodes]);
      setEdges([...layoutedEdges]);
    },
    [nodes, edges]
  );


  return (
        <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            nodeTypes={nodeTypes}
            connectionLineType={ConnectionLineType.SmoothStep}
            fitView
            panOnScroll
            selectionOnDrag
            panOnDrag={panOnDrag}
            selectionMode={SelectionMode.Partial}
        >
        <Background />
        <MiniMap nodeStrokeWidth={3} zoomable pannable />
        <Controls/>
        <Panel position="top-left">
            <button onClick={() => onLayout('TB')}>vertical layout</button>
            <button onClick={() => onLayout('LR')}>horizontal layout</button>
        </Panel>
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
  constructor() {
    super();
  }

  render(): JSX.Element {
    return <FlowComponent />;
  }
}