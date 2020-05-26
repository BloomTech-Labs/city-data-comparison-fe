import * as types from "./actionTypes";
import { axiosAuth } from "../../utils/axiosAuth.js";

export function login(credentials) {
  return async (dispatch) => {
    try {
      dispatch({ type: types.LOGIN, payload: "" });
      let res = await axiosAuth().post("/auth/login", credentials);
      if (res.data.token) {
        localStorage.setItem("jwt", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        dispatch({ type: types.LOGIN_SUCCESS, payload: res.data.user });
      } else {
        dispatch({ type: types.LOGIN_ERROR, payload: "User does not exist." });
      }
    } catch (err) {
      if (err.response.status === 401) {
        dispatch({
          type: types.LOGIN_ERROR,
          payload: "Please check your credentials.",
        });
      } else {
        dispatch({ type: types.LOGIN_ERROR, payload: "Server error." });
      }
    }
  };
}

export function signup(credentials) {
  return async (dispatch) => {
    try {
      dispatch({ type: types.LOGIN, payload: "" });
      let res = await axiosAuth().post("/auth/register", credentials);
      if (res.data.token) {
        localStorage.setItem("jwt", res.data.token);
        localStorage.setItem("user", res.data.user);
        dispatch({ type: types.LOGIN_SUCCESS, payload: res.data.user });
      } else {
        dispatch({ type: types.LOGIN_ERROR, payload: "User does not exist." });
      }
    } catch (err) {
      if (err.response.status === 409) {
        dispatch({ type: types.LOGIN_ERROR, payload: "User already exists." });
      } else {
        dispatch({ type: types.LOGIN_ERROR, payload: "Server error." });
      }
    }
  };
}

export function logout() {
  return (dispatch) => {
    localStorage.setItem("user", null);
    localStorage.setItem("jwt", null);
    dispatch({ type: types.LOGOUT });
  };
}

// User profile functionality needs an update once it is decided exactly what information needs to be stored about the user.
export function editUser() {
  return async (dispatch) => {
    try {
      dispatch({ type: types.EDIT_USER });
      dispatch({ type: types.EDIT_USER_SUCCESS, payload: "" });
    } catch (err) {
      console.error(err);
      dispatch({ type: types.EDIT_USER_ERROR, payload: "" });
    }
  };
}

export function getFavorites() {
  return async (dispatch) => {
    try {
      dispatch({ type: types.GET_FAVORITES });
      let res = await axiosAuth().get("/users/favs");
      dispatch({ type: types.GET_FAVORITES_SUCCESS, payload: res.data });
    } catch (err) {
      console.error(err);
      dispatch({ type: types.GET_FAVORITES_ERROR, payload: "" });
    }
  };
}

export function addFavorite(newFavorite) {
  return async (dispatch) => {
    try {
      dispatch({ type: types.ADD_FAVORITE });
      let request = { city_id: newFavorite._id };
      let res = await axiosAuth().post("/users/favs", request);
      dispatch({ type: types.ADD_FAVORITE_SUCCESS, payload: res.data });
    } catch (err) {
      console.error(err);
      dispatch({ type: types.ADD_FAVORITE_ERROR, payload: "Server error." });
    }
  };
}

export function removeFavorite(id) {
  return async (dispatch) => {
    try {
      dispatch({ type: types.REMOVE_FAVORITE });
      await axiosAuth().delete(`/users/favs`, {
        data: { city_id: id },
      });
      dispatch({ type: types.REMOVE_FAVORITE_SUCCESS, payload: id });
    } catch (err) {
      console.error(err);
      dispatch({ type: types.REMOVE_FAVORITE_ERROR, payload: "Server error." });
    }
  };
}
