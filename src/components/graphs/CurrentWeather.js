import React, { useState, useEffect } from "react";
import axios from "axios";

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

const CurrentWeather = (props) => {
  const [weather, setWeather] = useState({})

  // AXIOS CALL FOR DISPLAYING CURRENT WEATHER
  useEffect(() => {
    axios.get(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/a8c0298ef7550627f36777243a127c0e/${props.item.Latitude},${props.item.Longitude}`)
      .then(response => {
        console.log(response)
        setWeather(response.data.currently)
      })
      .catch(error => {
        console.log("Error retrieving Weather Information", error)
      })
  }, [props.item.Latitude, props.item.Longitude])

  const weatherTime = new Date().toLocaleTimeString();

  var roundTemp = weather.temperature;
  roundTemp = Math.round(roundTemp);

  var feelsLike = weather.apparentTemperature;
  feelsLike = Math.round(feelsLike);

  var weatherIcon;

  if ( weather.icon === "clear-day"){
    weatherIcon = clearDay
} else if( weather.icon === "clear-night"){
    weatherIcon = clearNight
} else if( weather.icon === "partly-cloudy-day"){
    weatherIcon = partlyCloudyDay
} else if( weather.icon === "partly-cloudy-night"){
    weatherIcon = partlyCloudyNight
} else if( weather.icon === "cloudy"){
    weatherIcon = cloudy
} else if( weather.icon === "rain"){
    weatherIcon = rain
} else if( weather.icon === "sleet"){
    weatherIcon = sleet
} else if( weather.icon === "snow"){
    weatherIcon = snow
} else if( weather.icon === "wind"){
    weatherIcon = wind
} else if( weather.icon === "fog"){
    weatherIcon = fog
};

  return (
    <>
      <div className="SCPweather">
        <div className="weatherImage">
          <img alt='weather icon' src={weatherIcon} />
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
    </>
  )
};

export default CurrentWeather;