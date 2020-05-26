import React from "react";

import pop from "../assets/population.svg";

import briefcase from "../assets/briefcase.svg";
import income from "../assets/dollar.svg";
import weather from "../assets/activity.svg";
import FavoriteButton from "../buttons/FavoriteButton";
import Recommendations from "./Recommendations";
import DeselectCityButton from "../buttons/DeselectCityButton.js";
import { Link as ScrollLink } from "react-scroll";

import "./Overview.scss";

function Overview({ selected, isProfilePage }) {
  function numberCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <div className="city-overview-cards-container">
      {selected.map((item) => (
        <div key={item._id} className="city-overview-card">
          <div className="city-overview-container">
            <div className="city-overview-border">
              <p>{item["City"]}</p>
              <FavoriteButton city={item} />
              {isProfilePage ? <></> : <DeselectCityButton city={item} />}
            </div>
            <div className="city-overview-content">
              <div className="city-overview-container-one">
                <div className="overview-title-container-one">
                  <ScrollLink
                    to="industry"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    <div className="overview-title">
                      <img alt="income" src={income} />
                      Median income <br></br>per capita
                    </div>
                  </ScrollLink>
                  <ScrollLink
                    to="housing"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    <div className="overview-title">
                      <img alt="briefcase" src={briefcase} />
                      Median rent
                    </div>
                  </ScrollLink>
                </div>

                <div className="overview-stats-container-one">
                  <div className="overview-stats">
                    ${numberCommas(item["Median Per Capita Income"])}
                  </div>
                  <div className="overview-stats">
                    ${numberCommas(item["Median Rent"])}
                  </div>
                </div>
              </div>

              <div className="city-overview-container-two">
                <div className="overview-title-container-two">
                  <ScrollLink
                    to="culture"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    <div className="overview-title">
                      {" "}
                      <img alt="people" src={pop} /> Population
                    </div>
                  </ScrollLink>
                  <ScrollLink
                    to="weather"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    <div className="overview-title">
                      {" "}
                      <img alt="people" src={weather} />{" "}
                      {new Date().toLocaleString("default", { month: "long" })}{" "}
                      average
                    </div>
                  </ScrollLink>
                </div>

                <div className="overview-stats-container-two">
                  <div className="overview-stats">
                    {numberCommas(item["Total Population"])}
                  </div>
                  <div className="overview-stats">{`${Math.floor(
                    item["weather"]["tavg"][`TAVG-AVG-${new Date().getMonth()}`]
                  )}° F`}</div>
                </div>
              </div>
            </div>
          </div>
          {/* we don't want recommendations on the profile list of favorites */}
          {window.location.href.includes("profile") ? (
            <div style={{ marginTop: "1%" }} />
          ) : (
            <Recommendations city={item} />
          )}
        </div>
      ))}
    </div>
  );
}

export default Overview;
