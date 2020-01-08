import React, { useState, useEffect } from 'react';
import ReactMapGL from 'react-map-gl';
import styled from "styled-components";

const PopupMap = (props) => {

    const SelectedMapWrapper = styled.div`
        position:fixed;
        transition: height 10s;
        transition: width 2s;
        width: ${props => props.animation ? "30vh" : "15vh"};
        height: ${props => props.animation ? "50vh" : "20vh"};
    `;

    const [selectedViewport, setSelectedViewport] = useState({
        width: '100%',
        height: '100%',
        latitude: props.lng,
        longitude: props.lat,
        zoom: 13,
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
        <div className="popupmapparent">
            <SelectedMapWrapper className="popupmap" id="popupmap"  style={{left:`${streetViewPos.posleft+10}px`, top:`${streetViewPos.postop+10}px`, display:`${streetViewPos.display}`}}>
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