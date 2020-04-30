import React, { useState, useEffect } from "react";
import { Link, Element } from "react-scroll";
import { Link as SCPLink } from "react-router-dom";
import ReactGA from "react-ga";
import Footer from "../../../navigation/Footer";
import AvgTemp from "../../../graphs/culture/tempAvg";
import MapSearch from "./MapSearch";
import HousePriceGraph from "../../../graphs/housing/House_price";
import RoomGraph from "../../../graphs/housing/HousingByRooms";
import RentChart from "../../../graphs/housing/RentChart";
import Industry from "../../../graphs/economics/industries";
import Commute from "../../../graphs/economics/commute";
import BarGraph from "../../../graphs/economics/HouseIncome_BarGraph";
import EthnicityGraph from "../../../graphs/culture/EthnicityGraph";
import Population from "../../../graphs/culture/PopulationGraph";
import EducationGraph from "../../../graphs/culture/EducationGraph";
import AgeDistributionGraph from "../../../graphs/culture/AgeDistrubution";
import RetirementGraph from "../../../graphs/economics/retirement";
import VacancyGraph from "../../../graphs/housing/vacancy";
import UnemploymentCard from "../../../graphs/economics/unemploymentCard";
import deleteIcon from "./icons/close_red.png";
import GeneralStats from "../../../graphs/GeneralStats";
import TravelTime from "../../../graphs/economics/TravelTimeCard";
// import HealthInsurance from "../graphs/economics/HealthInsuranceCard";
import OwnerCostCard from "../../../graphs/housing/OwnerCostCard";
// import BirthRateCard from "../graphs/culture/birthRateCard"
import Transportaion from "../../../graphs/transportationScore";
import dropdownIcon from "../../../../assets/single_city_page_photos/DropdownIcon.png";

const DataDisplay = ({
  search,
  selected,
  toggleSelected,
  onSearch,
  setSearch,
  cityMarkers,
  viewport,
  setViewport,
  selectSearch,
  cityIndex,
}) => {
  const [defaultDisplay, setdefaultDisplay] = useState(false);

  const dataNavClicked = (link) => {
    ReactGA.event({ category: "Data", action: `clicked ${link} link` });
  };

  const [categories, setCategories] = useState({});

  return (
    <div className="data-browser">
      <div className="inner-search-container">
        <MapSearch
          setSearch={setSearch}
          onSearch={onSearch}
          cityMarkers={cityMarkers}
          search={search}
          viewport={viewport}
          setViewport={setViewport}
          selectSearch={selectSearch}
          cityIndex={cityIndex}
        />
      </div>

      <div className="data-by-category">
        {selected.length > 0 ? (
          <>
            <div className="general-stats-container">
              {/* <p>General Statistics:</p> */}
              <Element name="generalStats" className="element">
                <GeneralStats ethData={selected} />
              </Element>
            </div>

            <div className="data-category">
              {/* <div className="data-category-titles">
                        <p className="data-category-header">Housing</p>
                        <p className="data-category-subtitle">View the comprehensive picture of housing in American cities.</p>
                    </div> */}

              {!defaultDisplay || categories.rent ? (
                <div className="rent-container">
                  <p className="chart-title">Average rent</p>
                  <Element name="rent" className="element">
                    <RentChart edData={selected} />
                  </Element>
                  <p style={{ textAlign: "right", fontSize: "10px" }}>
                    Source: U.S. Census (2018)
                  </p>
                </div>
              ) : (
                <div></div>
              )}

              {!defaultDisplay || categories.homeContainer ? (
                <div className="home-container">
                  <div className="homeprice-container">
                    <p className="chart-title">Home prices</p>
                    <Element name="homeContainer" className="element">
                      <HousePriceGraph selected={selected} />
                    </Element>
                    <p style={{ textAlign: "right", fontSize: "10px" }}>
                      Source: zillow.com
                    </p>
                  </div>

                  <div className="ownerMortgage">
                    <Element name="homeContainer" className="element">
                      <OwnerCostCard ethData={selected} />
                    </Element>
                  </div>
                </div>
              ) : (
                <div></div>
              )}

              {!defaultDisplay || categories.roomsVacancy ? (
                <div className="rooms-vacancy-container">
                  <div className="room-container">
                    <p className="chart-title">Average rooms per household</p>
                    <Element name="roomsVacancy" className="element">
                      <RoomGraph edData={selected} />
                    </Element>
                    <p style={{ textAlign: "right", fontSize: "10px" }}>
                      Source: U.S. Census (2018)
                    </p>
                  </div>

                  <div className="vacancy-owner-container">
                    <p className="chart-title">Vacancy</p>
                    <Element name="roomsVacancy" className="element">
                      <VacancyGraph edData={selected} />
                    </Element>
                    <p style={{ textAlign: "right", fontSize: "10px" }}>
                      Source: U.S. Census (2018)
                    </p>
                  </div>
                </div>
              ) : (
                <div></div>
              )}
            </div>

            <div className="data-category">
              {/* <div className="data-category-titles">
                            <p className="data-category-header">Industry</p>
                            <p className="data-category-subtitle">Explore optimized industry metrics.</p>
                        </div> */}

              {!defaultDisplay || categories.industries ? (
                <div className="industries-container">
                  <p className="chart-title">Job industry</p>
                  <Element name="industries" className="element">
                    <Industry edData={selected} />
                  </Element>
                  <p style={{ textAlign: "right", fontSize: "10px" }}>
                    Source: U.S. Census (2018)
                  </p>
                </div>
              ) : (
                <div></div>
              )}

              {!defaultDisplay || categories.salary ? (
                <div className="salary-container">
                  <p className="chart-title">Average salary</p>
                  <Element name="salary" className="element">
                    <BarGraph edData={selected} />
                  </Element>
                  <p style={{ textAlign: "right", fontSize: "10px" }}>
                    Source: U.S. Census (2018)
                  </p>
                </div>
              ) : (
                <div></div>
              )}

              {!defaultDisplay || categories.commute ? (
                <div className="commute-travel-container">
                  <div className="commute-container">
                    <p className="chart-title">Ways to commute</p>
                    <Element name="commute" className="element">
                      <Commute edData={selected} />
                    </Element>
                    <p style={{ textAlign: "right", fontSize: "10px" }}>
                      Source: U.S. Census (2018)
                    </p>
                  </div>
                  <div className="travel-container">
                    {/* <p className="chart-title">Travel time to work</p> */}
                    <Element name="commute" className="element">
                      <TravelTime ethData={selected} />
                    </Element>
                  </div>
                </div>
              ) : (
                <div></div>
              )}

              {/* { !defaultDisplay || categories.travelScores?
                        <div className="travel-scores-container">
                            <Element name="travelScores" className="element" ><Transportaion ethData = {selected} /></Element>
                        </div>
                        : <div></div>
                    } */}

              {!defaultDisplay || categories.unemployRetire ? (
                <div className="other-industries-container">
                  <div className="unemployment-container">
                    {/* <p className="chart-title">Unemployment</p> */}
                    <Element name="unemployRetire" className="element">
                      <UnemploymentCard ethData={selected} />
                    </Element>
                  </div>

                  {/* <div className="insurance-container">
                                <Element name="healthInsurance" className="element" ><HealthInsurance ethData = {selected} /></Element>
                            </div> */}

                  <div className="retirement-container">
                    <p className="chart-title">Retirement income source</p>
                    <Element name="unemployRetire" className="element">
                      <RetirementGraph ethData={selected} />
                    </Element>
                    <p style={{ textAlign: "right", fontSize: "10px" }}>
                      Source: U.S. Census (2018)
                    </p>
                  </div>
                </div>
              ) : (
                <div></div>
              )}
            </div>

            <div className="data-category">
              {/* <div className="data-category-titles">
                            <p className="data-category-header">Culture</p>
                            <p className="data-category-subtitle">Get a bird's eye view of your selected city's community.</p>
                        </div> */}
              {!defaultDisplay || categories.ageDistribution ? (
                <div className="age-container">
                  <p className="chart-title">Age distribution</p>
                  <Element name="ageDistribution" className="element">
                    <AgeDistributionGraph ethData={selected} />
                  </Element>
                  <p style={{ textAlign: "right", fontSize: "10px" }}>
                    Source: U.S. Census (2018)
                  </p>
                </div>
              ) : (
                <div></div>
              )}

              {!defaultDisplay || categories.diversity ? (
                <div className="ethnicity-container">
                  <p className="chart-title">Diversity</p>
                  <Element name="diversity" className="element">
                    <EthnicityGraph ethData={selected} />
                  </Element>
                  <p style={{ textAlign: "right", fontSize: "10px" }}>
                    Source: U.S. Census (2018)
                  </p>
                </div>
              ) : (
                <div></div>
              )}

              {!defaultDisplay || categories.education ? (
                <div className="education-container">
                  <p className="chart-title">Education</p>
                  <Element name="education" className="element">
                    <EducationGraph edData={selected} />
                  </Element>
                  <p style={{ textAlign: "right", fontSize: "10px" }}>
                    Source: U.S. Census (2018)
                  </p>
                </div>
              ) : (
                <div></div>
              )}

              {!defaultDisplay || categories.population ? (
                <div className="population-birth-container">
                  <div className="population-container">
                    <p className="chart-title">Population growth</p>
                    <Element name="population" className="element">
                      <Population selected={selected} />
                    </Element>
                    <p style={{ textAlign: "right", fontSize: "10px" }}>
                      Source: U.S. Census (2018)
                    </p>
                  </div>
                  {/* <div className="birth-container">
                                <Element name="birthRate" className="element" ><BirthRateCard ethData = {selected} /></Element>
                            </div> */}
                </div>
              ) : (
                <div></div>
              )}

              {/* { !defaultDisplay || categories.avgTemp?
                        <div className="avg-temp-container">
                            <p className="chart-title">Historical temperature</p>
                            <Element name="avgTemp" className="element" ><AvgTemp edData = {selected} /></Element>

                        </div>
                        :<div></div>
                        } */}
            </div>
          </>
        ) : (
          <p className="map-prompt">Select up to 3 cities to compare</p>
        )}
      </div>
    </div>
  );
};

export default DataDisplay;
