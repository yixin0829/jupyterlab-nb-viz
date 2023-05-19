import React, { memo } from 'react';
import { Handle, NodeProps, Position } from 'reactflow';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';


const InsightNode = ({ data }: NodeProps) => {
    return (
        <div>
            <ReactMarkdown>{data.label}</ReactMarkdown>
            <Handle type="target" position={Position.Top} />
        </div>
    );
  }


export default memo(InsightNode);