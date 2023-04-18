
import React from 'react';
import { Handle, Position, NodeProps } from 'reactflow';

// const handleStyle = { left: 10 };

function Trapezoid({
  data,
  isConnectable
}: NodeProps) {
  return (
    <>
        <Handle
          type="target"
          position={Position.Bottom}
          isConnectable={isConnectable}
        />
        {data?.label}
        <Handle
          type="source"
          position={Position.Bottom}
          style={{bottom: 50}}
          isConnectable={isConnectable}
        />
      </>
  );
}

export default Trapezoid;