import ReactGA from "react-ga";
import * as types from "./actionTypes";

export function getUser() {
  return async (dispatch) => {
    try {
      dispatch(types.GET_USER);

      dispatch(types.GET_USER_SUCCESS, payload);
    } catch (err) {
      console.error(err);
      dispatch(types.GET_USER_ERROR);
    }
  };
}

export function editUser() {
  return async (dispatch) => {
    try {
      dispatch(types.EDIT_USER);

      dispatch(types.EDIT_USER_SUCCESS, payload);
    } catch (err) {
      console.error(err);
      dispatch(types.EDIT_USER_ERROR);
    }
  };
}

export function getFavorites() {
  return async (dispatch) => {
    try {
      dispatch(types.GET_FAVORITES);

      dispatch(types.GET_FAVORITES_SUCCESS, payload);
    } catch (err) {
      console.error(err);
      dispatch(types.GET_FAVORITES_ERROR);
    }
  };
}

export function addFavorite() {
  return async (dispatch) => {
    try {
      dispatch(types.ADD_FAVORITE);

      dispatch(types.ADD_FAVORITE_SUCCESS, payload);
    } catch (err) {
      console.error(err);
      dispatch(types.ADD_FAVORITE_ERROR);
    }
  };
}

export function removeFavorite() {
  return async (dispatch) => {
    try {
      dispatch(types.REMOVE_FAVORITE);

      dispatch(types.REMOVE_FAVORITE_SUCCESS, payload);
    } catch (err) {
      console.error(err);
      dispatch(types.REMOVE_FAVORITE_ERROR);
    }
  };
}
