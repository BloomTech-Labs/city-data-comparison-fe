import React from 'react';
import Dashboard from './components/dashboard/Dashboard'
import Navigation from './components/navigation/Navigation'
import './App.css';
import {Route, Link} from "react-router-dom";
import Map from "./components/Map";

function App() {
  return (
    <div className="App">
      
      <h1>City Data Comparison</h1>
      <Link to="/map">Map</Link>
      {/* route components in here here */}
      <Route path='/' component={Navigation} />
      <Route exact path='/' component={Dashboard} />
      <Route path="/map" component={Map} />
    </div>
  );
}

export default App;
