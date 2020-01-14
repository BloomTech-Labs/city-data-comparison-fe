import React, {useState, useEffect} from 'react';
import {Route, BrowserRouter as Router} from "react-router-dom";
import ReactGA from "react-ga";
import './App.scss';

import Dashboard from './components/dashboard/Dashboard'
import Navigation from './components/navigation/Navigation'
import Footer from './components/navigation/Footer'
import Map from "./components/Map";
import Profile from './components/user-profile/Profile'
import PrivacyPolicy from "./components/legal/PrivacyPolicy"
import AboutUs from './components/aboutus/AboutUs'; 
import Signup from './components/forms/Signup'; 
import Login from './components/forms/Login'; 

import { markerDummyData } from "./components/map-components/data.js";

import { UserContext } from './contexts/UserContext';
import { CityContext } from './contexts/CityContext';

function App() {

  function initializeReactGA() {
    ReactGA.initialize('UA-156199574-1');
    ReactGA.pageview('/homepage');
  } 

  useEffect( _ => {
    initializeReactGA()
  },[])

  const [user, setUser] = useState({});
  const [cityMarkers, setCityMarkers] = useState(markerDummyData);
  const [selected, setSelected] = useState([]);
  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    latitude: 45,
    longitude: -95,
    zoom: 5,
    trackResize: true
  });



  return (
    <Router>
      <UserContext.Provider value={{user, setUser}}>
        <CityContext.Provider value={{cityMarkers, setCityMarkers, selected, setSelected, viewport, setViewport}}>
          <div className="App">
            <Navigation />
            <Route exact path='/' component={Dashboard} />
            <Route exact path='/' component={Footer} />
            <Route path="/map" component={Map} />
            <Route path='/profile' component={Profile} />
            <Route path="/privacypolicy" component={PrivacyPolicy} />
            <Route path="/aboutus" component={AboutUs} />
            <Route path='/login' component={Login} />
            <Route path="/signup" component={Signup} />
          </div>
          </CityContext.Provider>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
