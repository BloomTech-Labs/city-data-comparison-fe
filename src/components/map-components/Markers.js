import React, { useState } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';

import  SelectedMapWrapper  from './PopupMap';

import pin from './icons/pin.png';
import activepin from"./icons/activepin.png";

const Markers = ({ cityMarkers, selected, toggleSelected }) => {

  const [selectedViewport, setSelectedViewport] = useState({
    width: '100%',
    height: '100%',
    latitude: 1,
    longitude: 1,
    zoom: 13,
    trackResize: false
  });

  const [popState, setPopState] = useState ({
    posleft: 1,
    postop: 1,
    display: 'none',
    animation: false
  });

  return (
        <div>
          {cityMarkers.map(cityMarker=> {
            return (
              <Marker key={cityMarker.lat} latitude={cityMarker.lat} longitude={cityMarker.lng}>
                    {/* <Link className='map-marker' to={`/map/${cityMarker.city}${cityMarker.state_id}`}> */}
                  <div
                    onClick={() => toggleSelected(cityMarker)} 
                    onMouseOver={(e) => (Number.isNaN(parseFloat(e.target.getAttribute("latitude"))) || 
                    setSelectedViewport({...selectedViewport, latitude:parseFloat(e.target.getAttribute("latitude")), longitude:parseFloat(e.target.getAttribute("longitude"))}),
                    setPopState({...popState, posleft:e.pageX, postop:e.pageY, display:'block', animation:true}), console.log(popState))}
                    onMouseLeave={(e) => setPopState({...popState, display:'none', animation:false})}
                  >
                      {selected.find(item => item === cityMarker) 
                      ? <img src={activepin} alt={`A map pin indicating ${cityMarker.city}`} latitude={cityMarker.lat} longitude={cityMarker.lng}  />
                      : <img src={pin} alt={`A map pin indicating ${cityMarker.city}`} latitude={cityMarker.lat} longitude={cityMarker.lng}/>}
                  </div>
                  {/* </Link> */}
              </Marker>
              );
        })}
         <SelectedMapWrapper left={popState.posleft} top={popState.postop} display={popState.display} animation={popState.animation}>
            <ReactMapGL 
              mapStyle='mapbox://styles/mapbox/streets-v11'
              {...selectedViewport}
              mapboxApiAccessToken={
                  'pk.eyJ1IjoiYnJ1bmNodGltZSIsImEiOiJjazIwdG80MGkxN3lmM25vaWZ5cThkZDU1In0.uYqrXjiEyUL1mTEO_N5-0w'
              }
            />
          </SelectedMapWrapper>
      </div>
  );
};
export default Markers;