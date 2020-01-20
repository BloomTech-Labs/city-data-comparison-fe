import React, { useState, useEffect, useContext } from 'react';
import ReactMapGL from 'react-map-gl';
import styled from "styled-components";
import './map-components/Map.scss';
import ReactGA from "react-ga"

import Markers from "./map-components/Markers";
import MapFooter from "./map-components/MapFooter";
import DataDisplay from "./map-components/DataDisplay";
import PopupMap from "./map-components/PopupMap"

import { CityContext } from '../contexts/CityContext';
import Axios from 'axios';

const MapWrapper = styled.div`
  width:100vw;
  height:60vh;
`;

export default function Map() {

  const { cityMarkers, selected, setSelected, viewport, setViewport } = useContext(CityContext)

  
  const [search, setSearch] = useState("");


  // Google Analytics Events
  useEffect( _ => {
    ReactGA.event({ category: 'Map', 
    action: 'loaded map' });
  }, [])

  useEffect( _ => {
    ReactGA.event({ category: 'Selected', 
    action: 'selected a new city using map' });
  }, [selected])

  const toggleSelected = cityMarker =>  {

    // if the City is alraedy selected, deselect it
    if (selected.find(item => item._id === cityMarker.ID)) {
        setSelected(selected.filter(item => item._id !== cityMarker.ID));
    } 
    // Outerwise get the city's data and add it to selected array
    else {
      Axios
      .get(`http://api.citrics.io/jkekal6d6e5si3i2ld66d4dl/citydata/${cityMarker.ID}`)
      .then(res => {
        console.log('DATA IS', res.data)
        setSelected([...selected, res.data])
      })
    }
}

const selectSearch = cityMarker =>  {
  // Stop function and return if the city is already selected
  if (selected.find(item => item._id === cityMarker.ID)) {
      return;
  } else {
      setSelected([...selected, cityMarker]);
  }
}

    const onSearch = e => {

      // TODO - More nimble handling on this autofill (use includes, remove commas,
      // handle state abbreviations)
      e.preventDefault();
      const found = cityMarkers.find(item => item.name.replace(" city", "") === search)
      selectSearch(found);
      setViewport({
        ...viewport,
        longitude: found.lng,
        latitude: found.lat
      })
      
    }

    const onViewportChange = viewport => {
        setViewport({ ...viewport, width:"100%", height:"100%" });
      };

      return (

        <div className="map-page">
          <PopupMap/>
          <div className="map">
              <MapWrapper className="main-map">
                <ReactMapGL
                    mapStyle='mapbox://styles/mapbox/streets-v11'
                    {...viewport}
                    mapboxApiAccessToken={
                    'pk.eyJ1IjoiYnJ1bmNodGltZSIsImEiOiJjazIwdG80MGkxN3lmM25vaWZ5cThkZDU1In0.uYqrXjiEyUL1mTEO_N5-0w'
                    }
                    onViewportChange={onViewportChange}
                    >
                    
                    <Markers 
                      cityMarkers={cityMarkers}
                      selected={selected}
                      toggleSelected={toggleSelected} />
                </ReactMapGL>
              </MapWrapper>
            </div>
            <DataDisplay 
              selectSearch={selectSearch}
              toggleSelected={toggleSelected}
              selected={selected}
              onSearch={onSearch}
              setSearch={setSearch}
              cityMarkers={cityMarkers}
              search={search}
              viewport={viewport}
              setViewport={setViewport}
            />
          <MapFooter />
          </div>
      );
    }