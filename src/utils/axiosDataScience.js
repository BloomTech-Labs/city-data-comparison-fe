import axios from "axios";

export const cityDataBaseUrl =
  "https://citricsapi.herokuapp.com/jkekal6d6e5si3i2ld66d4dl/citydata/";
//Axios call to get data about a city from the api using id
export function cityDataById() {
  return axios.create({
    baseURL: cityDataBaseUrl,
  });
}

export const matchCityBaseUrl =
  "https://citricsapi.herokuapp.com/jkekal6d6e5si3i2ld66d4dl/matchcity";

export function matchCityFromString() {
  return axios.create({
    baseURL: matchCityBaseUrl,
  });
}

export function citySuggestion() {
  return axios.create({
    baseURL: `https://citricsapi.herokuapp.com/jkekal6d6e5si3i2ld66d4dl`,
  });
}
