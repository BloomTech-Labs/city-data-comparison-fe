import ReactGA from "react-ga";
import * as types from "./actionTypes";

import {
  cityDataById,
  matchCityFromString,
  citySuggestion,
} from "../../utils/axiosDataScience.js";

//This thunk either takes a object with a property ID,
//or takes a string to send to an API that will get the closest matching citymarker with ID.
//The ID will then be sent to a DS API to fetch the full-size city object with all of it's relevant info.
//Then the city object with all the information is added to the redux store.
export function getCity(cityMarker) {
  return async (dispatch, getState) => {
    //Set isFetching in store.
    dispatch({ type: types.GET_CITY });

    if (typeof cityMarker === "object") {
      try {
        //Make an axios call to the citydata api using the city's id.
        const res = await cityDataById().get(`/${cityMarker.ID}`);
        //Log selected city in Google Analytics.
        ReactGA.event({
          category: "Data",
          action: `selected ${res.data.name_with_com}`,
        });
        let newCity = res.data;
        //Dispatch the city to state.
        dispatch({ type: types.GET_CITY_SUCCESS, payload: newCity });
      } catch (err) {
        dispatch({
          type: types.GET_CITY_ERROR,
          payload: `Could not find city: ${cityMarker}`,
        });
        console.error(err);
      }
    } else if (typeof cityMarker === "string") {
      //Log that we use the suggestion endpoint
      ReactGA.event({
        category: "Data",
        action: `used suggestion endpoint: ${cityMarker}`,
      });
      //Use the suggestion endpoint
      try {
        let suggestionRes = await matchCityFromString().get(`/${cityMarker}`);
        if (!suggestionRes.data["No Data"]) {
          // Get the key of the first property in the response data
          let topSuggestionKey = Object.keys(suggestionRes.data)[0];
          let suggestedCityId = suggestionRes.data[topSuggestionKey].ID;
          let res = await cityDataById().get(`/${suggestedCityId}`);
          // Dispatch the action to state with the city data object as payload
          dispatch({ type: types.GET_CITY_SUCCESS, payload: res.data });
        } else {
          dispatch({
            type: types.GET_CITY_ERROR,
            payload: `Could not find city: ${cityMarker}`,
          });
        }
      } catch (err) {
        dispatch({
          type: types.GET_CITY_ERROR,
          payload: `Could not find city: ${cityMarker}`,
        });
      }
    }
  };
}

export function getSuggestedCity(inputs) {
  return async (dispatch, getState) => {
    //Set isFetching in store.
    dispatch({ type: types.GET_CITY });
    try {
      //Make an axios call to the citydata api using the city's id.
      const res = await citySuggestion().get(
        `/reverse?temp=${inputs.weather}&mean_income=${inputs.income}&housing=${
          inputs.housing
        }&city_size=${inputs.location}${
          inputs.industry ? `&industry=${inputs.industry}` : ""
        }`
      );
      //Log selected city in Google Analytics.
      ReactGA.event({
        category: "Data",
        action: `selected ${res.data.name_with_com}`,
      });
      let newCity = res.data;
      //Dispatch the city to state.
      dispatch({ type: types.GET_CITY_SUCCESS, payload: newCity });
    } catch (err) {
      dispatch({
        type: types.GET_CITY_ERROR,
        payload: `Could not find city.`,
      });
      console.error(err);
    }
  };
}

//This thunk is used when there are two fields to enter cities into, to quickly select two cities for comparison.
//It takes an array of cities or strings and uses the same endpoints as the thunk above,
//then dispatches an array of the full city data objects to state, replacing any cities that are already in state.
export const cityComparison = (arr) => async (dispatch, getState) => {
  try {
    dispatch({ type: types.CITY_COMPARISON });
    //This maps each value in the input array to an array of promises.
    //Async functions always return promises. The return statement in an async function is the resolve value of the promise.
    let cityPromiseArray = arr.map(async (item) => {
      if (typeof item === "object") {
        //If the value is an object with ID resolve with the full city data object.
        let res = await cityDataById().get(`/${item.ID}`);
        return res.data;
        //If the value is a string,
      } else if (typeof item === "string") {
        ReactGA.event({
          category: "Data",
          action: `used suggestion endpoint: ${item}`,
        });
        //first match a city from the string with the DS search API,
        let suggestionRes = await matchCityFromString().get(`/${item}`);
        if (!suggestionRes.data["No Data"]) {
          let topSuggestionKey = Object.keys(suggestionRes.data)[0];
          let suggestedCityId = suggestionRes.data[topSuggestionKey].ID;
          let res = await cityDataById().get(`/${suggestedCityId}`);
          //then resolve with the full city data object if there is a match,
          return res.data;
        } else {
          //or return null for the item in the new promise array if there is no match.
          return null;
        }
      }
    });
    //Promise.all is a method that iterates through an array of promises.
    //It waits for each promise value to revolve before moving to the next value.
    let cityObjectArray = await Promise.all(cityPromiseArray);
    //Then we filter out any null values.
    const cityObjectArrayFiltered = cityObjectArray.filter((item) => item);
    //Then we dispatch an action containing the array to the reducer.
    dispatch({
      type: types.CITY_COMPARISON_SUCCESS,
      payload: cityObjectArrayFiltered,
    });
  } catch (err) {
    //If any of the axios calls throw an error we will dispatch a failure action to the reducer.
    dispatch({
      type: types.CITY_COMPARISON_ERROR,
      payload: "Could not fetch cities, server error.",
    });
    console.error(err);
  }
};

export function removeCity(ID) {
  return (dispatch, getState) => {
    dispatch({ type: types.REMOVE_CITY, payload: ID });
  };
}

export function clearAllCities() {
  return (dispatch, getState) => {
    dispatch({ type: types.CLEAR_ALL_CITIES });
  };
}
