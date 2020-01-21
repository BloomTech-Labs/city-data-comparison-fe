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
import citiesIndex from './data/city_ids.json'
import { UserContext } from './contexts/UserContext';
import { CityContext } from './contexts/CityContext';


function initializeAnalytics() {
  ReactGA.initialize('UA-156199574-1');
  ReactGA.pageview("/");
}

function App() {

  useEffect( _ => {
    initializeAnalytics();
    ReactGA.event({ category: 'App', 
    action: 'Loaded app' });
  }, [])

  let index = []
  
  Object.keys(citiesIndex).forEach(item => {
      // console.log(citiesIndex[item])
      let city = citiesIndex[item]
      city.name = item
      index.push(city)
  })


  const [user, setUser] = useState({});
  const [cityMarkers, setCityMarkers] = useState(index);
  const [selected, setSelected] = useState([]);
  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    longitude: -95,
    latitude: 39,
    zoom: 3,
    minZoom: 3,
    trackResize: true,


  });
// this filters the map markers based on zoom - Closer zoom, lesser population cap
  useEffect( _ => {
    if (viewport.zoom < 4) {
      setCityMarkers(index.filter(city => city.population > 500000))
    }
    if (viewport.zoom >= 4 && viewport.zoom < 5) {
      setCityMarkers(index.filter(city => city.population > 300000))
    }
    if (viewport.zoom >= 5 && viewport.zoom < 6) {
      setCityMarkers(index.filter(city => city.population > 100000))
    }
  },[viewport.zoom])


  //Analytics Events
  useEffect( _ => {
    ReactGA.event({ category: 'Map', 
    action: 'Changed map location' });
  }, [viewport.latitude])
  useEffect( _ => {
    ReactGA.event({ category: 'Map', 
    action: 'Changed map zoom' });
  }, [viewport.zoom])

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
            <Route path='/signin' component={Login} />
            <Route path="/signup" component={Signup} />
          </div>
          </CityContext.Provider>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
