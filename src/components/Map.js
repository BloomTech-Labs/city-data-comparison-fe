import React, { useState, useEffect } from 'react';
import ReactMapGL from 'react-map-gl';
import styled from "styled-components";
import Markers from "./map-components/Markers"

import DataDisplay from "./map-components/DataDisplay"
import {markerDummyData} from "./map-components/data.js";
import './map-components/Map.scss';


const MapWrapper = styled.div`
  width:100vw;
  height:50vh;
`;


export default function Map() {

  const [cityMarkers, setCityMarkers] = useState([]);
  const [selected, setSelected] = useState([]);
  const [search, setSearch] = useState("");




  useEffect( _ => {
      setCityMarkers(markerDummyData);
      const geo = navigator.geolocation;
      if (!geo) {
        console.log('Geolocation is not supported');
        return;
      }    
      geo.getCurrentPosition(pos => 
          setViewport({
            ...viewport,
            latitude: pos.coords.latitude,
            longitude: pos.coords.longitude
          })      
        );
  }, [])

  const toggleSelected = cityMarker =>  {
    console.log("toggling");
    console.log(cityMarker);
    if (selected.find(item => item === cityMarker)) {
        setSelected(selected.filter(item => item !== cityMarker));
    } else {
        setSelected([...selected, cityMarker]);
    }
}
    const [viewport, setViewport] = useState({
      width: '100%',
      height: '100%',
      latitude: 45,
      longitude: -95,
      zoom: 5,
      trackResize: true
    });

    const onSearch = e => {
      e.preventDefault();
      const found = cityMarkers.find(item => item.city === search)
      setViewport({
        ...viewport,
        longitude: found.lng,
        latitude: found.lat
      })
    }

    const onViewportChange = viewport => {
        setViewport({ ...viewport, width:"100%" });
      };

      return (

        <div className="map-page">
          <div className="map">
              <MapWrapper>
                <ReactMapGL
                    mapStyle='mapbox://styles/mapbox/light-v9'
                    {...viewport}
                    mapboxApiAccessToken={
                    'pk.eyJ1IjoiYnJ1bmNodGltZSIsImEiOiJjazIwdG80MGkxN3lmM25vaWZ5cThkZDU1In0.uYqrXjiEyUL1mTEO_N5-0w'
                    }
                    onViewportChange={onViewportChange}>
                    <Markers 
                      cityMarkers={cityMarkers}
                      selected={selected}
                      toggleSelected={toggleSelected} />
                </ReactMapGL>
              </MapWrapper>
            </div>
            <DataDisplay 
              toggleSelected={toggleSelected}
              selected={selected}
              onSearch={onSearch}
              setSearch={setSearch}
            />
          </div>

      );
    }