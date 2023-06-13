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
    return (
        <div style={{backgroundColor: '#E1E1E1', opacity: '0.8', padding: '10px'}}>
            {/* <div style= {{'margin': '10px'}}> */}
                <div style={{display: 'flex', justifyContent: 'center', marginBottom: '-20px' }}>
                    <h2>Legend</h2>
                </div>
                <ul>
                    <li>
                        <div style={ legendItemStyle }>
                            <div style={{...legendNodeStyle, backgroundColor: '#e8ac6e'}}></div>
                            Raw variable
                        </div>
                    </li>
                    <li>
                        <div style={legendItemStyle}>
                            <div style={{...legendNodeStyle, backgroundColor: '#f0c633'}}></div>
                            Secondary variable
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
                </ul>
            {/* </div> */}
        </div>
    )
}