import React, { useEffect, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getCity, removeCity } from "../../../redux/actions/cityActions.js";

import ReactMapGL from "react-map-gl";
import styled from "styled-components/macro";
import "./Map.scss";
import ReactGA from "react-ga";
import Footer from "../../navigation/Footer";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

import Markers from "./map/Markers";
import DataDisplay from "./DataDisplay";
import PopupMap from "./map/PopupMap";

import { CityContext } from "../../../contexts/CityContext";

import { actionColor } from "../../../utils/cityColors.js";
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
    cityIndex,
  } = useContext(CityContext);

  const selected = useSelector((state) => state.cityReducer.selected);
  const dispatch = useDispatch();

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
    <div className="comparison-page-container">
      <div className="loader-animation" timeout={800}>
        <Loader
          type="Plane"
          color={actionColor}
          height={350}
          width={350}
          timeout={700}
          style={{ padding: "275px 300px" }}
        />
      </div>
      <div className="map">
        <PopupMap />
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
        toggleSelected={toggleSelected}
        selected={selected}
        cityMarkers={cityMarkers}
        viewport={viewport}
        setViewport={setViewport}
        cityIndex={cityIndex}
      />
      <Footer />
    </div>
  );
}
