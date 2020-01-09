import React, { useState, useEffect } from 'react';
import ReactMapGL from 'react-map-gl';
import styled from "styled-components";

const PopupMap = (props) => {

    const SelectedMapWrapper = styled.div`
        position:fixed;
        top:100px;
        left:200px;
        width: 25vh;
        height: 45vh;
        display:none;
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
        postop: props.postop,
        display: props.city,
        city: props.city
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
                display: props.display,
                city: props.city
            })
        },[props])

    return(    
        console.log(selectedViewport.latitude, selectedViewport.longitude, streetViewPos),
        <div className="popupmapparent">
            <SelectedMapWrapper className="popupmap" id="popupmap"  style={{left:`${streetViewPos.posleft+20}px`, top:`${streetViewPos.postop+20}px`, display:`${streetViewPos.display}`}}>
            <span>{streetViewPos.city}</span>
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