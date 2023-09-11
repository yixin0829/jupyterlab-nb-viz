import { CButton, CCard, CCardBody, CCollapse} from '@coreui/react';
import React, { useState, useEffect } from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/default.css';
import axios from 'axios';
import { usePromiseTracker, trackPromise } from 'react-promise-tracker';
import clipboardCopy from 'clipboard-copy';
import CIcon from "@coreui/icons-react";
import { cilCopy } from "@coreui/icons";

interface CodeHighlightProps {
    language: string;
    code: string;
  }
  
const CodeHighlight: React.FC<CodeHighlightProps> = ({ language, code }) => {
    const highlightedCode = React.useMemo(() => {
      return hljs.highlight(code, { language }).value;
    }, [code, language]);

    const copyCodeToClipboard = () => {
        if (code) {
            clipboardCopy(code);
            alert("The code snippet has been copied to the clipboard!");
        }
    };

    const copyButtonStyle = {
        position: "absolute" as "absolute",
        top: "1rem",
        right: "30px",
        cursor: "pointer",
        border: "none",
        background: "none",
    };
  
    return (
    <div>
        <pre>
            <code dangerouslySetInnerHTML={{ __html: highlightedCode }} />
        </pre>
        <button style={copyButtonStyle} onClick={copyCodeToClipboard}>
           <CIcon icon={cilCopy} size="xl" title={"Copy code"}/> 
        </button>
         
    </div>
      
    );
};

interface RecommendationCodeSnippetsProps {
    variableCombination: string[];
    // srcNbAndCodeList: SrcNbAndCode[];
    datasetId: string;
}

interface SrcNbAndCode {
    sourceNotebook: string;
    sourceCode: string[];
    fromSameDataset: boolean;
    equivalentColumnList: string[];
}


export function RecommendationCodeSnippets({ variableCombination, datasetId }: RecommendationCodeSnippetsProps) {
    const [visible, setVisible] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);
    const [showEquivalentColumns, setShowEquivalentColumns] = useState(true);

    const defaultSrcNbAndCode: SrcNbAndCode = {
        sourceNotebook: "",
        sourceCode: ["# Loading, please wait for a while..."],
        fromSameDataset: false,
        equivalentColumnList: [],
    };
    const [srcNbAndCodeList, setSrcNbAndCodeList] = useState<SrcNbAndCode[]>([defaultSrcNbAndCode,]);
    const { promiseInProgress } = usePromiseTracker();
    const backendUrl = "http://128.100.10.43:8080/proxy/4000";
    
    useEffect(() => {
        setShowEquivalentColumns(!getFromSameDataset());
        console.log(`[RecommendationCodeSnippets] currentPage changed to ${currentPage} (fromSameDataset=${srcNbAndCodeList[currentPage].fromSameDataset}), fromSameDataset=${getFromSameDataset()}`);
    }, [currentPage]);

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
    }


    const getSourceNotebook = () => {
        if (srcNbAndCodeList[currentPage] && srcNbAndCodeList[currentPage].sourceNotebook) {
            return srcNbAndCodeList[currentPage].sourceNotebook;
        }
        else {
            return "";
        }
    }

    const getFromSameDataset = () => {
        if (srcNbAndCodeList[currentPage]) {
            return srcNbAndCodeList[currentPage].fromSameDataset;
        }
        else {
            return false;
        }
    }

    const getEquivalentColumnList = () => {
        if (srcNbAndCodeList[currentPage] && srcNbAndCodeList[currentPage].equivalentColumnList) {
            return srcNbAndCodeList[currentPage].equivalentColumnList;
        }
        else {
            return [];
        }
    }

    const printList = (stringArray: String[]) => {
        // print list of string with , as separator
        let result = "";
        for (let i = 0; i < stringArray.length; i++) {
            result += "\"" + stringArray[i] + "\"";
            if (i < stringArray.length - 1) {
                result += ", ";
            }
        }
        return result;
    }

    useEffect(() => {
        setCurrentPage(0);
        setVisible(false);
    }, [variableCombination]);

    useEffect(() => {
        const fetchDataFromBackend = async () => {
            try {
                const apiUrl = backendUrl + "/recommendation-code-snippets";
                const  request = {
                    variableCombination: JSON.stringify(variableCombination),
                    datasetId: JSON.stringify(datasetId),
                };
                const response = await axios.post(apiUrl, request, {withCredentials: true, });
                const newSrcNbAndCodeList = response.data.srcNotebooksAndCode;
                if (newSrcNbAndCodeList.length === 0) {
                    newSrcNbAndCodeList.push(defaultSrcNbAndCode);
                }
                setSrcNbAndCodeList(newSrcNbAndCodeList);
                setShowEquivalentColumns(!newSrcNbAndCodeList[0].fromSameDataset);
                console.log(`[RecommendationCodeSnippets] set fromSameDataset=${newSrcNbAndCodeList[0].fromSameDataset}`);
                return Promise.resolve();
            } catch (error) {
                console.error("[RecommendationCodeSnippet] ", error);
                return Promise.reject(error);
            }
        };
        trackPromise(fetchDataFromBackend());
    }, [variableCombination]);

    
    const showButtonStyle = {
        height: "40px",
        width: "450px",
    }
    const cardStyle ={
        width: "500px"
    }
    const cardBodyStyle = {
        display: 'flex',
        flexDirection: 'column' as 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E1E1E1',
        width: "500px"
    };
    const codeDivStyle = {
        flex: "1",
        height: "300px",
        overflowY: "scroll" as "scroll",
        width: "100%",
        minHeight: "100px",
        maxHeight: "400px",
    };
    const buttonDivStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        width: "100%",
        marginTop: "5px",
    };
    const stepButtonStyle = {
        height: "20px",
        width: "20px",
        backgroundColor: "white",
        color: "black",
        border: "3px solid #959595",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    };
    const centeredTextDivStyle = {
        display: 'flex',
        justifyContent: 'center',
    };
    const variableCombinationDivStyle = {
        display: 'flex',
        justifyContent: 'center',
        maxWidth: "480px",
        padding: "5px",
        flexDirection: 'column' as 'column',
    };
    const centeredTextSpanStyle = {
        maxWidth: "100%", 
        textAlign: "center" as "center",
    }
    const boldTextSpanStyle = {
        ...centeredTextSpanStyle,
        'fontWeight': 'bold' as 'bold',
    }

    
    if (promiseInProgress) {
        return (<div>
            <CButton className="mb-3" 
            color="warning" 
            disabled={true}
            aria-controls="collapseCodeSnippets"
            style={showButtonStyle}>
                Please wait for fetching code snippets from backend...
            </CButton>
        </div>);
    }
    else {
       return (
            <div>
                <CButton className="mb-3" 
                color="warning" 
                onClick={() => setVisible(!visible)} 
                aria-expanded={visible} 
                aria-controls="collapseCodeSnippets"
                style={showButtonStyle}>
                    Show code snippets of the selected recommendation
                </CButton>
                <div>
                    <CCollapse id="collapseCodeSnippets" horizontal visible={visible}>
                        <CCard style={cardStyle}>
                            <CCardBody style={cardBodyStyle}>
                                <div style={codeDivStyle}>
                                    <CodeHighlight language="python" code={getSourceCode()} />
                                </div>
                                <div style={buttonDivStyle}>
                                    <CButton style={stepButtonStyle} onClick={gotoPreviousPage}>&laquo;</CButton>
                                    <span>{currentPage+1}/{srcNbAndCodeList.length}</span>
                                    <CButton style={stepButtonStyle} onClick={gotoNextPage}>&raquo;</CButton>
                                </div>
                                <div style={variableCombinationDivStyle}>
                                    <span style={centeredTextSpanStyle}>Code snipptes for column combination:</span>
                                    <span style={boldTextSpanStyle}> {printList(variableCombination)}</span>
                                </div>
                                {(showEquivalentColumns) &&
                                (<div style={variableCombinationDivStyle}>
                                    <span style={centeredTextSpanStyle}>Corresponding columns in the code snippet:</span>
                                    <span style={boldTextSpanStyle}> {printList(getEquivalentColumnList())} </span>
                                </div>)}
                                <div style={centeredTextDivStyle}>
                                    <span>Source Notebook: {getSourceNotebook()}.ipynb</span>
                                </div>
                            </CCardBody>
                        </CCard>
                    </CCollapse>
                </div>

            </div>
        ); 
    }
    
}