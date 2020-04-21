import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import * as Sentry from "@sentry/browser";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import reducers from "./redux/reducers/index.js";

// initializes exception handling from sentry.io
Sentry.init({
  dsn: "https://ef0ab1c71186485093350424c6389c26@sentry.io/2104327",
});

const store = createStore(reducers, applyMiddleware(thunk, logger));

ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>
,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
