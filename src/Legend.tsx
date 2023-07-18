import React from 'react';

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
        maxWidth: "150px",
        wordWrap: "break-word" as "break-word"
    }
    
    return (
        <div style={{backgroundColor: '#E1E1E1', opacity: '0.8', padding: '10px', width: "250px"}}>
            <div style={{display: 'flex', justifyContent: 'center', marginBottom: '-20px' }}>
                <h2>Legend</h2>
            </div>
            <ul>
                <li>
                    <div style={ legendItemStyle }>
                        <div style={{...legendNodeStyle, backgroundColor: '#e8ac6e'}}></div>
                        Column name
                    </div>
                </li>
                <li>
                    <div style={legendItemStyle}>
                        <div style={{...legendNodeStyle, backgroundColor: '#9ab75e'}}></div>
                        Method
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
                        <div style={legendNodeStyle}>
                            <span style={redStyle}>-----</span>x/y<span style={redStyle}>-----</span>
                        </div>
                        <span style={legendLongText}>
                            Recommendation edge: this column combination appears in y notebooks for x times.
                            </span>
                    </div>
                </li>
            </ul>
        </div>
    )
}