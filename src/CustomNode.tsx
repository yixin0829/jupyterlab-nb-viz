import React from 'react';
import { Handle, Position, NodeProps } from 'reactflow';

const CustomNode = ({
    data,
    isConnectable,
    targetPosition = Position.Top,
    sourcePosition = Position.Bottom
  }: NodeProps) => {
    return (
      <>
        <Handle
          type="target"
          position={targetPosition}
          isConnectable={isConnectable}
        />
        {data?.label}
        <Handle
          type="source"
          position={sourcePosition}
          isConnectable={isConnectable}
        />
      </>
    );
  };

export default CustomNode;