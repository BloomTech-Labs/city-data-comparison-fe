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

  const [menu, setMenu] = useState({ status: "closed" });

  const dataNavClicked = (link) => {
    ReactGA.event({ category: "Data", action: `clicked ${link} link` });
  };

  const [categories, setCategories] = useState({});

  // console.log("SELECTED", selected)
  // console.log("edData", selected);
  useEffect(() => {
    let checker = false;
    for (const item in categories) {
      if (categories[item] === true) {
        checker = true;
      }
    }
    if (checker === true) {
      setdefaultDisplay(true);
    } else {
      setdefaultDisplay(false);
    }
  }, [categories]);

  // statement for display default
  // function for handling sidebar checkbox check/uncheck (display of categories)

  function onChange(e) {
    setCategories({
      ...categories,
      [e.target.name]: categories[e.target.name] ? false : true,
    });
  }

  // fixed sidebar handling

  // window.onscroll = (_) => scrollAnchor();
  // var stickynav = document.getElementById("stickynav");
  // var autofillContainer = document.getElementsByClassName(
  //   "autofill-container"
  // )[0];
  // var placeholder = document.getElementsByClassName("nav-placeholder")[0];

  // var isScrolledToFooter = (_) =>
  //   window.pageYOffset > document.body.scrollHeight - window.innerHeight - 300;

  // const scrollAnchor = (_) => {
  //   if (stickynav) {
  //     // This line handles the offset from the main nav bar

  //     var sticky = placeholder.offsetTop - 105;
  //   }

  //   if (window.pageYOffset > sticky && !isScrolledToFooter()) {
  //     stickynav.classList.add("sticky");
  //     autofillContainer.classList.add("abso-width");
  //   }
  //   // else {
  //   //     stickynav.classList.remove("sticky");
  //   //     autofillContainer.classList.remove("abso-width")
  //   // }
  //   // if (isScrolledToFooter() && selected.length > 0) {
  //   //     stickynav.classList.add("nav-bottom-anchor")
  //   // }
  //   else if (window.pageYOffset < sticky && !isScrolledToFooter()) {
  //     stickynav.classList.remove("sticky");
  //   }
  // };

  // Handles Dropdown icon animation
  var upClass = "toggle-up";
  var downClass = "toggle-down";

  function iconAnimation1() {
    var dropIcon1 = document.querySelector(".dropIcon1");

    if (~dropIcon1.className.indexOf(downClass)) {
      dropIcon1.className = dropIcon1.className.replace(downClass, upClass);
    } else {
      dropIcon1.className = dropIcon1.className.replace(upClass, downClass);
    }
  }

  function iconAnimation2() {
    var dropIcon2 = document.querySelector(".dropIcon2");

    if (~dropIcon2.className.indexOf(downClass)) {
      dropIcon2.className = dropIcon2.className.replace(downClass, upClass);
    } else {
      dropIcon2.className = dropIcon2.className.replace(upClass, downClass);
    }
  }

  function iconAnimation3() {
    var dropIcon3 = document.querySelector(".dropIcon3");

    if (~dropIcon3.className.indexOf(downClass)) {
      dropIcon3.className = dropIcon3.className.replace(downClass, upClass);
    } else {
      dropIcon3.className = dropIcon3.className.replace(upClass, downClass);
    }
  }

  //toggles

  function toggle1() {
    document.getElementById("menuCollapse1").classList.toggle("hidden");
    iconAnimation1();
  }

  function toggle2() {
    document.getElementById("menuCollapse2").classList.toggle("hidden");
    iconAnimation2();
  }

  function toggle3() {
    document.getElementById("menuCollapse3").classList.toggle("hidden");
    iconAnimation3();
  }

  // trying out checkbox menu

  const toggleMenu = () => {
    if (menu.status === "closed") {
      setMenu({ ...menu, status: "open" });
    } else if (menu.status === "open") {
      setMenu({ ...menu, status: "closed" });
    }
  };

  return (
    <div className="data-browser">
      <nav className="search-container">
        <div className="inner-search-container">
          <MapSearch
            menu={menu.status}
            setSearch={setSearch}
            onSearch={onSearch}
            cityMarkers={cityMarkers}
            search={search}
            viewport={viewport}
            setViewport={setViewport}
            selectSearch={selectSearch}
            cityIndex={cityIndex}
          />
          {/* {selected.length > 0 ? (
            <div className="anchor-nav">
              <ul>
                {selected.map((item) => (
                  <div key={item._id} className={`menu-items ${menu.status}`}>
                    <li key={item._id}>
                      <span className="color-legend-text">
                        <div
                          className="color-legend"
                          style={{
                            display: "inline-block",
                            background: item.color,
                            height: "1rem",
                            width: "1rem",
                            marginRight: ".5rem",
                          }}
                        ></div>
                        {item.name_with_com}
                      </span>
                      <span
                        onClick={(_) => {
                          let foundCity = cityIndex.find(
                            (indexed) => indexed.ID === item._id
                          );
                          toggleSelected(foundCity);
                        }}
                      >
                        <img
                          className="delete-icon"
                          src={deleteIcon}
                          alt="delete icon"
                        />
                      </span>
                    </li>
                  </div>
                ))}
              </ul>
            </div>
          ) : null} */}
        </div>
      </nav>
      {/* <div className="nav-box"> */}
      {/* <div className="nav-placeholder">
        <nav id="stickynav" className="data-nav">
          Burger stack button
          <div className="top-menu">

            <div className={`burger-menu ${menu.status}`} onClick={toggleMenu}>
              <div className="bar1" key="b1" />
              <div className="bar2" key="b2" />
              <div className="bar3" key="b3" />
            </div>
          </div>

          <div className={`slider ${menu.status}`}>
            <div className={`menu-items ${menu.status}`}>
              <div className="data-nav-top">
                <MapSearch
                  menu={menu.status}
                  setSearch={setSearch}
                  onSearch={onSearch}
                  cityMarkers={cityMarkers}
                  search={search}
                  viewport={viewport}
                  setViewport={setViewport}
                  selectSearch={selectSearch}
                  cityIndex={cityIndex}
                />
                {selected.length > 0 ? (
                  <div className="anchor-nav">
                    <ul>
                      {selected.map((item) => (
                        <div
                          key={item._id}
                          className={`menu-items ${menu.status}`}
                        >
                          <li key={item._id}>
                            <span className="color-legend-text">
                              <div
                                className="color-legend"
                                style={{
                                  display: "inline-block",
                                  background: item.color,
                                  height: "1rem",
                                  width: "1rem",
                                  marginRight: ".5rem",
                                }}
                              ></div>
                              {item.name_with_com}
                            </span>
                            <span
                              onClick={(_) => {
                                let foundCity = cityIndex.find(
                                  (indexed) => indexed.ID === item._id
                                );
                                toggleSelected(foundCity);
                              }}
                            >
                              <img
                                className="delete-icon"
                                src={deleteIcon}
                                alt="delete icon"
                              />
                            </span>
                          </li>
                        </div>
                      ))}
                    </ul>

                    <Link
                      onClick={() => dataNavClicked("generalStats")}
                      id="general"
                      activeClass="active"
                      className="anchor-nav"
                      to="generalStats"
                      spy={true}
                      smooth={true}
                      duration={500}
                      offset={-150}
                    >
                      City Overview
                    </Link>

                    <div className="dataFilterCatContainer">
                      <div className="togglediv">
                        <p className="anchor-header1" onClick={toggle1}>
                          Housing
                          <img
                            src={dropdownIcon}
                            className="dropIcon1 toggle-down"
                          />
                        </p>
                      </div>

                      <div id="menuCollapse1">
                        <span class="spanStyle">
                          <label for="rent" class="dataFilterContain">
                            Rent
                            <input
                              type="checkbox"
                              id="rent"
                              name="rent"
                              value="rent"
                              onChange={onChange}
                            />
                            <span class="dataCheckmark"></span>
                          </label>
                          <label for="homeContainer" class="dataFilterContain">
                            Home Prices
                            <input
                              type="checkbox"
                              id="homeContainer"
                              name="homeContainer"
                              value="homeContainer"
                              onChange={onChange}
                            />
                            <span class="dataCheckmark"></span>
                          </label>
                          <label for="roomsVacancy" class="dataFilterContain">
                            Rooms &amp; Vacancy
                            <input
                              type="checkbox"
                              id="roomsVacancy"
                              name="roomsVacancy"
                              value="roomsVacancy"
                              onChange={onChange}
                            />
                            <span class="dataCheckmark"></span>
                          </label>
                        </span>
                      </div>

                      <div className="togglediv">
                        <p className="anchor-header2" onClick={toggle2}>
                          Industry
                          <img
                            src={dropdownIcon}
                            className="dropIcon2 toggle-down"
                          />
                        </p>
                      </div>

                      <div id="menuCollapse2">
                        <span class="spanStyle">
                          <label for="industries" class="dataFilterContain">
                            Industries
                            <input
                              type="checkbox"
                              id="industries"
                              name="industries"
                              value="industries"
                              onChange={onChange}
                            />
                            <span class="dataCheckmark"></span>
                          </label>
                          <label for="salary" class="dataFilterContain">
                            Salary
                            <input
                              type="checkbox"
                              id="salary"
                              name="salary"
                              value="salary"
                              onChange={onChange}
                            />
                            <span class="dataCheckmark"></span>
                          </label>
                          <label for="commute" class="dataFilterContain">
                            Commute
                            <input
                              type="checkbox"
                              id="commute"
                              name="commute"
                              value="commute"
                              onChange={onChange}
                            />
                            <span class="dataCheckmark"></span>
                          </label>
                          <label for="travelScores" class="dataFilterContain">
                            Travel Scores
                            <input
                              type="checkbox"
                              id="travelScores"
                              name="travelScores"
                              value="travelScores"
                              onChange={onChange}
                            />
                            <span class="dataCheckmark"></span>
                          </label>
                          <label for="industries" class="dataFilterContain">
                            Unemployment &amp; Retirement
                            <input
                              type="checkbox"
                              id="unemployRetire"
                              name="unemployRetire"
                              value="unemployRetire"
                              onChange={onChange}
                            />
                            <span class="dataCheckmark"></span>
                          </label>
                        </span>
                      </div>

                      <div className="togglediv">
                        <p className="anchor-header3" onClick={toggle3}>
                          Demographics
                          <img
                            src={dropdownIcon}
                            className="dropIcon3 toggle-down"
                          />
                        </p>
                      </div>

                      <div id="menuCollapse3">
                        <span class="spanStyle">
                          <label
                            for="ageDistribution"
                            class="dataFilterContain"
                          >
                            Age Distribution
                            <input
                              type="checkbox"
                              id="ageDistribution"
                              name="ageDistribution"
                              value="ageDistribution"
                              onChange={onChange}
                            />
                            <span class="dataCheckmark"></span>
                          </label>
                          <label for="diversity" class="dataFilterContain">
                            Diversity
                            <input
                              type="checkbox"
                              id="diversity"
                              name="diversity"
                              value="diversity"
                              onChange={onChange}
                            />
                            <span class="dataCheckmark"></span>
                          </label>
                          <label for="education" class="dataFilterContain">
                            Education
                            <input
                              type="checkbox"
                              id="education"
                              name="education"
                              value="education"
                              onChange={onChange}
                            />
                            <span class="dataCheckmark"></span>
                          </label>
                          <label for="population" class="dataFilterContain">
                            Population
                            <input
                              type="checkbox"
                              id="population"
                              name="population"
                              value="population"
                              onChange={onChange}
                            />
                            <span class="dataCheckmark"></span>
                          </label>
                          <label for="avgTemp" class="dataFilterContain">
                            Historical Temperature
                            <input
                              type="checkbox"
                              id="avgTemp"
                              name="avgTemp"
                              value="avgTemp"
                              onChange={onChange}
                            />
                            <span class="dataCheckmark"></span>
                          </label>
                        </span>
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </nav>
      </div> */}

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
