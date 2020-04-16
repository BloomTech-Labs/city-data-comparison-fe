import { getCityColor, getSecondCityColor } from "../../utils/cityColors.js";
import ReactGA from "react-ga";
import * as types from "./actionTypes";
import Axios from "axios";

//Axios call to get data about a city from the api using id
function cityDataAxios(id) {
  return Axios.get(
    `https://api.citrics.io/jkekal6d6e5si3i2ld66d4dl/citydata/${id}`
  );
}

//Axios call to match
function matchCityAxios(city) {
  return Axios.get(
    `https://api.citrics.io/jkekal6d6e5si3i2ld66d4dl/matchcity/${city}`
  );
}

//Thunk to get a city from the API using a citymarker object, then add it to selected cities
export function getCity(cityMarker) {
  return async (dispatch, getState) => {
    //If there are already three cities, dispatch an error.
    if (getState().selected.length >= 3) {
      dispatch({
        type: types.GET_CITY_ERROR,
        payload: "Only compare three cities at a time.",
      });
    } else {
      //Set isFetching in store.
      dispatch({ type: types.GET_CITY });
      try {
        //Make an axios call to the citydata api using the city's id.
        const res = await cityDataAxios(cityMarker.ID);
        //Log selected in Google Analytics.
        ReactGA.event({
          category: "Data",
          action: `selected ${res.data.name_with_com}`,
        });
        let newCity = res.data;
        //Dispatch the city to state.
        dispatch({ type: types.GET_CITY_SUCCESS, payload: newCity });
      } catch (err) {
        //If anything throws an error, catch, console log, and dispatch an error message to state.
        dispatch({
          type: types.GET_CITY_ERROR,
          payload: "Could not fetch city.",
        });
        console.error(err);
      }
    }
  };
}

export const getCities = (arr) => async (dispatch, getState) => {
  dispatch({ type: types.GET_CITIES });
  //CREATES ARRAY OF PROMISED TO BE USED WITH PROMISE.ALL
  let cityPromiseArray = arr.map(async (item) => {
    if (typeof item === "object") {
      let res = await cityDataAxios(item.ID);
      return res.data;
    } else if (typeof item === "string") {
      let suggestionRes = await matchCityAxios(item);
      if (suggestionRes.data) {
        // Suggested city API returns an object with keys rather than an array of suggestions, so we need the key of the first item
        let topSuggestionKey = Object.keys(suggestionRes.data)[0];
        let suggestedCityId = suggestionRes.data[topSuggestionKey].ID;
        let res = await cityDataAxios(suggestedCityId);
        return res.data;
      } else {
        return null;
      }
    }
  });
  //Waits for array of promises to resolve into array of city objects
  let cityObjectArray = await Promise.all(cityPromiseArray);
  //Filters out any nulls
  const cityObjectArrayFiltered = cityObjectArray.filter((item) => item);
  dispatch({
    type: types.GET_CITIES_SUCCESS,
    payload: cityObjectArrayFiltered,
  });

};


export function removeCity(ID) {
  return (dispatch, getState) => {
    dispatch({ type: types.REMOVE_CITY, payload: ID });
  }
}

export function clearAllCities() {
  return (dispatch, getState) => {
    dispatch({ type: types.CLEAR_ALL_CITIES });
  }
}