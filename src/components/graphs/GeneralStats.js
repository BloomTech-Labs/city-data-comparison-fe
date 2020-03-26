
import React from 'react';
import { Link } from 'react-router-dom';
import { walkScore, transitScore, bikeScore, scoreStatement } from "./ScoreImages";

import medianAge from "../../assets/generalstats/median-age.png"
import medianIncome from "../../assets/generalstats/median-income.png"
import medianRent from "../../assets/generalstats/median-rent.png"
import population from "../../assets/generalstats/population.png"

import access from "../../assets/generalstats/access.png"
import safety from "../../assets/generalstats/safety.png"
import sustain from "../../assets/generalstats/sustain.png"

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

  function numberColor(number) {
    if (number <= 25) {
      return <p className="number-style25">{number}</p>
    } else if (number > 25 && number <= 50) {
      return <p className="number-style50">{number}</p>
    } else if (number > 50 && number <= 75) {
      return <p className="number-style75">{number}</p>
    } else if (number > 75) {
      return <p className="number-style100">{number}</p>
    }
  };

  function numberColor2(number) {
    if (number <= 25) {
      return <p className="number-style25-2">{number}</p>
    } else if (number > 25 && number <= 50) {
      return <p className="number-style50-2">{number}</p>
    } else if (number > 50 && number <= 75) {
      return <p className="number-style75-2">{number}</p>
    } else if (number > 75) {
      return <p className="number-style100-2">{number}</p>
    }
  };

  function numberColor3(number) {
    if (number <= 25) {
      return <p className="number-style25-3">{number}</p>
    } else if (number > 25 && number <= 50) {
      return <p className="number-style50-3">{number}</p>
    } else if (number > 50 && number <= 75) {
      return <p className="number-style75-3">{number}</p>
    } else if (number > 75) {
      return <p className="number-style100-3">{number}</p>
    }
  };

  const cityColors = ["#A33A00", "#0041A3", "#017428"]


  return (
    <>
      {/* 1 SELECTED CITY */}
      <div className="city-overview-container-small">
        {ethData.length === 1 ? ethData.map((item, i) => {
          return <div className="city-overview-container-medium">
            <div className="city-overview-container">
              <div className="city-overview-border">
                <p style={{ color: cityColors[i] }}>{item.name_with_com}</p>
                {/* <FavoriteButton city={item} /> */}
              </div>
            </div>
            <div className="main-contain">
              <div className="stats-div">
                <div className="button-div">
                  <Link target='_blank' to={`/SingleCityPage?latitude=${item.Latitude}&longitude=${item.Longitude}&cityId=${item._id}`
                  }><button style={{ backgroundColor: cityColors[i] }} key={i} className="quality-button">Experience {item.city_no_st}</button></Link>
                </div>
                <div className="weather-contain1">
                <div className="current-weather">
                  <CurrentWeather item={item} ethData={ethData} />
                </div>
                <div className="weather-style">
                  <div className="avg-temp-container">
                    <p className="chart-title">Historical Temperature</p>
                    <AvgTemp edData={[item]} />
                  </div>
                  </div>
                </div>
              </div>
              <div className="scores-div">
                <div className="stats-div-readjusted">
                  <div className="scores-divided">
                    <div className="stats-style">
                      <img className="stats-img" src={population} />
                      <p className="stats-par">Population: {numberCommas(item["Total Population"])}</p>
                    </div>
                    <div className="stats-style">
                      <img className="stats-img" src={medianAge} />
                      <p className="stats-par">Median Age: {numberCommas(item["Median Age"])} years old</p>
                    </div>
                  </div>
                  <div className="scores-divided">
                    <div className="stats-style">
                      <img className="stats-img" src={medianRent} />
                      <p className="stats-par">Median Rent: ${numberCommas(item["Median Rent"])}</p>
                    </div>
                    <div className="stats-style">
                      <img className="stats-img" src={medianIncome} />
                      <p className="stats-par">Median Income: ${numberCommas(item["Median Household Income"])}</p>
                    </div>
                  </div>
                </div>
                <div className="scores-container">
                  <div className="scores-contain">
                    <div className="title-contain">
                      <h4>Walkability</h4>
                      <p>Pedestrian friendliness</p>
                    </div>
                    <div className="icon-score-contain">
                      <div className="icon-contain">
                        <img src={walkScore(item["Walk Score"])} />
                      </div>
                      <div className="number-contain">
                        <h5>{scoreStatement(item["Walk Score"])}</h5>
                        {numberColor(item["Walk Score"])}
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
                        <img src={transitScore(item["Transit Score"])} />
                      </div>
                      <div className="number-contain">
                        <h5>{scoreStatement(item["Transit Score"])}</h5>
                        {numberColor(item["Transit Score"])}
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
                        <img className="bike-image" src={bikeScore(item["Bike Score"])} />
                      </div>
                      <div className="number-contain">
                        <h5>{scoreStatement(item["Bike Score"])}</h5>
                        {numberColor(item["Bike Score"])}
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
                        <p className="sustain-number">00</p>
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
                        <p className="safety-number">00</p>
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
                        <p className="access-number">00</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* CODE FOR RECOMMENDATIONS */}
            {/* {window.location.href.includes("profile") ? <div style={{ marginTop: "1%" }} /> :
              <div>
                <Recommendations city={item} />
              </div>} */}
          </div>
        }) : null}

        {/* 2 CITIES SELECTED */}
        {ethData.length === 2 ? ethData.map((item, i) => (
          <div className="city-overview-container-medium2">
            <div className="city-overview-container">
              <div className="city-overview-border">
                <div className="title-container2">
                  <p style={{ color: cityColors[i] }}>{item.name_with_com}</p>
                  <div className="button-weather-contain">
                  <div className="button-div2">
                    <Link target='_blank' to={`/SingleCityPage?latitude=${item.Latitude}&longitude=${item.Longitude}&cityId=${item._id}`
                    }><button style={{ backgroundColor: cityColors[i] }} key={i} className="quality-button">Experience {item.city_no_st}</button></Link>
                </div>
                {/* <FavoriteButton city={item} /> */}
                  <CurrentWeather item={item} ethData={ethData}/>
                </div>
                </div>
              </div>
            </div>
            <div className="main-contain2">
              <div className="stats-div2">
                <div className="weather-style2">
                  <div className="avg-temp-container2">
                    <p className="chart-title">Historical Temperature</p>
                    <AvgTemp edData={[item]} />
                  </div>
                </div>
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
              </div>
              <div className="scores-div2">
                <div className="scores-contain2">
                  <div className="title-contain2">
                    <h4>Walkability</h4>
                    <p>Pedestrian friendliness</p>
                  </div>
                  <div className="icon-score-contain">
                    <div className="icon-contain">
                      <img className="walking-img2" src={walkScore(item["Walk Score"])} />
                    </div>
                    <div className="number-contain">
                      <h5>{scoreStatement(item["Walk Score"])}</h5>
                      {numberColor3(item["Walk Score"])}
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
                      <img src={transitScore(item["Transit Score"])} />
                    </div>
                    <div className="number-contain">
                      <h5>{scoreStatement(item["Transit Score"])}</h5>
                      {numberColor3(item["Transit Score"])}
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
                      <img className="bike-image" src={bikeScore(item["Bike Score"])} />
                    </div>
                    <div className="number-contain">
                      <h5>{scoreStatement(item["Bike Score"])}</h5>
                      {numberColor3(item["Bike Score"])}
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
                      <p className="sustain-number2">00</p>
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
                      <p className="safety-number2">00</p>
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
                      <p className="access-number2">00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )) : null}

        {/* 3 SELECTED CITIES */}
        {ethData.length === 3 ? ethData.map((item, i) => (
          <div className="city-overview-container-medium3">
            <div className="city-overview-container3">
              <div className="city-overview-border3">
                <p style={{ color: cityColors[i] }} className="title-contain3">{item.name_with_com}</p>
                {/* <FavoriteButton city={item} /> */}
              </div>
            </div>
            <div className="button-contain3">
              <Link target='_blank' to={`/SingleCityPage?latitude=${item.Latitude}&longitude=${item.Longitude}&cityId=${item._id}`
              }><button style={{ backgroundColor: cityColors[i] }} key={i} className="quality-button">Experience {item.city_no_st}</button></Link>
            </div>
            <div className="main-contain2">
              <div className="stats-div2">
                <div className="weather-style3">
                  <div style={{paddingTop: "10px"}}>
                    <CurrentWeather item={item} ethData={ethData}/>
                  </div>
                  <div className="avg-temp-container3">
                    <p className="chart-title">Historical Temperature</p>
                    <AvgTemp edData={[item]} />
                  </div>
                </div>
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
              </div>
              <div className="scores-div3">
                <div className="scores-contain3">
                  <div className="title-contain3">
                    <h4>Walkability</h4>
                    <p>Pedestrian friendliness</p>
                  </div>
                  <div className="icon-score-contain">
                    <div className="icon-contain">
                      <img className="walk-img3" src={walkScore(item["Walk Score"])} />
                    </div>
                    <div className="number-contain">
                      <h5>{scoreStatement(item["Walk Score"])}</h5>
                      {numberColor2(item["Walk Score"])}
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
                      <img src={transitScore(item["Transit Score"])} />
                    </div>
                    <div className="number-contain">
                      <h5>{scoreStatement(item["Transit Score"])}</h5>
                      {numberColor2(item["Transit Score"])}
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
                      <img className="bike-image" src={bikeScore(item["Bike Score"])} />
                    </div>
                    <div className="number-contain">
                      <h5>{scoreStatement(item["Bike Score"])}</h5>
                      {numberColor2(item["Bike Score"])}
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
                      <p className="sustain-number2">00</p>
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
                      <p className="safety-number2">00</p>
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
                      <p className="access-number2">00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )) : null}
      </div>
    </>
  );
}

export default TotalPopulation;

