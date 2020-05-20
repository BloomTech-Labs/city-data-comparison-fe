import * as types from "../actions/actionTypes";

let initialState = {
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null,
  isFetching: false,
  error: "",
};

export default function cityReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
    case types.LOGIN:
      return {
        isFetching: true,
      };
    case types.LOGIN_SUCCESS:
      return {
        user: { ...action.payload },
        isFetching: false,
      };
    case types.LOGIN_ERROR:
      return {
        user: null,
        error: action.payload,
        isFetching: false,
      };
    case types.LOGOUT:
      return {
        user: null,
        isFetching: false,
        error: "",
      };
  }
}
