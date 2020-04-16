import { getCityColor, getSecondCityColor } from "../../utils/cityColors.js";
import ReactGA from "react-ga";
import * as types from "./actionTypes";
import Axios from "axios";
// export const FETCH_CITIES = "FETCH_CITIES";
// export const FETCH_CITIES_SUCCESS = "FETCH_CITIES_SUCCESS";
// export const SET_CITIES_ERROR = "SET_CITIES_ERROR";

// export const GET_CITIES = "GET_CITIES";
// export const GET_CITIES_SUCCESS = "GET_CITIES_SUCCESS";
// export const GET_CITIES_ERROR = "GET_CITIES_ERROR";

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

  //   // IF BOTH INPUTS ARE OBJECTS
  //   //THEY ARE IN THE CORRECT FORMAT WE WANT
  //   //PUSH THEM INTO STATE
  //   if (typeof arr[0] === "object" && typeof arr[1] === "object") {
  //     let res = await cityDataAxios(arr[0].ID);
  //     let newCity = res.data;
  //     newCity.color = getCityColor(getState().selected);

  //   }
  //     cityDataAxios(arr[0].ID)
  //       .then((res) => {
  //         let newCity = res.data;
  //         newCity.color = getCityColor(selected);
  //         ReactGA.event({
  //           category: "Data",
  //           action: `selected ${newCity.name_with_com}`,
  //         });
  //         output.push(newCity);
  //       })
  //       .then((res) =>
  //         cityDataAxios(arr[1].ID).then((res) => {
  //           let newCity = res.data;
  //           ReactGA.event({
  //             category: "Data",
  //             action: `selected ${newCity.name_with_com}`,
  //           });
  //           newCity.color = getSecondCityColor(output, selected);
  //           output.push(newCity);
  //           //   setSelected([...selected, ...output]);
  //           dispatch({ type: types.GET_CITIES_SUCCESS, payload: output });
  //         })
  //       )
  //       .catch((err) => {
  //         dispatch({ type: types.GET_CITIES_ERROR, payload: err });
  //         console.log("getCity error", err);
  //       });

  //   //IF ONE IS A STRING AND ONE IS OBJECT
  //   //SEND STRING TO DS API MATCH TO THEIR OBJECTS
  //   //THEY SEND BACK A LIST OF MATCHES, WE GRAB THE FIRST ITEM
  //   //WE RECURSIVELY SEND OUR 2 CITIES BACK INTO THE FUNCTION
  //   //IF NO MATCH WITH THE STRING TO DS API, JUST SEND THE OBJECT
  //   if (typeof arr[0] === "object" && typeof arr[1] === "string") {
  //     ReactGA.event({ category: "Data", action: `searched for "${arr[1]}"` });

  //     matchCityAxios(arr[1])
  //       .then((res) => {
  //         if (res.data) {
  //           // get the best (first) suggestion and add it to state
  //           let suggestionKey = Object.keys(res.data)[0];
  //           let foundIndex = res.data[suggestionKey];
  //           getCities([arr[0], foundIndex]);
  //         } else {
  //           getCity(arr[0]);
  //         }
  //       })
  //       .catch((err) => console.log("getCity error", err));
  //   }

  //   if (typeof arr[0] === "string" && typeof arr[1] === "object") {
  //     ReactGA.event({ category: "Data", action: `searched for "${arr[0]}"` });
  //     matchCityAxios(arr[0])
  //       .then((res) => {
  //         if (res.data) {
  //           // get the best (first) suggestion and add it to state
  //           let suggestionKey = Object.keys(res.data)[0];
  //           let foundIndex = res.data[suggestionKey];
  //           getCities([arr[1], foundIndex]);
  //         } else {
  //           getCity(arr[1]);
  //         }
  //       })
  //       .catch((err) => console.log("getCity error", err));
  //   }

  //   //
  //   // if both strings
  //   if (typeof arr[0] === "string" && typeof arr[1] === "string") {
  //     getBestSuggestions(arr);
  //   }
  // };

  // // const getBestSuggestion = (search) => {
  // //   matchCityAxios(search)
  // //     .then((res) => {
  // //       console.log("suggest res", res);
  // //       // if there's a suggestion
  // //       if (res.data) {
  // //         // get the best (first) suggestion and add it to state
  // //         let suggestionKey = Object.keys(res.data)[0];
  // //         if (selected.find((item) => item._id === res.data[suggestionKey].ID)) {
  // //           return;
  // //         }
  // //         getCity(res.data[suggestionKey]);
  // //       }
  // //       // maybe add an error message if nothing is found
  // //     })
  // //     .catch((err) => console.log("suggestion error", err));
  // // };

  // const getBestSuggestions = (arr) => {
  //   const output = [];
  //   ReactGA.event({ category: "Data", action: `searched  for "${arr[0]}"` });
  //   ReactGA.event({ category: "Data", action: `searched for "${arr[1]}"` });

  //   matchCityAxios(arr[0])
  //     .then((res) => {
  //       // if there's a suggestion
  //       if (res.data) {
  //         // get the best (first) suggestion and add it to state
  //         let suggestionKey = Object.keys(res.data)[0];
  //         let newCity = res.data[suggestionKey];
  //         output.push(newCity);
  //       }
  //       // maybe add an error message if nothing is found
  //     })
  //     .then((res) =>
  //       matchCityAxios(arr[1]).then((res) => {
  //         // if there's a suggestion
  //         if (res.data) {
  //           // get the best (first) suggestion and add it to state
  //           let suggestionKey = Object.keys(res.data)[0];
  //           let newCity2 = res.data[suggestionKey];
  //           output.push(newCity2);
  //         }
  //         // maybe add an error message if nothing is found
  //       })
  //     )
  //     .then((res) => getCities(output))
  //     .catch((err) => console.log("suggestion error", err));
};
