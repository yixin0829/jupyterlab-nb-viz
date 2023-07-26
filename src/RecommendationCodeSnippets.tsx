import { CButton, CCard, CCardBody, CCollapse } from '@coreui/react';
import React, {useState} from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/default.css';
import { SrcNbAndCode } from './TreeUtils';

interface CodeHighlightProps {
    language: string;
    code: string;
  }
  
const CodeHighlight: React.FC<CodeHighlightProps> = ({ language, code }) => {
    const highlightedCode = React.useMemo(() => {
      return hljs.highlight(code, { language }).value;
    }, [code, language]);
  
    return (
      <pre>
        <code dangerouslySetInnerHTML={{ __html: highlightedCode }} />
      </pre>
    );
};

interface RecommendationCodeSnippetsProps {
    variableCombination: string[];
    srcNbAndCodeList: SrcNbAndCode[];
}


export function RecommendationCodeSnippets({ variableCombination, srcNbAndCodeList }: RecommendationCodeSnippetsProps) {
    const [visible, setVisible] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);
    
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
    
    const showButtonStyle = {
        height: "40px",
        width: "450px",
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
                    <CCard>
                        <CCardBody style={cardBodyStyle}>
                            <div style={codeDivStyle}>
                                <CodeHighlight language="python" code={getSourceCode()} />
                            </div>
                            <div style={buttonDivStyle}>
                                <CButton style={stepButtonStyle} onClick={gotoPreviousPage}>&laquo;</CButton>
                                <span>Source Notebook: {getSourceNotebook()}.ipynb</span>
                                <CButton style={stepButtonStyle} onClick={gotoNextPage}>&raquo;</CButton>
                            </div>
                            <div style={variableCombinationDivStyle}>
                                <span style={{maxWidth: "100%"}}>Code snipptes for column combination: {JSON.stringify(variableCombination)}</span>
                            </div>
                            <div style={pageNumberDivStyle}>
                                <span>{currentPage+1}/{srcNbAndCodeList.length}</span>
                            </div>
                        </CCardBody>
                    </CCard>
                </CCollapse>
            </div>

        </div>
    );
}