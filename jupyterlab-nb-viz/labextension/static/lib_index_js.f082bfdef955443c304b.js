"use strict";
(self["webpackChunkjupyterlab_nb_viz"] = self["webpackChunkjupyterlab_nb_viz"] || []).push([["lib_index_js"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./style/node.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./style/node.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".react-flow__node-insight {\n    font-size: 8px;\n    background: #a2d2bc;\n    border: 1px solid #555;\n    border-radius: 5px;\n    display: inline-block;\n    width: auto;\n    height: auto;\n    text-align: left;\n    max-width: \"130px\";\n    padding: 5px;\n}\n\n.react-flow__node-plot {\n    font-size: 10px;\n    color: 'white';\n    background: #9ab75e;\n    border: 1px solid #555;\n    border-radius: 5px;\n    display: inline-block;\n    width: 130px;\n    height: auto;\n    text-align: center;\n    padding: 5px;\n}\n\ndiv.CodeMirror-linebackground.jp-InputArea-editor-dependencyline {\n    background-color: #f0c633;\n  }\n\n  .react-flow__node-raw {\n    font-size: 10px;\n    border: 1px solid #555;\n    border-radius: 5px;\n    display: inline-block;\n    text-align: center;\n    max-width: \"130px\";\n    padding: 5px;\n}", "",{"version":3,"sources":["webpack://./style/node.css"],"names":[],"mappings":"AAAA;IACI,cAAc;IACd,mBAAmB;IACnB,sBAAsB;IACtB,kBAAkB;IAClB,qBAAqB;IACrB,WAAW;IACX,YAAY;IACZ,gBAAgB;IAChB,kBAAkB;IAClB,YAAY;AAChB;;AAEA;IACI,eAAe;IACf,cAAc;IACd,mBAAmB;IACnB,sBAAsB;IACtB,kBAAkB;IAClB,qBAAqB;IACrB,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,YAAY;AAChB;;AAEA;IACI,yBAAyB;EAC3B;;EAEA;IACE,eAAe;IACf,sBAAsB;IACtB,kBAAkB;IAClB,qBAAqB;IACrB,kBAAkB;IAClB,kBAAkB;IAClB,YAAY;AAChB","sourcesContent":[".react-flow__node-insight {\n    font-size: 8px;\n    background: #a2d2bc;\n    border: 1px solid #555;\n    border-radius: 5px;\n    display: inline-block;\n    width: auto;\n    height: auto;\n    text-align: left;\n    max-width: \"130px\";\n    padding: 5px;\n}\n\n.react-flow__node-plot {\n    font-size: 10px;\n    color: 'white';\n    background: #9ab75e;\n    border: 1px solid #555;\n    border-radius: 5px;\n    display: inline-block;\n    width: 130px;\n    height: auto;\n    text-align: center;\n    padding: 5px;\n}\n\ndiv.CodeMirror-linebackground.jp-InputArea-editor-dependencyline {\n    background-color: #f0c633;\n  }\n\n  .react-flow__node-raw {\n    font-size: 10px;\n    border: 1px solid #555;\n    border-radius: 5px;\n    display: inline-block;\n    text-align: center;\n    max-width: \"130px\";\n    padding: 5px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./lib/DownloadButton.js":
/*!*******************************!*\
  !*** ./lib/DownloadButton.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DownloadButton": () => (/* binding */ DownloadButton),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactflow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactflow */ "webpack/sharing/consume/default/reactflow/reactflow");
/* harmony import */ var reactflow__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactflow__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var html_to_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! html-to-image */ "webpack/sharing/consume/default/html-to-image/html-to-image");
/* harmony import */ var html_to_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(html_to_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _coreui_icons_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @coreui/icons-react */ "webpack/sharing/consume/default/@coreui/icons-react/@coreui/icons-react");
/* harmony import */ var _coreui_icons_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @coreui/icons */ "webpack/sharing/consume/default/@coreui/icons/@coreui/icons");
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_coreui_icons__WEBPACK_IMPORTED_MODULE_4__);





function downloadImage(dataUrl) {
    const a = document.createElement('a');
    a.setAttribute('download', 'reactflow.png');
    a.setAttribute('href', dataUrl);
    a.click();
}
const imageWidth = 1024;
const imageHeight = 1024;
function DownloadButton() {
    const { getNodes } = (0,reactflow__WEBPACK_IMPORTED_MODULE_1__.useReactFlow)();
    const iconStyle = {
        marginLeft: "5px",
        marginRight: "5px",
        cursor: "pointer"
    };
    const onClick = () => {
        const nodesBounds = (0,reactflow__WEBPACK_IMPORTED_MODULE_1__.getRectOfNodes)(getNodes());
        const transform = (0,reactflow__WEBPACK_IMPORTED_MODULE_1__.getTransformForBounds)(nodesBounds, imageWidth, imageHeight, 0.5, 2);
        const viewPort = document.querySelector('.react-flow__viewport');
        (0,html_to_image__WEBPACK_IMPORTED_MODULE_2__.toPng)(viewPort, {
            backgroundColor: 'white',
            width: imageWidth,
            height: imageHeight,
            style: {
                width: imageWidth.toString(),
                height: imageHeight.toString(),
                transform: `translate(${transform[0]}px, ${transform[1]}px) scale(${transform[2]})`,
            },
        }).then(downloadImage);
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_coreui_icons_react__WEBPACK_IMPORTED_MODULE_3___default()), { icon: _coreui_icons__WEBPACK_IMPORTED_MODULE_4__.cilSave, style: iconStyle, size: "xxl", onClick: onClick, title: "Save the tree as an image" }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DownloadButton);


/***/ }),

/***/ "./lib/InsightNode.js":
/*!****************************!*\
  !*** ./lib/InsightNode.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactflow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactflow */ "webpack/sharing/consume/default/reactflow/reactflow");
/* harmony import */ var reactflow__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactflow__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_markdown_lib_react_markdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-markdown/lib/react-markdown */ "./node_modules/react-markdown/lib/react-markdown.js");



const InsightNode = ({ data }) => {
    let displayInsight = data.label;
    const displayMaxLength = 100;
    if (displayInsight.length > displayMaxLength) {
        let truncatedInsight = data.label.substring(0, 100);
        const lastSpaceIndex = truncatedInsight.lastIndexOf(' ');
        if (lastSpaceIndex !== -1 && lastSpaceIndex !== truncatedInsight.length - 1) {
            truncatedInsight = truncatedInsight.substring(0, lastSpaceIndex);
        }
        displayInsight = truncatedInsight + '...';
    }
    const [isHovered, setIsHovered] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const handleMouseEnter = () => { setIsHovered(true); };
    const handleMouseLeave = () => { setIsHovered(false); };
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactflow__WEBPACK_IMPORTED_MODULE_1__.Handle, { type: "target", position: reactflow__WEBPACK_IMPORTED_MODULE_1__.Position.Top }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_markdown_lib_react_markdown__WEBPACK_IMPORTED_MODULE_2__.ReactMarkdown, null, displayInsight),
            isHovered && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { style: {
                    position: 'absolute',
                    top: '-40px',
                    left: '0%',
                    backgroundColor: '#ffffff',
                    padding: '8px',
                    width: "auto",
                    height: "auto",
                    minWidth: "130px",
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                } },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_markdown_lib_react_markdown__WEBPACK_IMPORTED_MODULE_2__.ReactMarkdown, null, data.label))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(InsightNode));


/***/ }),

/***/ "./lib/KnowledgeGraph.js":
/*!*******************************!*\
  !*** ./lib/KnowledgeGraph.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KnowledgeGraphWidget": () => (/* binding */ KnowledgeGraphWidget)
/* harmony export */ });
/* harmony import */ var _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jupyterlab/apputils */ "webpack/sharing/consume/default/@jupyterlab/apputils");
/* harmony import */ var _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactflow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactflow */ "webpack/sharing/consume/default/reactflow/reactflow");
/* harmony import */ var reactflow__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactflow__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Legend__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Legend */ "./lib/Legend.js");
/* harmony import */ var _TreeUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TreeUtils */ "./lib/TreeUtils.js");
/* harmony import */ var _RecommendEdge__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./RecommendEdge */ "./lib/RecommendEdge.js");
/* harmony import */ var _NodesAndEdges_KnowledgeGraph_Nodes_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NodesAndEdges/KnowledgeGraph/Nodes.json */ "./lib/NodesAndEdges/KnowledgeGraph/Nodes.json");
/* harmony import */ var _NodesAndEdges_KnowledgeGraph_Edges_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./NodesAndEdges/KnowledgeGraph/Edges.json */ "./lib/NodesAndEdges/KnowledgeGraph/Edges.json");
/* harmony import */ var _DownloadButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./DownloadButton */ "./lib/DownloadButton.js");









const panOnDrag = [1, 2];
const nodeColor = (node) => {
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
const { nodes: initialNodes, edges: initialEdges } = (0,_TreeUtils__WEBPACK_IMPORTED_MODULE_3__.translateTreeUtilCommand)('GetInitial', null, null, null, _NodesAndEdges_KnowledgeGraph_Nodes_json__WEBPACK_IMPORTED_MODULE_4__, _NodesAndEdges_KnowledgeGraph_Edges_json__WEBPACK_IMPORTED_MODULE_5__, []);
const edgeTypes = {
    knowledgeGraph: _RecommendEdge__WEBPACK_IMPORTED_MODULE_6__["default"],
};
const KnowledgeGraphComponent = () => {
    const [nodes, setNodes, onNodesChange] = (0,reactflow__WEBPACK_IMPORTED_MODULE_2__.useNodesState)(initialNodes);
    const [edges, setEdges, onEdgesChange] = (0,reactflow__WEBPACK_IMPORTED_MODULE_2__.useEdgesState)(initialEdges);
    const [canExpandAll, setCanExpandAll] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [canCollapseAll, setCanCollapseAll] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [canCollapseNonTop, setCanCollapseNonTop] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [selectedNode, setSelectedNode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const handleNodeClick = (event, node) => {
        if (_NodesAndEdges_KnowledgeGraph_Nodes_json__WEBPACK_IMPORTED_MODULE_4__ === null || _NodesAndEdges_KnowledgeGraph_Edges_json__WEBPACK_IMPORTED_MODULE_5__ === null) {
            console.log('[handleNodeClick] allNodes or allEdges is null');
            return;
        }
        setSelectedNode(node);
        // change node border width
        const newNodes = nodes.map((prevNode) => {
            if (prevNode.id === node.id) {
                // prevNode.style = {...prevNode.style, background: '#e06666'};
                prevNode.style = { ...prevNode.style, borderWidth: '2px' };
            }
            else {
                prevNode.style = { ...prevNode.style, borderWidth: '1px' };
            }
            return prevNode;
        });
        setNodes(newNodes);
        setCanExpandAll(false);
        setCanCollapseAll(false);
    };
    const collapseBackToInitial = () => {
        // collapse the tree to initial state
        const { nodes: newNodes, edges: newEdges } = (0,_TreeUtils__WEBPACK_IMPORTED_MODULE_3__.translateTreeUtilCommand)('CollapseBackToInitial', null, nodes, edges, _NodesAndEdges_KnowledgeGraph_Nodes_json__WEBPACK_IMPORTED_MODULE_4__, _NodesAndEdges_KnowledgeGraph_Edges_json__WEBPACK_IMPORTED_MODULE_5__, []);
        setNodes(newNodes);
        setEdges(newEdges);
    };
    const handleCollapseAllButtonClick = () => {
        if (canCollapseAll) {
            const { nodes: newNodes, edges: newEdges } = (0,_TreeUtils__WEBPACK_IMPORTED_MODULE_3__.translateTreeUtilCommand)('CollapseSubtree', selectedNode, nodes, edges, _NodesAndEdges_KnowledgeGraph_Nodes_json__WEBPACK_IMPORTED_MODULE_4__, _NodesAndEdges_KnowledgeGraph_Edges_json__WEBPACK_IMPORTED_MODULE_5__, []);
            setNodes(newNodes);
            setEdges(newEdges);
            setCanCollapseAll(false);
        }
        else {
            console.log('Cannot do collapseAll to this node!');
        }
    };
    const handleExpandAllNodesButtonClick = () => {
        const { nodes: newNodes, edges: newEdges } = (0,_TreeUtils__WEBPACK_IMPORTED_MODULE_3__.translateTreeUtilCommand)('ExpandAllNodes', null, nodes, edges, _NodesAndEdges_KnowledgeGraph_Nodes_json__WEBPACK_IMPORTED_MODULE_4__, _NodesAndEdges_KnowledgeGraph_Edges_json__WEBPACK_IMPORTED_MODULE_5__, []);
        setNodes(newNodes);
        setEdges(newEdges);
    };
    const handleCollapseNonTopButtonClick = () => {
        if (canCollapseNonTop) {
            const { nodes: newNodes, edges: newEdges } = (0,_TreeUtils__WEBPACK_IMPORTED_MODULE_3__.translateTreeUtilCommand)('CollapseNonTop', selectedNode, nodes, edges, _NodesAndEdges_KnowledgeGraph_Nodes_json__WEBPACK_IMPORTED_MODULE_4__, _NodesAndEdges_KnowledgeGraph_Edges_json__WEBPACK_IMPORTED_MODULE_5__, []);
            setNodes(newNodes);
            setEdges(newEdges);
            setCanCollapseNonTop(false);
        }
        else {
            console.log('Cannot do collapseNonTop to this node!');
        }
    };
    const handleExpandAllButtonClick = () => {
        if (selectedNode && canExpandAll) {
            const { nodes: newNodes, edges: newEdges } = (0,_TreeUtils__WEBPACK_IMPORTED_MODULE_3__.translateTreeUtilCommand)('ExpandSubtree', selectedNode, nodes, edges, _NodesAndEdges_KnowledgeGraph_Nodes_json__WEBPACK_IMPORTED_MODULE_4__, _NodesAndEdges_KnowledgeGraph_Edges_json__WEBPACK_IMPORTED_MODULE_5__, []);
            setNodes(newNodes);
            setEdges(newEdges);
            setCanExpandAll(false);
        }
        else {
            console.log(`Cannot do expandAll to this node.`);
        }
    };
    const resetNodeStyles = () => {
        const resetNodes = nodes.map((prevNode) => { prevNode.style = { ...prevNode.style, borderWidth: '1px' }; return prevNode; });
        setNodes(resetNodes);
    };
    const resetAllStatus = () => {
        resetNodeStyles();
        setSelectedNode(null);
        // setSelectedEdge(null);
    };
    return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement((reactflow__WEBPACK_IMPORTED_MODULE_2___default()), { nodes: nodes, edges: edges, 
        // nodeTypes={nodeTypes}
        edgeTypes: edgeTypes, onNodesChange: onNodesChange, onEdgesChange: onEdgesChange, onNodeClick: handleNodeClick, 
        // onEdgeClick={handleEdgeClick}
        connectionLineType: reactflow__WEBPACK_IMPORTED_MODULE_2__.ConnectionLineType.SmoothStep, fitView: true, panOnScroll: true, selectionOnDrag: true, panOnDrag: panOnDrag, selectionMode: reactflow__WEBPACK_IMPORTED_MODULE_2__.SelectionMode.Partial, onPaneClick: () => {
            resetAllStatus();
        }, deleteKeyCode: null },
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(reactflow__WEBPACK_IMPORTED_MODULE_2__.Background, null),
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { style: { position: 'absolute', left: 10, top: 10, zIndex: 4 } },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Legend__WEBPACK_IMPORTED_MODULE_7__.Legend, null)),
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { style: { position: 'absolute', right: 10, top: 10, zIndex: 4 } },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("button", { onClick: handleCollapseAllButtonClick, disabled: !canCollapseAll, style: { marginRight: 5 } }, "Collapse all children"),
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("button", { onClick: handleCollapseNonTopButtonClick, disabled: !canCollapseNonTop, style: { marginRight: 5 } }, "Collapse non-top-3 children"),
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("button", { onClick: handleExpandAllButtonClick, disabled: !canExpandAll, style: { marginRight: 5 } }, "Expand all children"),
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("button", { onClick: collapseBackToInitial, style: { marginRight: 5 } }, "Collapse back to initial"),
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("button", { onClick: handleExpandAllNodesButtonClick, style: { marginRight: 5 } }, "Expand all nodes")),
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { style: { position: 'absolute', right: 10, top: 50, zIndex: 4 } },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_DownloadButton__WEBPACK_IMPORTED_MODULE_8__["default"], null)),
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(reactflow__WEBPACK_IMPORTED_MODULE_2__.MiniMap, { nodeColor: nodeColor, nodeStrokeWidth: 3, zoomable: true, pannable: true }),
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(reactflow__WEBPACK_IMPORTED_MODULE_2__.Controls, null)));
};
class KnowledgeGraphWidget extends _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0__.ReactWidget {
    constructor() {
        super();
    }
    render() {
        return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(KnowledgeGraphComponent, null);
    }
}


/***/ }),

/***/ "./lib/Legend.js":
/*!***********************!*\
  !*** ./lib/Legend.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Legend": () => (/* binding */ Legend)
/* harmony export */ });
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @coreui/react */ "webpack/sharing/consume/default/@coreui/react/@coreui/react");
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_coreui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function Legend() {
    const legendItemStyle = {
        display: 'flex',
        marginBottom: '10px'
    };
    const legendNodeStyle = {
        width: '80px',
        height: '20px',
        marginRight: '10px'
    };
    // const dashedLineStyle = {
    //     width:'80px',
    //     textAlign:"center" as "center",
    //     borderBottom: "1px dashed red",
    //     lineHeight:"0.1em",
    //     margin:"10px 0 20px"
    // };
    // const dashedLineTextStyle = {
    //     background: "#E1E1E1",
    // };
    const redStyle = {
        color: "red"
    };
    const legendLongText = {
        flex: "1",
        maxWidth: "200px",
        wordWrap: "break-word"
    };
    const legendCardStyle = {
        display: 'flex',
        justifyContent: 'left',
        width: '400px',
    };
    const [visible, setVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    // return (
    //     <div style={{backgroundColor: '#E1E1E1', opacity: '0.8', padding: '10px', width: "300px"}}>
    //         <div style={{display: 'flex', justifyContent: 'center' }}>
    //             <h4>Legend</h4>
    //         </div>
    //         <ul>
    //             <li>
    //                 <div style={ legendItemStyle }>
    //                     <div style={{...legendNodeStyle, backgroundColor: '#e8ac6e'}}></div>
    //                     Column name
    //                 </div>
    //             </li>
    //             <li>
    //                 <div style={legendItemStyle}>
    //                     <div style={{...legendNodeStyle, backgroundColor: '#9ab75e'}}></div>
    //                     Method
    //                 </div>
    //             </li>
    //             <li>
    //                 <div style={legendItemStyle}>
    //                     <div style={{...legendNodeStyle, backgroundColor: '#a2d2bc'}}></div>
    //                     Insight
    //                 </div>
    //             </li>
    //             <li>
    //                 <div style={legendItemStyle}>
    //                     <div style={legendNodeStyle}>
    //                         <span style={redStyle}>----</span>x/y<span style={redStyle}>----</span>
    //                     </div>
    //                     <span style={legendLongText}>
    //                         Recommendation edge: this column combination appears in y notebooks for x times.
    //                         </span>
    //                 </div>
    //             </li>
    //         </ul>
    //     </div>
    // )
    return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null,
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_0__.CButton, { className: "mb-3", color: "warning", onClick: () => setVisible(!visible), "aria-expanded": visible, "aria-controls": "collapseLegend" }, "Show legend"),
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { style: { minHeight: '120px' } },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_0__.CCollapse, { id: "collapseLegend", horizontal: true, visible: visible },
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_0__.CCard, { style: legendCardStyle },
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_0__.CCardBody, { style: { backgroundColor: '#E1E1E1', opacity: '0.8', padding: '10px', width: "400px" } },
                        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("ul", null,
                            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("li", null,
                                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { style: legendItemStyle },
                                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { style: { ...legendNodeStyle, backgroundColor: '#e8ac6e' } }),
                                    "Column name")),
                            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("li", null,
                                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { style: legendItemStyle },
                                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { style: { ...legendNodeStyle, backgroundColor: '#9ab75e' } }),
                                    "Method")),
                            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("li", null,
                                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { style: legendItemStyle },
                                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { style: { ...legendNodeStyle, backgroundColor: '#a2d2bc' } }),
                                    "Insight")),
                            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("li", null,
                                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { style: legendItemStyle },
                                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { style: { ...legendNodeStyle, backgroundColor: '#E8AC6E', opacity: "0.5" } }),
                                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", { style: legendLongText }, "Recommendation column"))),
                            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("li", null,
                                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { style: legendItemStyle },
                                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { style: legendNodeStyle },
                                        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", { style: redStyle }, "----"),
                                        "x/y",
                                        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", { style: redStyle }, "----")),
                                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", { style: legendLongText }, "Recommendation edge"))))))))));
}


/***/ }),

/***/ "./lib/PlotNode.js":
/*!*************************!*\
  !*** ./lib/PlotNode.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactflow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactflow */ "webpack/sharing/consume/default/reactflow/reactflow");
/* harmony import */ var reactflow__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactflow__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "webpack/sharing/consume/default/axios/axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);



const PlotNode = ({ data }) => {
    const [imageData, setImageData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const clipTextStyle = {
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
    };
    const codeStyle = {
        fontSize: "12px",
        color: "black"
    };
    // const [imageData, setImageData] = useState<Blob|null>(null);
    // useEffect(() => {
    //     const fetchImage = async() => {
    //         try {
    //             const response = await axios.get('http://128.100.10.43:4000/plot');
    //             if (response.status === 200) {
    //                 const imageBlob = new Blob([response.data], {type: response.headers['content-type']});
    //                 setImageData(imageBlob);
    //                 console.log('[PlotNode] Fetched plot image.', response.data);
    //             } else {
    //                 console.error('[PlotNode] Failed to fetch plot image.');
    //             }
    //         } catch(error) {
    //             console.error('[PlotNode] Error when fetching plot image:', error);
    //         }
    //     }
    //     fetchImage();
    // }, []);
    // const imageSource = useMemo(() => {
    //     if (imageData) {
    //         return URL.createObjectURL(imageData);
    //     } else {
    //         return null;
    //     }
    // }, [imageData]);
    const backendUrl = "http://128.100.10.43:8080/proxy/4000";
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        // Fetch the image data from the server
        axios__WEBPACK_IMPORTED_MODULE_2___default().get(backendUrl + `/plot/${data.methodId}`, { responseType: 'blob', withCredentials: true })
            .then((response) => {
            const blob = response.data;
            const reader = new FileReader();
            reader.onloadend = () => {
                const dataUrl = reader.result;
                setImageData(dataUrl);
            };
            reader.readAsDataURL(blob);
        })
            .catch((error) => {
            console.error(`Error when fecthing images of method_id=${data.methodId}:`, error);
        });
    }, []);
    const handleImageError = (event) => {
        event.currentTarget.style.display = 'none';
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactflow__WEBPACK_IMPORTED_MODULE_1__.Handle, { type: "target", position: reactflow__WEBPACK_IMPORTED_MODULE_1__.Position.Top }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { style: clipTextStyle },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", { style: codeStyle }, data.code)),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, imageData && react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { src: imageData, style: { maxWidth: '120px', maxHeight: '100px' }, onError: handleImageError })),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactflow__WEBPACK_IMPORTED_MODULE_1__.Handle, { type: "source", position: reactflow__WEBPACK_IMPORTED_MODULE_1__.Position.Bottom })));
};
//   <div>{ imageSource && <img src={imageSource} style={{maxWidth: '120px', maxHeight: '100px'}}/>}</div>
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(PlotNode));


/***/ }),

/***/ "./lib/RawNode.js":
/*!************************!*\
  !*** ./lib/RawNode.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactflow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactflow */ "webpack/sharing/consume/default/reactflow/reactflow");
/* harmony import */ var reactflow__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactflow__WEBPACK_IMPORTED_MODULE_1__);


const RawNode = ({ data }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactflow__WEBPACK_IMPORTED_MODULE_1__.NodeToolbar, { position: reactflow__WEBPACK_IMPORTED_MODULE_1__.Position.Top },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", null, "Collapse all children"),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", null, "Collapse non-top-3 children"),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", null, "Expand children")),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, data.label),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactflow__WEBPACK_IMPORTED_MODULE_1__.Handle, { type: "target", position: reactflow__WEBPACK_IMPORTED_MODULE_1__.Position.Top }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactflow__WEBPACK_IMPORTED_MODULE_1__.Handle, { type: "source", position: reactflow__WEBPACK_IMPORTED_MODULE_1__.Position.Bottom })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(RawNode));


/***/ }),

/***/ "./lib/ReactFlow.js":
/*!**************************!*\
  !*** ./lib/ReactFlow.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FlowWidget": () => (/* binding */ FlowWidget)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @jupyterlab/apputils */ "webpack/sharing/consume/default/@jupyterlab/apputils");
/* harmony import */ var _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactflow_dist_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactflow/dist/style.css */ "./node_modules/reactflow/dist/style.css");
/* harmony import */ var _style_node_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../style/node.css */ "./style/node.css");
/* harmony import */ var _coreui_coreui_dist_css_coreui_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @coreui/coreui/dist/css/coreui.min.css */ "./node_modules/@coreui/coreui/dist/css/coreui.min.css");
/* harmony import */ var reactflow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactflow */ "webpack/sharing/consume/default/reactflow/reactflow");
/* harmony import */ var reactflow__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(reactflow__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "webpack/sharing/consume/default/axios/axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_promise_tracker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-promise-tracker */ "webpack/sharing/consume/default/react-promise-tracker/react-promise-tracker");
/* harmony import */ var react_promise_tracker__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_promise_tracker__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-loader-spinner */ "webpack/sharing/consume/default/react-loader-spinner/react-loader-spinner");
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_loader_spinner__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _jupyterlab_codemirror__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @jupyterlab/codemirror */ "webpack/sharing/consume/default/@jupyterlab/codemirror");
/* harmony import */ var _jupyterlab_codemirror__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_codemirror__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _TreeUtils__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./TreeUtils */ "./lib/TreeUtils.js");
/* harmony import */ var _InsightNode__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./InsightNode */ "./lib/InsightNode.js");
/* harmony import */ var _PlotNode__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./PlotNode */ "./lib/PlotNode.js");
/* harmony import */ var _Legend__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Legend */ "./lib/Legend.js");
/* harmony import */ var _RawNode__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./RawNode */ "./lib/RawNode.js");
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @coreui/react */ "webpack/sharing/consume/default/@coreui/react/@coreui/react");
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_coreui_react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _coreui_icons_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @coreui/icons-react */ "webpack/sharing/consume/default/@coreui/icons-react/@coreui/icons-react");
/* harmony import */ var _coreui_icons_react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @coreui/icons */ "webpack/sharing/consume/default/@coreui/icons/@coreui/icons");
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_coreui_icons__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _RecommendationCodeSnippets__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./RecommendationCodeSnippets */ "./lib/RecommendationCodeSnippets.js");


 // for converting a react component to a react widget in JL













// import RecommendEdge from "./RecommendEdge";





// import { DownloadButton } from "./DownloadButton";
const panOnDrag = [1, 2];
const HIGHLIGHTED_LINE_CLASS = "jp-InputArea-editor-dependencyline";
// Node colour schema
const nodeColor = (node) => {
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
    const { promiseInProgress } = (0,react_promise_tracker__WEBPACK_IMPORTED_MODULE_7__.usePromiseTracker)();
    return promiseInProgress ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { style: { marginRight: 5 } },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_loader_spinner__WEBPACK_IMPORTED_MODULE_8__.ThreeDots, { height: "80", width: "80", radius: "9", color: "#e8ac6e", ariaLabel: "three-dots-loading", visible: true }))) : (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null));
};
const nodeTypes = {
    insight: _InsightNode__WEBPACK_IMPORTED_MODULE_13__["default"],
    plot: _PlotNode__WEBPACK_IMPORTED_MODULE_14__["default"],
    raw: _RawNode__WEBPACK_IMPORTED_MODULE_15__["default"]
};
const FlowComponent = (props) => {
    const [selectedNode, setSelectedNode] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const [selectedEdge, setSelectedEdge] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const [isSelectedEdgeRemovable, setIsSelectedEdgeRemovable] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [canExpandAll, setCanExpandAll] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [canCollapseAll, setCanCollapseAll] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [canCollapseNonTop, setCanCollapseNonTop] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [isRecommendationDisplayed, setIsRecommendationDisplayed] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const defaultSrcNbAndCode = {
        sourceNotebook: "",
        sourceCode: ["# Loading, please wait for a while..."],
    };
    const [isRecommendNodeSelected, setIsRecommendNodeSelected] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [selectedRecommendedPath, setSelectedRecommendedPath] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    const [srcNbAndCodeListForRec, setSrcNbAndCodeListForRec] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([defaultSrcNbAndCode,]);
    const [allNodes, setAllNodes] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    const [allEdges, setAllEdges] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    const [nodes, setNodes, onNodesChange] = (0,reactflow__WEBPACK_IMPORTED_MODULE_5__.useNodesState)([]);
    const [edges, setEdges, onEdgesChange] = (0,reactflow__WEBPACK_IMPORTED_MODULE_5__.useEdgesState)([]);
    // const edgeUpdateSuccessful = useRef(true)
    const highlightedCellLines = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)([]); // [[cellIndex, lineNumber], ...
    const highlightedCells = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)([]); // [[cellIndex, lineNumber], ...
    const edgeOperations = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)([]);
    const collapseBackToInitial = () => {
        // collapse the tree to initial state
        const { nodes: newNodes, edges: newEdges } = (0,_TreeUtils__WEBPACK_IMPORTED_MODULE_16__.translateTreeUtilCommand)('CollapseBackToInitial', null, nodes, edges, allNodes, allEdges, edgeOperations.current);
        setNodes(newNodes);
        setEdges(newEdges);
    };
    const highlightCellLine = (cellIndex, lineNumber) => {
        // get cell by cellIndex
        // console.log(`[highlightCell] cellIndex: ${cellIndex}, lineNumber=${lineNumber}`);
        if (props.notebookTracker === null || props.notebookTracker.currentWidget === null) {
            console.log('[highlightCell] no notebookTracker or no notebookPanel.');
            return;
        }
        const cellList = props.notebookTracker.currentWidget.content.widgets;
        const cell = cellList[cellIndex];
        if (cell && cell.editor instanceof _jupyterlab_codemirror__WEBPACK_IMPORTED_MODULE_9__.CodeMirrorEditor) {
            const editor = cell.editor.editor;
            editor.addLineClass(lineNumber, "background", HIGHLIGHTED_LINE_CLASS);
            highlightedCellLines.current.push([cellIndex, lineNumber]);
        }
        else {
            console.log('[highlightCell] the editor of activeCell is not a CodeMirrorEditor');
        }
    };
    const highlightCell = (cellIndex) => {
        if (props.notebookTracker === null || props.notebookTracker.currentWidget === null) {
            console.log('[highlightCell] no notebookTracker or no notebookPanel.');
            return;
        }
        const cellList = props.notebookTracker.currentWidget.content.widgets;
        const cell = cellList[cellIndex];
        cell.node.style.backgroundColor = '#f0c633';
        highlightedCells.current.push(cellIndex);
        return true;
    };
    const clearHighlightedCellLines = () => {
        if (props.notebookTracker === null || props.notebookTracker.currentWidget === null) {
            console.log('[clearHighlightedCellLines] no notebookTracker or no notebookPanel.');
            return;
        }
        const cellList = props.notebookTracker.currentWidget.content.widgets;
        for (let [cellIndex, lineNumber] of highlightedCellLines.current) {
            const cell = cellList[cellIndex];
            if (cell && cell.editor instanceof _jupyterlab_codemirror__WEBPACK_IMPORTED_MODULE_9__.CodeMirrorEditor) {
                const editor = cell.editor.editor;
                editor.removeLineClass(lineNumber, "background", HIGHLIGHTED_LINE_CLASS);
            }
            else {
                console.log('[clearHighlightedCellLines] the editor of activeCell is not a CodeMirrorEditor');
            }
        }
        highlightedCellLines.current = [];
    };
    const clearHighlightedCells = () => {
        if (props.notebookTracker === null || props.notebookTracker.currentWidget === null) {
            console.log('[clearHighlightedCellLines] no notebookTracker or no notebookPanel.');
            return;
        }
        const cellList = props.notebookTracker.currentWidget.content.widgets;
        for (let cellIndex of highlightedCells.current) {
            const cell = cellList[cellIndex];
            cell.node.style.backgroundColor = '';
        }
        highlightedCells.current = [];
    };
    const setActiveCell = (cellIndex) => {
        if (props.notebookTracker === null || props.notebookTracker.currentWidget === null) {
            console.log('[highlightCell] no notebookTracker or no notebookPanel.');
            return;
        }
        const notebookPanel = props.notebookTracker.currentWidget;
        notebookPanel.content.activeCellIndex = cellIndex;
        const activeCell = props.notebookTracker.currentWidget.content.activeCell;
        notebookPanel.content.scrollToCell(activeCell);
        console.log(`activeCellIndex after setFocusCell: ${props.notebookTracker.currentWidget.content.activeCellIndex}`);
    };
    function fetchCodeSnippetForSelectedRecommendation(variableCombination) {
        if (variableCombination.length === 0) {
            console.log(`[FetchRecommendationCodeSnippets] empty variableCombination`);
            return [defaultSrcNbAndCode,];
        }
        console.log(`[FetchRecommendationCodeSnippets] start to fetch code snippets of variableCombination=${variableCombination}:`);
        const recommendationCodeSnippetUrl = backendUrl + "/recommendation-code-snippets";
        const request = {
            variableCombination: JSON.stringify(variableCombination),
        };
        (0,react_promise_tracker__WEBPACK_IMPORTED_MODULE_7__.trackPromise)(axios__WEBPACK_IMPORTED_MODULE_6___default().post(recommendationCodeSnippetUrl, request, { withCredentials: true, }).then((response) => {
            console.log(`[FetchRecommendationCodeSnippets] Fetched code snippets of variableCombination=${variableCombination}:`);
            const newSrcNbAndCodeList = response.data.srcNotebooksAndCode;
            if (newSrcNbAndCodeList.length === 0) {
                newSrcNbAndCodeList.push(defaultSrcNbAndCode);
            }
            setSrcNbAndCodeListForRec(newSrcNbAndCodeList);
        }).catch((error) => {
            console.error(`Error when fecthing code snippets of variableCombination=${variableCombination}:`, error);
        }));
    }
    const handleNodeClick = (event, node) => {
        if (allNodes === null || allEdges === null) {
            console.log('[handleNodeClick] allNodes or allEdges is null');
            return;
        }
        console.log(`[handleNodeClick] node clicked, id=${node.id}`);
        setSelectedNode(node);
        // change node border width
        const newNodes = nodes.map((prevNode) => {
            if (prevNode.id === node.id) {
                prevNode.style = { ...prevNode.style, borderWidth: '2px' };
            }
            else {
                prevNode.style = { ...prevNode.style, borderWidth: '1px' };
            }
            return prevNode;
        });
        setNodes(newNodes);
        const highlightNodeTypes = ["insight", "plot"];
        if (node.data.nodeType === 'raw') {
            // update collapse/expand state
            const selectedNodeHasChildren = nodes.some((n) => n.data.parent === node.id);
            setCanExpandAll(!selectedNodeHasChildren);
            setCanCollapseAll(selectedNodeHasChildren);
            const etcNodeInChildren = allNodes.find((n) => n.data.parent === node.id && n.data.nodeType === 'etc');
            const etcNodeAlreadyExists = nodes.find((n) => n.data.parent === node.id && n.data.nodeType === 'etc');
            const selectedNodeCanCollapseNonTop = (etcNodeAlreadyExists === undefined) && (etcNodeInChildren !== undefined) && !(nodes.some((n) => { n.data.parent === etcNodeInChildren.id; }));
            setCanCollapseNonTop(selectedNodeCanCollapseNonTop);
            if (node.data.nodeType === 'etc') {
                const { nodes: newNodes, edges: newEdges } = (0,_TreeUtils__WEBPACK_IMPORTED_MODULE_16__.translateTreeUtilCommand)('ExpandEtcNode', node, nodes, edges, allNodes, allEdges, edgeOperations.current);
                setNodes(newNodes);
                setEdges(newEdges);
                return;
            }
        }
        else if (highlightNodeTypes.includes(node.data.nodeType)) {
            // disable buttons
            setCanExpandAll(false);
            setCanCollapseAll(false);
            clearHighlightedCellLines();
            clearHighlightedCells();
            if (props.notebookTracker && props.notebookTracker.currentWidget) {
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
        else if (node.data.nodeType === 'recommended') {
            const variableCombination = (0,_TreeUtils__WEBPACK_IMPORTED_MODULE_16__.getPathVariableCombination)(node, allNodes);
            console.log(`[handleNodeClick] Select variableCombination=${variableCombination}, start to fetch code snippets.`);
            fetchCodeSnippetForSelectedRecommendation(variableCombination);
            setIsRecommendNodeSelected(true);
            console.log(`[handleNodeClick] subset of selected recommend node=${variableCombination}`);
            setSelectedRecommendedPath(variableCombination);
        }
    };
    const handleEdgeClick = (event, edge) => {
        setSelectedEdge(edge);
        setIsSelectedEdgeRemovable((0,_TreeUtils__WEBPACK_IMPORTED_MODULE_16__.isEdgeRemoveable)(edge, nodes, edges));
        console.log(`[handleEdgeClick] selectedEdge: ${JSON.stringify(edge)}`);
    };
    const handleExpandAllChildrenButtonClick = () => {
        if (selectedNode && canExpandAll) {
            const { nodes: newNodes, edges: newEdges } = (0,_TreeUtils__WEBPACK_IMPORTED_MODULE_16__.translateTreeUtilCommand)('ExpandSubtree', selectedNode, nodes, edges, allNodes, allEdges, edgeOperations.current);
            setNodes(newNodes);
            setEdges(newEdges);
            setCanExpandAll(false);
        }
        else {
            console.log(`Cannot do expandAll to this node.`);
        }
    };
    const handleCollapseAllButtonClick = () => {
        if (selectedNode && canCollapseAll) {
            const { nodes: newNodes, edges: newEdges } = (0,_TreeUtils__WEBPACK_IMPORTED_MODULE_16__.translateTreeUtilCommand)('CollapseSubtree', selectedNode, nodes, edges, allNodes, allEdges, edgeOperations.current);
            setNodes(newNodes);
            setEdges(newEdges);
            setCanCollapseAll(false);
        }
        else {
            console.log('Cannot do collapseAll to this node!');
        }
    };
    const handleCollapseNonTopButtonClick = () => {
        if (selectedNode && canCollapseNonTop) {
            const { nodes: newNodes, edges: newEdges } = (0,_TreeUtils__WEBPACK_IMPORTED_MODULE_16__.translateTreeUtilCommand)('CollapseNonTop', selectedNode, nodes, edges, allNodes, allEdges, edgeOperations.current);
            setNodes(newNodes);
            setEdges(newEdges);
            setCanCollapseNonTop(false);
        }
        else {
            console.log('Cannot do collapseNonTop to this node!');
        }
    };
    const handleExpandAllNodesButtonClick = () => {
        const { nodes: newNodes, edges: newEdges } = (0,_TreeUtils__WEBPACK_IMPORTED_MODULE_16__.translateTreeUtilCommand)('ExpandAllNodes', null, nodes, edges, allNodes, allEdges, edgeOperations.current);
        setNodes(newNodes);
        setEdges(newEdges);
    };
    const resetNodeStyles = () => {
        // const resetNodes = nodes.map((prevNode)=> {prevNode.style = {...prevNode.style, background: nodeColor(prevNode)}; return prevNode;});
        const resetNodes = nodes.map((prevNode) => { prevNode.style = { ...prevNode.style, borderWidth: '1px' }; return prevNode; });
        setNodes(resetNodes);
        clearHighlightedCellLines();
        clearHighlightedCells();
    };
    const resetAllStatus = () => {
        resetNodeStyles();
        setSelectedNode(null);
        setSelectedEdge(null);
        setIsRecommendNodeSelected(false);
        setSelectedRecommendedPath([]);
        setSrcNbAndCodeListForRec([defaultSrcNbAndCode,]);
        edgeOperations.current = [];
    };
    // const backendUrl = "http://127.0.0.1:4000";
    // send request through jupyter_server_proxy to prevent Same-Origin-P error
    const backendUrl = "http://128.100.10.43:8080/proxy/4000";
    const refreshSMITree = () => {
        console.log('[refreshSMITree] refreshSMITree.');
        disableRecommendations();
        resetAllStatus();
        if (!props.notebookPanel) {
            console.log('[refreshSMITree] no notebook panel to be passed!');
            return;
        }
        const request = {
            notebook: JSON.stringify(props.notebookPanel.model.toJSON()),
        };
        (0,react_promise_tracker__WEBPACK_IMPORTED_MODULE_7__.trackPromise)(axios__WEBPACK_IMPORTED_MODULE_6___default().post(backendUrl + '/tracking-tree', request, { withCredentials: true, }).then((response) => {
            console.log(`[refreshSMITree] get response.`);
            const refreshedNodes = response.data.nodes;
            const refreshedEdges = response.data.edges;
            // console.log(`[refreshSMITree] refreshedNodes: ${JSON.stringify(refreshedNodes)}`);
            setAllNodes(refreshedNodes);
            setAllEdges(refreshedEdges);
            // const {initialNodes: initialRefreshedNodes, initialEdges: initialRefreshedEdges} = getInitialElements(refreshedNodes, refreshedEdges);
            // const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(initialRefreshedNodes, initialRefreshedEdges);
            const { nodes: layoutedNodes, edges: layoutedEdges } = (0,_TreeUtils__WEBPACK_IMPORTED_MODULE_16__.translateTreeUtilCommand)('GetInitial', null, null, null, refreshedNodes, refreshedEdges, edgeOperations.current);
            setNodes(layoutedNodes);
            setEdges(layoutedEdges);
            // console.log(`[refreshSMITree] successfully refreshed nodes and edges.`);
        }).catch((error) => {
            console.log(`[refreshSMITree] error: ${error} when sending post request to ${backendUrl}/tracking-tree`);
        }));
    };
    const getRecommendations = () => {
        if (allNodes === null || allEdges === null) {
            console.log('[getRecommendations] allNodes or allEdges is null');
            return;
        }
        disableRecommendations();
        resetAllStatus();
        const request = {
            nodes: JSON.stringify(nodes),
            edges: JSON.stringify(edges),
        }; // send current Nodes and Edges to backend so that recommendations will not be generated for hidden nodes
        (0,react_promise_tracker__WEBPACK_IMPORTED_MODULE_7__.trackPromise)(axios__WEBPACK_IMPORTED_MODULE_6___default().post(backendUrl + '/recommendations', request, { withCredentials: true, }).then((response) => {
            // console.log(`[getRecommendations] get response: ${JSON.stringify(response.data)}`);
            const recommendedNodes = response.data.recommendedNodes;
            const recommendedEdges = response.data.recommendedEdges;
            const newAllNodes = allNodes.concat(recommendedNodes);
            const newAllEdges = [...allEdges, ...recommendedEdges];
            setAllNodes(newAllNodes);
            setAllEdges(newAllEdges);
            const newNodes = nodes.concat(recommendedNodes);
            const newEdges = edges.concat(recommendedEdges);
            const { nodes: layoutedNodes, edges: layoutedEdges } = (0,_TreeUtils__WEBPACK_IMPORTED_MODULE_16__.getLayoutedElements)(newNodes, newEdges);
            setNodes(layoutedNodes);
            setEdges(layoutedEdges);
            setIsRecommendationDisplayed(true);
        }).catch((error) => {
            console.log(`[getRecommendations] error: ${error}`);
        }));
    };
    const disableRecommendations = () => {
        if (allNodes === null || allEdges === null) {
            console.log('[disableRecommendations] allNodes or allEdges is null');
            return;
        }
        if ((selectedNode === null || selectedNode === void 0 ? void 0 : selectedNode.data.nodeType) === 'recommended') {
            resetNodeStyles();
            setSelectedNode(null);
        }
        // remove the recommended nodes and edges
        const newAllNodes = allNodes.filter((n) => n.data.nodeType !== 'recommended');
        const newAllEdges = allEdges.filter((e) => (!e.source.startsWith('rec') && !e.target.startsWith('rec')));
        setAllNodes(newAllNodes);
        setAllEdges(newAllEdges);
        const newNodes = nodes.filter((n) => n.data.nodeType !== 'recommended');
        const newEdges = edges.filter((e) => (!e.source.startsWith('rec') && !e.target.startsWith('rec')));
        const { nodes: layoutedNodes, edges: layoutedEdges } = (0,_TreeUtils__WEBPACK_IMPORTED_MODULE_16__.getLayoutedElements)(newNodes, newEdges);
        setNodes(layoutedNodes);
        setEdges(layoutedEdges);
        setIsRecommendationDisplayed(false);
    };
    const removeSelectedEdge = () => {
        if (nodes === null || edges === null) {
            console.log('[removeSelectedEdge] nodes or edges is null');
            return;
        }
        if (selectedEdge && isSelectedEdgeRemovable) {
            const { nodes: layoutedNodes, edges: layoutedEdges } = (0,_TreeUtils__WEBPACK_IMPORTED_MODULE_16__.removeEdge)(selectedEdge, nodes, edges);
            if (layoutedNodes === null || layoutedEdges === null) {
                console.log('[removeSelectedEdge] layoutedNodes or layoutedEdges is null');
                return;
            }
            setNodes(layoutedNodes);
            setEdges(layoutedEdges);
            console.log(`[removeSelectedEdge] successfully removed edge: ${JSON.stringify(selectedEdge)}`);
            edgeOperations.current.push({ operation: 'remove', edge: selectedEdge });
        }
    };
    const onConnect = (connection) => {
        console.log(`[onConnect] newEdge: ${JSON.stringify(connection)}`);
        console.log(`[onConnect] nodes: ${JSON.stringify(nodes)}`);
        if (!(0,_TreeUtils__WEBPACK_IMPORTED_MODULE_16__.isEdgeConnectable)(connection, nodes)) {
            console.log(`[onConnect] edge is not connectable.`);
            return;
        }
        const newEdge = {
            'id': `${connection.source}-${connection.target}`,
            'source': connection.source,
            'target': connection.target
        };
        setEdges((els) => (0,reactflow__WEBPACK_IMPORTED_MODULE_5__.addEdge)(newEdge, els));
        edgeOperations.current.push({ operation: 'add', edge: newEdge });
    };
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
        flexDirection: "column",
    };
    const buttonGroupWithBorderSytle = {
        border: "2px dashed black",
        padding: "5px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    };
    const recommendationButtonStyle = {
        height: "35px",
        minWidth: "220px",
    };
    const iconStyle = {
        marginLeft: "5px",
        marginRight: "5px",
        cursor: "pointer"
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((reactflow__WEBPACK_IMPORTED_MODULE_5___default()), { nodes: nodes, edges: edges, nodeTypes: nodeTypes, 
        // edgeTypes={edgeTypes}
        onNodesChange: onNodesChange, onEdgesChange: onEdgesChange, onConnect: onConnect, onNodeClick: handleNodeClick, onEdgeClick: handleEdgeClick, connectionLineType: reactflow__WEBPACK_IMPORTED_MODULE_5__.ConnectionLineType.SmoothStep, fitView: true, panOnScroll: true, selectionOnDrag: true, panOnDrag: panOnDrag, selectionMode: reactflow__WEBPACK_IMPORTED_MODULE_5__.SelectionMode.Partial, onPaneClick: () => {
            resetAllStatus();
        }, deleteKeyCode: null },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactflow__WEBPACK_IMPORTED_MODULE_5__.Background, null),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactflow__WEBPACK_IMPORTED_MODULE_5__.Panel, { position: "top-center", style: { width: "100%" } },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { style: pageTopContainerStyle },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { style: { flex: "1", maxWidth: "150px" } },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Legend__WEBPACK_IMPORTED_MODULE_17__.Legend, null)),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { style: { flex: "1", maxWidth: "50px" } },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_coreui_icons_react__WEBPACK_IMPORTED_MODULE_11___default()), { icon: _coreui_icons__WEBPACK_IMPORTED_MODULE_12__.cilReload, style: iconStyle, size: "xxl", onClick: refreshSMITree, title: "Generate/refresh the tree" })),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { style: { flex: "1", maxWidth: "100px" } },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(LoadIndicator, null)),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { style: buttonContainerStyle },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { style: { ...buttonGroupWithBorderSytle } },
                        (!isRecommendationDisplayed) && react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_10__.CButton, { color: "warning", style: recommendationButtonStyle, onClick: getRecommendations }, "Show recommendations"),
                        (isRecommendationDisplayed) && react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_10__.CButton, { color: "warning", style: recommendationButtonStyle, onClick: disableRecommendations, disabled: !isRecommendationDisplayed }, "Hide recommendations")),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Get help in data explartion")),
                isRecommendNodeSelected &&
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { style: { flex: "1" } },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_RecommendationCodeSnippets__WEBPACK_IMPORTED_MODULE_18__.RecommendationCodeSnippets, { variableCombination: selectedRecommendedPath, srcNbAndCodeList: srcNbAndCodeListForRec })),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { style: buttonContainerStyle },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { style: { ...buttonGroupWithBorderSytle } },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_10__.CDropdown, { style: dropdownButtonStyle },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_10__.CDropdownToggle, { color: "warning" }, "Collapse"),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_10__.CDropdownMenu, null,
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_10__.CDropdownItem, { onClick: handleCollapseNonTopButtonClick }, "Collapse non-top-3 children of the selected node"),
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_10__.CDropdownItem, { onClick: handleCollapseAllButtonClick }, "Collapse all children of the selected node"),
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_10__.CDropdownItem, { onClick: collapseBackToInitial }, "Collapse the whole tree back to initial"))),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_10__.CDropdown, { style: { ...dropdownButtonStyle, marginLeft: "10px" } },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_10__.CDropdownToggle, { color: "warning" }, "Expand"),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_10__.CDropdownMenu, null,
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_10__.CDropdownItem, { onClick: handleExpandAllChildrenButtonClick }, "Expand all children of the selected node"),
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_10__.CDropdownItem, { onClick: handleExpandAllNodesButtonClick }, "Expand all nodes in the tree")))),
                    (selectedEdge && isSelectedEdgeRemovable) &&
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_10__.CButton, { color: "warning", style: dropdownButtonStyle, onClick: removeSelectedEdge }, " Remove the selected edge"),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Collapse/expand nodes")))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactflow__WEBPACK_IMPORTED_MODULE_5__.MiniMap, { nodeColor: nodeColor, nodeStrokeWidth: 3, zoomable: true, pannable: true }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactflow__WEBPACK_IMPORTED_MODULE_5__.Controls, null)));
};
/**
 * A Lumino Widget that wraps a FlowComponent.
 */
class FlowWidget extends _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_1__.ReactWidget {
    constructor(panel, tracker) {
        super();
        /**
         * Constructs a new FlowWidget.
         */
        this._notebookPanel = null;
        this._notebookTracker = null;
        console.log('FlowWidget created');
        console.log('notebook panel assigned to FlowWidget:');
        console.log(this._notebookPanel);
        // this._notebookPanel = panel ? panel : null;
        this._notebookTracker = tracker ? tracker : null;
        this._notebookPanel = tracker ? tracker.currentWidget : null;
    }
    set notebookPanel(notebook) {
        this._notebookPanel = notebook;
    }
    set notebookTracker(tracker) {
        this._notebookTracker = tracker;
    }
    render() {
        console.log(`notebookTracker passed to FlowComponent: ${this._notebookTracker}`);
        console.log(`notebookPanel passed to FlowComponent: ${this._notebookPanel}`);
        return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(FlowComponent, { notebookPanel: this._notebookPanel, notebookTracker: this._notebookTracker });
    }
}


/***/ }),

/***/ "./lib/RecommendEdge.js":
/*!******************************!*\
  !*** ./lib/RecommendEdge.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RecommendEdge)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactflow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactflow */ "webpack/sharing/consume/default/reactflow/reactflow");
/* harmony import */ var reactflow__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactflow__WEBPACK_IMPORTED_MODULE_1__);

// import { useState } from 'react';

function RecommendEdge({ id, sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition, style = {}, label, data, markerEnd, }) {
    const [edgePath, labelX, labelY] = (0,reactflow__WEBPACK_IMPORTED_MODULE_1__.getBezierPath)({
        sourceX,
        sourceY,
        sourcePosition,
        targetX,
        targetY,
        targetPosition,
    });
    // const [isHovered, setIsHovered] = useState(false);
    // const handleMouseEnter = () => { 
    // setIsHovered(true);
    // console.log('sourceNotebooks=', data.sourceNotebooks);
    // }
    // const handleMouseLeave = () => { setIsHovered(false); }
    // const notebooks = [];
    // for (let i = 0; i < data.sourceNotebooks.length; i++) {
    //     notebooks.push(<li key={i}>{data.sourceNotebooks[i]}</li>);
    // }
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactflow__WEBPACK_IMPORTED_MODULE_1__.BaseEdge, { path: edgePath, markerEnd: markerEnd, style: style }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactflow__WEBPACK_IMPORTED_MODULE_1__.EdgeLabelRenderer, null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { style: {
                    position: 'absolute',
                    transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
                    // everything inside EdgeLabelRenderer has no pointer events by default
                    // if you have an interactive element, set pointer-events: all
                    pointerEvents: 'all',
                } },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, label)))));
}


/***/ }),

/***/ "./lib/RecommendationCodeSnippets.js":
/*!*******************************************!*\
  !*** ./lib/RecommendationCodeSnippets.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecommendationCodeSnippets": () => (/* binding */ RecommendationCodeSnippets)
/* harmony export */ });
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @coreui/react */ "webpack/sharing/consume/default/@coreui/react/@coreui/react");
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_coreui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var highlight_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highlight.js */ "webpack/sharing/consume/default/highlight.js/highlight.js");
/* harmony import */ var highlight_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highlight_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var highlight_js_styles_default_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highlight.js/styles/default.css */ "./node_modules/highlight.js/styles/default.css");




const CodeHighlight = ({ language, code }) => {
    const highlightedCode = react__WEBPACK_IMPORTED_MODULE_1___default().useMemo(() => {
        return highlight_js__WEBPACK_IMPORTED_MODULE_2___default().highlight(code, { language }).value;
    }, [code, language]);
    return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("pre", null,
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("code", { dangerouslySetInnerHTML: { __html: highlightedCode } })));
};
function RecommendationCodeSnippets({ variableCombination, srcNbAndCodeList }) {
    const [visible, setVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [currentPage, setCurrentPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const gotoPreviousPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
    };
    const gotoNextPage = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, srcNbAndCodeList.length - 1));
    };
    const getSourceCode = () => {
        if (srcNbAndCodeList[currentPage] && srcNbAndCodeList[currentPage].sourceCode) {
            return srcNbAndCodeList[currentPage].sourceCode.join("\n");
        }
        else {
            return "";
        }
    };
    const getSourceNotebook = () => {
        if (srcNbAndCodeList[currentPage] && srcNbAndCodeList[currentPage].sourceNotebook) {
            return srcNbAndCodeList[currentPage].sourceNotebook;
        }
        else {
            return "";
        }
    };
    const showButtonStyle = {
        height: "40px",
        width: "450px",
    };
    const cardBodyStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E1E1E1',
        width: "500px"
    };
    const codeDivStyle = {
        flex: "1",
        height: "300px",
        overflowY: "scroll",
        width: "100%",
        minHeight: "100px",
        maxHeight: "450px",
    };
    const buttonDivStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        width: "100%",
        margin: "10px",
        marginTop: "20px",
    };
    const stepButtonStyle = {
        height: "30px",
        width: "30px",
        backgroundColor: "white",
        color: "black",
        border: "3px solid #959595",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    };
    const pageNumberDivStyle = {
        display: 'flex',
        justifyContent: 'center',
    };
    const variableCombinationDivStyle = {
        display: 'flex',
        justifyContent: 'center',
        maxWidth: "480",
        padding: "10px",
    };
    return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null,
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_0__.CButton, { className: "mb-3", color: "warning", onClick: () => setVisible(!visible), "aria-expanded": visible, "aria-controls": "collapseCodeSnippets", style: showButtonStyle }, "Show code snippets of the selected recommendation"),
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null,
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_0__.CCollapse, { id: "collapseCodeSnippets", horizontal: true, visible: visible },
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_0__.CCard, null,
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_0__.CCardBody, { style: cardBodyStyle },
                        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { style: codeDivStyle },
                            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(CodeHighlight, { language: "python", code: getSourceCode() })),
                        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { style: buttonDivStyle },
                            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_0__.CButton, { style: stepButtonStyle, onClick: gotoPreviousPage }, "\u00AB"),
                            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", null,
                                "Source Notebook: ",
                                getSourceNotebook(),
                                ".ipynb"),
                            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_0__.CButton, { style: stepButtonStyle, onClick: gotoNextPage }, "\u00BB")),
                        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { style: variableCombinationDivStyle },
                            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", { style: { maxWidth: "100%" } },
                                "Code snipptes for column combination: ",
                                JSON.stringify(variableCombination))),
                        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { style: pageNumberDivStyle },
                            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", null,
                                currentPage + 1,
                                "/",
                                srcNbAndCodeList.length))))))));
}


/***/ }),

/***/ "./lib/TreeUtils.js":
/*!**************************!*\
  !*** ./lib/TreeUtils.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "applyEdgeOperations": () => (/* binding */ applyEdgeOperations),
/* harmony export */   "getInitialElements": () => (/* binding */ getInitialElements),
/* harmony export */   "getLayoutedElements": () => (/* binding */ getLayoutedElements),
/* harmony export */   "getPathVariableCombination": () => (/* binding */ getPathVariableCombination),
/* harmony export */   "isEdgeConnectable": () => (/* binding */ isEdgeConnectable),
/* harmony export */   "isEdgeRemoveable": () => (/* binding */ isEdgeRemoveable),
/* harmony export */   "isEdgeUpdatable": () => (/* binding */ isEdgeUpdatable),
/* harmony export */   "removeEdge": () => (/* binding */ removeEdge),
/* harmony export */   "translateTreeUtilCommand": () => (/* binding */ translateTreeUtilCommand)
/* harmony export */ });
/* harmony import */ var dagre__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dagre */ "webpack/sharing/consume/default/dagre/dagre");
/* harmony import */ var dagre__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dagre__WEBPACK_IMPORTED_MODULE_0__);

const getLayoutedElements = (nodes, edges, direction = 'TB') => {
    const dagreGraph = new (dagre__WEBPACK_IMPORTED_MODULE_0___default().graphlib.Graph)();
    const nodeWidth = 60;
    const nodeHeight = 20;
    const isHorizontal = direction === 'LR';
    dagreGraph.setDefaultEdgeLabel(() => ({}));
    dagreGraph.setGraph({ rankdir: direction, nodesep: 80 });
    // set the postiions to 0
    nodes.forEach((node) => {
        return { ...node, position: { x: 0, y: 0 } };
    });
    // edge cleanup to avoid orphan edges
    const edgesAfterCleanUp = edges.filter((e) => nodes.some((n) => n.id === e.source) && nodes.some((n) => n.id === e.target));
    // Add nodes and edges into dagreGraph
    nodes.forEach((node) => {
        dagreGraph.setNode(node.id, { width: nodeWidth, height: nodeHeight });
    });
    edgesAfterCleanUp.forEach((edge) => {
        dagreGraph.setEdge(edge.source, edge.target);
    });
    dagre__WEBPACK_IMPORTED_MODULE_0___default().layout(dagreGraph);
    nodes.forEach((node) => {
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
function getNodeById(nodeId, allNodes) {
    const node = allNodes.find((n) => n.id === nodeId);
    if (node === undefined) {
        throw new Error(`[getNodeById] Node with id=${nodeId} is not found`);
    }
    return node;
}
function getSubtreeElements(node, curNodes, allEdges, skipSubtreeOfEtc = true, includeRootEdges = true) {
    // Find all the nodes that belongs to the subtree whose root is node
    // subtree does NOT include the node itself
    const subtreeNodes = [];
    // const subtreeEdges:Edge[] = [];
    const queue = [node];
    while (queue.length > 0) {
        const currentNode = queue.shift();
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
function getInitialElements(allNodes, allEdges) {
    // Find the root node
    const rootNode = allNodes.find((n) => n.data.label === 'root');
    if (rootNode === undefined) {
        throw new Error('No root node found');
    }
    // Find all the nodes that belongs to the subtree whose root is rootNode
    const { subtreeNodes: initialNodes, subtreeEdges: initialEdges } = getSubtreeElements(rootNode, allNodes, allEdges);
    initialNodes.push(rootNode);
    return { nodes: initialNodes, edges: initialEdges };
}
function expandAllNodes(allNodes, allEdges) {
    const newNodes = allNodes.filter((n) => n.data.nodeType !== 'etc');
    let edgesToRemove = allEdges.filter((e) => (e.target.startsWith('etc')));
    // change the edge whose source is etc to its parent
    const etcNodes = allNodes.filter((n) => n.data.nodeType === 'etc');
    const newEdges = allEdges.map((e) => {
        if (etcNodes.some((n) => n.id === e.source)) {
            e.source = etcNodes.find((n) => n.id === e.source).data.parent;
        }
        return e;
    });
    const newEdgesAfterCleanUp = newEdges.filter((e) => !edgesToRemove.some((et) => et.id === e.id));
    const { nodes: layoutedNewNodes, edges: layoutedNewEdges } = getLayoutedElements(newNodes, newEdgesAfterCleanUp);
    return { nodes: layoutedNewNodes, edges: layoutedNewEdges };
}
function expandEtcNode(selectedNode, curNodes, curEdges, allNodes, allEdges) {
    if (selectedNode === null || curNodes === null || curEdges === null || selectedNode.data.nodeType !== 'etc') {
        console.log(`[TreeUtils] Invalid input: selectedNode=${selectedNode}, nodeType=${selectedNode === null || selectedNode === void 0 ? void 0 : selectedNode.data.nodeType}}`);
        return { nodes: curNodes, edges: curEdges };
    }
    const { subtreeNodes: subtreeNodes, subtreeEdges: subtreeEdges } = getSubtreeElements(selectedNode, allNodes, allEdges, true, false);
    const newNodes = curNodes.concat(subtreeNodes).filter((n) => n.id !== selectedNode.id);
    // const newEdges = curEdges.concat(subtreeEdges).map((e) => {
    //     if (e.source === selectedNode.id) {
    //         e.source = selectedNode.data.parent;
    //     }
    //     return e;
    // }).filter((e) => e.target !== selectedNode.id);
    const directChildrenOfEtc = allNodes.filter((n) => n.data.parent === selectedNode.id);
    const parentNodeId = selectedNode.data.parent;
    const parentDirectChildrenEdges = directChildrenOfEtc.map((child) => {
        return {
            id: `${parentNodeId}-${child.id}`,
            source: parentNodeId,
            target: child.id,
        };
    });
    const parentEtcEdge = curEdges.find((e) => e.source === parentNodeId && e.target === selectedNode.id);
    // newEdges = curEdges - parentEtcEdge + subtreeEdges + parentDirectChildrenEdges
    const newEdges = curEdges.filter((e) => e.id !== parentEtcEdge.id).concat(subtreeEdges).concat(parentDirectChildrenEdges);
    console.log(`[expandEtcNode] After expandEtcNode:\nedges=${JSON.stringify(newEdges)}\nallEdges=${JSON.stringify(allEdges)}`);
    return { nodes: newNodes, edges: newEdges };
}
function expandSubtree(selectedNode, curNodes, curEdges, allNodes, allEdges) {
    if (selectedNode === null || curNodes === null || curEdges === null) {
        console.log(`[TreeUtils] Invalid input: selectedNode=${selectedNode}`);
        return { nodes: curNodes, edges: curEdges };
    }
    if (selectedNode.data.nodeType === 'etc') {
        return expandEtcNode(selectedNode, curNodes, curEdges, allNodes, allEdges);
    }
    const { subtreeNodes: subtreeNodes, subtreeEdges: subtreeEdges } = getSubtreeElements(selectedNode, allNodes, allEdges);
    const newNodes = curNodes.concat(subtreeNodes);
    const newEdges = curEdges.concat(subtreeEdges);
    const newNodesAfterLabelChange = newNodes.map((n) => {
        if (n.id === selectedNode.id && n.data.label.endsWith(" (+)")) {
            const curLabel = n.data.label;
            n.data = { ...n.data, label: curLabel.substring(0, curLabel.length - 4) };
        }
        ;
        return n;
    });
    return { nodes: newNodesAfterLabelChange, edges: newEdges };
}
function collapseBackEtcNode(parentNode, curNodes, curEdges, allNodes, allEdges) {
    if (parentNode === null || curNodes === null || curEdges === null) {
        console.log(`[TreeUtils] Invalid input: selectedNode=${parentNode}`);
        return { nodes: curNodes, edges: curEdges };
    }
    const etcNode = allNodes.find((n) => n.data.parent === parentNode.id && n.data.nodeType === 'etc');
    if (!etcNode) {
        console.log('No etc node found in children so cannot do collapseNonTop');
        return { nodes: curNodes, edges: curEdges };
    }
    const { subtreeNodes: etcSubtreeNodes, subtreeEdges: etcSubtreeEdges } = getSubtreeElements(etcNode, allNodes, allEdges, false, false);
    const newNodes = curNodes.filter((n) => !etcSubtreeNodes.some((sn) => sn.id === n.id)).concat(etcNode); // remove all the nodes in subtree
    const parentChildrenEdges = curEdges.filter((e) => e.source === parentNode.id && getNodeById(e.target, allNodes).data.parent === etcNode.id);
    const etcEdge = allEdges.filter((e) => e.target === etcNode.id && e.source === parentNode.id);
    // newEdges = curEdges - etcSubtreeEdges (without root edges) - parentChildrenEdges + etcNodeEdge
    const newEdges = curEdges.filter((e) => !etcSubtreeEdges.some((se) => se.id === e.id)).filter((e) => !parentChildrenEdges.some((pce) => pce.id === e.id)).concat(etcEdge);
    // add the etcNode to newNodes
    console.log(`[expandEtcNode] After expandEtcNode:\nedges=${JSON.stringify(newEdges)}\nallEdges=${JSON.stringify(allEdges)}`);
    return { nodes: newNodes, edges: newEdges };
}
function collapseSubtree(selectedNode, curNodes, curEdges, allNodes, allEdges) {
    if (selectedNode === null || curNodes === null || curEdges === null) {
        console.log(`[TreeUtils] Invalid input: selectedNode=${selectedNode}`);
        return { nodes: curNodes, edges: curEdges };
    }
    const { nodes: nodesAfterCollapseEtcBack, edges: edgesAfterCollapseEtcBack } = collapseBackEtcNode(selectedNode, curNodes, curEdges, allNodes, allEdges);
    const { subtreeNodes: subtreeNodes, subtreeEdges: subtreeEdges } = getSubtreeElements(selectedNode, allNodes, allEdges, false);
    const newNodes = nodesAfterCollapseEtcBack.filter((n) => !subtreeNodes.some((sn) => sn.id === n.id)); // remove all the nodes in subtree
    console.log(`[collapseSubtree] prevNodes length=${curNodes.length}, newNodes length=${newNodes.length}`);
    const labelWhenCollapse = selectedNode.data.rawData + ' (+)';
    const newNodesAfterLabelChange = newNodes.map((n) => {
        if (n.id === selectedNode.id) {
            n.data = { ...n.data, label: labelWhenCollapse };
        }
        ;
        return n;
    });
    const newEdges = edgesAfterCollapseEtcBack.filter((e) => !subtreeEdges.some((se) => se.id === e.id)); // remove all the edges in subtree
    const newEdgesAfterCleanUp = newEdges.filter((e) => !subtreeNodes.some((sn) => sn.id === e.source)); // remove all edges that has source in subtree
    return { nodes: newNodesAfterLabelChange, edges: newEdgesAfterCleanUp };
}
function getNewNodesAndEdges(command, selectedNode, curNodes, curEdges, allNodes, allEdges) {
    console.log(`[getNewNodesAndEdges] command=${command}, selectedNode=${selectedNode === null || selectedNode === void 0 ? void 0 : selectedNode.data.label}`);
    if (allNodes === null || allEdges === null) {
        return { nodes: curNodes, edges: curEdges };
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
            return { nodes: curNodes, edges: curEdges };
        }
    }
}
function applyEdgeOperations(edgeOperations, curNodes, curEdges) {
    if (curEdges === null || curNodes === null) {
        console.log('[applyEdgeOperations] curEdges or curNodes is null');
        return curEdges;
    }
    for (let edgeOp of edgeOperations) {
        const sourceNode = curNodes.find((n) => n.id === edgeOp.edge.source);
        const targetNode = curNodes.find((n) => n.id === edgeOp.edge.target);
        if (sourceNode === undefined || targetNode === undefined) {
            continue;
        }
        if (edgeOp.operation === 'add') {
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
function translateTreeUtilCommand(command, selectedNode, curNodes, curEdges, allNodes, allEdges, edgeOperations) {
    const { nodes: newNodes, edges: newEdges } = getNewNodesAndEdges(command, selectedNode, curNodes, curEdges, allNodes, allEdges);
    const updatedEdges = applyEdgeOperations(edgeOperations, newNodes, newEdges);
    const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(newNodes, updatedEdges);
    return { nodes: layoutedNodes, edges: layoutedEdges };
}
function getTargetNode(selectedEdge, curNodes) {
    if (curNodes === null || selectedEdge === null || selectedEdge === undefined) {
        return null;
    }
    // the target node must have at least 1 edge connected to it
    const targetNode = curNodes.find((n) => n.id === selectedEdge.target);
    return targetNode;
}
function isEdgeRemoveable(selectedEdge, curNodes, curEdges) {
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
    const edgesConnectedToTarget = curEdges.filter((e) => e.target === targetNode.id);
    return edgesConnectedToTarget.length > 1;
}
function isEdgeConnectable(connection, curNodes) {
    console.log(`[isEdgeConnectable] newEdge.target_id=${connection.target}`);
    if (curNodes === null || !connection) {
        console.log('[removeEdge] curEdges or curNodes or selectedEdge is null');
        return false;
    }
    // print the ids of curNodes as a array
    console.log(`[isEdgeConnectable] curNodes=${JSON.stringify(curNodes)}`);
    const targetNode = curNodes.find((n) => n.id === connection.target);
    if (targetNode === undefined || targetNode === null) {
        console.log(`[isEdgeConnectable] the target of newEdge is not found`);
        return false;
    }
    console.log(`[isEdgeConnectable] targetNode.data.nodeType=${targetNode.data.nodeType}`);
    return targetNode.data.nodeType === 'insight';
}
function removeEdge(selectedEdge, curNodes, curEdges) {
    if (curEdges === null || curNodes === null) {
        console.log('[removeEdge] curEdges or curNodes is null');
        return { nodes: curNodes, edges: curEdges };
    }
    const newEdges = curEdges.filter((e) => e.id !== selectedEdge.id);
    const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(curNodes, newEdges);
    return { nodes: layoutedNodes, edges: layoutedEdges };
}
function isEdgeUpdatable(selectedEdge, curNodes) {
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
function getPathVariableCombination(selectedNode, allNodes) {
    // get the column combination of the path from root to leafNode
    if (allNodes === null || selectedNode === null) {
        return [];
    }
    if (selectedNode.data.nodeType !== 'recommended') {
        console.log(`[getPathVariableCombination] selectedNode is not a recommended node`);
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


/***/ }),

/***/ "./lib/index.js":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _jupyterlab_application__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jupyterlab/application */ "webpack/sharing/consume/default/@jupyterlab/application");
/* harmony import */ var _jupyterlab_application__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_application__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @jupyterlab/apputils */ "webpack/sharing/consume/default/@jupyterlab/apputils");
/* harmony import */ var _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _jupyterlab_translation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @jupyterlab/translation */ "webpack/sharing/consume/default/@jupyterlab/translation");
/* harmony import */ var _jupyterlab_translation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_translation__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @jupyterlab/notebook */ "webpack/sharing/consume/default/@jupyterlab/notebook");
/* harmony import */ var _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _panel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./panel */ "./lib/panel.js");
/* harmony import */ var _registry__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./registry */ "./lib/registry.js");
/* harmony import */ var _lumino_widgets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @lumino/widgets */ "webpack/sharing/consume/default/@lumino/widgets");
/* harmony import */ var _lumino_widgets__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_lumino_widgets__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _jupyterlab_mainmenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @jupyterlab/mainmenu */ "webpack/sharing/consume/default/@jupyterlab/mainmenu");
/* harmony import */ var _jupyterlab_mainmenu__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_mainmenu__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _KnowledgeGraph__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./KnowledgeGraph */ "./lib/KnowledgeGraph.js");



// import { reactIcon } from '@jupyterlab/ui-components';
// import { FlowWidget } from './ReactFlow';






/**
 * The command IDs used by the react-widget plugin.
 */
var CommandIDs;
(function (CommandIDs) {
    //   export const react_counter = 'create-react-counter-widget';
    CommandIDs.tangerine = 'create-tangerine-widget';
    CommandIDs.knowledgeGraph = 'create-knowledge-graph-widget';
})(CommandIDs || (CommandIDs = {}));
/**
* Activate the NB Viz widget extension.
*/
function activate(app, palette, mainMenu, translator, notebookTracker, restorer) {
    console.log('JupyterLab extension NB Viz (name placeholder) is activated!');
    const registry = new _registry__WEBPACK_IMPORTED_MODULE_6__.TangerineRegistry();
    app.docRegistry.addWidgetExtension('Notebook', registry);
    async function createPanel() {
        // create a Tangerine panel
        console.log('created Tangerine panel');
        console.log(`Now registry.notebook=${registry.notebook}`);
        const panel = new _panel__WEBPACK_IMPORTED_MODULE_7__.TangerinePanel(notebookTracker, translator);
        app.shell.add(panel, 'main');
        registry.panel = panel;
        registry.panel.widget.notebookPanel = registry.notebook;
        console.log('Set notebookPanel for FlowWidget');
        console.log(registry.panel.widget.notebookPanel);
        return panel;
    }
    async function createKnowledgeGraph() {
        const content = new _KnowledgeGraph__WEBPACK_IMPORTED_MODULE_8__.KnowledgeGraphWidget();
        const widget = new _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_1__.MainAreaWidget({ content });
        widget.title.label = "Knowledge Graph";
        if (!widget.isAttached) {
            app.shell.add(widget, 'main');
        }
    }
    const trans = translator.load('jupyterlab');
    app.commands.addCommand(CommandIDs.tangerine, {
        label: trans.__(`Tracking tree`),
        caption: trans.__(`Tracking tree`),
        execute: createPanel
    });
    palette.addItem({ command: CommandIDs.tangerine, category: 'Tutorial' });
    app.commands.addCommand(CommandIDs.knowledgeGraph, {
        label: trans.__(`Knowledge Graph`),
        caption: trans.__(`Knowledge Graph`),
        execute: createKnowledgeGraph
    });
    palette.addItem({ command: CommandIDs.knowledgeGraph, category: 'Tutorial' });
    // add menu tab
    const tangerineMenu = new _lumino_widgets__WEBPACK_IMPORTED_MODULE_4__.Menu({ commands: app.commands });
    tangerineMenu.title.label = trans.__("Tangerine");
    mainMenu.addMenu(tangerineMenu, { rank: 280 });
    tangerineMenu.addItem({ command: CommandIDs.tangerine });
    tangerineMenu.addItem({ command: CommandIDs.knowledgeGraph });
    notebookTracker.currentChanged.connect((tracker, panel) => {
        console.log('NotebookTracker Widget changed');
        if (registry.panel) {
            registry.panel.widget.notebookPanel = panel;
            registry.panel.widget.notebookTracker = tracker;
        }
        else {
            console.log('registry.panel is null');
        }
    });
}
const plugin = {
    id: 'jupyter-nb-viz:plugin',
    autoStart: true,
    requires: [_jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_1__.ICommandPalette, _jupyterlab_mainmenu__WEBPACK_IMPORTED_MODULE_5__.IMainMenu, _jupyterlab_translation__WEBPACK_IMPORTED_MODULE_2__.ITranslator, _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_3__.INotebookTracker],
    optional: [_jupyterlab_application__WEBPACK_IMPORTED_MODULE_0__.ILayoutRestorer],
    activate: activate
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (plugin);


/***/ }),

/***/ "./lib/panel.js":
/*!**********************!*\
  !*** ./lib/panel.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TangerinePanel": () => (/* binding */ TangerinePanel)
/* harmony export */ });
/* harmony import */ var _lumino_widgets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lumino/widgets */ "webpack/sharing/consume/default/@lumino/widgets");
/* harmony import */ var _lumino_widgets__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lumino_widgets__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _jupyterlab_translation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @jupyterlab/translation */ "webpack/sharing/consume/default/@jupyterlab/translation");
/* harmony import */ var _jupyterlab_translation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_translation__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ReactFlow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ReactFlow */ "./lib/ReactFlow.js");



class TangerinePanel extends _lumino_widgets__WEBPACK_IMPORTED_MODULE_0__.StackedPanel {
    constructor(notebookTracker, translator) {
        super();
        this._currentNotebook = null;
        this._notebookTracker = null;
        this._translator = translator || _jupyterlab_translation__WEBPACK_IMPORTED_MODULE_1__.nullTranslator;
        this._trans = this._translator.load('jupyterlab');
        this.id = 'Tangerine';
        this.title.label = this._trans.__(`Tracking Tree`);
        this.title.closable = true;
        this._notebookTracker = notebookTracker;
        this._widget = new _ReactFlow__WEBPACK_IMPORTED_MODULE_2__.FlowWidget(this._currentNotebook, this._notebookTracker);
        this.addWidget(this._widget);
    }
    get widget() {
        return this._widget;
    }
    set widget(widget) {
        this._widget = widget;
    }
    get currentNotebook() {
        return this._currentNotebook;
    }
    set currentNotebook(notebook) {
        this._currentNotebook = notebook;
    }
}


/***/ }),

/***/ "./lib/registry.js":
/*!*************************!*\
  !*** ./lib/registry.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TangerineRegistry": () => (/* binding */ TangerineRegistry)
/* harmony export */ });
/* harmony import */ var _lumino_disposable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lumino/disposable */ "webpack/sharing/consume/default/@lumino/disposable");
/* harmony import */ var _lumino_disposable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lumino_disposable__WEBPACK_IMPORTED_MODULE_0__);

class TangerineRegistry {
    constructor() {
        this._panel = null;
        this._notebook = null;
    }
    get panel() {
        return this._panel;
    }
    set panel(panel) {
        this._panel = panel;
    }
    get notebook() {
        return this._notebook;
    }
    createNew(panel, context) {
        Promise.all([panel.revealed, panel.sessionContext.ready]).then(() => {
            this._notebook = panel;
            // if(this._panel) {
            //    this._panel.currentNotebook = panel; 
            // }
            // console.log(`Notebook: ${this._notebook}`);
            // console.log(`Notebook model: ${this._notebook.model}`);
        });
        return new _lumino_disposable__WEBPACK_IMPORTED_MODULE_0__.DisposableDelegate(() => { });
    }
}


/***/ }),

/***/ "./style/node.css":
/*!************************!*\
  !*** ./style/node.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./node.css */ "./node_modules/css-loader/dist/cjs.js!./style/node.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./lib/NodesAndEdges/KnowledgeGraph/Edges.json":
/*!*****************************************************!*\
  !*** ./lib/NodesAndEdges/KnowledgeGraph/Edges.json ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"id":"root-1","source":"root","target":"1","animated":false,"label":"109/7","type":"knowledgeGraph","data":{"sourceNotebooks":["D1-NB11","D1-NB14","D1-NB16","D1-NB6","D1-NB7","D1-NB8","NB1-Attrition"],"sourceNotebooksAndMethods":[["NB1-Attrition",5,26],["D1-NB7",28],["D1-NB14",15]]}},{"id":"root-125","source":"root","target":"125","animated":false,"label":"28/6","type":"knowledgeGraph","data":{"sourceNotebooks":["D2-NB1","D2-NB10","D2-NB12","D2-NB2","D2-NB3","D2-NB5"],"sourceNotebooksAndMethods":[["D2-NB1",15],["D2-NB2",18],["D2-NB10",12],["D2-NB12",23,23,23,23,25]]}},{"id":"root-124","source":"root","target":"124","animated":false,"label":"9/6","type":"knowledgeGraph","data":{"sourceNotebooks":["D2-NB1","D2-NB10","D2-NB12","D2-NB13","D2-NB2","D2-NB5"],"sourceNotebooksAndMethods":[["D2-NB1",3],["D2-NB10",9],["D2-NB12",16,16],["D2-NB13",17]]}},{"id":"root-etc1","source":"root","target":"etc1","animated":false},{"id":"etc1-135","source":"etc1","target":"135","animated":false,"label":"7/5"},{"id":"etc1-140","source":"etc1","target":"140","animated":false,"label":"6/5"},{"id":"etc1-14","source":"etc1","target":"14","animated":false,"label":"15/4"},{"id":"etc1-137","source":"etc1","target":"137","animated":false,"label":"4/4"},{"id":"etc1-139","source":"etc1","target":"139","animated":false,"label":"4/4"},{"id":"etc1-128","source":"etc1","target":"128","animated":false,"label":"5/3"},{"id":"etc1-136","source":"etc1","target":"136","animated":false,"label":"3/3"},{"id":"etc1-37","source":"etc1","target":"37","animated":false,"label":"5/2"},{"id":"etc1-8","source":"etc1","target":"8","animated":false,"label":"2/2"},{"id":"etc1-148","source":"etc1","target":"148","animated":false,"label":"2/2"},{"id":"etc1-114","source":"etc1","target":"114","animated":false,"label":"5/1"},{"id":"etc1-115","source":"etc1","target":"115","animated":false,"label":"4/1"},{"id":"etc1-116","source":"etc1","target":"116","animated":false,"label":"4/1"},{"id":"etc1-117","source":"etc1","target":"117","animated":false,"label":"4/1"},{"id":"etc1-4","source":"etc1","target":"4","animated":false,"label":"1/1"},{"id":"etc1-5","source":"etc1","target":"5","animated":false,"label":"1/1"},{"id":"etc1-6","source":"etc1","target":"6","animated":false,"label":"1/1"},{"id":"etc1-7","source":"etc1","target":"7","animated":false,"label":"1/1"},{"id":"etc1-9","source":"etc1","target":"9","animated":false,"label":"1/1"},{"id":"etc1-10","source":"etc1","target":"10","animated":false,"label":"1/1"},{"id":"etc1-11","source":"etc1","target":"11","animated":false,"label":"1/1"},{"id":"etc1-26","source":"etc1","target":"26","animated":false,"label":"1/1"},{"id":"etc1-33","source":"etc1","target":"33","animated":false,"label":"1/1"},{"id":"8-100","source":"8","target":"100","animated":false,"label":"1/1","type":"knowledgeGraph","data":{"sourceNotebooks":["D1-NB14"],"sourceNotebooksAndMethods":[["D1-NB14",37]]}},{"id":"37-41","source":"37","target":"41","animated":false,"label":"3/2","type":"knowledgeGraph","data":{"sourceNotebooks":["D1-NB14","NB1-Attrition"],"sourceNotebooksAndMethods":[["NB1-Attrition",112]]}},{"id":"37-38","source":"37","target":"38","animated":false,"label":"1/1","type":"knowledgeGraph","data":{"sourceNotebooks":["NB1-Attrition"],"sourceNotebooksAndMethods":[["NB1-Attrition",111]]}},{"id":"37-101","source":"37","target":"101","animated":false,"label":"1/1","type":"knowledgeGraph","data":{"sourceNotebooks":["D1-NB14"],"sourceNotebooksAndMethods":[["D1-NB14",38]]}},{"id":"38-39","source":"38","target":"39","animated":false,"label":"1/1","type":"knowledgeGraph","data":{"sourceNotebooks":["NB1-Attrition"],"sourceNotebooksAndMethods":[["NB1-Attrition",111]]}},{"id":"39-40","source":"39","target":"40","animated":false,"label":"1/1","type":"knowledgeGraph","data":{"sourceNotebooks":["NB1-Attrition"],"sourceNotebooksAndMethods":[["NB1-Attrition",111]]}},{"id":"41-42","source":"41","target":"42","animated":false,"label":"1/1","type":"knowledgeGraph","data":{"sourceNotebooks":["NB1-Attrition"],"sourceNotebooksAndMethods":[["NB1-Attrition",112]]}},{"id":"42-43","source":"42","target":"43","animated":false,"label":"1/1","type":"knowledgeGraph","data":{"sourceNotebooks":["NB1-Attrition"],"sourceNotebooksAndMethods":[["NB1-Attrition",112]]}},{"id":"137-138","source":"137","target":"138","animated":false,"label":"2/2","type":"knowledgeGraph","data":{"sourceNotebooks":["D2-NB3","D2-NB5"],"sourceNotebooksAndMethods":[["D2-NB3",23],["D2-NB5",10]]}},{"id":"14-20","source":"14","target":"20","animated":false,"label":"6/3","type":"knowledgeGraph","data":{"sourceNotebooks":["D1-NB11","D1-NB6","NB1-Attrition"],"sourceNotebooksAndMethods":[["NB1-Attrition",76]]}},{"id":"14-15","source":"14","target":"15","animated":false,"label":"1/1","type":"knowledgeGraph","data":{"sourceNotebooks":["NB1-Attrition"],"sourceNotebooksAndMethods":[["NB1-Attrition",70]]}},{"id":"14-27","source":"14","target":"27","animated":false,"label":"1/1","type":"knowledgeGraph","data":{"sourceNotebooks":["NB1-Attrition"],"sourceNotebooksAndMethods":[["NB1-Attrition",96]]}},{"id":"14-etc2","source":"14","target":"etc2","animated":false},{"id":"etc2-86","source":"etc2","target":"86","animated":false,"label":"1/1"},{"id":"etc2-89","source":"etc2","target":"89","animated":false,"label":"1/1"},{"id":"86-87","source":"86","target":"87","animated":false,"label":"1/1","type":"knowledgeGraph","data":{"sourceNotebooks":["D1-NB11"],"sourceNotebooksAndMethods":[["D1-NB11",7]]}},{"id":"20-21","source":"20","target":"21","animated":false,"label":"2/1","type":"knowledgeGraph","data":{"sourceNotebooks":["NB1-Attrition"],"sourceNotebooksAndMethods":[["NB1-Attrition",77,78]]}},{"id":"20-35","source":"20","target":"35","animated":false,"label":"1/1","type":"knowledgeGraph","data":{"sourceNotebooks":["NB1-Attrition"],"sourceNotebooksAndMethods":[["NB1-Attrition",110]]}},{"id":"20-55","source":"20","target":"55","animated":false,"label":"1/1","type":"knowledgeGraph","data":{"sourceNotebooks":["D1-NB6"],"sourceNotebooksAndMethods":[["D1-NB6",16]]}},{"id":"20-etc3","source":"20","target":"etc3","animated":false},{"id":"etc3-90","source":"etc3","target":"90","animated":false,"label":"1/1"},{"id":"55-56","source":"55","target":"56","animated":false,"label":"1/1","type":"knowledgeGraph","data":{"sourceNotebooks":["D1-NB6"],"sourceNotebooksAndMethods":[["D1-NB6",16]]}},{"id":"56-57","source":"56","target":"57","animated":false,"label":"1/1","type":"knowledgeGraph","data":{"sourceNotebooks":["D1-NB6"],"sourceNotebooksAndMethods":[["D1-NB6",16]]}},{"id":"57-58","source":"57","target":"58","animated":false,"label":"1/1","type":"knowledgeGraph","data":{"sourceNotebooks":["D1-NB6"],"sourceNotebooksAndMethods":[["D1-NB6",16]]}},{"id":"58-59","source":"58","target":"59","animated":false,"label":"1/1","type":"knowledgeGraph","data":{"sourceNotebooks":["D1-NB6"],"sourceNotebooksAndMethods":[["D1-NB6",16]]}},{"id":"59-60","source":"59","target":"60","animated":false,"label":"1/1","type":"knowledgeGraph","data":{"sourceNotebooks":["D1-NB6"],"sourceNotebooksAndMethods":[["D1-NB6",16]]}},{"id":"60-61","source":"60","target":"61","animated":false,"label":"1/1","type":"knowledgeGraph","data":{"sourceNotebooks":["D1-NB6"],"sourceNotebooksAndMethods":[["D1-NB6",16]]}},{"id":"61-62","source":"61","target":"62","animated":false,"label":"1/1","type":"knowledgeGraph","data":{"sourceNotebooks":["D1-NB6"],"sourceNotebooksAndMethods":[["D1-NB6",16]]}},{"id":"62-63","source":"62","target":"63","animated":false,"label":"1/1","type":"knowledgeGraph","data":{"sourceNotebooks":["D1-NB6"],"sourceNotebooksAndMethods":[["D1-NB6",16]]}},{"id":"63-64","source":"63","target":"64","animated":false,"label":"1/1","type":"knowledgeGraph","data":{"sourceNotebooks":["D1-NB6"],"sourceNotebooksAndMethods":[["D1-NB6",16]]}},{"id":"64-65","source":"64","target":"65","animated":false,"label":"1/1","type":"knowledgeGraph","data":{"sourceNotebooks":["D1-NB6"],"sourceNotebooksAndMethods":[["D1-NB6",16]]}},{"id":"65-66","source":"65","target":"66","animated":false,"label":"1/1","type":"knowledgeGraph","data":{"sourceNotebooks":["D1-NB6"],"sourceNotebooksAndMethods":[["D1-NB6",16]]}},{"id":"66-67","source":"66","target":"67","animated":false,"label":"1/1","type":"knowledgeGraph","data":{"sourceNotebooks":["D1-NB6"],"sourceNotebooksAndMethods":[["D1-NB6",16]]}},{"id":"67-68","source":"67","target":"68","animated":false,"label":"1/1","type":"knowledgeGraph","data":{"sourceNotebooks":["D1-NB6"],"sourceNotebooksAndMethods":[["D1-NB6",16]]}},{"id":"68-69","source":"68","target":"69","animated":false,"label":"1/1","type":"knowledgeGraph","data":{"sourceNotebooks":["D1-NB6"],"sourceNotebooksAndMethods":[["D1-NB6",16]]}},{"id":"69-70","source":"69","target":"70","animated":false,"label":"1/1","type":"knowledgeGraph","data":{"sourceNotebooks":["D1-NB6"],"sourceNotebooksAndMethods":[["D1-NB6",16]]}},{"id":"70-71","source":"70","target":"71","animated":false,"label":"1/1","type":"knowledgeGraph","data":{"sourceNotebooks":["D1-NB6"],"sourceNotebooksAndMethods":[["D1-NB6",16]]}},{"id":"71-72","source":"71","target":"72","animated":false,"label":"1/1","type":"knowledgeGraph","data":{"sourceNotebooks":["D1-NB6"],"sourceNotebooksAndMethods":[["D1-NB6",16]]}},{"id":"72-73","source":"72","target":"73","animated":false,"label":"1/1","type":"knowledgeGraph","data":{"sourceNotebooks":["D1-NB6"],"sourceNotebooksAndMethods":[["D1-NB6",16]]}},{"id":"73-74","source":"73","target":"74","animated":false,"label":"1/1","type":"knowledgeGraph","data":{"sourceNotebooks":["D1-NB6"],"sourceNotebooksAndMethods":[["D1-NB6",16]]}},{"id":"74-75","source":"74","target":"75","animated":false,"label":"1/1","type":"knowledgeGraph","data":{"sourceNotebooks":["D1-NB6"],"sourceNotebooksAndMethods":[["D1-NB6",16]]}},{"id":"75-76","source":"75","target":"76","animated":false,"label":"1/1","type":"knowledgeGraph","data":{"sourceNotebooks":["D1-NB6"],"sourceNotebooksAndMethods":[["D1-NB6",16]]}},{"id":"35-36","source":"35","target":"36","animated":false,"label":"1/1","type":"knowledgeGraph","data":{"sourceNotebooks":["NB1-Attrition"],"sourceNotebooksAndMethods":[["NB1-Attrition",110]]}},{"id":"140-146","source":"140","target":"146","animated":false,"label":"2/2","type":"knowledgeGraph","data":{"sourceNotebooks":["D2-NB13","D2-NB5"],"sourceNotebooksAndMethods":[["D2-NB5",14],["D2-NB13",37]]}},{"id":"140-150","source":"140","target":"150","animated":false,"label":"1/1","type":"knowledgeGraph","data":{"sourceNotebooks":["D2-NB12"],"sourceNotebooksAndMethods":[["D2-NB12",19]]}},{"id":"146-147","source":"146","target":"147","animated":false,"label":"2/2","type":"knowledgeGraph","data":{"sourceNotebooks":["D2-NB13","D2-NB5"],"sourceNotebooksAndMethods":[["D2-NB5",14],["D2-NB13",37]]}},{"id":"124-145","source":"124","target":"145","animated":false,"label":"2/2","type":"knowledgeGraph","data":{"sourceNotebooks":["D2-NB13","D2-NB5"],"sourceNotebooksAndMethods":[["D2-NB5",13],["D2-NB13",36]]}},{"id":"124-133","source":"124","target":"133","animated":false,"label":"1/1","type":"knowledgeGraph","data":{"sourceNotebooks":["D2-NB2"],"sourceNotebooksAndMethods":[["D2-NB2",17]]}},{"id":"124-149","source":"124","target":"149","animated":false,"label":"1/1","type":"knowledgeGraph","data":{"sourceNotebooks":["D2-NB12"],"sourceNotebooksAndMethods":[["D2-NB12",18]]}},{"id":"125-129","source":"125","target":"129","animated":false,"label":"7/4","type":"knowledgeGraph","data":{"sourceNotebooks":["D2-NB12","D2-NB2","D2-NB3","D2-NB5"],"sourceNotebooksAndMethods":[["D2-NB2",13,20],["D2-NB12",25,25]]}},{"id":"125-126","source":"125","target":"126","animated":false,"label":"3/2","type":"knowledgeGraph","data":{"sourceNotebooks":["D2-NB1","D2-NB2"],"sourceNotebooksAndMethods":[["D2-NB1",25],["D2-NB2",11,12]]}},{"id":"125-127","source":"125","target":"127","animated":false,"label":"3/2","type":"knowledgeGraph","data":{"sourceNotebooks":["D2-NB1","D2-NB12"],"sourceNotebooksAndMethods":[["D2-NB1",26],["D2-NB12",26,26]]}},{"id":"125-etc4","source":"125","target":"etc4","animated":false},{"id":"etc4-130","source":"etc4","target":"130","animated":false,"label":"3/2"},{"id":"etc4-132","source":"etc4","target":"132","animated":false,"label":"2/1"},{"id":"etc4-131","source":"etc4","target":"131","animated":false,"label":"1/1"},{"id":"etc4-134","source":"etc4","target":"134","animated":false,"label":"1/1"},{"id":"130-142","source":"130","target":"142","animated":false,"label":"1/1","type":"knowledgeGraph","data":{"sourceNotebooks":["D2-NB3"],"sourceNotebooksAndMethods":[["D2-NB3",29]]}},{"id":"129-143","source":"129","target":"143","animated":false,"label":"2/2","type":"knowledgeGraph","data":{"sourceNotebooks":["D2-NB3","D2-NB5"],"sourceNotebooksAndMethods":[["D2-NB3",30],["D2-NB5",15]]}},{"id":"129-141","source":"129","target":"141","animated":false,"label":"1/1","type":"knowledgeGraph","data":{"sourceNotebooks":["D2-NB3"],"sourceNotebooksAndMethods":[["D2-NB3",28]]}},{"id":"143-144","source":"143","target":"144","animated":false,"label":"2/2","type":"knowledgeGraph","data":{"sourceNotebooks":["D2-NB3","D2-NB5"],"sourceNotebooksAndMethods":[["D2-NB3",30],["D2-NB5",15]]}},{"id":"1-12","source":"1","target":"12","animated":false,"label":"19/6","type":"knowledgeGraph","data":{"sourceNotebooks":["D1-NB11","D1-NB14","D1-NB16","D1-NB6","D1-NB8","NB1-Attrition"],"sourceNotebooksAndMethods":[["NB1-Attrition",27],["D1-NB14",49]]}},{"id":"1-2","source":"1","target":"2","animated":false,"label":"9/4","type":"knowledgeGraph","data":{"sourceNotebooks":["D1-NB14","D1-NB16","D1-NB8","NB1-Attrition"],"sourceNotebooksAndMethods":[["NB1-Attrition",23,84],["D1-NB8",14,14],["D1-NB14",17]]}},{"id":"1-23","source":"1","target":"23","animated":false,"label":"6/3","type":"knowledgeGraph","data":{"sourceNotebooks":["D1-NB14","D1-NB16","NB1-Attrition"],"sourceNotebooksAndMethods":[["NB1-Attrition",81,108]]}},{"id":"1-etc5","source":"1","target":"etc5","animated":false},{"id":"etc5-3","source":"etc5","target":"3","animated":false,"label":"5/3"},{"id":"etc5-17","source":"etc5","target":"17","animated":false,"label":"4/3"},{"id":"etc5-18","source":"etc5","target":"18","animated":false,"label":"4/3"},{"id":"etc5-34","source":"etc5","target":"34","animated":false,"label":"4/3"},{"id":"etc5-83","source":"etc5","target":"83","animated":false,"label":"4/3"},{"id":"etc5-44","source":"etc5","target":"44","animated":false,"label":"12/2"},{"id":"etc5-19","source":"etc5","target":"19","animated":false,"label":"5/2"},{"id":"etc5-81","source":"etc5","target":"81","animated":false,"label":"4/2"},{"id":"etc5-77","source":"etc5","target":"77","animated":false,"label":"3/2"},{"id":"etc5-78","source":"etc5","target":"78","animated":false,"label":"3/2"},{"id":"etc5-79","source":"etc5","target":"79","animated":false,"label":"3/2"},{"id":"etc5-80","source":"etc5","target":"80","animated":false,"label":"3/2"},{"id":"etc5-31","source":"etc5","target":"31","animated":false,"label":"2/2"},{"id":"etc5-85","source":"etc5","target":"85","animated":false,"label":"2/2"},{"id":"etc5-91","source":"etc5","target":"91","animated":false,"label":"1/1"},{"id":"etc5-92","source":"etc5","target":"92","animated":false,"label":"1/1"},{"id":"etc5-93","source":"etc5","target":"93","animated":false,"label":"1/1"},{"id":"etc5-97","source":"etc5","target":"97","animated":false,"label":"1/1"},{"id":"etc5-98","source":"etc5","target":"98","animated":false,"label":"1/1"},{"id":"etc5-99","source":"etc5","target":"99","animated":false,"label":"1/1"},{"id":"etc5-102","source":"etc5","target":"102","animated":false,"label":"1/1"},{"id":"etc5-103","source":"etc5","target":"103","animated":false,"label":"1/1"},{"id":"etc5-104","source":"etc5","target":"104","animated":false,"label":"1/1"},{"id":"etc5-105","source":"etc5","target":"105","animated":false,"label":"1/1"},{"id":"etc5-106","source":"etc5","target":"106","animated":false,"label":"1/1"},{"id":"etc5-107","source":"etc5","target":"107","animated":false,"label":"1/1"},{"id":"etc5-108","source":"etc5","target":"108","animated":false,"label":"1/1"},{"id":"31-32","source":"31","target":"32","animated":false,"label":"1/1","type":"knowledgeGraph","data":{"sourceNotebooks":["NB1-Attrition"],"sourceNotebooksAndMethods":[["NB1-Attrition",98]]}},{"id":"81-82","source":"81","target":"82","animated":false,"label":"1/1","type":"knowledgeGraph","data":{"sourceNotebooks":["D1-NB11"],"sourceNotebooksAndMethods":[["D1-NB11",4]]}},{"id":"81-109","source":"81","target":"109","animated":false,"label":"1/1","type":"knowledgeGraph","data":{"sourceNotebooks":["D1-NB14"],"sourceNotebooksAndMethods":[["D1-NB14",49]]}},{"id":"81-110","source":"81","target":"110","animated":false,"label":"1/1","type":"knowledgeGraph","data":{"sourceNotebooks":["D1-NB14"],"sourceNotebooksAndMethods":[["D1-NB14",49]]}},{"id":"19-111","source":"19","target":"111","animated":false,"label":"1/1","type":"knowledgeGraph","data":{"sourceNotebooks":["D1-NB14"],"sourceNotebooksAndMethods":[["D1-NB14",50]]}},{"id":"19-112","source":"19","target":"112","animated":false,"label":"1/1","type":"knowledgeGraph","data":{"sourceNotebooks":["D1-NB14"],"sourceNotebooksAndMethods":[["D1-NB14",50]]}},{"id":"19-113","source":"19","target":"113","animated":false,"label":"1/1","type":"knowledgeGraph","data":{"sourceNotebooks":["D1-NB14"],"sourceNotebooksAndMethods":[["D1-NB14",50]]}},{"id":"44-46","source":"44","target":"46","animated":false,"label":"2/2","type":"knowledgeGraph","data":{"sourceNotebooks":["D1-NB14","D1-NB6"],"sourceNotebooksAndMethods":[["D1-NB6",7],["D1-NB14",49]]}},{"id":"44-45","source":"44","target":"45","animated":false,"label":"1/1","type":"knowledgeGraph","data":{"sourceNotebooks":["D1-NB6"],"sourceNotebooksAndMethods":[["D1-NB6",5]]}},{"id":"44-47","source":"44","target":"47","animated":false,"label":"1/1","type":"knowledgeGraph","data":{"sourceNotebooks":["D1-NB6"],"sourceNotebooksAndMethods":[["D1-NB6",8]]}},{"id":"44-etc6","source":"44","target":"etc6","animated":false},{"id":"etc6-48","source":"etc6","target":"48","animated":false,"label":"1/1"},{"id":"etc6-49","source":"etc6","target":"49","animated":false,"label":"1/1"},{"id":"etc6-50","source":"etc6","target":"50","animated":false,"label":"1/1"},{"id":"etc6-51","source":"etc6","target":"51","animated":false,"label":"1/1"},{"id":"etc6-52","source":"etc6","target":"52","animated":false,"label":"1/1"},{"id":"etc6-53","source":"etc6","target":"53","animated":false,"label":"1/1"},{"id":"etc6-54","source":"etc6","target":"54","animated":false,"label":"1/1"},{"id":"83-84","source":"83","target":"84","animated":false,"label":"1/1","type":"knowledgeGraph","data":{"sourceNotebooks":["D1-NB11"],"sourceNotebooksAndMethods":[["D1-NB11",5]]}},{"id":"83-119","source":"83","target":"119","animated":false,"label":"1/1","type":"knowledgeGraph","data":{"sourceNotebooks":["D1-NB16"],"sourceNotebooksAndMethods":[["D1-NB16",18]]}},{"id":"83-120","source":"83","target":"120","animated":false,"label":"1/1","type":"knowledgeGraph","data":{"sourceNotebooks":["D1-NB16"],"sourceNotebooksAndMethods":[["D1-NB16",24]]}},{"id":"23-24","source":"23","target":"24","animated":false,"label":"2/1","type":"knowledgeGraph","data":{"sourceNotebooks":["NB1-Attrition"],"sourceNotebooksAndMethods":[["NB1-Attrition",81,108]]}},{"id":"23-118","source":"23","target":"118","animated":false,"label":"1/1","type":"knowledgeGraph","data":{"sourceNotebooks":["D1-NB16"],"sourceNotebooksAndMethods":[["D1-NB16",14]]}},{"id":"23-122","source":"23","target":"122","animated":false,"label":"1/1","type":"knowledgeGraph","data":{"sourceNotebooks":["D1-NB16"],"sourceNotebooksAndMethods":[["D1-NB16",26]]}},{"id":"23-etc7","source":"23","target":"etc7","animated":false},{"id":"etc7-123","source":"etc7","target":"123","animated":false,"label":"1/1"},{"id":"2-95","source":"2","target":"95","animated":false,"label":"2/2","type":"knowledgeGraph","data":{"sourceNotebooks":["D1-NB14","D1-NB16"],"sourceNotebooksAndMethods":[["D1-NB14",23],["D1-NB16",17]]}},{"id":"2-94","source":"2","target":"94","animated":false,"label":"1/1","type":"knowledgeGraph","data":{"sourceNotebooks":["D1-NB14"],"sourceNotebooksAndMethods":[["D1-NB14",23]]}},{"id":"2-96","source":"2","target":"96","animated":false,"label":"1/1","type":"knowledgeGraph","data":{"sourceNotebooks":["D1-NB14"],"sourceNotebooksAndMethods":[["D1-NB14",23]]}},{"id":"12-13","source":"12","target":"13","animated":false,"label":"4/3","type":"knowledgeGraph","data":{"sourceNotebooks":["D1-NB11","D1-NB14","NB1-Attrition"],"sourceNotebooksAndMethods":[["NB1-Attrition",27],["D1-NB14",49]]}},{"id":"12-22","source":"12","target":"22","animated":false,"label":"6/2","type":"knowledgeGraph","data":{"sourceNotebooks":["D1-NB14","NB1-Attrition"],"sourceNotebooksAndMethods":[["NB1-Attrition",79],["D1-NB14",50]]}},{"id":"12-25","source":"12","target":"25","animated":false,"label":"1/1","type":"knowledgeGraph","data":{"sourceNotebooks":["NB1-Attrition"],"sourceNotebooksAndMethods":[["NB1-Attrition",83]]}},{"id":"12-etc8","source":"12","target":"etc8","animated":false},{"id":"etc8-28","source":"etc8","target":"28","animated":false,"label":"1/1"},{"id":"etc8-121","source":"etc8","target":"121","animated":false,"label":"1/1"},{"id":"22-29","source":"22","target":"29","animated":false,"label":"4/1","type":"knowledgeGraph","data":{"sourceNotebooks":["NB1-Attrition"],"sourceNotebooksAndMethods":[["NB1-Attrition",98,98,98,98]]}},{"id":"29-30","source":"29","target":"30","animated":false,"label":"4/1","type":"knowledgeGraph","data":{"sourceNotebooks":["NB1-Attrition"],"sourceNotebooksAndMethods":[["NB1-Attrition",98,98,98,98]]}},{"id":"13-16","source":"13","target":"16","animated":false,"label":"1/1","type":"knowledgeGraph","data":{"sourceNotebooks":["NB1-Attrition"],"sourceNotebooksAndMethods":[["NB1-Attrition",71]]}},{"id":"13-88","source":"13","target":"88","animated":false,"label":"1/1","type":"knowledgeGraph","data":{"sourceNotebooks":["D1-NB11"],"sourceNotebooksAndMethods":[["D1-NB11",8]]}}]');

/***/ }),

/***/ "./lib/NodesAndEdges/KnowledgeGraph/Nodes.json":
/*!*****************************************************!*\
  !*** ./lib/NodesAndEdges/KnowledgeGraph/Nodes.json ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"id":"root","type":"default","data":{"nodeType":"root","label":"root","rawData":"root","children":[1,125,124,135,140,14,137,139,128,136,37,8,148,114,115,116,117,4,5,6,7,9,10,11,26,33]},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8A9A9"}},{"id":"etc1","type":"default","data":{"nodeType":"etc","label":"23","rawData":"23","children":[],"parent":"root"},"position":{"x":0,"y":0},"style":{"color":"black","font-size":"10px","width":"50px","height":"15px","padding":"10px 10px 20px 10px","backgroundColor":"#ffffff","z-index":"-1"}},{"id":"33","type":"default","data":{"nodeType":"raw","label":"StockOptionLevel","rawData":"StockOptionLevel","children":[],"parent":"etc1"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"26","type":"default","data":{"nodeType":"raw","label":"OverTime","rawData":"OverTime","children":[],"parent":"etc1"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"11","type":"default","data":{"nodeType":"raw","label":"Over18","rawData":"Over18","children":[],"parent":"etc1"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"10","type":"default","data":{"nodeType":"raw","label":"MaritalStatus","rawData":"MaritalStatus","children":[],"parent":"etc1"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"9","type":"default","data":{"nodeType":"raw","label":"JobSatisfaction","rawData":"JobSatisfaction","children":[],"parent":"etc1"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"7","type":"default","data":{"nodeType":"raw","label":"EducationField","rawData":"EducationField","children":[],"parent":"etc1"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"6","type":"default","data":{"nodeType":"raw","label":"Education","rawData":"Education","children":[],"parent":"etc1"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"5","type":"default","data":{"nodeType":"raw","label":"Department","rawData":"Department","children":[],"parent":"etc1"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"4","type":"default","data":{"nodeType":"raw","label":"RelationshipSatisfaction","rawData":"RelationshipSatisfaction","children":[],"parent":"etc1"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"117","type":"default","data":{"nodeType":"raw","label":"PercentSalaryHike","rawData":"PercentSalaryHike","children":[],"parent":"etc1"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"116","type":"default","data":{"nodeType":"raw","label":"DailyRate","rawData":"DailyRate","children":[],"parent":"etc1"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"115","type":"default","data":{"nodeType":"raw","label":"MonthlyRate","rawData":"MonthlyRate","children":[],"parent":"etc1"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"114","type":"default","data":{"nodeType":"raw","label":"Age","rawData":"Age","children":[],"parent":"etc1"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"148","type":"default","data":{"nodeType":"raw","label":"work_year","rawData":"work_year","children":[],"parent":"etc1"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"8","type":"default","data":{"nodeType":"raw","label":"JobRole","rawData":"JobRole","children":[100],"parent":"etc1"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"100","type":"default","data":{"nodeType":"raw","label":"WorkLifeBalance","rawData":"WorkLifeBalance","children":[],"parent":"8"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"37","type":"default","data":{"nodeType":"raw","label":"JobLevel","rawData":"JobLevel","children":[41,38,101],"parent":"etc1"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"101","type":"default","data":{"nodeType":"raw","label":"WorkLifeBalance","rawData":"WorkLifeBalance","children":[],"parent":"37"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"38","type":"default","data":{"nodeType":"raw","label":"Department","rawData":"Department","children":[39],"parent":"37"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"39","type":"default","data":{"nodeType":"raw","label":"StockOptionLevel","rawData":"StockOptionLevel","children":[40],"parent":"38"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"40","type":"default","data":{"nodeType":"raw","label":"YearsAtCompany","rawData":"YearsAtCompany","children":[],"parent":"39"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"41","type":"default","data":{"nodeType":"raw","label":"JobRole","rawData":"JobRole","children":[42],"parent":"37"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"42","type":"default","data":{"nodeType":"raw","label":"StockOptionLevel","rawData":"StockOptionLevel","children":[43],"parent":"41"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"43","type":"default","data":{"nodeType":"raw","label":"YearsAtCompany","rawData":"YearsAtCompany","children":[],"parent":"42"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"136","type":"default","data":{"nodeType":"raw","label":"company_size","rawData":"company_size","children":[],"parent":"etc1"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"128","type":"default","data":{"nodeType":"raw","label":"job_title","rawData":"job_title","children":[],"parent":"etc1"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"139","type":"default","data":{"nodeType":"raw","label":"employee_residence","rawData":"employee_residence","children":[],"parent":"etc1"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"137","type":"default","data":{"nodeType":"raw","label":"remote_ratio","rawData":"remote_ratio","children":[138],"parent":"etc1"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"138","type":"default","data":{"nodeType":"raw","label":"work_year","rawData":"work_year","children":[],"parent":"137"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"14","type":"default","data":{"nodeType":"raw","label":"MonthlyIncome","rawData":"MonthlyIncome","children":[20,15,27,86,89],"parent":"etc1"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"etc2","type":"default","data":{"nodeType":"etc","label":"2","rawData":"2","children":[],"parent":"14"},"position":{"x":0,"y":0},"style":{"color":"black","font-size":"10px","width":"50px","height":"15px","padding":"10px 10px 20px 10px","backgroundColor":"#ffffff","z-index":"-1"}},{"id":"89","type":"default","data":{"nodeType":"raw","label":"JobRole","rawData":"JobRole","children":[],"parent":"etc2"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"86","type":"default","data":{"nodeType":"raw","label":"Department","rawData":"Department","children":[87],"parent":"etc2"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"87","type":"default","data":{"nodeType":"raw","label":"Gender","rawData":"Gender","children":[],"parent":"86"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"27","type":"default","data":{"nodeType":"raw","label":"OverTime","rawData":"OverTime","children":[],"parent":"14"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"15","type":"default","data":{"nodeType":"raw","label":"JobSatisfaction","rawData":"JobSatisfaction","children":[],"parent":"14"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"20","type":"default","data":{"nodeType":"raw","label":"JobLevel","rawData":"JobLevel","children":[21,35,55,90],"parent":"14"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"etc3","type":"default","data":{"nodeType":"etc","label":"1","rawData":"1","children":[],"parent":"20"},"position":{"x":0,"y":0},"style":{"color":"black","font-size":"10px","width":"50px","height":"15px","padding":"10px 10px 20px 10px","backgroundColor":"#ffffff","z-index":"-1"}},{"id":"90","type":"default","data":{"nodeType":"raw","label":"TotalWorkingYears","rawData":"TotalWorkingYears","children":[],"parent":"etc3"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"55","type":"default","data":{"nodeType":"raw","label":"DailyRate","rawData":"DailyRate","children":[56],"parent":"20"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"56","type":"default","data":{"nodeType":"raw","label":"Age","rawData":"Age","children":[57],"parent":"55"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"57","type":"default","data":{"nodeType":"raw","label":"StockOptionLevel","rawData":"StockOptionLevel","children":[58],"parent":"56"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"58","type":"default","data":{"nodeType":"raw","label":"YearsAtCompany","rawData":"YearsAtCompany","children":[59],"parent":"57"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"59","type":"default","data":{"nodeType":"raw","label":"JobSatisfaction","rawData":"JobSatisfaction","children":[60],"parent":"58"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"60","type":"default","data":{"nodeType":"raw","label":"PercentSalaryHike","rawData":"PercentSalaryHike","children":[61],"parent":"59"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"61","type":"default","data":{"nodeType":"raw","label":"TotalWorkingYears","rawData":"TotalWorkingYears","children":[62],"parent":"60"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"62","type":"default","data":{"nodeType":"raw","label":"WorkLifeBalance","rawData":"WorkLifeBalance","children":[63],"parent":"61"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"63","type":"default","data":{"nodeType":"raw","label":"YearsWithCurrManager","rawData":"YearsWithCurrManager","children":[64],"parent":"62"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"64","type":"default","data":{"nodeType":"raw","label":"YearsInCurrentRole","rawData":"YearsInCurrentRole","children":[65],"parent":"63"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"65","type":"default","data":{"nodeType":"raw","label":"Education","rawData":"Education","children":[66],"parent":"64"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"66","type":"default","data":{"nodeType":"raw","label":"MonthlyRate","rawData":"MonthlyRate","children":[67],"parent":"65"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"67","type":"default","data":{"nodeType":"raw","label":"DistanceFromHome","rawData":"DistanceFromHome","children":[68],"parent":"66"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"68","type":"default","data":{"nodeType":"raw","label":"HourlyRate","rawData":"HourlyRate","children":[69],"parent":"67"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"69","type":"default","data":{"nodeType":"raw","label":"RelationshipSatisfaction","rawData":"RelationshipSatisfaction","children":[70],"parent":"68"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"70","type":"default","data":{"nodeType":"raw","label":"JobInvolvement","rawData":"JobInvolvement","children":[71],"parent":"69"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"71","type":"default","data":{"nodeType":"raw","label":"EnvironmentSatisfaction","rawData":"EnvironmentSatisfaction","children":[72],"parent":"70"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"72","type":"default","data":{"nodeType":"raw","label":"YearsSinceLastPromotion","rawData":"YearsSinceLastPromotion","children":[73],"parent":"71"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"73","type":"default","data":{"nodeType":"raw","label":"NumCompaniesWorked","rawData":"NumCompaniesWorked","children":[74],"parent":"72"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"74","type":"default","data":{"nodeType":"raw","label":"TrainingTimesLastYear","rawData":"TrainingTimesLastYear","children":[75],"parent":"73"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"75","type":"default","data":{"nodeType":"raw","label":"PerformanceRating","rawData":"PerformanceRating","children":[76],"parent":"74"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"76","type":"default","data":{"nodeType":"raw","label":"StandardHours","rawData":"StandardHours","children":[],"parent":"75"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"35","type":"default","data":{"nodeType":"raw","label":"StockOptionLevel","rawData":"StockOptionLevel","children":[36],"parent":"20"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"36","type":"default","data":{"nodeType":"raw","label":"YearsAtCompany","rawData":"YearsAtCompany","children":[],"parent":"35"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"21","type":"default","data":{"nodeType":"raw","label":"JobRole","rawData":"JobRole","children":[],"parent":"20"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"140","type":"default","data":{"nodeType":"raw","label":"company_location","rawData":"company_location","children":[146,150],"parent":"etc1"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"150","type":"default","data":{"nodeType":"raw","label":"employee_residence","rawData":"employee_residence","children":[],"parent":"140"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"146","type":"default","data":{"nodeType":"raw","label":"remote_ratio","rawData":"remote_ratio","children":[147],"parent":"140"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"147","type":"default","data":{"nodeType":"raw","label":"employee_residence","rawData":"employee_residence","children":[],"parent":"146"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"135","type":"default","data":{"nodeType":"raw","label":"employment_type","rawData":"employment_type","children":[],"parent":"etc1"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"124","type":"default","data":{"nodeType":"raw","label":"experience_level","rawData":"experience_level","children":[145,133,149],"parent":"root"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"149","type":"default","data":{"nodeType":"raw","label":"employment_type","rawData":"employment_type","children":[],"parent":"124"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"133","type":"default","data":{"nodeType":"raw","label":"company_location","rawData":"company_location","children":[],"parent":"124"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"145","type":"default","data":{"nodeType":"raw","label":"job_title","rawData":"job_title","children":[],"parent":"124"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"125","type":"default","data":{"nodeType":"raw","label":"salary_in_usd","rawData":"salary_in_usd","children":[129,126,127,130,132,131,134],"parent":"root"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"etc4","type":"default","data":{"nodeType":"etc","label":"4","rawData":"4","children":[],"parent":"125"},"position":{"x":0,"y":0},"style":{"color":"black","font-size":"10px","width":"50px","height":"15px","padding":"10px 10px 20px 10px","backgroundColor":"#ffffff","z-index":"-1"}},{"id":"134","type":"default","data":{"nodeType":"raw","label":"work_year","rawData":"work_year","children":[],"parent":"etc4"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"131","type":"default","data":{"nodeType":"raw","label":"remote_ratio","rawData":"remote_ratio","children":[],"parent":"etc4"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"132","type":"default","data":{"nodeType":"raw","label":"company_size","rawData":"company_size","children":[],"parent":"etc4"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"130","type":"default","data":{"nodeType":"raw","label":"employment_type","rawData":"employment_type","children":[142],"parent":"etc4"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"142","type":"default","data":{"nodeType":"raw","label":"remote_ratio","rawData":"remote_ratio","children":[],"parent":"130"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"127","type":"default","data":{"nodeType":"raw","label":"company_location","rawData":"company_location","children":[],"parent":"125"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"126","type":"default","data":{"nodeType":"raw","label":"job_title","rawData":"job_title","children":[],"parent":"125"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"129","type":"default","data":{"nodeType":"raw","label":"experience_level","rawData":"experience_level","children":[143,141],"parent":"125"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"141","type":"default","data":{"nodeType":"raw","label":"company_size","rawData":"company_size","children":[],"parent":"129"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"143","type":"default","data":{"nodeType":"raw","label":"job_title","rawData":"job_title","children":[144],"parent":"129"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"144","type":"default","data":{"nodeType":"raw","label":"work_year","rawData":"work_year","children":[],"parent":"143"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"1","type":"default","data":{"nodeType":"raw","label":"Attrition","rawData":"Attrition","children":[12,2,23,3,17,18,34,83,44,19,81,77,78,79,80,31,85,91,92,93,97,98,99,102,103,104,105,106,107,108],"parent":"root"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"etc5","type":"default","data":{"nodeType":"etc","label":"27","rawData":"27","children":[],"parent":"1"},"position":{"x":0,"y":0},"style":{"color":"black","font-size":"10px","width":"50px","height":"15px","padding":"10px 10px 20px 10px","backgroundColor":"#ffffff","z-index":"-1"}},{"id":"108","type":"default","data":{"nodeType":"raw","label":"MonthlyRate","rawData":"MonthlyRate","children":[],"parent":"etc5"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"107","type":"default","data":{"nodeType":"raw","label":"HourlyRate","rawData":"HourlyRate","children":[],"parent":"etc5"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"106","type":"default","data":{"nodeType":"raw","label":"RelationshipSatisfaction","rawData":"RelationshipSatisfaction","children":[],"parent":"etc5"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"105","type":"default","data":{"nodeType":"raw","label":"EnvironmentSatisfaction","rawData":"EnvironmentSatisfaction","children":[],"parent":"etc5"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"104","type":"default","data":{"nodeType":"raw","label":"PerformanceRating","rawData":"PerformanceRating","children":[],"parent":"etc5"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"103","type":"default","data":{"nodeType":"raw","label":"BusinessTravel","rawData":"BusinessTravel","children":[],"parent":"etc5"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"102","type":"default","data":{"nodeType":"raw","label":"StockOptionLevel","rawData":"StockOptionLevel","children":[],"parent":"etc5"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"99","type":"default","data":{"nodeType":"raw","label":"WorkLifeBalance","rawData":"WorkLifeBalance","children":[],"parent":"etc5"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"98","type":"default","data":{"nodeType":"raw","label":"JobInvolvement","rawData":"JobInvolvement","children":[],"parent":"etc5"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"97","type":"default","data":{"nodeType":"raw","label":"EducationField","rawData":"EducationField","children":[],"parent":"etc5"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"93","type":"default","data":{"nodeType":"raw","label":"Education","rawData":"Education","children":[],"parent":"etc5"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"92","type":"default","data":{"nodeType":"raw","label":"MaritalStatus","rawData":"MaritalStatus","children":[],"parent":"etc5"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"91","type":"default","data":{"nodeType":"raw","label":"NumCompaniesWorked","rawData":"NumCompaniesWorked","children":[],"parent":"etc5"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"85","type":"default","data":{"nodeType":"raw","label":"JobSatisfaction","rawData":"JobSatisfaction","children":[],"parent":"etc5"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"31","type":"default","data":{"nodeType":"raw","label":"OverTime","rawData":"OverTime","children":[32],"parent":"etc5"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"32","type":"default","data":{"nodeType":"raw","label":"JobSatisfaction","rawData":"JobSatisfaction","children":[],"parent":"31"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"80","type":"default","data":{"nodeType":"raw","label":"PercentSalaryHike","rawData":"PercentSalaryHike","children":[],"parent":"etc5"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"79","type":"default","data":{"nodeType":"raw","label":"YearsSinceLastPromotion","rawData":"YearsSinceLastPromotion","children":[],"parent":"etc5"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"78","type":"default","data":{"nodeType":"raw","label":"TrainingTimesLastYear","rawData":"TrainingTimesLastYear","children":[],"parent":"etc5"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"77","type":"default","data":{"nodeType":"raw","label":"DistanceFromHome","rawData":"DistanceFromHome","children":[],"parent":"etc5"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"81","type":"default","data":{"nodeType":"raw","label":"Department","rawData":"Department","children":[82,109,110],"parent":"etc5"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"110","type":"default","data":{"nodeType":"raw","label":"HourlyRate","rawData":"HourlyRate","children":[],"parent":"81"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"109","type":"default","data":{"nodeType":"raw","label":"MonthlyRate","rawData":"MonthlyRate","children":[],"parent":"81"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"82","type":"default","data":{"nodeType":"raw","label":"Gender","rawData":"Gender","children":[],"parent":"81"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"19","type":"default","data":{"nodeType":"raw","label":"JobLevel","rawData":"JobLevel","children":[111,112,113],"parent":"etc5"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"113","type":"default","data":{"nodeType":"raw","label":"DailyRate","rawData":"DailyRate","children":[],"parent":"19"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"112","type":"default","data":{"nodeType":"raw","label":"HourlyRate","rawData":"HourlyRate","children":[],"parent":"19"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"111","type":"default","data":{"nodeType":"raw","label":"MonthlyRate","rawData":"MonthlyRate","children":[],"parent":"19"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"44","type":"default","data":{"nodeType":"raw","label":"DailyRate","rawData":"DailyRate","children":[46,45,47,48,49,50,51,52,53,54],"parent":"etc5"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"etc6","type":"default","data":{"nodeType":"etc","label":"7","rawData":"7","children":[],"parent":"44"},"position":{"x":0,"y":0},"style":{"color":"black","font-size":"10px","width":"50px","height":"15px","padding":"10px 10px 20px 10px","backgroundColor":"#ffffff","z-index":"-1"}},{"id":"54","type":"default","data":{"nodeType":"raw","label":"YearsWithCurrManager","rawData":"YearsWithCurrManager","children":[],"parent":"etc6"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"53","type":"default","data":{"nodeType":"raw","label":"PercentSalaryHike","rawData":"PercentSalaryHike","children":[],"parent":"etc6"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"52","type":"default","data":{"nodeType":"raw","label":"YearsInCurrentRole","rawData":"YearsInCurrentRole","children":[],"parent":"etc6"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"51","type":"default","data":{"nodeType":"raw","label":"NumCompaniesWorked","rawData":"NumCompaniesWorked","children":[],"parent":"etc6"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"50","type":"default","data":{"nodeType":"raw","label":"WorkLifeBalance","rawData":"WorkLifeBalance","children":[],"parent":"etc6"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"49","type":"default","data":{"nodeType":"raw","label":"StockOptionLevel","rawData":"StockOptionLevel","children":[],"parent":"etc6"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"48","type":"default","data":{"nodeType":"raw","label":"JobSatisfaction","rawData":"JobSatisfaction","children":[],"parent":"etc6"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"47","type":"default","data":{"nodeType":"raw","label":"EnvironmentSatisfaction","rawData":"EnvironmentSatisfaction","children":[],"parent":"44"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"45","type":"default","data":{"nodeType":"raw","label":"Age","rawData":"Age","children":[],"parent":"44"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"46","type":"default","data":{"nodeType":"raw","label":"Department","rawData":"Department","children":[],"parent":"44"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"83","type":"default","data":{"nodeType":"raw","label":"Gender","rawData":"Gender","children":[84,119,120],"parent":"etc5"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"120","type":"default","data":{"nodeType":"raw","label":"DistanceFromHome","rawData":"DistanceFromHome","children":[],"parent":"83"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"119","type":"default","data":{"nodeType":"raw","label":"TotalWorkingYears","rawData":"TotalWorkingYears","children":[],"parent":"83"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"84","type":"default","data":{"nodeType":"raw","label":"WorkLifeBalance","rawData":"WorkLifeBalance","children":[],"parent":"83"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"34","type":"default","data":{"nodeType":"raw","label":"YearsInCurrentRole","rawData":"YearsInCurrentRole","children":[],"parent":"etc5"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"18","type":"default","data":{"nodeType":"raw","label":"YearsAtCompany","rawData":"YearsAtCompany","children":[],"parent":"etc5"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"17","type":"default","data":{"nodeType":"raw","label":"TotalWorkingYears","rawData":"TotalWorkingYears","children":[],"parent":"etc5"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"3","type":"default","data":{"nodeType":"raw","label":"YearsWithCurrManager","rawData":"YearsWithCurrManager","children":[],"parent":"etc5"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"23","type":"default","data":{"nodeType":"raw","label":"JobRole","rawData":"JobRole","children":[24,118,122,123],"parent":"1"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"etc7","type":"default","data":{"nodeType":"etc","label":"1","rawData":"1","children":[],"parent":"23"},"position":{"x":0,"y":0},"style":{"color":"black","font-size":"10px","width":"50px","height":"15px","padding":"10px 10px 20px 10px","backgroundColor":"#ffffff","z-index":"-1"}},{"id":"123","type":"default","data":{"nodeType":"raw","label":"DistanceFromHome","rawData":"DistanceFromHome","children":[],"parent":"etc7"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"122","type":"default","data":{"nodeType":"raw","label":"PercentSalaryHike","rawData":"PercentSalaryHike","children":[],"parent":"23"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"118","type":"default","data":{"nodeType":"raw","label":"Age","rawData":"Age","children":[],"parent":"23"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"24","type":"default","data":{"nodeType":"raw","label":"StockOptionLevel","rawData":"StockOptionLevel","children":[],"parent":"23"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"2","type":"default","data":{"nodeType":"raw","label":"Age","rawData":"Age","children":[95,94,96],"parent":"1"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"96","type":"default","data":{"nodeType":"raw","label":"Education","rawData":"Education","children":[],"parent":"2"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"94","type":"default","data":{"nodeType":"raw","label":"MaritalStatus","rawData":"MaritalStatus","children":[],"parent":"2"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"95","type":"default","data":{"nodeType":"raw","label":"Gender","rawData":"Gender","children":[],"parent":"2"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"12","type":"default","data":{"nodeType":"raw","label":"MonthlyIncome","rawData":"MonthlyIncome","children":[13,22,25,28,121],"parent":"1"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"etc8","type":"default","data":{"nodeType":"etc","label":"2","rawData":"2","children":[],"parent":"12"},"position":{"x":0,"y":0},"style":{"color":"black","font-size":"10px","width":"50px","height":"15px","padding":"10px 10px 20px 10px","backgroundColor":"#ffffff","z-index":"-1"}},{"id":"121","type":"default","data":{"nodeType":"raw","label":"Education","rawData":"Education","children":[],"parent":"etc8"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"28","type":"default","data":{"nodeType":"raw","label":"OverTime","rawData":"OverTime","children":[],"parent":"etc8"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"25","type":"default","data":{"nodeType":"raw","label":"StockOptionLevel","rawData":"StockOptionLevel","children":[],"parent":"12"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"22","type":"default","data":{"nodeType":"raw","label":"JobLevel","rawData":"JobLevel","children":[29],"parent":"12"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"29","type":"default","data":{"nodeType":"raw","label":"OverTime","rawData":"OverTime","children":[30],"parent":"22"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"30","type":"default","data":{"nodeType":"raw","label":"JobInvolvement","rawData":"JobInvolvement","children":[],"parent":"29"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"13","type":"default","data":{"nodeType":"raw","label":"Department","rawData":"Department","children":[16,88],"parent":"12"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"88","type":"default","data":{"nodeType":"raw","label":"Gender","rawData":"Gender","children":[],"parent":"13"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}},{"id":"16","type":"default","data":{"nodeType":"raw","label":"OverTime","rawData":"OverTime","children":[],"parent":"13"},"position":{"x":0,"y":0},"style":{"color":"white","font-size":"10px","width":"130px","height":"15px","padding":"10px 10px 20px 10px","z-index":"-1","backgroundColor":"#E8AC6E"}}]');

/***/ })

}]);
//# sourceMappingURL=lib_index_js.f082bfdef955443c304b.js.map