import React from 'react';
// import { useState } from 'react';
import { BaseEdge, EdgeLabelRenderer, EdgeProps, getBezierPath } from 'reactflow';


export default function RecommendEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
  label,
  data,
  markerEnd,
}: EdgeProps) {
    const [edgePath, labelX, labelY] = getBezierPath({
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

    return (
        <>
        <BaseEdge path={edgePath} markerEnd={markerEnd} style={style}  />
        <EdgeLabelRenderer>
            <div
            style={{
                position: 'absolute',
                transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
                // everything inside EdgeLabelRenderer has no pointer events by default
                // if you have an interactive element, set pointer-events: all
                pointerEvents: 'all',
            }}
            >
                <div /*onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleMouseEnter}*/>
                    {label}
                </div>
                {/* {isHovered && (<div
                  style={{
                    position: 'absolute',
                    top: '-40px',
                    left: '10px',
                    backgroundColor: '#ffffff',
                    padding: '2px',
                    width: "auto",
                    height: "auto",
                    minWidth: "130px",
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                    zIndex: "100",
                    fontSize: "8px",
                  }}
                >
                    <ul>
                        {data.sourceNotebooks.map((nbId: string, index: string) => (<li key={index}>{nbId}</li>))}
                    </ul>
                </div>)} */}
            </div>
        </EdgeLabelRenderer>
        </>
  );
}
