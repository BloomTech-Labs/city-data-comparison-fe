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
    zoom: 10,
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

function compare(a, b) {
  const popA = a.population;
  const popB = b.population;

  let comparison = 0;
  if (popA > popB) {
    comparison = 1;
  } else if (popA < popB) {
    comparison = -1;
  }
  return comparison;
}

cityIndex.sort(compare);

// this filters the map markers based on zoom - Closer zoom, lesser population cap
  useEffect( _ => {

    function recursive_filter (data, arrayFilters, index = 0) {
      if (arrayFilters.length === 0) {
        return data
      }
      if (index === arrayFilters.length - 1) {
        return data.filter(arrayFilters[index])
      }
      return recursive_filter(data.filter(arrayFilters[index]), arrayFilters, (index + 1))
    }
    
    const f1 = item => item.lng > viewport.longitude-((1/viewport.zoom)*180/(viewport.zoom/2))
    const f2 = item => item.lng < viewport.longitude+((1/viewport.zoom)*180/(viewport.zoom/2))
    const f3 = item => item.lat > viewport.latitude-((1/viewport.zoom)*360/(viewport.zoom)/2)
    const f4 = item => item.lat < viewport.latitude+((1/viewport.zoom)*360/(viewport.zoom)/2)
    
    const filters = [f1,f2,f3,f4]

    setCityMarkers(recursive_filter(cityIndex, filters).slice(0,30))


    console.log(`greater than ${viewport.longitude-((1/viewport.zoom)*180/(viewport.zoom)+(viewport.zoom/2))} less than ${viewport.longitude+((1/viewport.zoom)*180/(viewport.zoom)+(viewport.zoom/2))}`)
    console.log(`greater than ${viewport.latitude-((1/viewport.zoom)*360/(viewport.zoom)/2)} less than ${viewport.latitude+((1/viewport.zoom)*360/(viewport.zoom)/2)}`)

    // if (viewport.zoom > 4){
      // setCityMarkers(cityIndex.filter(city => 
      //   city.longitude > viewport.longitude-((1/viewport.zoom)*180/(viewport.zoom-1)/2)).filter(city => 
      //   city.longitude < viewport.longitude+((1/viewport.zoom)*180/(viewport.zoom-1)/2)).filter(city => 
      //   city.latitude > viewport.latitude-((1/viewport.zoom)*360/(viewport.zoom-1)/2)).filter(city =>
      //   city.latitude < viewport.latitude+((1/viewport.zoom)*360/(viewport.zoom-1)/2)))
    // }
      

    //   cityIndex.reduce((itemMap, item) => {
    //     if (item.longitude > viewport.longitude-((1/viewport.zoom)*180/(viewport.zoom-1)/2) && 
    //     item.longitude < viewport.longitude+((1/viewport.zoom)*180/(viewport.zoom-1)/2) &&
    //     item.latitude > viewport.latitude-((1/viewport.zoom)*360/(viewport.zoom-1)/2) &&
    //     item.latitude < viewport.latitude+((1/viewport.zoom)*360/(viewport.zoom-1)/2)) return itemMap;
    //     return itemMap.push({item});
    //   }, [])

    // setCityMarkers(filteredData)
    // if (viewport.zoom < 4) {
    //   setCityMarkers(cityIndex.filter(city => city.population > 500000))
    // }
    // if (viewport.zoom >= 4 && viewport.zoom < 5) {
    //   setCityMarkers(cityIndex.filter(city => city.population > 300000))
    // }
    // if (viewport.zoom >= 5 && viewport.zoom < 6) {
    //   setCityMarkers(cityIndex.filter(city => city.population > 100000))
    // }
    // if (viewport.zoom >= 6 && viewport.zoom < 7) {
    //   setCityMarkers(cityIndex.filter(city => city.population > 50000))
    // }
    // if (viewport.zoom >= 7 && viewport.zoom < 8) {
    //   setCityMarkers(cityIndex.filter(city => city.population > 10000))
    // }
    // let selectedCityMarkers = selected.map(item => cityIndex.find(city => city.ID === item.id))
    // setCityMarkers([...cityMarkers, ...selectedCityMarkers])
    console.log(cityMarkers)
    console.log(viewport.zoom)
    console.log("lat", viewport.latitude)
    console.log("long", viewport.longitude)
  },[viewport.latitude])


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
