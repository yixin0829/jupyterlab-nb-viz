import React, { memo, useState, useEffect } from 'react';
import { Handle, NodeProps, Position } from 'reactflow';
import axios from "axios";


const PlotNode = ({ data }: NodeProps) => {
    const [imageData, setImageData] = useState<string|null>(null);
    const clipTextStyle = {
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap" as "nowrap",
    };
    const codeStyle = {
        fontSize: "12px",
        color: "black"
    }
    // const [imageData, setImageData] = useState<Blob|null>(null);
    
    // useEffect(() => {
    //     const fetchImage = async() => {
    //         try {
    //             const response = await axios.get('http://128.100.10.43:4000/plot');
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
    
    const backendUrl = "http://128.100.10.43:8080/proxy/4000";

    useEffect(() => {
        // Fetch the image data from the server
        axios.get(backendUrl + `/plot/${data.methodId}`, { responseType: 'blob', withCredentials: true })
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
              {/* <div>{data.label}</div> */}
              <div style={clipTextStyle}><code style={codeStyle}>{data.code}</code></div>
              <div>{imageData && <img src={imageData} style={{maxWidth: '120px', maxHeight: '100px'}} onError={handleImageError}/>}</div>           
            <Handle type="source" position={Position.Bottom} />
        </div>
    );
  }
//   <div>{ imageSource && <img src={imageSource} style={{maxWidth: '120px', maxHeight: '100px'}}/>}</div>

export default memo(PlotNode);