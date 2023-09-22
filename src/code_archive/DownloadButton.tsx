import React from 'react';
import { useReactFlow, getRectOfNodes, getTransformForBounds } from 'reactflow';
import { toPng } from 'html-to-image';
import CIcon from '@coreui/icons-react';
import { cilSave } from '@coreui/icons';

function downloadImage(dataUrl: string) {
  const a = document.createElement('a');

  a.setAttribute('download', 'reactflow.png');
  a.setAttribute('href', dataUrl);
  a.click();
}

const imageWidth = 1024;
const imageHeight = 1024;

export function DownloadButton() {
  const { getNodes } = useReactFlow();
  const iconStyle = {
    marginLeft: "5px",
    marginRight: "5px",
    cursor: "pointer"
  }

  const onClick = () => {
    const nodesBounds = getRectOfNodes(getNodes());
    const transform = getTransformForBounds(nodesBounds, imageWidth, imageHeight, 0.5, 2);

    const viewPort = document.querySelector('.react-flow__viewport')! as HTMLElement;

    toPng(viewPort, {
      backgroundColor: 'white',
      width: imageWidth,
      height: imageHeight,
      style: {
        width: imageWidth.toString(),
        height: imageHeight.toString(),
        transform: `translate(${transform[0]}px, ${transform[1]}px) scale(${transform[2]})`,
      },
    }).then(downloadImage);
  };

  return (
    <CIcon icon={cilSave} style={iconStyle} size="xxl" onClick={onClick} title={"Save the tree as an image"} />
    );
}

export default DownloadButton;
