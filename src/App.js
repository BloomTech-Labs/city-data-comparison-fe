import React from 'react';
import {Route} from "react-router-dom";
import './App.scss';

import Dashboard from './components/dashboard/Dashboard'
import Navigation from './components/navigation/Navigation'
import Footer from './components/navigation/Footer'
import Map from "./components/Map";
import PrivacyPolicy from "./legal/PrivacyPolicy"

import { UserContext } from './contexts/UserContext';
import { CityContext } from './contexts/CityContext';

function App() {
  return (
    <div className="App">
      
      <Navigation />
      <Route exact path='/' component={Dashboard} />
      <Route exact path='/' component={Footer} />
      <Route path="/map" component={Map} />
      
      <Route path="/privacypolicy" component={PrivacyPolicy} />
    </div>
  );
}

export default App;
