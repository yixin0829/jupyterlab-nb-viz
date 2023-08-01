// import { ReactWidget } from '@jupyterlab/apputils';
// import React, { useState, MouseEvent } from "react";
// import ReactFlow, {
//     Node,
//     Background,
//     Controls,
//     MiniMap,
//     useNodesState,
//     useEdgesState,
//     ConnectionLineType,
//     SelectionMode,
// } from "reactflow";
// import { Legend } from "./Legend";
// import { 
//     translateTreeUtilCommand } from "./TreeUtils";

// import RecommendEdge from "./RecommendEdge";

// import allNodes from "./NodesAndEdges/KnowledgeGraph/Nodes.json";
// import allEdges from "./NodesAndEdges/KnowledgeGraph/Edges.json";
// import DownloadButton from './DownloadButton';

// const panOnDrag = [1, 2];
// const nodeColor = (node: Node) => {
//     switch (node.data.nodeType) {
//       case 'root':
//         return '#e8a9a9';
//       case 'raw':
//         return '#e8ac6e';
//       case 'secondary':
//         return '#f0c633';
//       case 'plot':
//         return '#9ab75e';
//       case 'insight':
//           return '#a2d2bc';
//       default:
//         return '#ffffff';
//     }
//   };
//   const { nodes: initialNodes, edges: initialEdges } = translateTreeUtilCommand(
//     'GetInitial',
//     null,
//     null,
//     null,
//     allNodes,
//     // allEdges,
//     []
// )
// const edgeTypes = {
//     knowledgeGraph: RecommendEdge,
// }
  

// const KnowledgeGraphComponent = () => {
//     const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
//     const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

//     const [canExpandAll, setCanExpandAll] = useState(false);
//     const [canCollapseAll, setCanCollapseAll] = useState(false);
//     const [canCollapseNonTop, setCanCollapseNonTop] = useState(false);
//     const [selectedNode, setSelectedNode] = useState<Node | null>(null);

//     const handleNodeClick = (event: MouseEvent, node: Node) => {
//         if (allNodes === null || allEdges === null) {
//             console.log('[handleNodeClick] allNodes or allEdges is null')
//             return;
//         }
//         setSelectedNode(node);
//         // change node border width
//         const newNodes = nodes.map((prevNode)=> {
//             if (prevNode.id === node.id) {
//                 // prevNode.style = {...prevNode.style, background: '#e06666'};
//                 prevNode.style = {...prevNode.style, borderWidth: '2px'};
//             }
//             else {
//                 prevNode.style = {...prevNode.style, borderWidth: '1px'};
//             }
//             return prevNode;
//         });
//         setNodes(newNodes);
//         setCanExpandAll(false);
//         setCanCollapseAll(false);
//     }


//     const collapseBackToInitial = () => {
//         // collapse the tree to initial state
//         const { nodes: newNodes, edges: newEdges } = translateTreeUtilCommand(
//             'CollapseBackToInitial',
//             null,
//             nodes,
//             edges,
//             allNodes,
//             allEdges,
//             []
//         )
//         setNodes(newNodes);
//         setEdges(newEdges);
//     }

//     const handleCollapseAllButtonClick = () => {
//         if(canCollapseAll) {
//             const { nodes: newNodes, edges: newEdges} = translateTreeUtilCommand(
//                 'CollapseSubtree',
//                 selectedNode,
//                 nodes,
//                 edges,
//                 allNodes,
//                 allEdges,
//                 []
//             );
//             setNodes(newNodes);
//             setEdges(newEdges);
//             setCanCollapseAll(false);
//         }
//         else {
//             console.log('Cannot do collapseAll to this node!');
//         }
//     }

//     const handleExpandAllNodesButtonClick = () => {
//         const { nodes: newNodes, edges: newEdges } = translateTreeUtilCommand(
//             'ExpandAllNodes',
//             null,
//             nodes,
//             edges,
//             allNodes,
//             allEdges,
//             []
//         )
//         setNodes(newNodes);
//         setEdges(newEdges);
//     }

//     const handleCollapseNonTopButtonClick = () => {
//         if (canCollapseNonTop) {
//             const { nodes: newNodes, edges: newEdges} = translateTreeUtilCommand(
//                 'CollapseNonTop',
//                 selectedNode,
//                 nodes,
//                 edges,
//                 allNodes,
//                 allEdges,
//                 []
//             );
//             setNodes(newNodes);
//             setEdges(newEdges);
//             setCanCollapseNonTop(false);
//         }
//         else {
//             console.log('Cannot do collapseNonTop to this node!');
//         }
//     }

//     const handleExpandAllButtonClick = () => {
//         if(selectedNode && canExpandAll) {
//             const { nodes: newNodes, edges: newEdges} = translateTreeUtilCommand(
//                 'ExpandSubtree',
//                 selectedNode,
//                 nodes,
//                 edges,
//                 allNodes,
//                 allEdges,
//                 []
//             );
//             setNodes(newNodes);
//             setEdges(newEdges);
//             setCanExpandAll(false);
//         }
//         else {
//             console.log(`Cannot do expandAll to this node.`);
//         }
//     }

    
//     const resetNodeStyles = () => {
//         const resetNodes = nodes.map((prevNode)=> {prevNode.style = {...prevNode.style, borderWidth: '1px'}; return prevNode;});
//         setNodes(resetNodes);
//     }

//     const resetAllStatus = () => {
//         resetNodeStyles();
//         setSelectedNode(null);
//         // setSelectedEdge(null);
//     }

//     return (
//         <ReactFlow
//             nodes={nodes}
//             edges={edges}
//             // nodeTypes={nodeTypes}
//             edgeTypes={edgeTypes}
//             onNodesChange={onNodesChange}
//             onEdgesChange={onEdgesChange}
//             onNodeClick={handleNodeClick}
//             // onEdgeClick={handleEdgeClick}
//             connectionLineType={ConnectionLineType.SmoothStep}
//             fitView
//             panOnScroll
//             selectionOnDrag
//             panOnDrag={panOnDrag}
//             selectionMode={SelectionMode.Partial}
//             onPaneClick={() => {
//                 resetAllStatus();
//               }}
//             deleteKeyCode={null}
//         >
//         <Background />
//         <div style={{ position: 'absolute', left: 10, top: 10, zIndex: 4 }}>
//             <Legend />
//         </div>
//         <div style={{ position: 'absolute', right: 10, top: 10, zIndex: 4 }}>
//             <button onClick={handleCollapseAllButtonClick} disabled={!canCollapseAll} style={{ marginRight: 5 }}>
//                 Collapse all children
//             </button>
//             <button onClick={handleCollapseNonTopButtonClick} disabled={!canCollapseNonTop} style={{ marginRight: 5 }}>
//                 Collapse non-top-3 children
//             </button>
//             <button onClick={handleExpandAllButtonClick} disabled={!canExpandAll} style={{ marginRight: 5 }}>
//                 Expand all children
//             </button>
//             <button onClick={collapseBackToInitial} style={{ marginRight: 5 }}>
//                 Collapse back to initial
//             </button>
//             <button onClick={handleExpandAllNodesButtonClick} style={{ marginRight: 5 }}>
//                 Expand all nodes
//             </button>
//         </div>
//         <div style={{ position: 'absolute', right: 10, top: 50, zIndex: 4 }}>
//             <DownloadButton />
//         </div>
//         <MiniMap nodeColor={nodeColor} nodeStrokeWidth={3} zoomable pannable />
//         <Controls/>
//         </ReactFlow>
//   );

// }

// export class KnowledgeGraphWidget extends ReactWidget {
//     constructor() {
//         super();
//     }

//     render(): JSX.Element {
//         return <KnowledgeGraphComponent />;
//     }
// }