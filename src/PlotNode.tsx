import React, { memo } from 'react';
import { Handle, NodeProps, Position } from 'reactflow';


const PlotNode = ({ data }: NodeProps) => {
    return (
        <div>
            <Handle type="target" position={Position.Top} />
            <div>
              {data.label}
            </div>
            <Handle type="source" position={Position.Bottom} />
        </div>
    );
  }


export default memo(PlotNode);