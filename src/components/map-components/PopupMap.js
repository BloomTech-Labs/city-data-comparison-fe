import React, { useState, useEffect } from 'react';
import ReactMapGL from 'react-map-gl';
import styled from "styled-components";

export const SelectedMapWrapper = styled.div`
        position:fixed;
        width: 25vh;
        height: 45vh;
        display: none;
        border: 2px solid darkgrey;
        padding-bottom:20px;
        background-color:lightgrey;
        transition:'left 2s, top 2s'
    `;

const PopupMap = (props) => {

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
        console.log(props.animate),
        <div className="popupmapparent">
            <SelectedMapWrapper className="popupmap" id="popupmap"
                style={{
                    left:`${streetViewPos.posleft+20}px`, 
                    top:`${streetViewPos.postop+20}px`, 
                    display:`block`, transition:'height .5s .5s, width .5s', 
                    zIndex:`${props.animate ? '999':'-1'}`, 
                    height:`${props.animate ? '45vh':'1vh'}`,  
                    width:`${props.animate ? '25vh':'1vh'}`
                }}    
            >
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