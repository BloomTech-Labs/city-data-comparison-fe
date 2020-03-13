import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
<<<<<<< HEAD
import { CityContext } from '../../contexts/CityContext';
//import Skycons from 'react-skycons';
import { useParams } from "react-router-dom";
=======
import queryString from 'query-string';
>>>>>>> 05ae801d8deea71d172bfc3d08e2bc1a7231846e


import './SingleCityPage.scss';

import SCPrestaurants from "./SCPrestaurants";
import SCPevents from "./SCPevents";
import SCPcityServices from "./SCPcityServices";

import cityscape from '../../assets/single_city_page_photos/cityscape.jpg';
import foodAndDrink from '../../assets/single_city_page_photos/foodAndDrink.jpg';
import attractions from '../../assets/single_city_page_photos/attractions.jpg';
import weatherImg from '../../assets/single_city_page_photos/weather.png';
import clearDay from "../../assets/single_city_page_photos/clear-day.png";
import clearNight from "../../assets/single_city_page_photos/clear-night.png";
import cloudy from "../../assets/single_city_page_photos/cloudy.png";
import fog from "../../assets/single_city_page_photos/fog.png";
import partlyCloudyDay from "../../assets/single_city_page_photos/partly-cloudy-day.png";
import partlyCloudyNight from "../../assets/single_city_page_photos/partly-cloudy-night.png";
import rain from "../../assets/single_city_page_photos/rain.png";
import sleet from "../../assets/single_city_page_photos/sleet.png";
import snow from "../../assets/single_city_page_photos/snow.png";
import wind from "../../assets/single_city_page_photos/wind.png";
import recreation from '../../assets/single_city_page_photos/recreation.png';
import cityServices from '../../assets/single_city_page_photos/cityServices.png';
import shopping from '../../assets/single_city_page_photos/shopping.png';
import lodging from '../../assets/single_city_page_photos/lodging.png';
import dropdownIcon from '../../assets/single_city_page_photos/DropdownIcon.png'

import backArrow from '../../assets/single_city_page_photos/Back arrow.png';

const SingleCityPage = (props) => {

  const { latitude, longitude } = queryString.parse(props.location.search);

  const [categories, setCategories] = useState({});
  const [restaurants, setRestaurants] = useState();
  const [events, setEvents] = useState();
  const [weather, setWeather] = useState({});

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

  // Handles Dropdown icon animation
  var upClass = 'toggle-up';
  var downClass = 'toggle-down';
  
  function iconAnimation1() {
    var dropIcon1 = document.querySelector('.dropIcon1');
    
    if (~dropIcon1.className.indexOf(downClass)) {
      dropIcon1.className = dropIcon1.className.replace(downClass, upClass);
    } else {
          dropIcon1.className = dropIcon1.className.replace(upClass, downClass);
    }
  }

  function iconAnimation2() {
    var dropIcon2 = document.querySelector('.dropIcon2');
    
    if (~dropIcon2.className.indexOf(downClass)) {
      dropIcon2.className = dropIcon2.className.replace(downClass, upClass);
    } else {
          dropIcon2.className = dropIcon2.className.replace(upClass, downClass);
    }
  }

  function iconAnimation3() {
    var dropIcon3 = document.querySelector('.dropIcon3');
    
    if (~dropIcon3.className.indexOf(downClass)) {
      dropIcon3.className = dropIcon3.className.replace(downClass, upClass);
    } else {
          dropIcon3.className = dropIcon3.className.replace(upClass, downClass);
    }
  }

  function iconAnimation4() {
    var dropIcon4 = document.querySelector('.dropIcon4');
    
    if (~dropIcon4.className.indexOf(downClass)) {
      dropIcon4.className = dropIcon4.className.replace(downClass, upClass);
    } else {
          dropIcon4.className = dropIcon4.className.replace(upClass, downClass);
    }
  }

  function iconAnimation5() {
    var dropIcon5 = document.querySelector('.dropIcon5');
    
    if (~dropIcon5.className.indexOf(downClass)) {
      dropIcon5.className = dropIcon5.className.replace(downClass, upClass);
    } else {
          dropIcon5.className = dropIcon5.className.replace(upClass, downClass);
    }
  }

  function iconAnimation6() {
    var dropIcon6 = document.querySelector('.dropIcon6');
    
    if (~dropIcon6.className.indexOf(downClass)) {
      dropIcon6.className = dropIcon6.className.replace(downClass, upClass);
    } else {
          dropIcon6.className = dropIcon6.className.replace(upClass, downClass);
    }
  }

  function iconAnimation7() {
    var dropIcon7 = document.querySelector('.dropIcon7');
    
    if (~dropIcon7.className.indexOf(downClass)) {
      dropIcon7.className = dropIcon7.className.replace(downClass, upClass);
    } else {
          dropIcon7.className = dropIcon7.className.replace(upClass, downClass);
    }
  }

  // Handles toggles for Anchor-headers
  function toggle1() {
    document.getElementById("menuCollapse1").classList.toggle("hidden");
    iconAnimation1();
  }

  function toggle2() {
    document.getElementById("menuCollapse2").classList.toggle("hidden");
    iconAnimation2()
  }

  function toggle3() {
    document.getElementById("menuCollapse3").classList.toggle("hidden");
    iconAnimation3()
  }

  function toggle4() {
    document.getElementById("menuCollapse4").classList.toggle("hidden");
    iconAnimation4()
  }

  function toggle5() {
    document.getElementById("menuCollapse5").classList.toggle("hidden");
    iconAnimation5()
  }

  function toggle6() {
    document.getElementById("menuCollapse6").classList.toggle("hidden");
    iconAnimation6()
  }

  function toggle7() {
    document.getElementById("menuCollapse7").classList.toggle("hidden");
    iconAnimation7()
  }

  console.log('params', latitude)

    // API CALL FOR RESTAURANTS
    useEffect(() => {
        axios.get(`https://be.citrics.io/api/yelp/restaurant/${latitude}/${longitude}`)
            //   .get(`http://citricsbe-staging.kiqprw5whz.us-east-2.elasticbeanstalk.com/api/restaurant?latitude=30.1&longitude=-81.7`)
            // 42.3314° N, 83.0458° W
            .then(res => {
                console.log('get rest', res.data)
                setRestaurants(res.data)
                console.log('rest', restaurants)
                // console.log('test setRest', setRestaurants)
            })
            .catch(err => console.log(err))
    }, [latitude, longitude]);

    // API CALL FOR EVENTS
    useEffect(() => {
        axios.get(`https://be.citrics.io/api/yelp/events/${latitude}/${longitude}`)
        .then(response => {
            setEvents(response.data)
        })
        .catch(error => {
            console.log("Events", error)
        })
    },[latitude, longitude]);

    // // API CALL FOR WEATHER
    // useEffect(() => {
    //     axios.get(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/a8c0298ef7550627f36777243a127c0e/${latitude},${longitude}`)
    //         .then(response => {
    //             setWeather(response.data.currently)
    //         })
    //         .catch(error => {
    //             console.log("Error retrieving Weather Information", error)
    //         })
    // }, [latitude, longitude])

    // const weatherTime = new Date().toLocaleTimeString();

    // var roundTemp = weather.temperature;
    // roundTemp = Math.round(roundTemp)

    // var feelsLike = weather.apparentTemperature;
    // feelsLike = Math.round(feelsLike);

    // var weatherIcon;

    // if ( weather.icon === "clear-day"){
    //     weatherIcon = clearDay
    // } else if( weather.icon === "clear-night"){
    //     weatherIcon = clearNight
    // } else if( weather.icon === "partly-cloudy-day"){
    //     weatherIcon = partlyCloudyDay
    // } else if( weather.icon === "partly-cloudy-night"){
    //     weatherIcon = partlyCloudyNight
    // } else if( weather.icon === "cloudy"){
    //     weatherIcon = cloudy
    // } else if( weather.icon === "rain"){
    //     weatherIcon = rain
    // } else if( weather.icon === "sleet"){
    //     weatherIcon = sleet
    // } else if( weather.icon === "snow"){
    //     weatherIcon = snow
    // } else if( weather.icon === "wind"){
    //     weatherIcon = wind
    // } else if( weather.icon === "fog"){
    //     weatherIcon = fog
    // };

    return (
        <>
        <header>
            {/* hero/header section */}
            <div className="SCPhero">
                <img alt='img of city' className="SCPheroImg" src={cityscape} />
            </div>
        </header>

        <div className="SCPbody">
            <section className="SCPcityIntro">
                <div className="SCPdescription">
                    <div className="SCPbackToExplore">
                        <img className="backArrow" src={backArrow} />
                        <Link className="backLink" to="/map">Back to explore</Link>
                    </div>
                    <div>
                        <h1 className="descH1">{restaurants && restaurants.businesses ? restaurants.businesses[0].location.city : ''}, {restaurants && restaurants.businesses ? restaurants.businesses[0].location.state : ''}</h1>
                    </div>

                    <div className="city-desc">
                        <p>Miami is one of the state's – and the world’s – most popular vacation spots. Though destinations often are said to offer something for everyone, the Miami area does indeed offer multiple enticements for everyone: The trendy nightlife of South Beach, bejeweled by the eye candy of the Art Deco district. The bustle of Calle Ocho and the highly caffeinated energy of Little Havana. The plush hotels of Miami Beach and the historic hideaways of Coral Gables... more</p>
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

              <h3 className="anchor-header1" onClick={toggle1}>Food &amp; Drink<img src={dropdownIcon} className="dropIcon1 toggle-down"/></h3>
              <div id="menuCollapse1">
                <span class="spanStyle">
                  <label for="Restaurants" class="SCPfilterContain">
                    Restaurants
                    <input type="checkbox" id="Restaurants" name="Restaurants" value="Restaurants" onChange={onChange} />
                    <span class="SCPcheckmark"></span>
                  </label>
                  <br />
                  <label for="Events" class="SCPfilterContain">
                    Events
                    <input type="checkbox" id="Events" name="Events" value="Events" onChange={onChange} />
                    <span class="SCPcheckmark"></span>
                  </label>
                  <br />
                  <label for="Music" class="SCPfilterContain">
                    Music
                    <input type="checkbox" id="Music" name="Music" value="Music" onChange={onChange} />
                    <span class="SCPcheckmark"></span>
                  </label>
                  <br />
                  <label for="Coffeeshops" class="SCPfilterContain">
                    Coffeeshops
                    <input type="checkbox" id="Coffeeshops" name="Coffeeshops" value="Coffeeshops" onChange={onChange} />
                    <span class="SCPcheckmark"></span>
                  </label>
                </span>
              </div>

              <h3 className="anchor-header2" onClick={toggle2}>Attractions<img src={dropdownIcon} className="dropIcon2 toggle-down"/></h3>
              <div id="menuCollapse2">
                <span class="spanStyle">
                  <label for="Tours" class="SCPfilterContain">
                    Tours
                    <input type="checkbox" id="Tours" name="Tours" value="Tours" onChange={onChange} />
                    <span class="SCPcheckmark"></span>
                  </label><br />
                  <label for="Museums" class="SCPfilterContain">
                    Museums
                    <input type="checkbox" id="Museums" name="Museums" value="Museums" onChange={onChange} />
                    <span class="SCPcheckmark"></span>
                  </label><br />
                  <label for="Theater" class="SCPfilterContain">
                    Theater
                    <input type="checkbox" id="Theater" name="Theater" value="Theater" onChange={onChange} />
                    <span class="SCPcheckmark"></span>
                  </label><br />
                  <label for="Performing_Arts" class="SCPfilterContain">
                    Performing Arts
                    <input type="checkbox" id="Performing_Arts" name="Performing_Arts" value="Performing_Arts" onChange={onChange} />
                    <span class="SCPcheckmark"></span>
                  </label><br />
                  <label for="Professional_Sports" class="SCPfilterContain">
                    Professional Sports
                    <input type="checkbox" id="Professional_Sports" name="Professional_Sports" value="Professional_Sports" onChange={onChange} />
                    <span class="SCPcheckmark"></span>
                  </label>
                </span>
              </div>

              <h3 className="anchor-header3" onClick={toggle3}>Recreation<img src={dropdownIcon} className="dropIcon3 toggle-down"/></h3>
              <div id="menuCollapse3">
                <span class="spanStyle">
                  <label for="Parks" class="SCPfilterContain">
                    Parks
                    <input type="checkbox" id="Parks" name="Parks" value="Parks" onChange={onChange} />
                    <span class="SCPcheckmark"></span>
                  </label><br />
                  <label for="Activities" class="SCPfilterContain">
                    Activities
                    <input type="checkbox" id="Activities" name="Activities" value="Activities" onChange={onChange} />
                    <span class="SCPcheckmark"></span>
                  </label><br />
                  <label for="Clubs" class="SCPfilterContain">
                    Clubs
                    <input type="checkbox" id="Clubs" name="Clubs" value="Clubs" onChange={onChange} />
                    <span class="SCPcheckmark"></span>
                  </label><br />
                  <label for="Sports" class="SCPfilterContain">
                    Sports
                    <input type="checkbox" id="Sports" name="Sports" value="Sports" onChange={onChange} />
                    <span class="SCPcheckmark"></span>
                  </label><br />
                  <label for="Leisure_Activities" class="SCPfilterContain">
                    Leisure Activities
                    <input type="checkbox" id="Leisure_Activities" name="Leisure_Activities" value="Leisure_Activities" onChange={onChange} />
                    <span class="SCPcheckmark"></span>
                  </label><br />
                  <label for="Senior_Activities" class="SCPfilterContain">
                    Senior Activities
                    <input type="checkbox" id="Senior_Activities" name="Senior_Activities" value="Senior_Activities" onChange={onChange} />
                    <span class="SCPcheckmark"></span>
                  </label>
                </span>
              </div>

              <h3 className="anchor-header4" onClick={toggle4}>Weather<img src={dropdownIcon} className="dropIcon4 toggle-down"/></h3>
              <div id="menuCollapse4">
                <span class="spanStyle">
                  <label for="Current" class="SCPfilterContain">
                    Current
                    <input type="checkbox" id="Current" name="Current" value="Current" onChange={onChange} />
                    <span class="SCPcheckmark"></span>
                  </label><br />
                  <label for="Historical" class="SCPfilterContain">
                    Historical
                    <input type="checkbox" id="Historical" name="Historical" value="Historical" onChange={onChange} />
                    <span class="SCPcheckmark"></span>
                  </label>
                </span>
              </div>

              <h3 className="anchor-header5" onClick={toggle5}>Shopping<img src={dropdownIcon} className="dropIcon5 toggle-down"/></h3>
              <div id="menuCollapse5">
                <span class="spanStyle">
                  <label for="Clothing" class="SCPfilterContain">
                    Clothing
                    <input type="checkbox" id="Clothing" name="Clothing" value="Clothing" onChange={onChange} />
                    <span class="SCPcheckmark"></span>
                  </label><br />
                  <label for="Furnishings" class="SCPfilterContain">
                    Furnishings
                    <input type="checkbox" id="Furnishings" name="Furnishings" value="Furnishings" onChange={onChange} />
                    <span class="SCPcheckmark"></span>
                  </label><br />
                  <label for="Hardware" class="SCPfilterContain">
                    Hardware
                    <input type="checkbox" id="Hardware" name="Hardware" value="Hardware" onChange={onChange} />
                    <span class="SCPcheckmark"></span>
                  </label><br />
                  <label for="Miscellaneous" class="SCPfilterContain">
                    Miscellaneous
                    <input type="checkbox" id="Miscellaneous" name="Miscellaneous" value="Miscellaneous" onChange={onChange} />
                    <span class="SCPcheckmark"></span>
                  </label>
                </span>
              </div>

              <h3 className="anchor-header6" onClick={toggle6}>Lodging<img src={dropdownIcon} className="dropIcon6 toggle-down"/></h3>
              <div id="menuCollapse6">
                <span class="spanStyle">
                  <label for="Hotels" class="SCPfilterContain">
                    Hotels
                    <input type="checkbox" id="Hotels" name="Hotels" value="Hotels" onChange={onChange} />
                    <span class="SCPcheckmark"></span>
                  </label><br />
                  <label for="AirBnB" class="SCPfilterContain">
                    AirBnB
                    <input type="checkbox" id="AirBnB" name="AirBnB" value="AirBnB" onChange={onChange} />
                    <span class="SCPcheckmark"></span>
                  </label>
                </span>
              </div>

              <h3 className="anchor-header7" onClick={toggle7}>Services<img src={dropdownIcon} className="dropIcon7 toggle-down"/></h3>
              <div id="menuCollapse7">
                <span class="spanStyle">
                  <label for="Accessibility" class="SCPfilterContain">
                    Accessibility
                    <input type="checkbox" id="Accessibility" name="Accessibility" value="Accessibility" onChange={onChange} />
                    <span class="SCPcheckmark"></span>
                  </label><br />
                  <label for="Sustainability" class="SCPfilterContain">
                    Sustainability
                    <input type="checkbox" id="Sustainability" name="Sustainability" value="Sustainability" onChange={onChange} />
                    <span class="SCPcheckmark"></span>
                  </label><br />
                  <label for="City_Services" class="SCPfilterContain">
                    City Services
                    <input type="checkbox" id="City_Services" name="City_Services" value="City_Services" onChange={onChange} />
                    <span class="SCPcheckmark"></span>
                  </label>
                </span>
              </div>



            </ul>
          </div>
        </section>

                {/* main categories displayed when you land on page */}

                <section className="SCPcategories">
                    

                    {/* <div className="SCPresources">
                            <div>
                                <h3>City Services</h3>
                                
                            </div>
                            <div className="resourcesContainer">
                                <div className="resCat">
                                    <img className="resImg" src={cityServices} />
                                    <h5>Name of Place</h5>
                                    <p>Phone Number</p>
                                    <p>Website</p>
                                </div>
                                <div className="resCat">
                                    <img className="resImg" src={shopping} />
                                    <h5>Name of Place</h5>
                                    <p>Phone Number</p>
                                    <p>Website</p>
                                </div>
                                <div className="resCat">
                                    <img className="resImg" src={lodging} />
                                    <h5>Name of Place</h5>
                                    <p>Phone Number</p>
                                    <p>Website</p>
                                </div>
                            </div>
                        </div> */}
                    

                    {/* sidebar categories only display when checkbox checked */}
                    {categories.Restaurants ? 
                    <SCPrestaurants restaurants={restaurants} />
                    : null
                    }

                    {categories.Events ?
                        <SCPevents events = {events}/>
                        : null
                    }

                    {categories.Music ? null : null}

                    {categories.Coffeeshops ? null : null}

                    {categories.Tours ? null : null}

                    {categories.Museums ? null : null}

                    {categories.Theater ? null : null}

                    {categories.Performing_Arts ? null : null}

                    {categories.Professional_Sports ? null : null}

                    {categories.Parks ? null : null}

                    {categories.Activities ? null : null}

                    {categories.Clubs ? null : null}

                    {categories.Sports ? null : null}

                    {categories.Leisure_Activities ? null : null}

                    {categories.Senior_Activities ? null : null}

                    {categories.Current ? null : null}

                    {categories.Historical ? null : null}

                    {categories.Clothing ? null : null}

                    {categories.Furnishings ? null : null}

                    {categories.Hardware ? null : null}

                    {categories.Miscellaneous ? null : null}

                    {categories.Hotels ? null : null}

                    {categories.AirBnB ? null : null}

                    {categories.Accessibility ? null : null}

                    {categories.Sustainability ? null : null}

                    {categories.City_Services ? null : null}

                    <div className="SCPexplore">
                        <div className="exploreContainer">
                            <div>
                                <h3>Explore</h3>
                            </div>
                            <div className="expCat">
                                <div className="expCatImgContainer">
                                    <img alt='img' className="expCatImg" src={foodAndDrink} />
                                </div>
                                <div className="expCatText">
                                    <div className="expCatTitle">
                                        <h4>Food and drinks</h4>
                                    </div>
                                    <div className="expP">
                                        <p>The cuisine of Miami is a reflection of its diverse population, with a heavy influence from Caribbean and Latin American cuisine. By combining the two with American cuisine, it has spawned a unique South Florida style of cooking known as Floribbean... more</p>
                                    </div>
                                </div>
                            </div>
                            <div className="expCat">
                                <div className="expCatImgContainer">
                                    <img alt='img' className="expCatImg" src={attractions} />
                                </div>
                                <div className="expCatText">
                                    <div className="expCatTitle">
                                        <h4>Attractions</h4>
                                    </div>
                                    <div className="expP">
                                        <p>In addition to annual festivals like the Calle Ocho Festival, Miami is home to many entertainment venues, theaters, museums, parks and performing arts centers. The newest addition to the Miami arts scene is the Adrienne Arsht Center for the ... more</p>
                                    </div>
                                </div>
                            </div>
                            <div className="expCat">
                                <div className="expCatImgContainer">
                                    <img  alt='img' className="expCatImg" src={weatherImg} />
                                </div>
                                <div className="expCatText">
                                    <div className="expCatTitle">
                                        <h4>Weather</h4>
                                    </div>
                                    <div className="expP">
                                        <p>Miami has a tropical monsoon climate (Köppen climate classification Am)[38][39] with a marked drier season in the winter. The city's sea-level elevation, coastal location, position just above the Tropic of Cancer, and proximity to the Gulf Stream shape its climate... more</p>
                                    </div>
                                </div>
                            </div>

                            <div className="expCat">
                                <div className="expCatImgContainer">
                                    <img alt='img' className="expCatImg" src={recreation} />
                                </div>
                                <div className="expCatText">
                                    <div className="expCatTitle">
                                        <h4>Recreation</h4>
                                    </div>
                                    <div className="expP">
                                        <p>The City of Miami has various lands operated by the National Park Service, the Florida Division of Recreation and Parks, and the City of Miami Department of Parks and Recreation... more</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
            </section>
        </div>
    </>
    )
}


export default SingleCityPage;