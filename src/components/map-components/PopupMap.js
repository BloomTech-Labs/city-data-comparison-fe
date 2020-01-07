import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';
import styled from "styled-components";

const SelectedMapWrapper = styled.div`
z-index:-1;
position:absolute;
width:10vh;
height:10vh;
color:red;
`;
const PopupMap = (props) => {

    const selectedViewport = {
        width: '100%',
        height: '100%',
        latitude: props.lat,
        longitude: props.lng,
        zoom: 1,
        trackResize: false
      };

      const streetViewPos = {
        posleft: props.posleft,
        postop: props.postop
      };

    return(    
        <div className="popupmap" id="popupmap" style={{left:`${streetViewPos.posleft}`, top:`${streetViewPos.postop}`}}>
            <SelectedMapWrapper>
                <ReactMapGL 
                    mapStyle='mapbox://styles/mapbox/streets-v11'
                    {...selectedViewport}
                    mapboxApiAccessToken={
                        'pk.eyJ1IjoiYnJ1bmNodGltZSIsImEiOiJjazIwdG80MGkxN3lmM25vaWZ5cThkZDU1In0.uYqrXjiEyUL1mTEO_N5-0w'
                    }
                />
            </SelectedMapWrapper>
        </div>
)
}

export default PopupMap;