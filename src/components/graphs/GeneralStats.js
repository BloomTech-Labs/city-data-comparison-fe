
import React, { useState } from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';

import world from '../map-components/assets/world.svg'
import pop from '../map-components/assets/population.svg'
import users from '../map-components/assets/users.svg'
import briefcase from '../map-components/assets/briefcase.svg'
import income from '../map-components/assets/dollar.svg'
import medianAge from "../../assets/generalstats/median-age.png"
import medianIncome from "../../assets/generalstats/median-income.png"
import medianRent from "../../assets/generalstats/median-rent.png"
import population from "../../assets/generalstats/population.png"

import access from "../../assets/generalstats/access.png"
import bike from "../../assets/generalstats/bike.png"
import safety from "../../assets/generalstats/safety.png"
import sustain from "../../assets/generalstats/sustain.png"
import transit from "../../assets/generalstats/transit.png"
import walk from "../../assets/generalstats/walk.png"

import AvgTemp from "../graphs/culture/tempAvg";
import CurrentWeather from "./CurrentWeather";
import FavoriteButton from '../map-components/FavoriteButton'
import Recommendations from "./Recommendations"


function TotalPopulation({ ethData }) {
  function numberCommas(x) {
    if (x === null) {
      return
    }
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  console.log("ethData", ethData);
  return (
    <>
      {/* 1 SELECTED CITY */}
      <div className="city-overview-container-small">
        {ethData.length === 1 ? ethData.map(item =>

          <div className="city-overview-container-medium">
            <div className="city-overview-container">
              <div className="city-overview-border">
                <p>{item.name_with_com}</p>
                {/* <FavoriteButton city={item} /> */}
              </div>
            </div>
            {/* <div className="city-info-container"> */}
            <div className="main-contain">
              <div className="stats-div">
                <div className="stats-style">
                  <img className="stats-img" src={population} />
                  <p className="stats-par">Population: {numberCommas(item["Total Population"])}</p>
                </div>
                <div className="stats-style">
                  <img className="stats-img" src={medianAge} />
                  <p className="stats-par">Median Age: {numberCommas(item["Median Age"])} years old</p>
                </div>
                <div className="stats-style">
                  <img className="stats-img" src={medianRent} />
                  <p className="stats-par">Median Rent: ${numberCommas(item["Median Rent"])}</p>
                </div>
                <div className="stats-style">
                  <img className="stats-img" src={medianIncome} />
                  <p className="stats-par">Median Income: ${numberCommas(item["Median Household Income"])}</p>
                </div>
                <div className="weather-style">
                  {/* <p>Historical Weather:</p> */}
                  <div className="avg-temp-container">
                    <p className="chart-title">Historical Temperature</p>
                    <AvgTemp edData={[item]} />
                  </div>
                  <div>
                    <CurrentWeather item={item} />
                  </div>
                </div>
              </div>
              <div className="scores-div">
                <div className="scores-contain">
                  <div className="title-contain">
                    <h4>Walkability</h4>
                    <p>Pedestrian friendliness</p>
                  </div>
                  <div className="icon-score-contain">
                    <div className="icon-contain">
                      <img src={walk} />
                    </div>
                    <div className="number-contain">
                      <h5>Inadequate</h5>
                      <p className="walk-number">{numberCommas(item["Walk Score"])}</p>
                    </div>
                  </div>
                </div>
                <div className="scores-contain">
                  <div className="title-contain">
                    <h4>Transit Score</h4>
                    <p>Public Transportation</p>
                  </div>
                  <div className="icon-score-contain">
                    <div className="icon-contain">
                      <img src={transit} />
                    </div>
                    <div className="number-contain">
                      <h5>Excellent</h5>
                      <p className="transit-number">{numberCommas(item["Transit Score"])}</p>
                    </div>
                  </div>
                </div>
                <div className="scores-contain">
                  <div className="title-contain">
                    <h4>Bikeability</h4>
                    <p>Biking infrastructure</p>
                  </div>
                  <div className="icon-score-contain">
                    <div className="icon-contain">
                      <img src={bike} />
                    </div>
                    <div className="number-contain">
                      <h5>Minimal</h5>
                      <p className="bike-number">{numberCommas(item["Bike Score"])}</p>
                    </div>
                  </div>
                </div>
                <div className="scores-contain">
                  <div className="title-contain">
                    <h4>Sustainability</h4>
                    <p>Green Infrastructure</p>
                  </div>
                  <div className="icon-score-contain">
                    <div className="icon-contain">
                      <img src={sustain} />
                    </div>
                    <div className="number-contain">
                      <h5>Good</h5>
                      <p className="sustain-number">51</p>
                    </div>
                  </div>
                </div>
                <div className="scores-contain">
                  <div className="title-contain">
                    <h4>Safety</h4>
                    <p>Historical Crime Data</p>
                  </div>
                  <div className="icon-score-contain">
                    <div className="icon-contain">
                      <img src={safety} />
                    </div>
                    <div className="number-contain">
                      <h5>Good</h5>
                      <p className="safety-number">51</p>
                    </div>
                  </div>
                </div>
                <div className="scores-contain">
                  <div className="title-contain">
                    <h4>Accessibility</h4>
                    <p>Accessibility infrastructure</p>
                  </div>
                  <div className="icon-score-contain">
                    <div className="icon-contain">
                      <img src={access} />
                    </div>
                    <div className="number-contain">
                      <h5>Minimal</h5>
                      <p className="access-number">25</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="button-div">
              <Link target='_blank' to={`/SingleCityPage?latitude=${item.Latitude}&longitude=${item.Longitude}`
              }><button className="quality-button">Experience {item.city_no_st}</button></Link>
            </div>
            {/* CODE FOR RECOMMENDATIONS */}
            {/* {window.location.href.includes("profile") ? <div style={{ marginTop: "1%" }} /> :
              <div>
                <Recommendations city={item} />
              </div>} */}
          </div>
        ) : null}

        {/* 2 CITIES SELECTED */}
        {ethData.length === 2 ? ethData.map(item =>
          <div className="city-overview-container-medium2">
            <div className="city-overview-container">
              <div className="city-overview-border">
                {console.log("ITEM FROM GENERAL2", item)}
                <div className="title-container2">
                  <p>{item.name_with_com}</p>
                </div>
                <div className="button-div2">
                  <Link target='_blank' to={`/SingleCityPage?latitude=${item.Latitude}&longitude=${item.Longitude}`
                  }><button className="quality-button">Experience {item.city_no_st}</button></Link>
                </div>
                {/* <FavoriteButton city={item} /> */}
              </div>
            </div>
            {/* <div>
              <Link target='_blank' to={`/SingleCityPage?latitude=${item.Latitude}&longitude=${item.Longitude}`
              }><button className="quality-button">SCP</button></Link>
            </div> */}
            <div className="main-contain2">
              <div className="stats-div2">
                <div className="stats-style2">
                  <img className="stats-img" src={population} />
                  <p className="stats-par">Population: {numberCommas(item["Total Population"])}</p>
                </div>
                <div className="stats-style2">
                  <img className="stats-img" src={medianAge} />
                  <p className="stats-par">Median Age: {numberCommas(item["Median Age"])} years old</p>
                </div>
                <div className="stats-style2">
                  <img className="stats-img" src={medianRent} />
                  <p className="stats-par">Median Rent: ${numberCommas(item["Median Rent"])}</p>
                </div>
                <div className="stats-style2">
                  <img className="stats-img" src={medianIncome} />
                  <p className="stats-par">Median Income: ${numberCommas(item["Median Household Income"])}</p>
                </div>
                <div className="weather-style2">
                  {/* <p>Historical Weather:</p> */}
                  <div className="avg-temp-container">
                    <p className="chart-title">Historical Temperature</p>
                    <AvgTemp edData={[item]} />
                  </div>
                  <div>
                    <CurrentWeather item={item} />
                  </div>
                </div>
              </div>
              <div className="scores-div2">
                <div className="scores-contain2">
                  <div className="title-contain2">
                    <h4>Walkability</h4>
                    <p>Pedestrian friendliness</p>
                  </div>
                  <div className="icon-score-contain">
                    <div className="icon-contain">
                      <img src={walk} />
                    </div>
                    <div className="number-contain">
                      <h5>Inadequate</h5>
                      <p className="walk-number2">{numberCommas(item["Walk Score"])}</p>
                    </div>
                  </div>
                </div>
                <div className="scores-contain2">
                  <div className="title-contain2">
                    <h4>Transit Score</h4>
                    <p>Public Transportation</p>
                  </div>
                  <div className="icon-score-contain">
                    <div className="icon-contain">
                      <img src={transit} />
                    </div>
                    <div className="number-contain">
                      <h5>Excellent</h5>
                      <p className="transit-number2">{numberCommas(item["Transit Score"])}</p>
                    </div>
                  </div>
                </div>
                <div className="scores-contain2">
                  <div className="title-contain2">
                    <h4>Bikeability</h4>
                    <p>Biking infrastructure</p>
                  </div>
                  <div className="icon-score-contain">
                    <div className="icon-contain">
                      <img src={bike} />
                    </div>
                    <div className="number-contain">
                      <h5>Minimal</h5>
                      <p className="bike-number2">{numberCommas(item["Bike Score"])}</p>
                    </div>
                  </div>
                </div>
                <div className="scores-contain2">
                  <div className="title-contain2">
                    <h4>Sustainability</h4>
                    <p>Green Infrastructure</p>
                  </div>
                  <div className="icon-score-contain">
                    <div className="icon-contain">
                      <img src={sustain} />
                    </div>
                    <div className="number-contain">
                      <h5>Good</h5>
                      <p className="sustain-number2">51</p>
                    </div>
                  </div>
                </div>
                <div className="scores-contain2">
                  <div className="title-contain2">
                    <h4>Safety</h4>
                    <p>Historical Crime Data</p>
                  </div>
                  <div className="icon-score-contain">
                    <div className="icon-contain">
                      <img src={safety} />
                    </div>
                    <div className="number-contain">
                      <h5>Good</h5>
                      <p className="safety-number2">51</p>
                    </div>
                  </div>
                </div>
                <div className="scores-contain2">
                  <div className="title-contain2">
                    <h4>Accessibility</h4>
                    <p>Accessibility infrastructure</p>
                  </div>
                  <div className="icon-score-contain">
                    <div className="icon-contain">
                      <img src={access} />
                    </div>
                    <div className="number-contain">
                      <h5>Minimal</h5>
                      <p className="access-number2">25</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}

        {/* 3 SELECTED CITIES */}
        {ethData.length === 3 ? ethData.map(item =>
          <div className="city-overview-container-medium3">
            <div className="city-overview-container">
              <div className="city-overview-border">
                <p>{item.name_with_com}</p>
                {/* <FavoriteButton city={item} /> */}
              </div>
            </div>
            <div>
              <Link target='_blank' to={`/SingleCityPage?latitude=${item.Latitude}&longitude=${item.Longitude}`
              }><button className="quality-button">Experience {item.city_no_st}</button></Link>
            </div>
            <div className="main-contain2">
              <div className="stats-div2">
                <div className="stats-style">
                  <img className="stats-img" src={population} />
                  <p className="stats-par">Population: {numberCommas(item["Total Population"])}</p>
                </div>
                <div className="stats-style">
                  <img className="stats-img" src={medianAge} />
                  <p className="stats-par">Median Age: {numberCommas(item["Median Age"])} years old</p>
                </div>
                <div className="stats-style">
                  <img className="stats-img" src={medianRent} />
                  <p className="stats-par">Median Rent: ${numberCommas(item["Median Rent"])}</p>
                </div>
                <div className="stats-style">
                  <img className="stats-img" src={medianIncome} />
                  <p className="stats-par">Median Income: ${numberCommas(item["Median Household Income"])}</p>
                </div>
                <div className="weather-style2">
                  {/* <p>Historical Weather:</p> */}
                  <div className="avg-temp-container">
                    <p className="chart-title">Historical Temperature</p>
                    <AvgTemp edData={[item]} />
                  </div>
                  <div>
                    <CurrentWeather item={item} />
                  </div>
                </div>
              </div>
              <div className="scores-div3">
                <div className="scores-contain3">
                  <div className="title-contain3">
                    <h4>Walkability</h4>
                    <p>Pedestrian friendliness</p>
                  </div>
                  <div className="icon-score-contain">
                    <div className="icon-contain">
                      <img src={walk} />
                    </div>
                    <div className="number-contain">
                      <h5>Inadequate</h5>
                      <p className="walk-number2">{numberCommas(item["Walk Score"])}</p>
                    </div>
                  </div>
                </div>
                <div className="scores-contain3">
                  <div className="title-contain3">
                    <h4>Transit Score</h4>
                    <p>Public Transportation</p>
                  </div>
                  <div className="icon-score-contain">
                    <div className="icon-contain">
                      <img src={transit} />
                    </div>
                    <div className="number-contain">
                      <h5>Excellent</h5>
                      <p className="transit-number2">{numberCommas(item["Transit Score"])}</p>
                    </div>
                  </div>
                </div>
                <div className="scores-contain3">
                  <div className="title-contain3">
                    <h4>Bikeability</h4>
                    <p>Biking infrastructure</p>
                  </div>
                  <div className="icon-score-contain">
                    <div className="icon-contain">
                      <img src={bike} />
                    </div>
                    <div className="number-contain">
                      <h5>Minimal</h5>
                      <p className="bike-number2">{numberCommas(item["Bike Score"])}</p>
                    </div>
                  </div>
                </div>
                <div className="scores-contain3">
                  <div className="title-contain3">
                    <h4>Sustainability</h4>
                    <p>Green Infrastructure</p>
                  </div>
                  <div className="icon-score-contain">
                    <div className="icon-contain">
                      <img src={sustain} />
                    </div>
                    <div className="number-contain">
                      <h5>Good</h5>
                      <p className="sustain-number2">51</p>
                    </div>
                  </div>
                </div>
                <div className="scores-contain3">
                  <div className="title-contain3">
                    <h4>Safety</h4>
                    <p>Historical Crime Data</p>
                  </div>
                  <div className="icon-score-contain">
                    <div className="icon-contain">
                      <img src={safety} />
                    </div>
                    <div className="number-contain">
                      <h5>Good</h5>
                      <p className="safety-number2">51</p>
                    </div>
                  </div>
                </div>
                <div className="scores-contain3">
                  <div className="title-contain3">
                    <h4>Accessibility</h4>
                    <p>Accessibility infrastructure</p>
                  </div>
                  <div className="icon-score-contain">
                    <div className="icon-contain">
                      <img src={access} />
                    </div>
                    <div className="number-contain">
                      <h5>Minimal</h5>
                      <p className="access-number2">25</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}

export default TotalPopulation;

