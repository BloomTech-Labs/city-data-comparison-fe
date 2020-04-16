import * as types from "../actions/actionTypes";

export const initialState = {
  isFetching: false,
  selected: [],
  viewport: {
    width: "100%",
    height: "100%",
    longitude: -96.7,
    latitude: 38.55,
    zoom: 3.55,
    minZoom: 3.5,
    maxZoom: 10,
    trackResize: true,
  },
  error: "",
};

export default function cityReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_CITY:
      return {
        ...state,
        isFetching: true,
        error: "",
      };

    case types.GET_CITY_SUCCESS: 
      return {
        ...state,
        isFetching: false,
        selected: [...state.selected, action.payload],
        error: "",
      };
    case types.GET_CITY_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };

    case types.GET_CITIES:
      return {
        ...state,
        isFetching: true,
        error: "",
      };
    case types.GET_CITIES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        selected: [...state.selected, ...action.payload],
        error: "",
      };
    case types.GET_CITIES_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };

    default:
      return state;
  }
}
