import React, { useState, useEffect } from 'react';
import ReactMapGL from 'react-map-gl';
import styled from "styled-components";

const SelectedMapWrapper = styled.div`
position:fixed;
width:10vh;
height:10vh;
`;
const PopupMap = (props) => {

    const [selectedViewport, setSelectedViewport] = useState({
        width: '100%',
        height: '100%',
        latitude: props.lng,
        longitude: props.lat,
        zoom: 10,
        trackResize: false
    });

    const [streetViewPos, setStreetViewPos] = useState({
        posleft: props.posleft,
        postop: props.postop
    });

    
    useEffect(() => {
        console.log("effect")
        // if(props.lat && props.lng && props.posleft && props.postop){
            setSelectedViewport({
                ...selectedViewport,
                latitude: props.lat,
                longitude: props.lng,
            })
            setStreetViewPos({
                ...streetViewPos,
                posleft: props.posleft,
                postop: props.postop,
                display: props.display
            })
        },[props])

    return(    
        console.log(selectedViewport.latitude, selectedViewport.longitude, streetViewPos),
        <div className="popupmap" id="popupmap" >
            <SelectedMapWrapper style={{left:`${streetViewPos.posleft}px`, top:`${streetViewPos.postop}px`, display:`${streetViewPos.display}`}}>
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