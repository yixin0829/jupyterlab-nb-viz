import React, { memo } from 'react';
import { Handle, NodeProps, NodeToolbar, Position } from 'reactflow';
import { useState } from 'react';


// import { createElement } from 'react';
// const withProps = (WrappedComponent: React.FC<NodeProps>, additionalProps = {}) => {
//     return (props: NodeProps) => {
//         return createElement(WrappedComponent, {
//             ...props,
//             ...additionalProps,
//         });
//     };
// };

const EtcNode = ({ data }: NodeProps, testProp: string) => {
    const [isVisible, setVisible] = useState(false);

    const handleNodeClick = () => {
        setVisible(!isVisible);
    }

    return (
        <div onClick={handleNodeClick}>
            <NodeToolbar isVisible={isVisible} position={Position.Bottom}>
                <button>Expand all</button>
                <button>Collapse all</button>
                <button>{testProp}</button>
            </NodeToolbar>
            <div>{data.label}</div>
            <Handle type="target" position={Position.Top} />
        </div>
    );
  }

// const EtcNode = withProps(BasicEtcNode, { testProp: 'test prop' });

export default memo(EtcNode);