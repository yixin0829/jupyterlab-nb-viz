import { CButton, CCard, CCardBody, CCollapse } from '@coreui/react';
import React, {useState} from 'react';

export function Legend() {
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
    }
    const legendLongText= {
        flex: "1",
        maxWidth: "200px",
        wordWrap: "break-word" as "break-word"
    }
    const legendCardStyle = {
        display: 'flex', 
        justifyContent: 'left',
        width: '400px',
    }
    const [visible, setVisible] = useState(false);
    
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

    return (
        <div>
            <CButton className="mb-3" color="warning" onClick={() => setVisible(!visible)} aria-expanded={visible} aria-controls="collapseLegend">
                Show legend
            </CButton>
            <div /*style={{ minHeight: '120px'}}*/>
            <CCollapse id="collapseLegend" horizontal visible={visible}>
                <CCard style={legendCardStyle}>
                <CCardBody style={{backgroundColor: '#E1E1E1', opacity: '0.8', padding: '10px', width: "400px"}}>
                    <ul>
                    <li>
                        <div style={ legendItemStyle }>
                            <div style={{...legendNodeStyle, backgroundColor: '#e8ac6e'}}></div>
                            Data Field name (Subset)
                        </div>
                    </li>
                    <li>
                        <div style={legendItemStyle}>
                            <div style={{...legendNodeStyle, backgroundColor: '#9ab75e'}}></div>
                            Plot (Method)
                        </div>
                    </li>
                    <li>
                        <div style={legendItemStyle}>
                            <div style={{...legendNodeStyle, backgroundColor: '#a2d2bc'}}></div>
                            Insight
                        </div>
                    </li>
                    <li>
                        <div style={legendItemStyle}>
                            <div style={{...legendNodeStyle, backgroundColor: '#E8AC6E', opacity: "0.5"}}></div>
                            <span style={legendLongText}>Recommendation column</span>
                        </div>
                    </li>
                    <li>
                        <div style={legendItemStyle}>
                            <div style={legendNodeStyle}>
                                <span style={redStyle}>----------</span>
                            </div>
                            <span style={legendLongText}>
                                Recommendation edge
                                </span>
                        </div>
                    </li>
                </ul>
                </CCardBody>
                </CCard>
            </CCollapse>
            </div>
        </div>
    )
}