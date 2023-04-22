import React, { useState } from 'react';
import { Handle, Position, NodeProps } from 'reactflow';

function ExpandableNode({ data }: NodeProps) {
    const [, setLabel] = useState(data?.label);

    function handleClick() {
        console.log('clicked' + data?.label);
        setLabel('-');
    }

    return (
        <div className="expandable-node" onClick={handleClick}>
            <Handle type="target" position={Position.Top} id="a" />
            {data?.label}
            <Handle type="source" position={Position.Bottom} id="b" />
        </div>
    )
}

export default ExpandableNode;