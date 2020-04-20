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
      //Set isFetching in store.
    dispatch({ type: types.GET_CITY });
    try {
      if (typeof cityMarker === "object") {
        //Make an axios call to the citydata api using the city's id.
        const res = await cityDataAxios(cityMarker.ID);
        //Log selected city in Google Analytics.
        ReactGA.event({
          category: "Data",
          action: `selected ${res.data.name_with_com}`,
        });
        let newCity = res.data;
        //Dispatch the city to state.
        dispatch({ type: types.GET_CITY_SUCCESS, payload: newCity });
      } else if (typeof cityMarker === "string") {
        //Log that we use the suggestion endpoint
        ReactGA.event({
          category: "Data",
          action: `used suggestion endpoint: ${cityMarker}`,
        });
        //Use the suggestion endpoint
        let suggestionRes = await matchCityAxios(cityMarker);
        if (!suggestionRes.data["No Data"]) {
          // Get the key of the first property in the response data
          let topSuggestionKey = Object.keys(suggestionRes.data)[0];
          let suggestedCityId = suggestionRes.data[topSuggestionKey].ID;
          let res = await cityDataAxios(suggestedCityId);
          dispatch({ type: types.GET_CITY_SUCCESS, payload: res.data });
        } else {
          dispatch({
            type: types.GET_CITY_ERROR,
            payload: `Could not find city: ${cityMarker}`,
          });
        }
      }
    } catch (err) {
      console.error(err);
    }
  };
}

export const cityComparison = (arr) => async (dispatch, getState) => {
  try {
    dispatch({ type: types.CITY_COMPARISON });
    //CREATES ARRAY OF PROMISED TO BE USED WITH PROMISE.ALL
    let cityPromiseArray = arr.map(async (item) => {
      if (typeof item === "object") {
        let res = await cityDataAxios(item.ID);
        return res.data;
      } else if (typeof item === "string") {
        //Log that we use the suggestion endpoint
        ReactGA.event({
          category: "Data",
          action: `used suggestion endpoint: ${item}`,
        });
        let suggestionRes = await matchCityAxios(item);
        if (!suggestionRes.data["No Data"]) {
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
      type: types.CITY_COMPARISON_SUCCESS,
      payload: cityObjectArrayFiltered,
    });
  } catch (err) {
    dispatch({
      type: types.CITY_COMPARISON_ERROR,
      payload: "Could not fetch cities.",
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
