import React from 'react';
import { Marker } from 'react-map-gl';
import { Link } from 'react-router-dom';

import pin from './pin.png';


const Markers = ({ zoom, cityMarkers }) => {
  return (
        <div>
        {cityMarkers.map(cityMarker=> {
            return (
                <Marker latitude={cityMarker.lat} longitude={cityMarker.lng}>
                    <Link className='map-marker' to={`/map/${cityMarker.city}${cityMarker.state_id}`}>
                        <img src={pin} alt={`A map pin indicating ${cityMarker.city}`} />
                    </Link>
                </Marker>
                );
        })}
    </div>
  );
};
export default Markers;