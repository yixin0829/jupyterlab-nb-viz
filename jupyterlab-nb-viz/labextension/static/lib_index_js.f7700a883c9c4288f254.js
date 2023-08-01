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
const defaultRootNode = {
    id: "root",
    type: "default",
    data: {
        "nodeType": "root",
        "label": "root",
        "rawData": "root",
        "children": [
            7,
            4,
            1
        ]
    },
    position: { x: 0, y: 0 },
    style: {
        backgroundColor: "#E8A9A9",
        color: "white",
        fontSize: "12px",
        width: "130px",
        height: "15px",
        padding: "5px 5px 20px",
        zIndex: -1
    }
};
const FlowComponent = (props) => {
    const [selectedNode, setSelectedNode] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const [selectedEdge, setSelectedEdge] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const [isSelectedEdgeRemovable, setIsSelectedEdgeRemovable] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    // const [canExpandAll, setCanExpandAll] = useState(false);
    // const [canCollapseAll, setCanCollapseAll] = useState(false);
    // const [canCollapseNonTop, setCanCollapseNonTop] = useState(false);
    const [isRecommendationDisplayed, setIsRecommendationDisplayed] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const defaultSrcNbAndCode = {
        sourceNotebook: "",
        sourceCode: ["# Loading, please wait for a while..."],
    };
    const [isRecommendNodeSelected, setIsRecommendNodeSelected] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [selectedRecommendedPath, setSelectedRecommendedPath] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    const [srcNbAndCodeListForRec, setSrcNbAndCodeListForRec] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([defaultSrcNbAndCode,]);
    const [allNodes, setAllNodes] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([defaultRootNode,]);
    // const [allEdges, setAllEdges] = useState<Edge[] | null>([]);
    const [nodes, setNodes, onNodesChange] = (0,reactflow__WEBPACK_IMPORTED_MODULE_5__.useNodesState)([defaultRootNode,]);
    const [edges, setEdges, onEdgesChange] = (0,reactflow__WEBPACK_IMPORTED_MODULE_5__.useEdgesState)([]);
    // const edgeUpdateSuccessful = useRef(true)
    const highlightedCellLines = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)([]); // [[cellIndex, lineNumber], ...
    const highlightedCells = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)([]); // [[cellIndex, lineNumber], ...
    const edgeOperations = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)([]);
    const collapseBackToInitial = () => {
        // collapse the tree to initial state
        const { nodes: newNodes, } = (0,_TreeUtils__WEBPACK_IMPORTED_MODULE_16__.translateTreeUtilCommand)('CollapseBackToInitial', null, nodes, edges, allNodes, 
        // allEdges,
        edgeOperations.current);
        setNodes(newNodes);
        setEdges((0,_TreeUtils__WEBPACK_IMPORTED_MODULE_16__.createEdgesBasedOnNodes)(newNodes));
        // setEdges(newEdges);
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
        if (allNodes === null) {
            console.log('[handleNodeClick] allNodes or allEdges is null');
            return;
        }
        console.log(`[handleNodeClick] node clicked, id=${node.id}, label=${node.data.label}`);
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
        const collapsibleNodeTypes = ["raw", "etc"];
        if (collapsibleNodeTypes.includes(node.data.nodeType)) {
            // update collapse/expand state
            // const selectedNodeHasChildren = nodes.some((n) => n.data.parent === node.id);
            // setCanExpandAll(!selectedNodeHasChildren);
            // setCanCollapseAll(selectedNodeHasChildren);
            // const etcNodeInChildren = allNodes.find((n) => n.data.parent === node.id && n.data.nodeType === 'etc');
            // const etcNodeAlreadyExists = nodes.find((n) => n.data.parent === node.id && n.data.nodeType === 'etc');
            // const selectedNodeCanCollapseNonTop = (etcNodeAlreadyExists === undefined) && (etcNodeInChildren !== undefined) && !(nodes.some((n) => {n.data.parent === etcNodeInChildren.id}));
            // setCanCollapseNonTop(selectedNodeCanCollapseNonTop);
            if (node.data.nodeType === 'etc') {
                const { nodes: newNodes, } = (0,_TreeUtils__WEBPACK_IMPORTED_MODULE_16__.translateTreeUtilCommand)('ExpandEtcNode', node, nodes, edges, allNodes, 
                // allEdges,
                edgeOperations.current);
                setNodes(newNodes);
                setEdges((0,_TreeUtils__WEBPACK_IMPORTED_MODULE_16__.createEdgesBasedOnNodes)(newNodes));
                // setEdges(newEdges);
                return;
            }
        }
        else if (highlightNodeTypes.includes(node.data.nodeType)) {
            // disable buttons
            // setCanExpandAll(false);
            // setCanCollapseAll(false);
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
        console.log(`[handleEdgeClick] selectedEdge: ${JSON.stringify(edge)}`);
        setSelectedEdge(edge);
        setIsSelectedEdgeRemovable((0,_TreeUtils__WEBPACK_IMPORTED_MODULE_16__.isEdgeRemoveable)(edge, nodes, edges));
        console.log(`[handleEdgeClick] selectedEdge: ${JSON.stringify(edge)}`);
    };
    const handleExpandAllChildrenButtonClick = () => {
        if (selectedNode /*(&& canExpandAll*/) {
            const { nodes: newNodes, } = (0,_TreeUtils__WEBPACK_IMPORTED_MODULE_16__.translateTreeUtilCommand)('ExpandSubtree', selectedNode, nodes, edges, allNodes, 
            // allEdges,
            edgeOperations.current);
            setNodes(newNodes);
            setEdges((0,_TreeUtils__WEBPACK_IMPORTED_MODULE_16__.createEdgesBasedOnNodes)(newNodes));
            // setEdges(newEdges);
            // setCanExpandAll(false);
        }
        else {
            console.log(`Cannot do expandAll to this node.`);
        }
    };
    const handleCollapseAllButtonClick = () => {
        if (selectedNode /*&& canCollapseAll*/) {
            const { nodes: newNodes, } = (0,_TreeUtils__WEBPACK_IMPORTED_MODULE_16__.translateTreeUtilCommand)('CollapseSubtree', selectedNode, nodes, edges, allNodes, 
            // allEdges,
            edgeOperations.current);
            setNodes(newNodes);
            setEdges((0,_TreeUtils__WEBPACK_IMPORTED_MODULE_16__.createEdgesBasedOnNodes)(newNodes));
            // setEdges(newEdges);
            // setCanCollapseAll(false);
        }
        else {
            console.log('Cannot do collapseAll to this node!');
        }
    };
    const handleCollapseNonTopButtonClick = () => {
        if (selectedNode) {
            const { nodes: newNodes, } = (0,_TreeUtils__WEBPACK_IMPORTED_MODULE_16__.translateTreeUtilCommand)('CollapseNonTop', selectedNode, nodes, edges, allNodes, 
            // allEdges,
            edgeOperations.current);
            setNodes(newNodes);
            setEdges((0,_TreeUtils__WEBPACK_IMPORTED_MODULE_16__.createEdgesBasedOnNodes)(newNodes));
            // setEdges(newEdges);
            // setCanCollapseNonTop(false);
        }
        else {
            console.log('Cannot do collapseNonTop to this node!');
        }
    };
    const handleExpandAllNodesButtonClick = () => {
        const { nodes: newNodes, } = (0,_TreeUtils__WEBPACK_IMPORTED_MODULE_16__.translateTreeUtilCommand)('ExpandAllNodes', null, nodes, edges, allNodes, 
        // allEdges,
        edgeOperations.current);
        setNodes(newNodes);
        setEdges((0,_TreeUtils__WEBPACK_IMPORTED_MODULE_16__.createEdgesBasedOnNodes)(newNodes));
        // setEdges(newEdges);
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
        (0,react_promise_tracker__WEBPACK_IMPORTED_MODULE_7__.trackPromise)(axios__WEBPACK_IMPORTED_MODULE_6___default().post(backendUrl + '/tracking-tree-nodes', request, { withCredentials: true, }).then((response) => {
            console.log(`[refreshSMITree] get response.`);
            const allNodesBackend = response.data.nodes;
            // const refreshedEdges = response.data.edges;
            // console.log(`[refreshSMITree] refreshedNodes: ${JSON.stringify(refreshedNodes)}`);
            setAllNodes(allNodesBackend);
            // setAllEdges(refreshedEdges);
            // const {initialNodes: initialRefreshedNodes, initialEdges: initialRefreshedEdges} = getInitialElements(refreshedNodes, refreshedEdges);
            // const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(initialRefreshedNodes, initialRefreshedEdges);
            const { nodes: layoutedNodes, } = (0,_TreeUtils__WEBPACK_IMPORTED_MODULE_16__.translateTreeUtilCommand)('GetInitial', null, null, null, allNodesBackend, 
            // [],
            edgeOperations.current);
            setNodes(layoutedNodes);
            setEdges((0,_TreeUtils__WEBPACK_IMPORTED_MODULE_16__.createEdgesBasedOnNodes)(layoutedNodes));
            // setEdges(layoutedEdges);
            // console.log(`[refreshSMITree] successfully refreshed nodes and edges.`);
        }).catch((error) => {
            console.log(`[refreshSMITree] error: ${error} when sending post request to ${backendUrl}/tracking-tree-nodes`);
        }));
    };
    const getRecommendations = () => {
        if (allNodes === null) {
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
            // const newAllEdges = [...allEdges, ...recommendedEdges];
            setAllNodes(newAllNodes);
            // setAllEdges(newAllEdges);
            const newNodes = nodes.concat(recommendedNodes);
            const newEdges = edges.concat(recommendedEdges);
            const { nodes: layoutedNodes, } = (0,_TreeUtils__WEBPACK_IMPORTED_MODULE_16__.getLayoutedElements)(newNodes, newEdges);
            setNodes(layoutedNodes);
            setEdges((0,_TreeUtils__WEBPACK_IMPORTED_MODULE_16__.createEdgesBasedOnNodes)(layoutedNodes));
            // setEdges(layoutedEdges);
            setIsRecommendationDisplayed(true);
        }).catch((error) => {
            console.log(`[getRecommendations] error: ${error}`);
        }));
    };
    const disableRecommendations = () => {
        if (allNodes === null) {
            console.log('[disableRecommendations] allNodes or allEdges is null');
            return;
        }
        if ((selectedNode === null || selectedNode === void 0 ? void 0 : selectedNode.data.nodeType) === 'recommended') {
            resetNodeStyles();
            setSelectedNode(null);
        }
        // remove the recommended nodes and edges
        const newAllNodes = allNodes.filter((n) => n.data.nodeType !== 'recommended');
        // const newAllEdges = allEdges.filter((e) => (!e.source.startsWith('rec') && ! e.target.startsWith('rec')));
        setAllNodes(newAllNodes);
        // setAllEdges(newAllEdges);
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
            const { nodes: layoutedNodes, } = (0,_TreeUtils__WEBPACK_IMPORTED_MODULE_16__.removeEdge)(selectedEdge, nodes, edges);
            if (layoutedNodes === null /*|| layoutedEdges === null*/) {
                console.log('[removeSelectedEdge] layoutedNodes or layoutedEdges is null');
                return;
            }
            setNodes(layoutedNodes);
            setEdges((0,_TreeUtils__WEBPACK_IMPORTED_MODULE_16__.createEdgesBasedOnNodes)(layoutedNodes));
            // setEdges(layoutedEdges);
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
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_10__.CDropdownItem, { onClick: handleExpandAllChildrenButtonClick }, "Expand back the collpased children of the selected node"),
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
/* harmony export */   "createEdgesBasedOnNodes": () => (/* binding */ createEdgesBasedOnNodes),
/* harmony export */   "getInitialNodes": () => (/* binding */ getInitialNodes),
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
    // const edgesAfterCleanUp = edges.filter((e) => nodes.some((n) => n.id === e.source) && nodes.some((n) => n.id === e.target));
    // Add nodes and edges into dagreGraph
    nodes.forEach((node) => {
        dagreGraph.setNode(node.id, { width: nodeWidth, height: nodeHeight });
    });
    edges.forEach((edge) => {
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
function getNodeById(nodeId, allNodes) {
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
    backgroundColor: "#ffffff",
    zIndex: -1,
};
function createEtcNode(parentNode, etcThreshold = 3) {
    const etcNode = {
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
function getInitialNodes(allNodesBackend, etcThreshold = 3) {
    // Get initial elements, add etc nodes to allNodesBackend
    // Find the root node
    const rootNode = allNodesBackend.find((n) => n.data.label === 'root');
    if (rootNode === undefined) {
        throw new Error('No root node found');
    }
    // traverse the tree and only keep top 3 children of each node
    const initialNodes = [];
    const queue = [rootNode];
    while (queue.length > 0) {
        const currentNode = queue.shift();
        initialNodes.push(currentNode);
        const topChildrenId = currentNode.data.children.slice(0, etcThreshold);
        const topChildren = topChildrenId.map((id) => getNodeById(id, allNodesBackend));
        topChildren.forEach((child) => { queue.push(child); });
        if (currentNode.data.children.length > etcThreshold) {
            // create Etc node if there are more than 3 children
            const etcNode = createEtcNode(currentNode, etcThreshold);
            initialNodes.push(etcNode);
        }
    }
    return initialNodes;
}
function expandEtcNode(selectedNode, curNodes, allNodesBackend) {
    if (selectedNode === null || curNodes === null || selectedNode.data.nodeType !== 'etc') {
        console.log(`[TreeUtils] Invalid input: selectedNode=${selectedNode}, nodeType=${selectedNode === null || selectedNode === void 0 ? void 0 : selectedNode.data.nodeType}}`);
        return curNodes;
    }
    // replace the etcNode with the original children of the parent
    const etcNode = selectedNode;
    const parentNode = getNodeById(etcNode.data.parent, allNodesBackend);
    const parentChildrenId = parentNode.data.children;
    const parentChildren = parentChildrenId.map((id) => getNodeById(id, allNodesBackend));
    const childrenNotInCurNodes = parentChildren.filter((c) => !curNodes.some((n) => n.id === c.id));
    const newNodesAfterRemoveEtc = curNodes.filter((n) => n.id !== etcNode.id);
    const newNodes = newNodesAfterRemoveEtc.concat(childrenNotInCurNodes);
    return newNodes;
}
function expandAllNodes(allNodesBackend) {
    // change the label back
    const newNodes = allNodesBackend.map((n) => {
        if (n.data.label.endsWith(' (+)')) {
            n.data = { ...n.data, label: n.data.rawData };
        }
        return n;
    });
    return newNodes;
}
function expandSubtree(selectedNode, curNodes, allNodes, etcThreshold = 3) {
    if (selectedNode === null || curNodes === null) {
        console.log(`[TreeUtils] Invalid input: selectedNode=${selectedNode}, curNodes=${curNodes}`);
        return curNodes;
    }
    if (selectedNode.data.nodeType === 'etc') {
        return expandEtcNode(selectedNode, curNodes, allNodes);
    }
    // expand all children of selected node, but only keep top a few children and add etcNode
    const subtreeNodes = [];
    const queue = [selectedNode];
    while (queue.length > 0) {
        const currentNode = queue.shift();
        subtreeNodes.push(currentNode);
        const topChildrenId = currentNode.data.children.slice(0, etcThreshold);
        const topChildren = topChildrenId.map((id) => getNodeById(id, allNodes));
        topChildren.forEach((child) => { queue.push(child); });
        // create Etc node if there are more than 3 children
        if (currentNode.data.children.length > etcThreshold) {
            const etcNode = createEtcNode(currentNode, etcThreshold);
            subtreeNodes.push(etcNode);
        }
    }
    const newNodes = curNodes.concat(subtreeNodes);
    const newNodesAfterLabelChange = newNodes.map((n) => {
        if (n.id === selectedNode.id) {
            n.data = { ...n.data, label: selectedNode.data.rawData };
        }
        return n;
    });
    return newNodesAfterLabelChange;
}
function collapseBackEtcNode(selectedNode, curNodes, allNodes, etcThreshold = 3) {
    if (selectedNode === null || curNodes === null) {
        console.log(`[TreeUtils] Invalid input: selectedNode=${selectedNode}, curNodes=${curNodes}`);
        return curNodes;
    }
    // remove all non-top nodes in children of selectedNode and add etcNode back
    if (selectedNode.data.children.length <= etcThreshold) {
        return curNodes;
    }
    const nonTopChildrenId = selectedNode.data.children.slice(etcThreshold);
    const nonTopChildren = nonTopChildrenId.map((id) => getNodeById(id, allNodes));
    const newNodesAfterRemoveNonTop = curNodes.filter((n) => !nonTopChildren.some((c) => c.id === n.id));
    const etcNode = createEtcNode(selectedNode, etcThreshold);
    const newNodes = newNodesAfterRemoveNonTop.concat(etcNode);
    return newNodes;
}
function collapseSubtree(selectedNode, curNodes, allNodes) {
    if (selectedNode === null || curNodes === null) {
        console.log(`[TreeUtils] Invalid input: selectedNode=${selectedNode}`);
        return curNodes;
    }
    if (selectedNode.data.children.length <= 0) {
        return curNodes;
    }
    // create newNodes with all nodes belonging to subtree of selectedNode removed
    const subtreeNodes = [];
    const queue = [selectedNode];
    while (queue.length > 0) {
        const currentNode = queue.shift();
        subtreeNodes.push(currentNode);
        // get all nodes in curNodes whose parent is currentNode
        const childrenInCurNodes = curNodes.filter((n) => n.data.parent === currentNode.id);
        childrenInCurNodes.forEach((child) => { queue.push(child); });
    }
    console.log(`[collapseSubtree] subtreeNodes=${JSON.stringify(subtreeNodes)}`);
    const newNodesWithoutSelectedNode = curNodes.filter((n) => !subtreeNodes.some((sn) => sn.id === n.id));
    // change the label selectedNode by adding (+)
    selectedNode.data.label = `${selectedNode.data.rawData} (+)`;
    const newNodes = newNodesWithoutSelectedNode.concat(selectedNode);
    return newNodes;
}
function getNewNodesAndEdges(command, selectedNode, curNodes, curEdges, allNodes) {
    console.log(`[getNewNodesAndEdges] command=${command}, selectedNode=${selectedNode === null || selectedNode === void 0 ? void 0 : selectedNode.data.label}`);
    if (allNodes === null) {
        return { nodes: curNodes, edges: curEdges };
    }
    switch (command) {
        case 'GetInitial': {
            const initialNodes = getInitialNodes(allNodes);
            return { nodes: initialNodes, edges: createEdgesBasedOnNodes(initialNodes) };
        }
        case 'ExpandAllNodes': {
            const newNodes = expandAllNodes(allNodes);
            return { nodes: newNodes, edges: createEdgesBasedOnNodes(newNodes) };
        }
        case 'CollapseBackToInitial': {
            const initialNodes = getInitialNodes(allNodes);
            return { nodes: initialNodes, edges: createEdgesBasedOnNodes(initialNodes) };
        }
        case 'ExpandEtcNode': {
            const newNodes = expandEtcNode(selectedNode, curNodes, allNodes);
            return { nodes: newNodes, edges: createEdgesBasedOnNodes(newNodes) };
        }
        case 'ExpandSubtree': {
            const newNodes = expandSubtree(selectedNode, curNodes, allNodes);
            return { nodes: newNodes, edges: createEdgesBasedOnNodes(newNodes) };
        }
        case 'CollapseSubtree': {
            const newNodes = collapseSubtree(selectedNode, curNodes, allNodes);
            return { nodes: newNodes, edges: createEdgesBasedOnNodes(newNodes) };
        }
        case 'CollapseNonTop': {
            const newNodes = collapseBackEtcNode(selectedNode, curNodes, allNodes);
            return { nodes: newNodes, edges: createEdgesBasedOnNodes(newNodes) };
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
function translateTreeUtilCommand(command, selectedNode, curNodes, curEdges, allNodes, 
//allEdges: Edge[]|null,
edgeOperations) {
    // console.log(`[translateTreeUtilCommand] command=${command}`);
    const { nodes: newNodes, edges: newEdges } = getNewNodesAndEdges(command, selectedNode, curNodes, curEdges, allNodes);
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
function createEdgesBasedOnNodes(curNodes) {
    // create edges to connect nodes based on the parent-child relationships
    if (curNodes === null) {
        console.log(`[createEdgesBasedOnNodes] curNodes is null`);
        return [];
    }
    const edges = [];
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



// import { reactIcon } from '@jupyterlab/ui-components';
// import { FlowWidget } from './ReactFlow';





// import { KnowledgeGraphWidget } from './KnowledgeGraph';
/**
 * The command IDs used by the react-widget plugin.
 */
var CommandIDs;
(function (CommandIDs) {
    //   export const react_counter = 'create-react-counter-widget';
    CommandIDs.tangerine = 'create-tangerine-widget';
    //   export const knowledgeGraph = 'create-knowledge-graph-widget'
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
    // async function createKnowledgeGraph() {
    //     const content = new KnowledgeGraphWidget();
    //     const widget = new MainAreaWidget({ content });
    //     widget.title.label = "Knowledge Graph";
    //     if (!widget.isAttached) {
    //        app.shell.add(widget, 'main'); 
    //     }
    // }
    const trans = translator.load('jupyterlab');
    app.commands.addCommand(CommandIDs.tangerine, {
        label: trans.__(`Tracking tree`),
        caption: trans.__(`Tracking tree`),
        execute: createPanel
    });
    palette.addItem({ command: CommandIDs.tangerine, category: 'Tutorial' });
    // app.commands.addCommand(CommandIDs.knowledgeGraph, {
    //     label: trans.__(`Knowledge Graph`),
    //     caption: trans.__(`Knowledge Graph`),
    //     execute: createKnowledgeGraph
    // }
    // );
    // palette.addItem({ command: CommandIDs.knowledgeGraph, category: 'Tutorial' });
    // add menu tab
    const tangerineMenu = new _lumino_widgets__WEBPACK_IMPORTED_MODULE_4__.Menu({ commands: app.commands });
    tangerineMenu.title.label = trans.__("Tangerine");
    mainMenu.addMenu(tangerineMenu, { rank: 280 });
    tangerineMenu.addItem({ command: CommandIDs.tangerine });
    // tangerineMenu.addItem({ command: CommandIDs.knowledgeGraph });
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

/***/ })

}]);
//# sourceMappingURL=lib_index_js.f7700a883c9c4288f254.js.map