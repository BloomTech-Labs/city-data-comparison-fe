import React from 'react';
import './App.css';
import {Route, Link} from "react-router-dom";
import Map from "./components/Map";

function App() {
  return (
    <div className="App">
      <h1>City Data Comparison</h1>
      <Link to="/map">Map</Link>
      {/* route components in here here */}
      <Route path="/map" component={Map} />
    </div>
  );
}

export default App;
