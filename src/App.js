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
import Axios from "axios"


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

  let cityIndex = []
  
  Object.keys(citiesIndex).forEach(item => {
      // console.log(citiesIndex[item])
      let city = citiesIndex[item]
      city.name = item
      cityIndex.push(city)
  })


  const [user, setUser] = useState({});
  const [cityMarkers, setCityMarkers] = useState(cityIndex);
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
  const getCity = cityMarker => {
    Axios.get(`https://api.citrics.io/jkekal6d6e5si3i2ld66d4dl/citydata/${cityMarker.ID}`)
    .then(res => {
      setSelected([...selected, res.data])
    })
    .catch(err => console.log("getCity error", err))
}

const getCities = arr => {
  let output = []
  Axios.get(`https://api.citrics.io/jkekal6d6e5si3i2ld66d4dl/citydata/${arr[0].ID}`)
  .then(res => {
    output.push(res.data);
    // setSelected([...selected, res.data])
  }).then(res => Axios.get(`https://api.citrics.io/jkekal6d6e5si3i2ld66d4dl/citydata/${arr[1].ID}`)
  .then(res => {
    output.push(res.data)
    setSelected([...selected, ...output])
  }))
  .catch(err => console.log("getCity error", err))
}

const getBestSuggestion = search => {
  Axios.get(`https://cors-anywhere.herokuapp.com/https://api.citrics.io/jkekal6d6e5si3i2ld66d4dl/matchcity/${search}`)
  .then(res => {
    // if there's a suggestion
    if (res.data) {
      // get the best (first) suggestion and add it to state
      let suggestionKey = Object.keys(res.data)[0]
      getCity(res.data[suggestionKey])  
    }
    // maybe add an error message if nothing is found
  })
  .catch(err => console.log("suggestion error", err))
}

// this filters the map markers based on zoom - Closer zoom, lesser population cap
  useEffect( _ => {
    if (viewport.zoom < 4) {
      setCityMarkers(cityIndex.filter(city => city.population > 500000))
    }
    if (viewport.zoom >= 4 && viewport.zoom < 5) {
      setCityMarkers(cityIndex.filter(city => city.population > 300000))
    }
    if (viewport.zoom >= 5 && viewport.zoom < 6) {
      setCityMarkers(cityIndex.filter(city => city.population > 100000))
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
        <CityContext.Provider value={{cityIndex, cityMarkers, getCities, setCityMarkers, selected, setSelected, viewport, setViewport, getCity, getBestSuggestion}}>
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
