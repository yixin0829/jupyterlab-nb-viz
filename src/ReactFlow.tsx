import React, { MouseEvent, useRef } from "react";
import { useState } from "react";
import { ReactWidget } from '@jupyterlab/apputils'; // for converting a react component to a react widget in JL
import "reactflow/dist/style.css";
import '../style/node.css'
import '@coreui/coreui/dist/css/coreui.min.css'

import ReactFlow, {
  Node,
  Edge,
  addEdge,
  Background,
  useNodesState,
  useEdgesState,
  MiniMap,
  Controls,
  SelectionMode,
  ConnectionLineType,
  Connection,
  Panel,
} from "reactflow";
import { NotebookPanel } from '@jupyterlab/notebook';
import { INotebookTracker } from '@jupyterlab/notebook';

import axios from "axios";
import { usePromiseTracker } from "react-promise-tracker";
import { trackPromise } from 'react-promise-tracker';
import { ThreeDots } from 'react-loader-spinner';
import { CodeMirrorEditor } from "@jupyterlab/codemirror";

import { 
    translateTreeUtilCommand, 
    getLayoutedElements,
    isEdgeRemoveable,
    removeEdge,
    isEdgeConnectable,
    EdgeOperation} from "./TreeUtils";
import InsightNode from "./InsightNode";
import PlotNode from "./PlotNode";
import { Legend } from "./Legend";
import RecommendEdge from "./RecommendEdge";
import RawNode from "./RawNode";
import { CButton, CDropdown, CDropdownItem, CDropdownMenu, CDropdownToggle } from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilReload } from "@coreui/icons";
import { DownloadButton } from "./DownloadButton";

const panOnDrag = [1, 2];
const HIGHLIGHTED_LINE_CLASS = "jp-InputArea-editor-dependencyline";

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
const LoadIndicator = () => {
    const { promiseInProgress } = usePromiseTracker();
    return promiseInProgress ? (
    <div style={{marginRight: 5}}>
        <ThreeDots height="80" width="80" radius="9" color="#e8ac6e" ariaLabel="three-dots-loading" visible={true}/>
    </div>) : (<></>);
}
const nodeTypes = {
    insight: InsightNode,
    plot: PlotNode,
    raw: RawNode
};
const edgeTypes = {
    recommended: RecommendEdge,
}


interface FlowComponentProps {
    notebookPanel: NotebookPanel | null;
    notebookTracker: INotebookTracker | null;
}

const FlowComponent = (props: FlowComponentProps) => {
    const [selectedNode, setSelectedNode] = useState<Node | null>(null);
    const [selectedEdge, setSelectedEdge] = useState<Edge | null>(null);
    const [isSelectedEdgeRemovable, setIsSelectedEdgeRemovable] = useState(false);
    const [canExpandAll, setCanExpandAll] = useState(false);
    const [canCollapseAll, setCanCollapseAll] = useState(false);
    const [canCollapseNonTop, setCanCollapseNonTop] = useState(false);
    const [isRecommendationDisplayed, setIsRecommendationDisplayed] = useState(false);

    const [allNodes, setAllNodes] = useState<Node[] | null>([]);
    const [allEdges, setAllEdges] = useState<Edge[] | null>([]);

    const [nodes, setNodes, onNodesChange] = useNodesState([]);
    const [edges, setEdges, onEdgesChange] = useEdgesState([]);

    // const edgeUpdateSuccessful = useRef(true)
    const highlightedCellLines = useRef<number[][]>([]); // [[cellIndex, lineNumber], ...
    const highlightedCells = useRef<number[]>([]); // [[cellIndex, lineNumber], ...
    const edgeOperations = useRef<EdgeOperation[]>([]);

    const collapseBackToInitial = () => {
        // collapse the tree to initial state
        const { nodes: newNodes, edges: newEdges } = translateTreeUtilCommand(
            'CollapseBackToInitial',
            null,
            nodes,
            edges,
            allNodes,
            allEdges,
            edgeOperations.current
        )
        setNodes(newNodes);
        setEdges(newEdges);
    }

    const highlightCellLine = (cellIndex: number, lineNumber: number) => {
        // get cell by cellIndex
        // console.log(`[highlightCell] cellIndex: ${cellIndex}, lineNumber=${lineNumber}`);
        if (props.notebookTracker === null || props.notebookTracker.currentWidget === null) {
            console.log('[highlightCell] no notebookTracker or no notebookPanel.');
            return;
        }
        const cellList = props.notebookTracker.currentWidget.content.widgets;
        const cell = cellList[cellIndex];
        if (cell && cell.editor instanceof CodeMirrorEditor) {
            const editor = cell.editor.editor;
            editor.addLineClass(lineNumber, "background", HIGHLIGHTED_LINE_CLASS);
            highlightedCellLines.current.push([cellIndex, lineNumber]);
        }
        else {
            console.log('[highlightCell] the editor of activeCell is not a CodeMirrorEditor');
        }
    }

    const highlightCell = (cellIndex: number) => {
        if (props.notebookTracker === null || props.notebookTracker.currentWidget === null) {
            console.log('[highlightCell] no notebookTracker or no notebookPanel.');
            return;
        }
        const cellList = props.notebookTracker.currentWidget.content.widgets;
        const cell = cellList[cellIndex];
        cell.node.style.backgroundColor = '#f0c633';
        highlightedCells.current.push(cellIndex);
        return true;
    }

    const clearHighlightedCellLines = () => {
        if (props.notebookTracker === null || props.notebookTracker.currentWidget === null) {
            console.log('[clearHighlightedCellLines] no notebookTracker or no notebookPanel.');
            return;
        }
        const cellList = props.notebookTracker.currentWidget.content.widgets;
        for(let [cellIndex, lineNumber] of highlightedCellLines.current) {
            const cell = cellList[cellIndex];
            if (cell && cell.editor instanceof CodeMirrorEditor) {
                const editor = cell.editor.editor;
                editor.removeLineClass(lineNumber, "background", HIGHLIGHTED_LINE_CLASS);
            }
            else {
                console.log('[clearHighlightedCellLines] the editor of activeCell is not a CodeMirrorEditor');
            }
        }
        highlightedCellLines.current = [];
    }

    const clearHighlightedCells = () => {
        if (props.notebookTracker === null || props.notebookTracker.currentWidget === null) {
            console.log('[clearHighlightedCellLines] no notebookTracker or no notebookPanel.');
            return;
        }
        const cellList = props.notebookTracker.currentWidget.content.widgets;
        for(let cellIndex of highlightedCells.current) {
            const cell = cellList[cellIndex];
            cell.node.style.backgroundColor = '';
        }
        highlightedCells.current = [];
    }

    const setActiveCell = (cellIndex: number) => {
        if (props.notebookTracker === null || props.notebookTracker.currentWidget === null) {
            console.log('[highlightCell] no notebookTracker or no notebookPanel.');
            return;
        }
        const notebookPanel = props.notebookTracker.currentWidget;
        notebookPanel.content.activeCellIndex = cellIndex;
        const activeCell = props.notebookTracker.currentWidget.content.activeCell!;
        notebookPanel.content.scrollToCell(activeCell);
        console.log(`activeCellIndex after setFocusCell: ${props.notebookTracker.currentWidget.content.activeCellIndex}`);
    }


    const handleNodeClick = (event: MouseEvent, node: Node) => {
        if (allNodes === null || allEdges === null) {
            console.log('[handleNodeClick] allNodes or allEdges is null')
            return;
        }
        console.log(`[handleNodeClick] node clicked, id=${node.id}`);
        setSelectedNode(node);
        // change node border width
        const newNodes = nodes.map((prevNode)=> {
            if (prevNode.id === node.id) {
                prevNode.style = {...prevNode.style, borderWidth: '2px'};
            }
            else {
                prevNode.style = {...prevNode.style, borderWidth: '1px'};
            }
            return prevNode;
        });
        setNodes(newNodes);

        if ((node.data.nodeType !== 'plot') && (node.data.nodeType !== 'insight')) {
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
                    allEdges,
                    edgeOperations.current
                )
                setNodes(newNodes);
                setEdges(newEdges);
                return;
            }
        }
        else {
            // disable buttons
            setCanExpandAll(false);
            setCanCollapseAll(false);
            clearHighlightedCellLines();
            clearHighlightedCells();
            if(props.notebookTracker && props.notebookTracker.currentWidget) {
                // jump to the corresponding notebook and cell
                const cellIndex = node.data.cellIndex;
                setActiveCell(cellIndex);
                if (node.data.nodeType === 'insight') {
                    highlightCell(cellIndex);
                }
                // console.log(`[handleNodeClick] node.data.slices=${JSON.stringify(node.data.slices)}`);
                for (let slice of node.data.slices) {
                    const cellIndex = slice[0];
                    const lineNumber = slice[1];
                    highlightCellLine(cellIndex, lineNumber);
                }
                
            }
            else {
                console.log('FlowWidget: No notebookTracker');
            }
        }

    }


    const handleEdgeClick = (event: MouseEvent, edge: Edge) => {
        setSelectedEdge(edge);
        setIsSelectedEdgeRemovable(isEdgeRemoveable(edge, nodes, edges));
        console.log(`[handleEdgeClick] selectedEdge: ${JSON.stringify(edge)}`);
    }

    const handleExpandAllChildrenButtonClick = () => {
        if(selectedNode && canExpandAll) {
            const { nodes: newNodes, edges: newEdges} = translateTreeUtilCommand(
                'ExpandSubtree',
                selectedNode,
                nodes,
                edges,
                allNodes,
                allEdges,
                edgeOperations.current
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
        if(selectedNode && canCollapseAll) {
            const { nodes: newNodes, edges: newEdges} = translateTreeUtilCommand(
                'CollapseSubtree',
                selectedNode,
                nodes,
                edges,
                allNodes,
                allEdges,
                edgeOperations.current
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
        if (selectedNode && canCollapseNonTop) {
            const { nodes: newNodes, edges: newEdges} = translateTreeUtilCommand(
                'CollapseNonTop',
                selectedNode,
                nodes,
                edges,
                allNodes,
                allEdges,
                edgeOperations.current
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
            allEdges,
            edgeOperations.current
        )
        setNodes(newNodes);
        setEdges(newEdges);
    }

    const resetNodeStyles = () => {
        // const resetNodes = nodes.map((prevNode)=> {prevNode.style = {...prevNode.style, background: nodeColor(prevNode)}; return prevNode;});
        const resetNodes = nodes.map((prevNode)=> {prevNode.style = {...prevNode.style, borderWidth: '1px'}; return prevNode;});
        setNodes(resetNodes);
        clearHighlightedCellLines();
        clearHighlightedCells();
    }

    const resetAllStatus = () => {
        resetNodeStyles();
        setSelectedNode(null);
        setSelectedEdge(null);
        edgeOperations.current = [];
    }

    const refreshSMITree = () => {
        console.log('[refreshSMITree] refreshSMITree.');
        disableRecommendations();
        resetAllStatus();
        if (!props.notebookPanel) {
            console.log('[refreshSMITree] no notebook panel to be passed!');
            return;
        }
        const request = {
            notebook: JSON.stringify(props.notebookPanel!.model!.toJSON()),
        }
        trackPromise(
        axios.post('http://127.0.0.1:4000/tracking-tree', request, {withCredentials: true, }).then((response) => {
            console.log(`[refreshSMITree] get response.`);
            const refreshedNodes = response.data.nodes;
            const refreshedEdges = response.data.edges;
            // console.log(`[refreshSMITree] refreshedNodes: ${JSON.stringify(refreshedNodes)}`);
            setAllNodes(refreshedNodes);
            setAllEdges(refreshedEdges);
            // const {initialNodes: initialRefreshedNodes, initialEdges: initialRefreshedEdges} = getInitialElements(refreshedNodes, refreshedEdges);
            // const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(initialRefreshedNodes, initialRefreshedEdges);
            const { nodes: layoutedNodes, edges: layoutedEdges } = translateTreeUtilCommand(
                'GetInitial',
                null,
                null,
                null,
                refreshedNodes,
                refreshedEdges,
                edgeOperations.current
            );
            setNodes(layoutedNodes);
            setEdges(layoutedEdges);
            // console.log(`[refreshSMITree] successfully refreshed nodes and edges.`);
        }).catch((error) => {
            console.log(`[refreshSMITree] error: ${error} when sending post request to http://128.100.10.43:4000/tracking-tree`);
        }));
    }

    const getRecommendations = () => {
        if (allNodes === null || allEdges === null) {
            console.log('[getRecommendations] allNodes or allEdges is null')
            return;
        }
        disableRecommendations();
        resetAllStatus();
        const request = {
            nodes: JSON.stringify(nodes),
            edges: JSON.stringify(edges),
        }; // send current Nodes and Edges to backend so that recommendations will not be generated for hidden nodes
        trackPromise(
        axios.post('http://127.0.0.1:4000/recommendations', request, {withCredentials: true}).then((response) => {
            console.log(`[getRecommendations] get response: ${JSON.stringify(response.data)}`);
            const recommendedNodes = response.data.recommendedNodes;
            const recommendedEdges = response.data.recommendedEdges;
            const newAllNodes = allNodes.concat(recommendedNodes);
            const newAllEdges = [...allEdges, ...recommendedEdges];
            setAllNodes(newAllNodes);
            setAllEdges(newAllEdges);
            const newNodes = nodes.concat(recommendedNodes);
            const newEdges = edges.concat(recommendedEdges);
            const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(newNodes, newEdges);
            setNodes(layoutedNodes);
            setEdges(layoutedEdges);
            setIsRecommendationDisplayed(true);
        }).catch((error) => {
            console.log(`[getRecommendations] error: ${error}`);
        }));
    }

    const disableRecommendations = () => {
        if (allNodes === null || allEdges === null) {
            console.log('[disableRecommendations] allNodes or allEdges is null')
            return;
        }
        if (selectedNode?.data.nodeType === 'recommended') {
            resetNodeStyles();
            setSelectedNode(null);
        }
        // remove the recommended nodes and edges
        const newAllNodes = allNodes.filter((n) => n.data.nodeType !== 'recommended');
        const newAllEdges = allEdges.filter((e) => (!e.source.startsWith('rec') && ! e.target.startsWith('rec')));
        setAllNodes(newAllNodes);
        setAllEdges(newAllEdges);
        const newNodes = nodes.filter((n) => n.data.nodeType !== 'recommended');
        const newEdges = edges.filter((e) => (!e.source.startsWith('rec') && ! e.target.startsWith('rec')));
        const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(newNodes, newEdges);
        setNodes(layoutedNodes);
        setEdges(layoutedEdges);
        setIsRecommendationDisplayed(false);
    }

    const removeSelectedEdge = () => {
        if (nodes === null || edges === null) {
            console.log('[removeSelectedEdge] nodes or edges is null');
            return;
        }
        if (selectedEdge && isSelectedEdgeRemovable) {
            const { nodes: layoutedNodes, edges: layoutedEdges } = removeEdge(selectedEdge, nodes, edges);
            if (layoutedNodes === null || layoutedEdges === null) {
                console.log('[removeSelectedEdge] layoutedNodes or layoutedEdges is null')
                return;
            }
            setNodes(layoutedNodes);
            setEdges(layoutedEdges);
            console.log(`[removeSelectedEdge] successfully removed edge: ${JSON.stringify(selectedEdge)}`);
            edgeOperations.current.push({operation: 'remove', edge: selectedEdge});
        }
    }

    const onConnect = (connection: Connection) => {
        console.log(`[onConnect] newEdge: ${JSON.stringify(connection)}`);
        console.log(`[onConnect] nodes: ${JSON.stringify(nodes)}`);
        if (!isEdgeConnectable(connection, nodes)) {
            console.log(`[onConnect] edge is not connectable.`);
            return;
        }
        const newEdge: Edge = {
            'id': `${connection.source}-${connection.target}`,
            'source': connection.source!,
            'target': connection.target!
        };
        setEdges((els) => addEdge(newEdge, els));
        edgeOperations.current.push({operation: 'add', edge: newEdge});
    }

    // const getEnabledOptions= () => {
    //     const enabledOptions = [];
    //     enabledOptions.push(<CDropdownItem onClick={collapseBackToInitial}>Collapse back to initial</CDropdownItem>);
    //     enabledOptions.push(<CDropdownItem onClick={handleExpandAllNodesButtonClick}>Expand all nodes</CDropdownItem>);
    //     if (selectedNode && canCollapseAll) {
    //         enabledOptions.push(<CDropdownItem onClick={handleCollapseAllButtonClick}>Collapse all children</CDropdownItem>);
    //     }
    //     if (selectedNode && canCollapseNonTop) {
    //         enabledOptions.push(<CDropdownItem onClick={handleCollapseNonTopButtonClick}>Collapse non-top-3 children</CDropdownItem>);
    //     }
    //     if (selectedNode && canExpandAll) {
    //         enabledOptions.push(<CDropdownItem onClick={handleExpandAllChildrenButtonClick}>Expand all children</CDropdownItem>);
    //     }
    // if (selectedEdge && isSelectedEdgeRemovable) {
    //         enabledOptions.push(<CDropdownItem onClick={removeSelectedEdge} style={{marginRight: 5}}>Remove edge</CDropdownItem>)
    //     }
    //     return enabledOptions;
    // }

    const dropdownButtonStyle = {
        height: "35px", 
        marginLeft: "10px",
    };

    const pageTopContainerStyle = { 
        display: "flex",
        width: "100%",
        zIndex: "100",
        justifyContent: "space-between",
    };
    
    const buttonContainerStyle = {
        flex: "1",
        // marginLeft: "5px",
        // marginRight: "5px",
        display: "flex",
        alignItems: "center",
        flexDirection: "column" as "column",
    };

    const buttonGroupWithBorderSytle = { 
        border: "2px dashed black",
        padding: "5px",
    };

    const iconStyle = {
        marginLeft: "5px",
        marginRight: "5px",
        cursor: "pointer"
    }
    
  return (
        <ReactFlow
            nodes={nodes}
            edges={edges}
            nodeTypes={nodeTypes}
            edgeTypes={edgeTypes}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onNodeClick={handleNodeClick}
            onEdgeClick={handleEdgeClick}
            connectionLineType={ConnectionLineType.SmoothStep}
            fitView
            panOnScroll
            selectionOnDrag
            panOnDrag={panOnDrag}
            selectionMode={SelectionMode.Partial}
            onPaneClick={() => {
                resetAllStatus();
              }}
            deleteKeyCode={null}
        >
        <Background />
            
        <Panel position="top-center" style={{width: "100%"}}>
            <div style={pageTopContainerStyle}>
            <div style={{flex: "1"}}>
                <Legend />
            </div>

            <div style={{flex: "1"}}>
                {/* <CButton style={dropdownButtonStyle} onClick={refreshSMITree}>Refresh</CButton> */}
                <CIcon icon={cilReload} style={iconStyle} size="xxl" onClick={refreshSMITree} title={"Generate/refresh the tree"}/>
                <DownloadButton/>
            </div>

            <div style={buttonContainerStyle}>
                <LoadIndicator/>
            </div>
            
            <div style={buttonContainerStyle}>
                <div style={{...buttonGroupWithBorderSytle, minWidth:"250px"}}>
                    {(!isRecommendationDisplayed) && <CButton color="warning" style={dropdownButtonStyle} onClick={getRecommendations}>Show recommendations</CButton> }
                    {(isRecommendationDisplayed) && <CButton color="warning" style={dropdownButtonStyle} onClick={disableRecommendations} disabled={!isRecommendationDisplayed}>Hide recommendations</CButton>}
                </div>
                <span>Get help in data explartion</span>
            </div>

            <div style={buttonContainerStyle}>
                <div style={{...buttonGroupWithBorderSytle}}>
                    <CDropdown style={dropdownButtonStyle}>
                        <CDropdownToggle color="warning">Collapse</CDropdownToggle>
                        <CDropdownMenu>
                            <CDropdownItem onClick={handleCollapseNonTopButtonClick}>Collapse non-top-3 children of the selected node</CDropdownItem>
                            <CDropdownItem onClick={handleCollapseAllButtonClick}>Collapse all children of the selected node</CDropdownItem>
                            <CDropdownItem onClick={collapseBackToInitial}>Collapse the whole tree back to initial</CDropdownItem>
                        </CDropdownMenu>
                    </CDropdown>
                    <CDropdown style={dropdownButtonStyle}>
                        <CDropdownToggle color="warning">Expand</CDropdownToggle>
                        <CDropdownMenu>
                            <CDropdownItem onClick={handleExpandAllChildrenButtonClick}>Expand all children of the selected node</CDropdownItem>
                            <CDropdownItem onClick={handleExpandAllNodesButtonClick}>Expand all nodes in the tree</CDropdownItem>
                        </CDropdownMenu>
                    </CDropdown>
                </div>
                {(selectedEdge && isSelectedEdgeRemovable) &&
                    <CButton color="warning" style={dropdownButtonStyle} onClick={removeSelectedEdge}> Remove the selected edge</CButton>}
                <span>Collapse/expand nodes</span>
                </div>
        </div>
        </Panel>
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
