import React, { memo, useState } from 'react';
import { Handle, NodeProps, Position } from 'reactflow';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';


const InsightNode = ({ data }: NodeProps) => {
    let displayInsight = data.label;
    const displayMaxLength = 100;
    if(displayInsight.length > displayMaxLength) {
        let truncatedInsight = data.label.substring(0, 100);
        const lastSpaceIndex = truncatedInsight.lastIndexOf(' ');
        if (lastSpaceIndex !== -1 && lastSpaceIndex !== truncatedInsight.length - 1) {
            truncatedInsight = truncatedInsight.substring(0, lastSpaceIndex);
        }
        displayInsight = truncatedInsight + '...';
    }

    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = () => { setIsHovered(true); }
    const handleMouseLeave = () => { setIsHovered(false); }

    return (
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{ position: 'relative' }}>
            <Handle type="target" position={Position.Top} />
            <ReactMarkdown>{displayInsight}</ReactMarkdown>
                {isHovered && (<div
                style={{
                  position: 'absolute',
                  top: '-40px',
                  left: '0%',
                  backgroundColor: '#ffffff',
                  padding: '8px',
                  width: "auto",
                  height: "auto",
                  minWidth: "130px",
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                }}
              >
                <ReactMarkdown>{data.label}</ReactMarkdown>
              </div>)}
        </div>
    );
  }


export default memo(InsightNode);