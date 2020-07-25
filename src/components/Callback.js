import React, { useContext } from "react";
import queryString from "query-string";
import { Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/actions/userActions";
// This component is necessary for OAuth.
// This route is where the user is redirected after using an OAuth provider.
// The component uses the redirect query paramaters in the url to save a token to localStorage.
const Callback = (props) => {
  const dispatch = useDispatch();
  const values = queryString.parse(props.location.search);
  const jwt = values.jwt;
  const user = JSON.parse(values.user);
  dispatch(setUser(jwt, user));
  return <>{Redirect("/")}</>;
};
  
export default Callback;
