// import * as React from 'react';
// import ReactFlow, {
//     Node,
//     addEdge,
//     Background,
//     Edge,
//     useNodesState,
//     useEdgesState,
//     MiniMap,
//     Controls,
//     SelectionMode,
//     ConnectionLineType
//   } from "reactflow";
// import allNodes from './Nodes.json'
// import allEdges from './Edges.json'

// export interface ITrackingTreeProps {
// }

// export class TrackingTree extends React.Component<ITrackingTreeProps>{
//     private _allNodes: Node[] = [];
//     private _allEdges: Edge[] = [];

//     constructor(props: ITrackingTreeProps) {
//         super(props);
//         this._allNodes = allNodes;
//         this._allEdges = allEdges;

//     }

//     render(): JSX.Element {
//         return (
//             <ReactFlow
//                 nodes={nodes}
//                 edges={edges}
//                 nodeTypes={nodeTypes}
//                 onNodesChange={onNodesChange}
//                 onEdgesChange={onEdgesChange}
//                 onConnect={onConnect}
//                 onNodeClick={handleNodeClick}
//                 connectionLineType={ConnectionLineType.SmoothStep}
//                 fitView
//                 panOnScroll
//                 selectionOnDrag
//                 panOnDrag={panOnDrag}
//                 selectionMode={SelectionMode.Partial}
//             >
//             <Background />
//             <MiniMap nodeColor={nodeColor} nodeStrokeWidth={3} zoomable pannable />
//             <Controls/>
//             </ReactFlow>
//       );
//     }
// }