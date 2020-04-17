import React, { useState, useEffect, useContext } from "react";
import { useSelector, useDispatch } from 'react-redux';

import { getCity, getCities, removeCity } from '../../../redux/actions/cityActions.js';

import ReactMapGL from "react-map-gl";
import styled from "styled-components";
import "./map-components/Map.scss";
import ReactGA from "react-ga";
import Footer from "../../navigation/Footer";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

import Markers from "./map-components/Markers";
import DataDisplay from "./map-components/DataDisplay";
import PopupMap from "./map-components/PopupMap";

import { CityContext } from "../../../contexts/CityContext";
import Axios from "axios";
//maybe convert toggleSelected and selectSearch
const MapWrapper = styled.div`
  width: 100vw;
  height: 60vh;
`;

export default function Map() {
  const {
    cityMarkers,
    setCityMarkers,
    viewport,
    setViewport,
    getBestSuggestion,
    cityIndex,
  } = useContext(CityContext);

  const selected = useSelector(state => state.cityReducer.selected);
  const dispatch = useDispatch();

  // const dispatch = useDispatch()

  const [search, setSearch] = useState("");

  // Google Analytics Events
  useEffect((_) => {
    ReactGA.event({ category: "Map", action: "loaded map" });
  }, []);

  //TAKES SELECTED FROM CONTEXT, WHICH COULD BE SET IN THE LANDING PAGE
  useEffect(
    (_) => {
      ReactGA.event({
        category: "Selected",
        action: "selected a new city using map",
      });
    },
    [selected]
  );

  //TOGGLES MAP MARKERS ONLY
  //redux things
  //getSelected()
  //getCity()
  //maybe convert toggleSelected
  const toggleSelected = (cityMarker) => {
    // if the City is already selected, deselect it
    if (selected.find((item) => item._id === cityMarker.ID)) {
      dispatch(removeCity(cityMarker.ID));
    }
    // Otherwise get the city's data and add it to selected array
    else {
      dispatch(getCity(cityMarker));
    }
  };


  //ONLY WORKS WITH SEARCH INPUT
  //WILL CALL getCity() IF A SEARCH ITEM IS CLICKED...
    //REDUX THINGS
    //getCity()
    //Maybe convert selectSearch
  const selectSearch = (cityMarker) => {
    console.log("selectsearch", cityMarker);
    // Stop function and return if the city is already selected
    if (selected.find((item) => item._id === cityMarker.ID)) {
      return;
    } else {
      dispatch(getCity(cityMarker));
    }
  };

  //WORKS WITH THE SEARCH BAR ON LEFT
  
  const onSearch = (e) => {
    // TODO - More nimble handling on this autofill (use includes, remove commas,
    // handle state abbreviations)
    e.preventDefault();
    const found = cityMarkers.find(
      (item) => item.name.replace(" city", "") === search
    );
    if (found) {
      selectSearch(found);
      // the viewport set below will require zoom handling based on population
      setViewport({
        ...viewport,
        longitude: found.lng,
        latitude: found.lat,
      });
    } else {
      ReactGA.event({
        category: "Data",
        action: `used suggestion endpoint: ${search}`,
      });
      getBestSuggestion(search);
    }
  };

  var maxLong = -51.531963;
  var minLong = -170.872761;
  var minLat = 20.416615;
  var maxLat = 73.347546;

  const onViewportChange = (viewport) => {
    if (viewport.longitude < minLong || viewport.longitude > 150) {
      viewport.longitude = minLong;
      console.log("MIN BOUND");
    } else if (viewport.longitude > maxLong && viewport.longitude < 150) {
      viewport.longitude = maxLong;
      console.log("MAXX BOUND");
    } else if (viewport.latitude < minLat) {
      viewport.latitude = minLat;
    } else if (viewport.latitude > maxLat) {
      viewport.latitude = maxLat;
    }
    setViewport({ ...viewport, width: "100%", height: "100%" });
  };

  return (
    <div className="map-page">
      <div className="loader-animation" timeout={800}>
        <Loader
          type="Plane"
          color="rgb(163, 58, 0)"
          height={350}
          width={350}
          timeout={700}
          style={{ padding: "400px 300px" }}
        />
      </div>
      <PopupMap />
      <div className="map">
        <MapWrapper className="main-map">
          <ReactMapGL
            // mapStyle='mapbox://styles/mapbox/light-v10'
            mapStyle="mapbox://styles/brunchtime/ck5miuybu2in21ipq7j47ey29?optimize=true"
            {...viewport}
            mapboxApiAccessToken={
              "pk.eyJ1IjoiYnJ1bmNodGltZSIsImEiOiJjazIwdG80MGkxN3lmM25vaWZ5cThkZDU1In0.uYqrXjiEyUL1mTEO_N5-0w"
            }
            onViewportChange={onViewportChange}
          >
            <Markers
              cityMarkers={cityMarkers}
              setCityMarkers={setCityMarkers}
              selected={selected}
              toggleSelected={toggleSelected}
              cityIndex={cityIndex}
            />
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
        cityIndex={cityIndex}
      />
      <Footer />
    </div>
  );
}
