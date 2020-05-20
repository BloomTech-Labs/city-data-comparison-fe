import * as types from "../actions/actionTypes";

let initialState = {
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null,
  isFetching: false,
  error: "",
  favorites: [],
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
    case types.LOGIN:
      return {
        ...state,
        isFetching: true,
      };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        user: { ...action.payload },
        isFetching: false,
      };
    case types.LOGIN_ERROR:
      return {
        ...state,
        user: null,
        error: action.payload,
        isFetching: false,
      };
    case types.LOGOUT:
      return {
        ...state,
        user: null,
        isFetching: false,
        error: "",
      };
    case types.GET_FAVORITES:
      return {
        ...state,
        isFetching: true,
      };
    case types.GET_FAVORITES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        favorites: [...action.payload],
      };
    case types.GET_FAVORITES_ERROR:
      return {
        ...state,
        isFetching: false,
        favorites: [],
        error: action.payload,
      };

    case types.ADD_FAVORITE:
      return {
        ...state,
        isFetching: true,
      };
    case types.ADD_FAVORITE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        favorites: [...state.favorites, action.payload],
      };
    case types.ADD_FAVORITE_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    case types.REMOVE_FAVORITE:
      return {
        ...state,
        isFetching: true,
      };
    case types.REMOVE_FAVORITE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        favorites: state.favorites.filter(
          (favorite) => favorite.city_id !== action.payload
        ),
      };
    case types.REMOVE_FAVORITE_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
  }
}
