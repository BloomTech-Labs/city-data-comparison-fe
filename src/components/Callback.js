import React, { useContext } from "react";
import queryString from "query-string";
import { Redirect } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import ReactGA from "react-ga";

// This component is necessary for OAuth.
// This route is where the user is redirected after using an OAuth provider.
// The component uses the redirect query paramaters in the url to save a token to localStorage.
const Callback = (props) => {
  const { setUser } = useContext(UserContext);
  const values = queryString.parse(props.location.search);
  ReactGA.event({ category: "User", action: "Logged in via Oauth" });
  localStorage.setItem("jwt", values.jwt);
  let newUser = JSON.parse(values.user);
  setUser(newUser);
  return <>{Redirect("/")}</>;
};

export default Callback;
