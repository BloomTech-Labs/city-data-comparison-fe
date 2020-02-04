import React, {useState, useEffect} from 'react';
import {Route, BrowserRouter as Router} from "react-router-dom";
import ReactGA from "react-ga";
import PrivateRoute from "./components/PrivateRoute"

import './App.scss';

import Dashboard from './components/dashboard/Dashboard'
import Navigation from './components/navigation/Navigation'
import Footer from './components/navigation/Footer'
import Map from "./components/Map";
import Profile from './components/user-profile/Profile'
import PrivacyPolicy from "./components/legal/PrivacyPolicy"
import AboutUs from './components/aboutus/AboutUs'; 
import citiesIndex from './data/city_ids.json'
import { UserContext } from './contexts/UserContext';
import { CityContext } from './contexts/CityContext';
import Axios from "axios"
import Callback from './components/Callback';
import AuthForm from './components/forms/AuthForm';
import axiosAuth from "./components/axiosAuth"


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
      let city = citiesIndex[item]
      city.name = item
      cityIndex.push(city)
  })

  const [toggleSearch, setToggleSearch] = useState(true);
  const [user, setUserValue] = useState(localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null);
  const [favorites, setFavorites] = useState([]);
  const [cityMarkers, setCityMarkers] = useState(cityIndex);
  const [selected, setSelected] = useState([]);
  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    longitude: -96.7,
    latitude: 38.55,
    zoom: 3.55,
    minZoom: 3.5,
    maxZoom: 10,
    trackResize: true,


  });

  const setUser = (info) => {
    localStorage.setItem('user', JSON.stringify(info))
    setUserValue(info)
    
  }

  const getCityColor = _ => {
    let activeColors = selected.map(item => item.color)
      if (!activeColors.includes("#8DD3C7")) {
        return "#8DD3C7"
      } else if (!activeColors.includes("#FB7F72")) {
        return "#FB7F72"
      } else if (!activeColors.includes("#80B1D3")) {
        return "#80B1D3"
      }   
  }
  const getSecondCityColor = arr => {
    let activeColors = selected.map(item => item.color)
    activeColors.push(arr[0].color)
      if (!activeColors.includes("#8DD3C7")) {
        return "#8DD3C7"
      } else if (!activeColors.includes("#FB7F72")) {
        return "#FB7F72"
      } else if (!activeColors.includes("#80B1D3")) {
        return "#80B1D3"
      }   
  }

  const getCity = cityMarker => {
    if (selected.length >=3) {
      return;
    }
    Axios.get(`https://api.citrics.io/jkekal6d6e5si3i2ld66d4dl/citydata/${cityMarker.ID}`)
    .then(res => {
      ReactGA.event({ category: 'Data', 
      action: `selected ${res.data.name_with_com}` });
      let newCity = res.data;
      newCity.color = getCityColor();
      setSelected([...selected, newCity])
    })
    .catch(err => console.log("getCity error", err))
}

const getCities = arr => {
  let output = []

  // if both objects
  if (typeof arr[0] === "object" && typeof arr[1] === "object")
    Axios.get(`https://api.citrics.io/jkekal6d6e5si3i2ld66d4dl/citydata/${arr[0].ID}`)
    .then(res => {
      let newCity = res.data;
      newCity.color = getCityColor();
      ReactGA.event({ category: 'Data', 
      action: `selected ${newCity.name_with_com}` });
      output.push(newCity);
    }).then(res => Axios.get(`https://api.citrics.io/jkekal6d6e5si3i2ld66d4dl/citydata/${arr[1].ID}`)
    .then(res => {
      let newCity = res.data;
      ReactGA.event({ category: 'Data', 
      action: `selected ${newCity.name_with_com}` });
      newCity.color = getSecondCityColor(output);
      output.push(newCity);
      setSelected([...selected, ...output])
    }))
    .catch(err => console.log("getCity error", err))

    if (typeof arr[0] === "object" && typeof arr[1] === "string") {
      ReactGA.event({ category: 'Data', 
      action: `searched for "${arr[1]}"` });
     Axios.get(`https://api.citrics.io/jkekal6d6e5si3i2ld66d4dl/matchcity/${arr[1]}`)
    .then(res => {
      if (res.data) {
        // get the best (first) suggestion and add it to state
        let suggestionKey = Object.keys(res.data)[0];
        let foundIndex = res.data[suggestionKey];
        getCities([arr[0], foundIndex]);
      } else {
        getCity(arr[0])
      }
    })
    .catch(err => console.log("getCity error", err))
    }

    if (typeof arr[0] === "string" && typeof arr[1] === "object") {
      ReactGA.event({ category: 'Data', 
      action: `searched for "${arr[0]}"` });
      Axios.get(`https://api.citrics.io/jkekal6d6e5si3i2ld66d4dl/matchcity/${arr[0]}`)
      .then(res => {
        if (res.data) {
          // get the best (first) suggestion and add it to state
          let suggestionKey = Object.keys(res.data)[0];
          let foundIndex = res.data[suggestionKey];
          getCities([arr[1], foundIndex]);
        } else {
          getCity(arr[1])
        }
      })
      .catch(err => console.log("getCity error", err))
      }
    
  // if both strings
  if (typeof arr[0] === "string" && typeof arr[1] === "string") {
    
    getBestSuggestions(arr)
  }

}

const getBestSuggestion = search => {
  Axios.get(`https://api.citrics.io/jkekal6d6e5si3i2ld66d4dl/matchcity/${search}`)
  .then(res => {
    // if there's a suggestion
    if (res.data) {
      // get the best (first) suggestion and add it to state
      let suggestionKey = Object.keys(res.data)[0]
      if (selected.find(item => item._id === res.data[suggestionKey].ID)) {
        return;
      }
      getCity(res.data[suggestionKey])  
    }
    // maybe add an error message if nothing is found
  })
  .catch(err => console.log("suggestion error", err))
}

const getBestSuggestions = arr => {
  const output = [];
  ReactGA.event({ category: 'Data', 
      action: `searched  for "${arr[0]}"` });
    ReactGA.event({ category: 'Data', 
      action: `searched for "${arr[1]}"` });
  Axios.get(`https://api.citrics.io/jkekal6d6e5si3i2ld66d4dl/matchcity/${arr[0]}`)
  .then(res => {
    // if there's a suggestion
    if (res.data) {
      // get the best (first) suggestion and add it to state
      let suggestionKey = Object.keys(res.data)[0]
      let newCity = res.data[suggestionKey];
      output.push(newCity);
    }
    // maybe add an error message if nothing is found
  }).then(res =>  Axios.get(`https://api.citrics.io/jkekal6d6e5si3i2ld66d4dl/matchcity/${arr[1]}`)
  .then(res => {
    // if there's a suggestion
    if (res.data) {
      // get the best (first) suggestion and add it to state
      let suggestionKey = Object.keys(res.data)[0]
      let newCity2 = res.data[suggestionKey];
      output.push(newCity2);
    }
    // maybe add an error message if nothing is found
  }))
  .then(res => getCities(output))
  .catch(err => console.log("suggestion error", err))
}

function compare(a, b) {
  const popA = a.population;
  const popB = b.population;

  let comparison = 0;
  if (popA < popB) {
    comparison = 1;
  } else if (popA > popB) {
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
    
    //these 4 lines of code took too long to write, they determine the bounds of the map on screen
    const f1 = item => item.lng > viewport.longitude-(0.00007810743*(Math.pow(2,(24-viewport.zoom)))/2)
    const f2 = item => item.lng < viewport.longitude+(0.00007810743*(Math.pow(2,(24-viewport.zoom)))/2)
    const f3 = item => item.lat > viewport.latitude-(0.00001907348*(Math.pow(2,(24-viewport.zoom)))/2)
    const f4 = item => item.lat < viewport.latitude+(0.00001907348*(Math.pow(2,(24-viewport.zoom)))/2)
    
    const filters = [f1,f2,f3,f4]

    setCityMarkers(recursive_filter(cityIndex, filters).slice(0,30))
    console.log(viewport.zoom)
    // let selectedCityMarkers = selected.map(item => cityIndex.find(city => city.ID === item.id))
    // setCityMarkers([...cityMarkers, ...selectedCityMarkers])

  },[viewport.latitude])

  return (
    <Router>
      <UserContext.Provider value={{axiosAuth, user, setUserValue, setUser, favorites, setFavorites, toggleSearch, setToggleSearch}}>
        <CityContext.Provider value={{cityIndex, cityMarkers, getCities, setCityMarkers, selected, setSelected, viewport, setViewport, getCity, getBestSuggestion, getBestSuggestions}}>
          <div className="App">
            <Navigation />
            <Route exact path='/' component={Dashboard} />
            <Route exact path='/' component={Footer} />
            <Route path="/map" component={Map} />
            <PrivateRoute path='/profile' component={Profile} />
            <Route path="/privacypolicy" component={PrivacyPolicy} />
            <Route path="/aboutus" component={AboutUs} />

            <Route path='/signin' render={props => <AuthForm {...props} action="Login"/>} />
            <Route path="/signup" render={props => <AuthForm {...props} action="Register"/>} />

            <Route path="/callback" component={Callback} />
          </div>
          </CityContext.Provider>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
