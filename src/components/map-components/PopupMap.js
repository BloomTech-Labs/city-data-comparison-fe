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
        background-color:#F2F9FD;
        transition:'left 2s, top 2s'
    `;

// these props come from Marker.js when a marker is moused over
const PopupMap = (props) => {

    const [selectedViewport, setSelectedViewport] = useState({
        width: '100%',
        height: '100%',
        latitude: props.lat,
        longitude: props.lng,
        zoom: 13,
        trackResize: false
    });

    // if anyone knows if it's not necesary to pass a state array into mapbox viewport I'd like to know
    useEffect(() => {
            setSelectedViewport({
                ...selectedViewport,
                latitude: props.lat,
                longitude: props.lng,
            })
        },[props])

    return(    
        <div className="popupmapparent">
            <SelectedMapWrapper className="popupmap" id="popupmap"
                style={{
                    display:`block`,
                    // this long ternary is to ensure the popupmap doesn't go offscreen
                    left:`${props.posleft + 25 < document.documentElement.clientWidth - document.documentElement.clientHeight * 0.25 ? props.posleft + 20 : props.posleft - (document.documentElement.clientHeight * 0.25 + 20)}px`, 
                    // this styling is all conditional based on if a marker is being hovered over
                    top:`${props.postop+20}px`,  
                    // the ternary on the transition is to transition away quickly so it's ready to fire again
                    transition:`${props.animate ? 'height .5s .5s, width .5s' : 'height .01s, width .01s'}`, 
                    zIndex:`${props.animate ? '999':'-1'}`, 
                    height:`${props.animate ? '45vh':'1vh'}`,  
                    width:`${props.animate ? '25vh':'5vh'}`
                }}    
            >
            <span
                // this styling is also based on hover 
                // the ternary on the transition is to transition away quickly so it's ready to fire again
                style={{opacity:`${props.animate ? '1':'0'}`, transition: `${props.animate ? 'opacity .5s .5s' : 'opacity .01s'}`, display:'table', margin:'0 auto', color:'black'}}
            >
                {props.city}
            </span>
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