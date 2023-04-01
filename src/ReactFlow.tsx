import React, { useCallback } from "react";
// for converting a react component to a react widget in JL
import { ReactWidget } from '@jupyterlab/apputils';

import "reactflow/dist/style.css";

import ReactFlow, {
  Node,
  addEdge,
  Background,
  Edge,
  Connection,
  useNodesState,
  useEdgesState,
  Handle,
  NodeProps,
  Position,
  MiniMap,
  Controls,
} from "reactflow";
import dagre from 'dagre';
import initialNodes from './NodesNoCoords.json'
import initialEdges from './Edges.json'


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

// Node colour schema
const nodeColor = (node: Node) => {
  switch (node.type) {
    case 'dataframe':
      return '#6ede87';
    case 'variable':
      return '#6865A5';
    case 'plot':
      return '#ff0072';
    case 'insight':
      return '#3e4959';
    default:
      return '#000000';
  }
};

const dagreGraph = new dagre.graphlib.Graph();
dagreGraph.setDefaultEdgeLabel(() => ({}));

const nodeWidth:number = 172;
const nodeHeight:number = 36;

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
const position = { x: 0, y: 0 };
const processedNodes:Node[] = initialNodes.map((node) => {
  return { ...node, position }
});

// Add edgeType field to each node
const edgeType = 'smoothstep';
const processedEdges:Edge[] = initialEdges.map((edge) => {
  return { ...edge, edgeType }
});

// Get layouted nodes and edges with assigned x/y coordinates using dagre
const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(
  processedNodes,
  processedEdges
);


const FlowComponent = () => {
  const [nodes, , onNodesChange] = useNodesState(layoutedNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(layoutedEdges);
  const onConnect = useCallback(
    (params: Edge | Connection) => setEdges((els) => addEdge(params, els)),
    [setEdges]
  );

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      nodeTypes={nodeTypes}
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
  constructor() {
    super();
  }

  render(): JSX.Element {
    return <FlowComponent />;
  }
}