import React, { memo, useState, useEffect } from 'react';
import { Handle, NodeProps, Position } from 'reactflow';
import axios from "axios";


const PlotNode = ({ data }: NodeProps) => {
    const [imageData, setImageData] = useState<string|null>(null);
    // const [imageData, setImageData] = useState<Blob|null>(null);
    
    // useEffect(() => {
    //     const fetchImage = async() => {
    //         try {
    //             const response = await axios.get('http://localhost:5000/plot');
    //             if (response.status === 200) {
    //                 const imageBlob = new Blob([response.data], {type: response.headers['content-type']});
    //                 setImageData(imageBlob);
    //                 console.log('[PlotNode] Fetched plot image.', response.data);
    //             } else {
    //                 console.error('[PlotNode] Failed to fetch plot image.');
    //             }
    //         } catch(error) {
    //             console.error('[PlotNode] Error when fetching plot image:', error);
    //         }
    //     }
    //     fetchImage();
    // }, []);

    // const imageSource = useMemo(() => {
    //     if (imageData) {
    //         return URL.createObjectURL(imageData);
    //     } else {
    //         return null;
    //     }
    // }, [imageData]);
    
    useEffect(() => {
        // Fetch the image data from the server
        axios.get(`http://localhost:5000/plot/${data.methodId}`, { responseType: 'blob' })
          .then((response) => {
            const blob = response.data;
            const reader = new FileReader();
            reader.onloadend = () => {
              const dataUrl = reader.result as string;
              setImageData(dataUrl);
            };
            reader.readAsDataURL(blob);
          })
          .catch((error) => {
            console.error(`Error when fecthing images of method_id=${data.methodId}:`, error);
          });
      }, []);

    const handleImageError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
        event.currentTarget.style.display = 'none';
      };
    
    return (
        <div>
            <Handle type="target" position={Position.Top} />
              <div>{data.label}</div>
              <div>{imageData && <img src={imageData} style={{maxWidth: '120px', maxHeight: '100px'}} onError={handleImageError}/>}</div>           
            <Handle type="source" position={Position.Bottom} />
        </div>
    );
  }
//   <div>{ imageSource && <img src={imageSource} style={{maxWidth: '120px', maxHeight: '100px'}}/>}</div>

export default memo(PlotNode);