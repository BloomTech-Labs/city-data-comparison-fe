import {getCityColor, getSecondCityColor} from "../../utils/cityColors.js";
import ReactGA from "react-ga";
import * as types from "./actionTypes";

// export const FETCH_CITIES = "FETCH_CITIES";
// export const FETCH_CITIES_SUCCESS = "FETCH_CITIES_SUCCESS";
// export const SET_CITIES_ERROR = "SET_CITIES_ERROR";

// export const GET_CITIES = "GET_CITIES";
// export const GET_CITIES_SUCCESS = "GET_CITIES_SUCCESS";
// export const GET_CITIES_ERROR = "GET_CITIES_ERROR";



export function getCity(cityMarker) {
    return (dispatch, getState) => {
      dispatch({type: types.FETCH_CITY})
      const selected = getState().selected
      if (selected.length >= 3) {
        return;
      }
      Axios.get(
        `https://api.citrics.io/jkekal6d6e5si3i2ld66d4dl/citydata/${cityMarker.ID}`
      )
        .then((res) => {
          ReactGA.event({
            category: "Data",
            action: `selected ${res.data.name_with_com}`,
          });
          let newCity = res.data;
          newCity.color = getCityColor(selected);
          setSelected([...selected, newCity]);
        })
        .catch((err) => console.log("getCity error", err));
      };
}

export const getCities = (arr) => (dispatch) => {
    

  let output = [];
  // if both objects
  if (typeof arr[0] === "object" && typeof arr[1] === "object")
    Axios.get(
      `https://api.citrics.io/jkekal6d6e5si3i2ld66d4dl/citydata/${arr[0].ID}`
    )
      .then((res) => {
        let newCity = res.data;
        newCity.color = getCityColor();
        ReactGA.event({
          category: "Data",
          action: `selected ${newCity.name_with_com}`,
        });
        output.push(newCity);
      })
      .then((res) =>
        Axios.get(
          `https://api.citrics.io/jkekal6d6e5si3i2ld66d4dl/citydata/${arr[1].ID}`
        ).then((res) => {
          let newCity = res.data;
          ReactGA.event({
            category: "Data",
            action: `selected ${newCity.name_with_com}`,
          });
          newCity.color = getSecondCityColor(output);
          output.push(newCity);
          setSelected([...selected, ...output]);
        })
      )
      .catch((err) => console.log("getCity error", err));

  if (typeof arr[0] === "object" && typeof arr[1] === "string") {
    ReactGA.event({ category: "Data", action: `searched for "${arr[1]}"` });
    Axios.get(
      `https://api.citrics.io/jkekal6d6e5si3i2ld66d4dl/matchcity/${arr[1]}`
    )
      .then((res) => {
        if (res.data) {
          // get the best (first) suggestion and add it to state
          let suggestionKey = Object.keys(res.data)[0];
          let foundIndex = res.data[suggestionKey];
          getCities([arr[0], foundIndex]);
        } else {
          getCity(arr[0]);
        }
      })
      .catch((err) => console.log("getCity error", err));
  }

  if (typeof arr[0] === "string" && typeof arr[1] === "object") {
    ReactGA.event({ category: "Data", action: `searched for "${arr[0]}"` });
    Axios.get(
      `https://api.citrics.io/jkekal6d6e5si3i2ld66d4dl/matchcity/${arr[0]}`
    )
      .then((res) => {
        if (res.data) {
          // get the best (first) suggestion and add it to state
          let suggestionKey = Object.keys(res.data)[0];
          let foundIndex = res.data[suggestionKey];
          getCities([arr[1], foundIndex]);
        } else {
          getCity(arr[1]);
        }
      })
      .catch((err) => console.log("getCity error", err));
  }

  // if both strings
  if (typeof arr[0] === "string" && typeof arr[1] === "string") {
    getBestSuggestions(arr);
  }
};
