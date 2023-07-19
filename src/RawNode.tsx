import React, { memo } from 'react';
import { Handle, Position, NodeToolbar, NodeProps } from 'reactflow';

const RawNode = ({ data }: NodeProps ) => {

    return (
        <div>
            <NodeToolbar position={Position.Top}>
                <button>Collapse all children</button>
                <button>Collapse non-top-3 children</button>
                <button>Expand children</button>
            </NodeToolbar>
            <div>{data.label}</div>
            <Handle type="target" position={Position.Top} />
            <Handle type="source" position={Position.Bottom} />
        </div>
    );
};

export default memo(RawNode);
