import React from 'react';
import { Marker } from 'react-map-gl';
// import { Link } from 'react-router-dom';

import pin from './pin.png';
import activepin from"./activepin.png";


const Markers = ({ cityMarkers, selected, toggleSelected }) => {

  return (
        <div>
        {cityMarkers.map(cityMarker=> {
            return (
                <Marker key={cityMarker.lat} latitude={cityMarker.lat} longitude={cityMarker.lng}>
                    {/* <Link className='map-marker' to={`/map/${cityMarker.city}${cityMarker.state_id}`}> */}
                    <div onClick={() => toggleSelected(cityMarker)}>
                        {selected.find(item => item === cityMarker) 
                        ? <img src={activepin} alt={`A map pin indicating ${cityMarker.city}`} />
                        : <img src={pin} alt={`A map pin indicating ${cityMarker.city}`} />}
                    </div>

                    {/* </Link> */}
                </Marker>
                );
        })}
    </div>
  );
};
export default Markers;