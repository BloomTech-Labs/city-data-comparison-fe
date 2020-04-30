import axios from "axios";

export const cityDataBaseUrl = 'https://labs23-test.herokuapp.com';
//Axios call to get data about a city from the api using id
export function cityDataById() {
    return axios.create({
        baseURL: cityDataBaseUrl
    })
}

export const matchCityBaseUrl = 'https://api.citrics.io/jkekal6d6e5si3i2ld66d4dl/matchcity';
export function matchCityFromString() {
    return axios.create({
        baseURL: matchCityFromString
    })
}