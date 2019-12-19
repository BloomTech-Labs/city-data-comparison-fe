import React, { useState } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import styled from "styled-components";
import { Link } from 'react-router-dom';

import pin from './pin.png';
import activepin from"./activepin.png";

const SelectedMapWrapper = styled.div`
  width:10vh;
  height:10vh;
`;

const Markers = ({ zoom, cityMarkers, selected, toggleSelected }) => {

    const [selectedViewport, setSelectedViewport] = useState({
        width: '100%',
        height: '100%',
        latitude: 45,
        longitude: -95,
        zoom: 1,
        trackResize: false
      });

  return (
        <div>
        {cityMarkers.map(cityMarker=> {
            return (
                <Marker key={cityMarker.lat} latitude={cityMarker.lat} longitude={cityMarker.lng}>
                    {/* <Link className='map-marker' to={`/map/${cityMarker.city}${cityMarker.state_id}`}> */}
                    <div
                    onClick={() => toggleSelected(cityMarker)} 
                    onMouseEnter={(e) => setSelectedViewport({...selectedViewport, latitude:parseFloat(e.target.getAttribute("latitude")), longitude:parseFloat(e.target.getAttribute("longitude"))})}
                    >
                        {selected.find(item => item === cityMarker) 
                        ? <img src={activepin} alt={`A map pin indicating ${cityMarker.city}`} latitude={cityMarker.lat} longitude={cityMarker.lng}  />
                        : <img src={pin} alt={`A map pin indicating ${cityMarker.city}`} latitude={cityMarker.lat} longitude={cityMarker.lng}  />}
                    </div>

                    {/* </Link> */}
                </Marker>
                );
        })}
        <div className="citymap">
                <SelectedMapWrapper>
                  <ReactMapGL
                    mapStyle='mapbox://styles/mapbox/streets-v11'
                    {...selectedViewport}
                    mapboxApiAccessToken={
                    'pk.eyJ1IjoiYnJ1bmNodGltZSIsImEiOiJjazIwdG80MGkxN3lmM25vaWZ5cThkZDU1In0.uYqrXjiEyUL1mTEO_N5-0w'
                    }
                  />
                </SelectedMapWrapper>
              </div>
    </div>
  );
};
export default Markers;