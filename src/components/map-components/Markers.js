import React, { useState } from 'react';
import { Marker } from 'react-map-gl';

import  PopupMap  from './PopupMap';

import pin from './icons/pin.png';
import activepin from"./icons/activepin.png";

const Markers = ({ cityMarkers, selected, toggleSelected }) => {

  const [popState, setPopState] = useState ({
    posleft: 1,
    postop: 1,
    display: 'none',
    city: 'none',
    animate: false
  })

  return (
        <div>
          {cityMarkers.map(cityMarker=> {
            return (
              <Marker key={cityMarker.lat} latitude={cityMarker.lat} longitude={cityMarker.lng}>
                    {/* <Link className='map-marker' to={`/map/${cityMarker.city}${cityMarker.state_id}`}> */}
                  <div
                    onClick={() => toggleSelected(cityMarker)} 
                    // these events are to control state when a marker is hovered over
                    onMouseOver={(e) => (Number.isNaN(parseFloat(e.target.getAttribute("latitude"))) || setPopState({...popState, lat:parseFloat(e.target.getAttribute("latitude")), lng:parseFloat(e.target.getAttribute("longitude")),
                    posleft:e.target.getBoundingClientRect().left, postop:e.target.getBoundingClientRect().top, display:'block', city:`${cityMarker.city}, ${cityMarker.state_id}`, animate:true}))}
                    onMouseLeave={(e) => (setPopState({...popState, display:'none', animate:false}))}
                  >
                      {selected.find(item => item === cityMarker) 
                      ? <img src={activepin} alt={`A map pin indicating ${cityMarker.city}`} latitude={cityMarker.lat} longitude={cityMarker.lng}  />
                      : <img src={pin} alt={`A map pin indicating ${cityMarker.city}`} latitude={cityMarker.lat} longitude={cityMarker.lng}/>}
                  </div>
                  {/* </Link> */}
              </Marker>
              );
        })}
        {/* passing state to PopupMap.js */}
        <PopupMap lat={popState.lat} lng={popState.lng} posleft={popState.posleft} postop={popState.postop} display={popState.display} city={popState.city} animate={popState.animate}/>
      </div>
  );
};
export default Markers;