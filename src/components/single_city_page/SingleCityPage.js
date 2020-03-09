import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { CityContext } from '../../contexts/CityContext';
import Skycons from 'react-skycons';


import './SingleCityPage.scss';
// import { scpData } from './scpDummyData';

import SCPrestaurants from "./SCPrestaurants";
import SCPevents from "./SCPevents";

import tempWeather from "../../assets/single_city_page_photos/Group 39.png"
import cityscape from '../../assets/single_city_page_photos/cityscape.jpg';
import foodAndDrink from '../../assets/single_city_page_photos/foodAndDrink.jpg';
import attractions from '../../assets/single_city_page_photos/attractions.jpg';
import weatherImg from '../../assets/single_city_page_photos/weather.png';
import recreation from '../../assets/single_city_page_photos/recreation.png';
import cityServices from '../../assets/single_city_page_photos/cityServices.png';
import shopping from '../../assets/single_city_page_photos/shopping.png';
import lodging from '../../assets/single_city_page_photos/lodging.png';

const SingleCityPage = () => {

    const [categories, setCategories] = useState({});
    const [restaurants, setRestaurants] = useState();
    const [events, setEvents] = useState();
    const [weather, setWeather] = useState({});
    
    const { viewport } = useContext(CityContext);

  function onChange(e) {
    setCategories({
      ...categories,
      [e.target.name]: categories[e.target.name] ? false : true
    })
  }

    // function for handling sidebar checkbox check/uncheck (display of categories)
    function onChange(e) {
        setCategories({
            ...categories,
            [e.target.name]: categories[e.target.name] ? false : true
        })
    }

    const [menu, setMenu] = useState({ status: 'closed' })
  
    // Handles toggles for Anchor-headers
    function toggle1() {
        document.getElementById("menuCollapse1").classList.toggle("hidden");
    }

    function toggle2() {
        document.getElementById("menuCollapse2").classList.toggle("hidden");
    }

    function toggle3() {
        document.getElementById("menuCollapse3").classList.toggle("hidden");
    }

    function toggle4() {
        document.getElementById("menuCollapse4").classList.toggle("hidden");
    }

    function toggle5() {
        document.getElementById("menuCollapse5").classList.toggle("hidden");
    }

    function toggle6() {
        document.getElementById("menuCollapse6").classList.toggle("hidden");
    }
    function toggle7() {
        document.getElementById("menuCollapse7").classList.toggle("hidden");
    }

    console.log('viewport', viewport)

    // API CALL FOR RESTAURANTS
    useEffect(() => {
        axios.get(`https://be.citrics.io/api/yelp/restaurant/${viewport.latitude}/${viewport.longitude}`)
            //   .get(`http://citricsbe-staging.kiqprw5whz.us-east-2.elasticbeanstalk.com/api/restaurant?latitude=30.1&longitude=-81.7`)
            // 42.3314° N, 83.0458° W
            .then(res => {
                console.log('get test', res.data)
                console.log('vplatlong', viewport.latitude, viewport.longitude)
                setRestaurants(res.data)
                console.log('rest', restaurants)
                // console.log('test setRest', setRestaurants)
            })
            .catch(err => console.log(err))
    }, [viewport]);

    // API CALL FOR EVENTS
    useEffect(() => {
        axios.get(`https://be.citrics.io/api/yelp/events/${viewport.latitude}/${viewport.longitude}`)
        .then(response => {
            console.log(response)
            setEvents(response.data)
        })
        .catch(error => {
            console.log("Events", error)
        })
    },[viewport]);

    // API CALL FOR WEATHER
    useEffect(() => {
        axios.get(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/a8c0298ef7550627f36777243a127c0e/${viewport.latitude},${viewport.longitude}`)
            .then(response => {
                console.log('weather', response.data.currently)
                setWeather(response.data.currently)
            })
            .catch(error => {
                console.log("Error retrieving Weather Information", error)
            })
    }, [viewport])

    const weatherTime = new Date().toLocaleTimeString();

    var roundTemp = weather.temperature;
    roundTemp = Math.round(roundTemp)

    var feelsLike = weather.apparentTemperature;
    feelsLike = Math.round(feelsLike);

    var weatherIcon;

    if ( weather.icon === "clear-day"){
        weatherIcon = "CLEAR_DAY"
    } else if( weather.icon === "clear-night"){
        weatherIcon = "CLEAR_NIGHT"
    } else if( weather.icon === "partly-cloudy-day"){
        weatherIcon = "PARTLY_CLOUDY_DAY"
    } else if( weather.icon === "partly-cloudy-night"){
        weatherIcon = "PARTLY_CLOUDY_NIGHT"
    } else if( weather.icon === "cloudy"){
        weatherIcon = "CLOUDY"
    } else if( weather.icon === "rain"){
        weatherIcon = "RAIN"
    } else if( weather.icon === "sleet"){
        weatherIcon = "SLEET"
    } else if( weather.icon === "snow"){
        weatherIcon = "SNOW"
    } else if( weather.icon === "wind"){
        weatherIcon = "WIND"
    } else if( weather.icon === "fog"){
        weatherIcon = "FOG"
    };

    return (

        <>
            {/* hero/header section */}
            <div className="SCPhero">
                <img className="SCPheroImg" src={cityscape} />
            </div>
            <section className="SCPcityIntro">
                <div className="SCPweather">
                    <div className="weatherImage">
                        <Skycons
                            color="black"
                            icon={weatherIcon}
                            autoplay={false}
                        />
                    </div>
                    <div className="weatherInfo">
                        <span>As of {weatherTime}</span>
                        <span className="temp">{roundTemp}&deg;F</span>
                        <span>{weather.summary}</span>
                        <span>feels like {feelsLike}&deg;F</span>
                        <span>Humidity {weather.humidity}&deg;</span>
                        <span>UV Index {weather.uvIndex}</span>
                    </div>
                </div>
                <div className="SCPdescription">
                    <div>
                        <h1 className="descH1">{restaurants && restaurants.businesses ? restaurants.businesses[0].location.city : ''}, {restaurants && restaurants.businesses ? restaurants.businesses[0].location.state : ''}</h1>
                    </div>
                    <div className="city-desc">
                        <p>Miami is one of the state's – and the world’s – most popular vacation spots. Though destinations often are said to offer something for everyone, the Miami area does indeed offer multiple enticements for everyone: The trendy nightlife of South Beach, bejeweled by the eye candy of the Art Deco district. The bustle of Calle Ocho and the highly caffeinated energy of Little Havana. The plush hotels of Miami Beach and the historic hideaways of Coral Gables... (more)</p>
                    </div>
                </div>
            </section>

            <section className="SCPmain">
                <section className="SCPsidebar">
                    {/* sidebar filter code */}
                    <div className="SCPfilter">
                        <h4>Filter</h4>
                    </div>
                    <div className="SCPfilterCatContainer">
                        <ul>

                            <h3 className="anchor-header1" onClick={toggle1}>Food &amp; Drink</h3>
                            <div id="menuCollapse1">
                                <span class="spanStyle">
                                    <input type="checkbox" id="Restaurants" name="Restaurants" value="Restaurants" onChange={onChange} />
                                    <label for="Restaurants">Restaurants</label><br />
                                    <input type="checkbox" id="Events" name="Events" value="Events" onChange={onChange} />
                                    <label for="Events">Events</label><br />
                                    <input type="checkbox" id="Music" name="Music" value="Music" onChange={onChange} />
                                    <label for="Music">Music</label><br />
                                    <input type="checkbox" id="Coffeeshops" name="Coffeeshops" value="Coffeeshops" onChange={onChange} />
                                    <label for="Coffeeshops">Coffeeshops</label>
                                </span>
                            </div>

                            <h3 className="anchor-header2" onClick={toggle2}>Attractions</h3>
                            <div id="menuCollapse2">
                                <span class="spanStyle">
                                    <input type="checkbox" id="Tours" name="Tours" value="Tours" onChange={onChange} />
                                    <label for="Tours">Tours</label><br />
                                    <input type="checkbox" id="Museums" name="Museums" value="Museums" onChange={onChange} />
                                    <label for="Museums">Museums</label><br />
                                    <input type="checkbox" id="Theater" name="Theater" value="Theater" onChange={onChange} />
                                    <label for="Theater">Theater</label><br />
                                    <input type="checkbox" id="Performing_Arts" name="Performing_Arts" value="Performing_Arts" onChange={onChange} />
                                    <label for="Performing_Arts">Performing Arts</label><br />
                                    <input type="checkbox" id="Professional_Sports" name="Professional_Sports" value="Professional_Sports" onChange={onChange} />
                                    <label for="Professional_Sports">Professional Sports</label>
                                </span>
                            </div>

                            <h3 className="anchor-header3" onClick={toggle3}>Recreation</h3>
                            <div id="menuCollapse3">
                                <span class="spanStyle">
                                    <input type="checkbox" id="Parks" name="Parks" value="Parks" onChange={onChange} />
                                    <label for="Parks">Parks</label><br />
                                    <input type="checkbox" id="Activities" name="Activities" value="Activities" onChange={onChange} />
                                    <label for="Activities">Activities</label><br />
                                    <input type="checkbox" id="Clubs" name="Clubs" value="Clubs" onChange={onChange} />
                                    <label for="Clubs">Clubs</label><br />
                                    <input type="checkbox" id="Sports" name="Sports" value="Sports" onChange={onChange} />
                                    <label for="Sports">Sports</label><br />
                                    <input type="checkbox" id="Leisure_Activities" name="Leisure_Activities" value="Leisure_Activities" onChange={onChange} />
                                    <label for="Leisure_Activities">Leisure Activities</label><br />
                                    <input type="checkbox" id="Senior_Activities" name="Senior_Activities" value="Senior_Activities" onChange={onChange} />
                                    <label for="Senior_Activities">Senior Activities</label>
                                </span>
                            </div>

                            <h3 className="anchor-header4" onClick={toggle4}>Weather</h3>
                            <div id="menuCollapse4">
                                <span class="spanStyle">
                                    <input type="checkbox" id="Current" name="Current" value="Current" onChange={onChange} />
                                    <label for="Current">Current</label><br />
                                    <input type="checkbox" id="Historical" name="Historical" value="Historical" onChange={onChange} />
                                    <label for="Historical">Historical</label>
                                </span>
                            </div>

                            <h3 className="anchor-header5" onClick={toggle5}>Shopping</h3>
                            <div id="menuCollapse5">
                                <span class="spanStyle">
                                    <input type="checkbox" id="Clothing" name="Clothing" value="Clothing" onChange={onChange} />
                                    <label for="Clothing">Clothing</label><br />
                                    <input type="checkbox" id="Furnishings" name="Furnishings" value="Furnishings" onChange={onChange} />
                                    <label for="Furnishings">Furnishings</label><br />
                                    <input type="checkbox" id="Hardware" name="Hardware" value="Hardware" onChange={onChange} />
                                    <label for="Hardware">Hardware</label><br />
                                    <input type="checkbox" id="Miscellaneous" name="Miscellaneous" value="Miscellaneous" onChange={onChange} />
                                    <label for="Miscellaneous">Miscellaneous</label>
                                </span>
                            </div>

                            <h3 className="anchor-header6" onClick={toggle6}>Lodging</h3>
                            <div id="menuCollapse6">
                                <span class="spanStyle">
                                    <input type="checkbox" id="Hotels" name="Hotels" value="Hotels" onChange={onChange} />
                                    <label for="Hotels">Hotels</label><br />
                                    <input type="checkbox" id="AirBnB" name="AirBnB" value="AirBnB" onChange={onChange} />
                                    <label for="AirBnB">AirBnB</label>
                                </span>
                            </div>

                            <h3 className="anchor-header7" onClick={toggle7}>Services</h3>
                            <div id="menuCollapse7">
                                <span class="spanStyle">
                                    <input type="checkbox" id="Accessibility" name="Accessibility" value="Accessibility" onChange={onChange} />
                                    <label for="Accessibility">Accessibility</label><br />
                                    <input type="checkbox" id="Sustainability" name="Sustainability" value="Sustainability" onChange={onChange} />
                                    <label for="Sustainability">Sustainability</label><br />
                                    <input type="checkbox" id="City_Services" name="City_Services" value="City_Services" onChange={onChange} />
                                    <label for="City_Services">City Services</label>
                                </span>
                            </div>



                        </ul>
                    </div>
                </section>

                {/* main categories displayed when you land on page */}

                <section className="SCPcategories">
                    <div className="SCPexplore">
                        <div className="exploreContainer">
                            <div>
                                <h3>Explore</h3>
                            </div>
                            <div className="expCat">
                                <img className="expCatImg" src={foodAndDrink} />
                                <div className="expCatText">
                                    <div className="expCatTitle">
                                        <h4>Food and drinks</h4>
                                    </div>
                                    <div className="expP">
                                        <p>The cuisine of Miami is a reflection of its diverse population, with a heavy influence from Caribbean and Latin American cuisine. By combining the two with American cuisine, it has spawned a unique South Florida style of cooking known as Floribbean... (more)</p>
                                    </div>
                                </div>
                            </div>
                            <div className="expCat">
                                <img className="expCatImg" src={attractions} />
                                <div className="expCatText">
                                    <div className="expCatTitle">
                                        <h4>Attractions</h4>
                                    </div>
                                    <div className="expP">
                                        <p>In addition to annual festivals like the Calle Ocho Festival, Miami is home to many entertainment venues, theaters, museums, parks and performing arts centers. The newest addition to the Miami arts scene is the Adrienne Arsht Center for the ... (more)</p>
                                    </div>
                                </div>
                            </div>
                            <div className="expCat">
                                <img className="expCatImg" src={weatherImg} />
                                <div className="expCatText">
                                    <div className="expCatTitle">
                                        <h4>Weather</h4>
                                    </div>
                                    <div className="expP">
                                        <p>Miami has a tropical monsoon climate (Köppen climate classification Am)[38][39] with a marked drier season in the winter. The city's sea-level elevation, coastal location, position just above the Tropic of Cancer, and proximity to the Gulf Stream shape its climate... (more)</p>
                                    </div>
                                </div>
                            </div>

                            <div className="expCat">
                                <img className="expCatImg" src={recreation} />
                                <div className="expCatText">
                                    <div className="expCatTitle">
                                        <h4>Recreation</h4>
                                    </div>
                                    <div className="expP">
                                        <p>The City of Miami has various lands operated by the National Park Service, the Florida Division of Recreation and Parks, and the City of Miami Department of Parks and Recreation... (more)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="SCPresources">
                        <div>
                            <h3>Resources</h3>
                        </div>
                        <div className="resourcesContainer">
                            <div className="resCat">
                                <img className="resImg" src={cityServices} />
                                <h5>City Services</h5>
                            </div>
                            <div className="resCat">
                                <img className="resImg" src={shopping} />
                                <h5>Shopping</h5>
                            </div>
                            <div className="resCat">
                                <img className="resImg" src={lodging} />
                                <h5>Lodging</h5>
                            </div>
                        </div>
                    </div>

                    {/* sidebar categories only display when checkbox checked */}
                    {categories.Restaurants ? 
                    <SCPrestaurants restaurants={restaurants} />
                    : <div></div>
                    }

                    {categories.Events ?
                        <SCPevents events = {events}/>
                        : <div></div>
                    }

                    {categories.Music ?
                        <div className="SCPresources">
                            <div>
                                <h3>Music</h3>
                            </div>
                            <div className="resourcesContainer">
                                <div className="resCat">
                                    <img className="resImg" src={cityServices} />
                                    <h5>City Services</h5>
                                </div>
                                <div className="resCat">
                                    <img className="resImg" src={shopping} />
                                    <h5>Shopping</h5>
                                </div>
                                <div className="resCat">
                                    <img className="resImg" src={lodging} />
                                    <h5>Lodging</h5>
                                </div>
                            </div>
                        </div>
                        : <div></div>
                    }

                    {categories.Coffeeshops ?
                        <div className="SCPresources">
                            <div>
                                <h3>Coffeeshops</h3>
                            </div>
                            <div className="resourcesContainer">
                                <div className="resCat">
                                    <img className="resImg" src={cityServices} />
                                    <h5>City Services</h5>
                                </div>
                                <div className="resCat">
                                    <img className="resImg" src={shopping} />
                                    <h5>Shopping</h5>
                                </div>
                                <div className="resCat">
                                    <img className="resImg" src={lodging} />
                                    <h5>Lodging</h5>
                                </div>
                            </div>
                        </div>
                        : <div></div>
                    }

                    {categories.Tours ?
                        <div className="SCPresources">
                            <div>
                                <h3>Tours</h3>
                            </div>
                            <div className="resourcesContainer">
                                <div className="resCat">
                                    <img className="resImg" src={cityServices} />
                                    <h5>City Services</h5>
                                </div>
                                <div className="resCat">
                                    <img className="resImg" src={shopping} />
                                    <h5>Shopping</h5>
                                </div>
                                <div className="resCat">
                                    <img className="resImg" src={lodging} />
                                    <h5>Lodging</h5>
                                </div>
                            </div>
                        </div>
                        : <div></div>
                    }

                    {categories.Museums ?
                        <div className="SCPresources">
                            <div>
                                <h3>Museums</h3>
                            </div>
                            <div className="resourcesContainer">
                                <div className="resCat">
                                    <img className="resImg" src={cityServices} />
                                    <h5>City Services</h5>
                                </div>
                                <div className="resCat">
                                    <img className="resImg" src={shopping} />
                                    <h5>Shopping</h5>
                                </div>
                                <div className="resCat">
                                    <img className="resImg" src={lodging} />
                                    <h5>Lodging</h5>
                                </div>
                            </div>
                        </div>
                        : <div></div>
                    }

                    {categories.Theater ?
                        <div className="SCPresources">
                            <div>
                                <h3>Theater</h3>
                            </div>
                            <div className="resourcesContainer">
                                <div className="resCat">
                                    <img className="resImg" src={cityServices} />
                                    <h5>City Services</h5>
                                </div>
                                <div className="resCat">
                                    <img className="resImg" src={shopping} />
                                    <h5>Shopping</h5>
                                </div>
                                <div className="resCat">
                                    <img className="resImg" src={lodging} />
                                    <h5>Lodging</h5>
                                </div>
                            </div>
                        </div>
                        : <div></div>
                    }

                    {categories.Performing_Arts ?
                        <div className="SCPresources">
                            <div>
                                <h3>Performing Arts</h3>
                            </div>
                            <div className="resourcesContainer">
                                <div className="resCat">
                                    <img className="resImg" src={cityServices} />
                                    <h5>City Services</h5>
                                </div>
                                <div className="resCat">
                                    <img className="resImg" src={shopping} />
                                    <h5>Shopping</h5>
                                </div>
                                <div className="resCat">
                                    <img className="resImg" src={lodging} />
                                    <h5>Lodging</h5>
                                </div>
                            </div>
                        </div>
                        : <div></div>
                    }

                    {categories.Professional_Sports ?
                        <div className="SCPresources">
                            <div>
                                <h3>Professional Sports</h3>
                            </div>
                            <div className="resourcesContainer">
                                <div className="resCat">
                                    <img className="resImg" src={cityServices} />
                                    <h5>City Services</h5>
                                </div>
                                <div className="resCat">
                                    <img className="resImg" src={shopping} />
                                    <h5>Shopping</h5>
                                </div>
                                <div className="resCat">
                                    <img className="resImg" src={lodging} />
                                    <h5>Lodging</h5>
                                </div>
                            </div>
                        </div>
                        : <div></div>
                    }

                    {categories.Parks ?
                        <div className="SCPresources">
                            <div>
                                <h3>Parks</h3>
                            </div>
                            <div className="resourcesContainer">
                                <div className="resCat">
                                    <img className="resImg" src={cityServices} />
                                    <h5>City Services</h5>
                                </div>
                                <div className="resCat">
                                    <img className="resImg" src={shopping} />
                                    <h5>Shopping</h5>
                                </div>
                                <div className="resCat">
                                    <img className="resImg" src={lodging} />
                                    <h5>Lodging</h5>
                                </div>
                            </div>
                        </div>
                        : <div></div>
                    }

                    {categories.Activities ?
                        <div className="SCPresources">
                            <div>
                                <h3>Activities</h3>
                            </div>
                            <div className="resourcesContainer">
                                <div className="resCat">
                                    <img className="resImg" src={cityServices} />
                                    <h5>City Services</h5>
                                </div>
                                <div className="resCat">
                                    <img className="resImg" src={shopping} />
                                    <h5>Shopping</h5>
                                </div>
                                <div className="resCat">
                                    <img className="resImg" src={lodging} />
                                    <h5>Lodging</h5>
                                </div>
                            </div>
                        </div>
                        : <div></div>
                    }

                    {categories.Clubs ?
                        <div className="SCPresources">
                            <div>
                                <h3>Clubs</h3>
                            </div>
                            <div className="resourcesContainer">
                                <div className="resCat">
                                    <img className="resImg" src={cityServices} />
                                    <h5>City Services</h5>
                                </div>
                                <div className="resCat">
                                    <img className="resImg" src={shopping} />
                                    <h5>Shopping</h5>
                                </div>
                                <div className="resCat">
                                    <img className="resImg" src={lodging} />
                                    <h5>Lodging</h5>
                                </div>
                            </div>
                        </div>
                        : <div></div>
                    }

                    {categories.Sports ?
                        <div className="SCPresources">
                            <div>
                                <h3>Sports</h3>
                            </div>
                            <div className="resourcesContainer">
                                <div className="resCat">
                                    <img className="resImg" src={cityServices} />
                                    <h5>City Services</h5>
                                </div>
                                <div className="resCat">
                                    <img className="resImg" src={shopping} />
                                    <h5>Shopping</h5>
                                </div>
                                <div className="resCat">
                                    <img className="resImg" src={lodging} />
                                    <h5>Lodging</h5>
                                </div>
                            </div>
                        </div>
                        : <div></div>
                    }

                    {categories.Leisure_Activities ?
                        <div className="SCPresources">
                            <div>
                                <h3>Leisure Activities</h3>
                            </div>
                            <div className="resourcesContainer">
                                <div className="resCat">
                                    <img className="resImg" src={cityServices} />
                                    <h5>City Services</h5>
                                </div>
                                <div className="resCat">
                                    <img className="resImg" src={shopping} />
                                    <h5>Shopping</h5>
                                </div>
                                <div className="resCat">
                                    <img className="resImg" src={lodging} />
                                    <h5>Lodging</h5>
                                </div>
                            </div>
                        </div>
                        : <div></div>
                    }

                    {categories.Senior_Activities ?
                        <div className="SCPresources">
                            <div>
                                <h3>Senior Activities</h3>
                            </div>
                            <div className="resourcesContainer">
                                <div className="resCat">
                                    <img className="resImg" src={cityServices} />
                                    <h5>City Services</h5>
                                </div>
                                <div className="resCat">
                                    <img className="resImg" src={shopping} />
                                    <h5>Shopping</h5>
                                </div>
                                <div className="resCat">
                                    <img className="resImg" src={lodging} />
                                    <h5>Lodging</h5>
                                </div>
                            </div>
                        </div>
                        : <div></div>
                    }

                    {categories.Current ?
                        <div className="SCPresources">
                            <div>
                                <h3>Current</h3>
                            </div>
                            <div className="resourcesContainer">
                                <div className="resCat">
                                    <img className="resImg" src={cityServices} />
                                    <h5>City Services</h5>
                                </div>
                                <div className="resCat">
                                    <img className="resImg" src={shopping} />
                                    <h5>Shopping</h5>
                                </div>
                                <div className="resCat">
                                    <img className="resImg" src={lodging} />
                                    <h5>Lodging</h5>
                                </div>
                            </div>
                        </div>
                        : <div></div>
                    }

                    {categories.Historical ?
                        <div className="SCPresources">
                            <div>
                                <h3>Historical</h3>
                            </div>
                            <div className="resourcesContainer">
                                <div className="resCat">
                                    <img className="resImg" src={cityServices} />
                                    <h5>City Services</h5>
                                </div>
                                <div className="resCat">
                                    <img className="resImg" src={shopping} />
                                    <h5>Shopping</h5>
                                </div>
                                <div className="resCat">
                                    <img className="resImg" src={lodging} />
                                    <h5>Lodging</h5>
                                </div>
                            </div>
                        </div>
                        : <div></div>
                    }

                    {categories.Clothing ?
                        <div className="SCPresources">
                            <div>
                                <h3>Clothing</h3>
                            </div>
                            <div className="resourcesContainer">
                                <div className="resCat">
                                    <img className="resImg" src={cityServices} />
                                    <h5>City Services</h5>
                                </div>
                                <div className="resCat">
                                    <img className="resImg" src={shopping} />
                                    <h5>Shopping</h5>
                                </div>
                                <div className="resCat">
                                    <img className="resImg" src={lodging} />
                                    <h5>Lodging</h5>
                                </div>
                            </div>
                        </div>
                        : <div></div>
                    }

                    {categories.Furnishings ?
                        <div className="SCPresources">
                            <div>
                                <h3>Furnishings</h3>
                            </div>
                            <div className="resourcesContainer">
                                <div className="resCat">
                                    <img className="resImg" src={cityServices} />
                                    <h5>City Services</h5>
                                </div>
                                <div className="resCat">
                                    <img className="resImg" src={shopping} />
                                    <h5>Shopping</h5>
                                </div>
                                <div className="resCat">
                                    <img className="resImg" src={lodging} />
                                    <h5>Lodging</h5>
                                </div>
                            </div>
                        </div>
                        : <div></div>
                    }

                    {categories.Hardware ?
                        <div className="SCPresources">
                            <div>
                                <h3>Hardware</h3>
                            </div>
                            <div className="resourcesContainer">
                                <div className="resCat">
                                    <img className="resImg" src={cityServices} />
                                    <h5>City Services</h5>
                                </div>
                                <div className="resCat">
                                    <img className="resImg" src={shopping} />
                                    <h5>Shopping</h5>
                                </div>
                                <div className="resCat">
                                    <img className="resImg" src={lodging} />
                                    <h5>Lodging</h5>
                                </div>
                            </div>
                        </div>
                        : <div></div>
                    }

                    {categories.Miscellaneous ?
                        <div className="SCPresources">
                            <div>
                                <h3>Miscellaneous</h3>
                            </div>
                            <div className="resourcesContainer">
                                <div className="resCat">
                                    <img className="resImg" src={cityServices} />
                                    <h5>City Services</h5>
                                </div>
                                <div className="resCat">
                                    <img className="resImg" src={shopping} />
                                    <h5>Shopping</h5>
                                </div>
                                <div className="resCat">
                                    <img className="resImg" src={lodging} />
                                    <h5>Lodging</h5>
                                </div>
                            </div>
                        </div>
                        : <div></div>
                    }

                    {categories.Hotels ?
                        <div className="SCPresources">
                            <div>
                                <h3>Hotels</h3>
                            </div>
                            <div className="resourcesContainer">
                                <div className="resCat">
                                    <img className="resImg" src={cityServices} />
                                    <h5>City Services</h5>
                                </div>
                                <div className="resCat">
                                    <img className="resImg" src={shopping} />
                                    <h5>Shopping</h5>
                                </div>
                                <div className="resCat">
                                    <img className="resImg" src={lodging} />
                                    <h5>Lodging</h5>
                                </div>
                            </div>
                        </div>
                        : <div></div>
                    }

                    {categories.AirBnB ?
                        <div className="SCPresources">
                            <div>
                                <h3>AirBnB</h3>
                            </div>
                            <div className="resourcesContainer">
                                <div className="resCat">
                                    <img className="resImg" src={cityServices} />
                                    <h5>City Services</h5>
                                </div>
                                <div className="resCat">
                                    <img className="resImg" src={shopping} />
                                    <h5>Shopping</h5>
                                </div>
                                <div className="resCat">
                                    <img className="resImg" src={lodging} />
                                    <h5>Lodging</h5>
                                </div>
                            </div>
                        </div>
                        : <div></div>
                    }

                    {categories.Accessibility ?
                        <div className="SCPresources">
                            <div>
                                <h3>Accessibility</h3>
                            </div>
                            <div className="resourcesContainer">
                                <div className="resCat">
                                    <img className="resImg" src={cityServices} />
                                    <h5>City Services</h5>
                                </div>
                                <div className="resCat">
                                    <img className="resImg" src={shopping} />
                                    <h5>Shopping</h5>
                                </div>
                                <div className="resCat">
                                    <img className="resImg" src={lodging} />
                                    <h5>Lodging</h5>
                                </div>
                            </div>
                        </div>
                        : <div></div>
                    }

                    {categories.Sustainability ?
                        <div className="SCPresources">
                            <div>
                                <h3>Sustainability</h3>
                            </div>
                            <div className="resourcesContainer">
                                <div className="resCat">
                                    <img className="resImg" src={cityServices} />
                                    <h5>City Services</h5>
                                </div>
                                <div className="resCat">
                                    <img className="resImg" src={shopping} />
                                    <h5>Shopping</h5>
                                </div>
                                <div className="resCat">
                                    <img className="resImg" src={lodging} />
                                    <h5>Lodging</h5>
                                </div>
                            </div>
                        </div>
                        : <div></div>
                    }

                    {categories.City_Services ?
                        <div className="SCPresources">
                            <div>
                                <h3>City Services</h3>
                            </div>
                            <div className="resourcesContainer">
                                <div className="resCat">
                                    <img className="resImg" src={cityServices} />
                                    <h5>City Services</h5>
                                </div>
                                <div className="resCat">
                                    <img className="resImg" src={shopping} />
                                    <h5>Shopping</h5>
                                </div>
                                <div className="resCat">
                                    <img className="resImg" src={lodging} />
                                    <h5>Lodging</h5>
                                </div>
                            </div>
                        </div>
                        : <div></div>
                    }

                </section>
            </section>
        </>
    )
}


export default SingleCityPage;