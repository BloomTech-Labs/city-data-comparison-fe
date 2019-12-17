import React from 'react';
import Dashboard from './components/dashboard/Dashboard'
import Navigation from './components/navigation/Navigation'
import Footer from './components/navigation/Footer'
import './App.scss';
import {Route, Link} from "react-router-dom";
import Map from "./components/Map";

function App() {
  return (
    <div className="App">
      
      <h1>City Data Comparison</h1>
      <Link to="/">Home</Link>
      <Link to="/map">Map</Link>
      {/* route components in here here */}
      <Navigation />
      <Route exact path='/' component={Dashboard} />
      <Route path='/' component={Footer} />
      <Route path="/map" component={Map} />
    </div>
  );
}

export default App;
