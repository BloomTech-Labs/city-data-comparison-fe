
import React from 'react';
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

import FavoriteButton from '../map-components/FavoriteButton'
import Recommendations from "./Recommendations"


function TotalPopulation({ ethData }) {
  function numberCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  return (
    <>
      {/* <div className="city-overview-container-small">
        {ethData.map(item =>
          <div key={item._id} className="city-overview-container-medium">
            {console.log(item)}
            <div className="city-overview-container">
              <div className="city-overview-border">
                <p>{item.name_with_com}</p> */}
      {/* change title to name of city? */}
      {/* <FavoriteButton city={item} />
              </div>
            </div> */}

      {/* <div className="city-info-container">
              <div className="city-overview-container-one">
                <div className="overview-title-container-one">
                  <div className="overview-title"> <img alt="world" src={world} /> City</div>
                  <div className="overview-title"> <img alt="people" src={pop} /> Population</div>
                  <div className="overview-title"> <img alt="age" src={users} /> Median age</div>
                </div>

                <div className="overview-stats-container-one">
                  <div className="overview-stats">{item["City"]}</div>
                  <div className="overview-stats">{numberCommas(item["Total Population"])}</div>
                  <div className="overview-stats">{item["Median Age"]} years old</div>
                </div>
              </div> */}





      {/* <div className="city-overview-container-two">
                <div className="overview-title-container-two">
                  <div className="overview-title"><img alt="briefcase" src={briefcase} />Median rent</div>
                  <div className="overview-title"><img alt="income" src={income} />Median income</div>
                  <div className="overview-title">
                    <Link target='_blank' to={`/SCP/${item.Latitude}/${item.Longitude}`}>Link to SCP</Link>
                  </div>


                  <div className="overview-stats-container-two">
                    <div className="overview-stats">${numberCommas(item["Median Rent"])}</div>
                    <div className="overview-stats">${numberCommas(item["Median Household Income"])}</div>
                  </div>
                </div>
              </div>
            </div> */}
      {/* we don't want recommendations on the profile list of favorites */}
      {/* {window.location.href.includes("profile") ? <div style={{ marginTop: "1%" }} /> :
              <div>
                <Recommendations city={item} />
              </div>}
          </div>
        )}
      </div> */}

      <div className="city-overview-container-small">
      {ethData.length === 1 ? ethData.map(item =>
      <div className = "main-card-container">
          <div className="city-overview-container-medium">
            <div className="city-overview-container">
              <div className="city-overview-border">
                <p>{item.name_with_com}</p>
                <FavoriteButton city={item} />
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
                  <p className="stats-par">Median Income: ${numberCommas(item["Median Per Capita Income"])}</p>
                </div>
                <div className="weather-style">
                  <p>Historical Weather:</p>
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
            <div>
              <Link target='_blank' to={`/SCP/${item.Latitude}/${item.Longitude}`}><button className="quality-button">Link to SCP</button></Link>
            </div>
            {window.location.href.includes("profile") ? <div style={{ marginTop: "1%" }} /> :
              <div>
                <Recommendations city={item} />
              </div>}
          </div>
          </div>
        ) : null}

{ethData.length === 2 ? ethData.map(item =>
  <div className = "main-card-container">
          <div className="city-overview-container-medium">
            <div className="city-overview-container">
              <div className="city-overview-border">
                <p>{item.name_with_com}</p>
                <FavoriteButton city={item} />
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
                  <p className="stats-par">Median Income: ${numberCommas(item["Median Per Capita Income"])}</p>
                </div>
                <div className="weather-style">
                  <p>Historical Weather:</p>
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
            <div>
              <Link target='_blank' to={`/SCP/${item.Latitude}/${item.Longitude}`}><button className="quality-button">Link to SCP</button></Link>
            </div>
            {window.location.href.includes("profile") ? <div style={{ marginTop: "1%" }} /> :
              <div>
                <Recommendations city={item} />
              </div>}
          </div>
          </div>
        ) : null}
      </div>
    </>
  );
}

export default TotalPopulation;

