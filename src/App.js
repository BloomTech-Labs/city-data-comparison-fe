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
      
      <Link to="/map">Map</Link>
      {/* route components in here here */}
      <Route path='/' component={Navigation} />
      <Route exact path='/' component={Dashboard} />
      <Route path='/' component={Footer} />
      <Route path="/map" component={Map} />
    </div>
  );
}

export default App;
