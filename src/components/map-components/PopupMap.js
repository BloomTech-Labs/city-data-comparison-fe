import React, { useState, useEffect } from 'react';
import ReactMapGL from 'react-map-gl';
import styled from "styled-components";

const SelectedMapWrapper = styled.div`
        position:fixed;
        z-index:10;
        transition: height 10s;
        transition: width 2s;
        left: ${props => props.posleft+10}px;
        top: ${props => props.postop+10}px;
        display: ${props => props.display};
        width: ${props => props.animated ? "30vh" : "30vh"};
        height: ${props => props.animated ? "50vh" : "50vh"};
    `;
    export  default SelectedMapWrapper
// const PopupMap = (props) => {

//     // const [streetViewPos, setStreetViewPos] = useState({
//     //     posleft: props.posleft,
//     //     postop: props.postop
//     // });
    
//     // useEffect(() => {
//     //     console.log("effect")
//     //     // if(props.lat && props.lng && props.posleft && props.postop){
//     //         setStreetViewPos({
//     //             ...streetViewPos,
//     //             posleft: props.posleft,
//     //             postop: props.postop,
//     //             display: props.display
//     //         })
//     //     },[props])

//     return(    
//         <div className="popupmapparent">
//             <SelectedMapWrapper className="popupmap" id="popupmap" >
//                 {/* <ReactMapGL 
//                     mapStyle='mapbox://styles/mapbox/streets-v11'
//                     {...selectedViewport}
//                     mapboxApiAccessToken={
//                         'pk.eyJ1IjoiYnJ1bmNodGltZSIsImEiOiJjazIwdG80MGkxN3lmM25vaWZ5cThkZDU1In0.uYqrXjiEyUL1mTEO_N5-0w'
//                     }
//                 /> */}
//             </SelectedMapWrapper>
//         </div>
// )
// }

// export default PopupMap;