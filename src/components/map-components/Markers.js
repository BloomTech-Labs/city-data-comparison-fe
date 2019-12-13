import React from 'react';
import { Marker } from 'react-map-gl';
import { Link } from 'react-router-dom';

import pin from './pin.png';


const Markers = ({ zoom, cityMarkers }) => {
  console.log(cityMarker);
  return (
        <div>
        {cityMarkers.map(cityMarker=> {
            return (
                <Marker latitude={Math.random()*(48-42+1)+42} longitude={Math.random()*(-97+91-1)-91}>
                    <Link className='map-marker' to={`/location/${cityMarker.name}`}>
                        <img src={pin} />
                    </Link>
                </Marker>
                );
        })}
    </div>
  );
};
export default Markers;