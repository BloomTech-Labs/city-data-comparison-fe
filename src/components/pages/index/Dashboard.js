import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import LineGraph from "./PieGraph";
import LineGraph2 from "./TwoGraph";
import RadarGraph from "./RadarGraph";
import ReactGA from "react-ga";
import { useSelector, useDispatch } from "react-redux"; //import

import FlowContainer from "./user-flow/FlowContainer";

import {
  getCity,
  cityComparison,
  removeCity,
} from "../../../redux/actions/cityActions.js"; //import

import useModal from "../../modal/useModal";
import ModalPopup from "../../modal/modal.js";

import pointer from "./assets/pointer.svg";
import backwheel from "./assets/motorbike_back_wheel.png";
import edgeblur from "./assets/edge_blur.png";
import driver from "./assets/motorbike_driver.png";
import frontwheel from "./assets/motorbike_front_wheel.png";
import plant from "./assets/motorbike_plant.png";

import { CityContext } from "../../../contexts/CityContext";
import { UserContext } from "../../../contexts/UserContext";

import AOS from "aos";
import "aos/dist/aos.css";
import "../../../App.scss";

import landing from "../../homepage-imgs/landing.svg";
import economy from "../../homepage-imgs/economy.svg";
import community from "../../homepage-imgs/community.svg";
import housing from "../../homepage-imgs/housing.svg";
import data from "../../homepage-imgs/visualize.svg";
import location from "../../homepage-imgs/map.svg";
import control from "../../homepage-imgs/control.svg";
import unlock from "../../homepage-imgs/unlock.svg";

//submit city needs more looking at.... Reducer needed???
function Dashboard({ history }) {
  const { isShowing, toggle } = useModal();

  AOS.init();
  const {
    user,
    setUser,
    toggleSearch,
    setToggleSearch,
    axiosAuth,
  } = useContext(UserContext);
  const { cityIndex, viewport, setViewport } = useContext(CityContext);

  const selected = useSelector((state) => state.cityReducer.selected); //added
  const dispatch = useDispatch(); //added

  // * SEARCH 1 STATE / HANDLECHANGE

  const [cityOneSuggestions, setCityOneSuggestions] = useState([]);
  const [cityTwoSuggestions, setCityTwoSuggestions] = useState([]);

  useEffect((_) => {
    if (user) {
      axiosAuth()
        .get(`/users/profile/image`)
        .then((res) => {
          const image = res.data[0];

          if (image) {
            setUser({ ...user, userimage: image.userimage });
          }
        })
        .catch((err) => console.log(err));
    }
  }, []);

  useEffect(
    (_) => {
      ReactGA.event({
        category: "Selected",
        action: "selected a city using dashboard",
      });
    },
    [selected]
  );

  //INSIDE LANDING PAGE
  //* COMPARE 2 STATE / HANDLECHANGE */

  //INITIALIZE VARIABLES FOR USERS TO COMPARE CITIES IN SEARCH FORM
  const [compare, setCompare] = useState({
    cityOne: "",
    cityTwo: "",
  });

  //FILTERS THE USERS SEARCH,
  //SORTED BY POPULATION,
  //ONLY GET TOP 5 RESULTS
  const topPopFilter = (arr) => {
    let sorted = arr.sort(
      (city1, city2) => city2.population - city1.population
    );
    if (sorted.length > 5) {
      sorted = sorted.slice(0, 5);
    }
    return sorted;
  };

  //USED AS HANDLE CHANGE IN FIRST FIELD
  //SETS THE SUGGESTIONS IN THE FIRST SEARCH INPUT
  //ONLY CHECK JSON FILE FOR SUGGESTIONS, NO API CALLS
  const handleCityOne = (e) => {
    const searchText = e.target.value;

    searchText
      ? setCityOneSuggestions(
          topPopFilter(
            cityIndex.filter((city) =>
              city.name.toLowerCase().includes(searchText.toLowerCase())
            )
          )
        )
      : setCityOneSuggestions([]);
    setCompare({
      ...compare,
      cityOne: e.target.value,
    });
  };

  //USED AS HANDLE CHANGE IN SECOND FIELD
  //SETS THE SUGGESTIONS IN THE SECOND SEARCH INPUT
  //ONLY CHECK JSON FILE FOR SUGGESTIONS, NO API CALLS

  const handleCityTwo = (e) => {
    const searchText = e.target.value;

    searchText
      ? setCityTwoSuggestions(
          topPopFilter(
            cityIndex.filter((city) =>
              city.name.toLowerCase().includes(searchText.toLowerCase())
            )
          )
        )
      : setCityTwoSuggestions([]);
    setCompare({
      ...compare,
      cityTwo: e.target.value,
    });
  };

  //CLICK HANDLER FOR SUGGESTED CITIES IN SEARCH INPUT
  //WILL SET THE CHOSEN CITY IN THE SEARCH INPUT TO WHAT YOU CLICK ON
  const chooseCityOneSuggestion = (city) => {
    setCompare({
      ...compare,
      cityOne: city.name.replace(" city", ""),
    });
    setCityOneSuggestions([]);
    setViewport({
      ...viewport,
      longitude: city.lng,
      latitude: city.lat,
    });
  };

  //CLICK HANDLER FOR SUGGESTED CITIES IN SEARCH INPUT
  //WILL SET THE CHOSEN CITY IN THE SEARCH INPUT TO WHAT YOU CLICK ON
  const chooseCityTwoSuggestion = (city) => {
    setCompare({
      ...compare,
      cityTwo: city.name.replace(" city", ""),
    });
    setCityTwoSuggestions([]);
    setViewport({
      ...viewport,
      longitude: city.lng,
      latitude: city.lat,
    });
  };

  //POTENTIAL REDUX THINGS
  //getCity()
  //getBestSuggestion()
  //setViewport()
  //* SUBMIT SEARCH */
  const submitCity = async (event) => {
    event.preventDefault();
    // all the below logic should be pulled into app.js and handle things on that end i think

    //IF NO CITIES, push directly to /map with no selections
    if (!compare.cityTwo && !compare.cityOne) {
      history.push("/compare");
      return;
    }

    //IF CITY INPUT MATCHES OUR CITY INDEX DATABASE
    //WE REPLACE INPUTS CITY NAME WITH THE NAME IN OUR DB
    let found = cityIndex.find(
      (item) => item.name.replace(" city", "") === compare.cityOne
    );
    let found2 = cityIndex.find(
      (item) => item.name.replace(" city", "") === compare.cityTwo
    );

    //If we have only one city
    if (!compare.cityTwo && compare.cityOne) {
      // and it's in the json file pass the object into getCity
      if (found) {
        dispatch(getCity(found));
      } else {
        //else pass the search term into getCity which will get the best suggestion from a DS endpoint, then get the city object
        dispatch(getCity(compare.cityOne));
      }
      history.push("/compare");
      return;
    }
    if (compare.cityTwo && !compare.cityOne) {
      if (found2) {
        dispatch(getCity(found2));
      } else {
        dispatch(getCity(compare.cityTwo));
      }

      history.push("/compare");
      return;
    }

    //IF WE HAVE BOTH CITIES...
    //CALL getCities()
    //UPDATE viewport OBJECT

    if (found && found2) {
      dispatch(cityComparison([found, found2]));
      // the viewport set below will require zoom handling based on population
      setViewport({
        ...viewport,
        longitude: found.lng,
        latitude: found.lat,
      });
    } else if (found && !found2) {
      // getCities([found, compare.cityTwo]);
      dispatch(cityComparison([found, compare.cityTwo]));
    } else if (!found && found2) {
      dispatch(cityComparison([compare.cityOne, found2]));
    }
    // if you don't enter the cities by name it goes to the suggestion
    else {
      ReactGA.event({
        category: "Data",
        action: `used suggestion endpoint: ${compare.cityOne}`,
      });
      await dispatch(cityComparison([compare.cityOne, compare.cityTwo]));
    }
    history.push("/compare");
  };

  //* TOGGLING BUTTONS */
  const [buttonClass, setButtonClass] = useState("");
  // const [toggleSearch, setToggleSearch] = useState(true)

  //CLICK HANDLER FOR THE TOGGLE SWITCH UNDER THE SEARCH INPUT
  const toggleClass = () => {
    if (buttonClass === "search-toggle-green") {
      setButtonClass("");
      setToggleSearch(true);
      setCompare({
        ...compare,
        cityTwo: "",
      });
    } else {
      setButtonClass("search-toggle-green");
      setToggleSearch(!toggleSearch);
    }
  };

  const toggleStyle = {
    marginLeft: "15px",
    fontSize: "1.1rem",
    color: "grey",
    color: buttonClass === "search-toggle-green" ? "" : "search-toggle-green",
  };

  return (
    <div className="dashboard-container">
      {/* * LANDING PAGE AND SEARCH FUNCTION */}
      <div className="dashboard-search-container">
        <div className="dashboard-search-function">
          {/* LANDING IMAGE */}
          <div className="dashboard-image">
            <div className="dashboard-image-header">
              {/* TITLE */}
              <p className="dashboard-title">
                Make Your <br />
                Move.
              </p>
              <p className="dashboard-title2">
                Make <br />
                Your <br />
                Move.
              </p>
              {/* SEARCH CONTAINER */}
              <div className="dashboard-function-container">
                <div className="search-and-modal">
                  <div className="all-search-container">
                    {/* TOGGLE SEARCH VS. COMPARE FUNCTIONALITY */}
                    {toggleSearch ? (
                      <div className="dashboard-single-search-container">
                        <form autoComplete="off" onSubmit={submitCity}>
                          <div className="search-and-button">
                            <input
                              placeholder="Search for a city"
                              onChange={handleCityOne}
                              value={compare.cityOne}
                              name="cityOne"
                            />
                            <button
                              onClick={submitCity}
                              className="compare-button"
                            >
                              Go
                            </button>
                          </div>
                          <div>
                            {cityOneSuggestions.map((suggestion) => {
                              const style = {
                                backgroundColor: suggestion.active
                                  ? "#e9e8e9"
                                  : "#fff",
                                cursor: "pointer",
                                fontSize: "1rem",
                                textAlign: "left",
                                padding: "10px",
                                boxShadow: "0 1px 16px 0 rgba(0, 0, 0, 0.09)",
                              };
                              return (
                                <div
                                  key={suggestion._id}
                                  name="cityOne"
                                  style={style}
                                  onClick={() =>
                                    chooseCityOneSuggestion(suggestion)
                                  }
                                >
                                  {" "}
                                  <img
                                    alt="a pointer"
                                    className="imageStyle"
                                    src={pointer}
                                  />{" "}
                                  {suggestion.name.replace(" city", "")}
                                </div>
                              );
                            })}
                          </div>
                        </form>
                      </div>
                    ) : (
                      <div className="dashboard-compare-search-container">
                        <form autoComplete="off" onSubmit={submitCity}>
                          <div>
                            <input
                              placeholder="Enter city one"
                              onChange={handleCityOne}
                              value={compare.cityOne}
                              name="cityOne"
                            />

                            <div>
                              {cityOneSuggestions.map((suggestion) => {
                                const style = {
                                  backgroundColor: suggestion.active
                                    ? "#e9e8e9"
                                    : "#fff",
                                  cursor: "pointer",
                                  fontSize: "1rem",
                                  textAlign: "left",
                                  padding: "10px",
                                  boxShadow: "0 1px 16px 0 rgba(0, 0, 0, 0.09)",
                                };
                                return (
                                  <div
                                    key={suggestion.name}
                                    style={style}
                                    onClick={() =>
                                      chooseCityOneSuggestion(suggestion)
                                    }
                                  >
                                    {" "}
                                    <img
                                      alt="a map pin"
                                      className="imageStyle"
                                      src={pointer}
                                    />{" "}
                                    {suggestion.name.replace(" city", "")}
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                          <div style={{ display: "flex", marginTop: "10px" }}>
                            <input
                              placeholder="Enter city two"
                              onChange={handleCityTwo}
                              value={compare.cityTwo}
                            />
                            <button
                              onClick={submitCity}
                              className="compare-button"
                            >
                              Go
                            </button>
                          </div>
                          <div>
                            {cityTwoSuggestions.map((suggestion) => {
                              const style = {
                                backgroundColor: suggestion.active
                                  ? "#e9e8e9"
                                  : "#fff",
                                cursor: "pointer",
                                fontSize: "1rem",
                                textAlign: "left",
                                padding: "10px",
                                boxShadow: "0 1px 16px 0 rgba(0, 0, 0, 0.09)",
                              };
                              return (
                                <div
                                  key={suggestion.name}
                                  style={style}
                                  onClick={() =>
                                    chooseCityTwoSuggestion(suggestion)
                                  }
                                >
                                  {" "}
                                  <img
                                    alt="a map pin"
                                    className="imageStyle"
                                    src={pointer}
                                  />{" "}
                                  {suggestion.name.replace(" city", "")}
                                </div>
                              );
                            })}
                          </div>
                        </form>
                      </div>
                    )}
                    {/* * TOGGLE DIV FOR SEARCH AND GO BUTTON */}
                    <div className="toggle-div">
                      <div id="search-toggle">
                        <label className="switch">
                          <input type="checkbox" onClick={toggleClass} />
                          <span className="slider round"></span>
                        </label>
                        <p className={buttonClass} style={toggleStyle}>
                          Compare cities
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <ModalPopup
                      isShowing={isShowing}
                      hide={toggle}
                      component={<FlowContainer />}
                    />
                    <div className="modal-prompt">
                      Not sure where you want to go?
                      <br></br>
                      take our quiz and let us help you find out!
                      <button
                        className="compare-button"
                        onClick={() => {
                          toggle();
                        }}
                      >
                        Take the quiz!
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SIGN UP CALL TO ACTION */}
      <div
        className="kevinmotor"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div
          className="bonus-features-container"
          data-aos="fade-right"
          data-aos-offset="100"
          // data-aos-delay="50"
          data-aos-duration="800"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="true"
        >
          <div className="motoranimationcontainer">
            <img alt="img of lock" className="unlockfeatures" src={unlock} />

            {/* <div className="motoranimbackground">
                              <img className="edgeblurleft" src={edgeblur}/>
                              <img className="edgeblurright" src={edgeblur}/>
                         </div>
                         <div className="moving">
                              <img className="motoranim wheel" src={backwheel} alt="backwheel" style={{top:"90px", right:"55px"}}/>
                              <img className="motoranim wheel" src={frontwheel} alt="frontwheel" style={{top:"90px", left:"67px"}}/>
                              <img className="motoranim driver" src={driver} alt="driver" style={{top:"20px"}}/>
                              <img className="motoranim plant" src={plant} alt="plant" style={{top:"27px", right:"60px"}} />
                         </div> */}
          </div>
          <div className="bonus-features-CTA">
            <p className="bonus-features-title">Unlock bonus features</p>
            <p className="bonus-features-description">
              Sign up for free to unlock additional features to export data,
              review and comment on cities, and view favorited cities.{" "}
            </p>

            <Link to="/signup">
              <button className="sign-up-CTA">Sign Up</button>
            </Link>
          </div>
        </div>
      </div>

      {/* PRODUCT FEATURES */}
      <div className="kevin">
        <div className="dashboard-features-container">
          <div className="dashboard-features-title">
            <h3 className="features-title">Features</h3>
          </div>
          <div
            className="feature-descriptions-container"
            data-aos="fade-up"
            data-aos-offset="100"
            // data-aos-delay="50"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
          >
            <img className="feature-images" src={control} alt="money" />
            <div className="feature-descriptions">
              <p className="feature-title">Control of data</p>
              <p>
                Explore cost of living and other data of a single city or
                compare multiple cities to learn about differences.
              </p>
            </div>
          </div>
          <div
            className="feature-descriptions-container"
            data-aos="fade-up"
            data-aos-offset="100"
            // data-aos-delay="50"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
          >
            <img className="feature-images" src={location} alt="map" />
            <div className="feature-descriptions">
              <p className="feature-title">Map view</p>
              <p>
                View the map to explore what is near cities and how the data
                compares with different parts of the city.
              </p>
            </div>
          </div>
          <div
            className="feature-descriptions-container"
            data-aos="fade-up"
            data-aos-offset="100"
            // data-aos-delay="50"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
          >
            <img className="feature-images" src={data} alt="data visual" />
            <div className="feature-descriptions">
              <p className="feature-title">Visualize data</p>
              <p>
                Data visuals help to easily understand cost of living in
                multiple cities and provide data from a bird’s eye view.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* VISUALIZING DATA CONTAINER */}
      <div className="dashboard-metrics-container">
        <p className="metrics-title">Visualizing data made easier</p>
        <div className="dashboard-metrics">
          <div
            className="metrics-description-container"
            data-aos="fade-down"
            data-aos-offset="100"
            data-aos-delay="100"
            data-aos-duration="600"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
          >
            <img
              className="feature-images"
              src={housing}
              alt="housing visual"
            />
            {/* <LineGraph2 /> */}
            <p className="metrics-description">
              <p className="metrics-description-title">Housing</p>Housing data
              includes median rent, home prices, monthly homeowner costs,
              housing by rooms, and etc.
            </p>
          </div>
          <div
            className="metrics-description-container"
            data-aos="fade-down"
            data-aos-offset="100"
            data-aos-delay="100"
            data-aos-duration="600"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
          >
            <img
              className="feature-images"
              src={community}
              alt="community visual"
            />
            {/* <LineGraph /> */}
            <p className="metrics-description">
              <p className="metrics-description-title">Community</p>Data for
              social trends consists of age, ethnicity, education, languages
              spoken, school enrollment, and etc.
            </p>
          </div>
          <div
            className="metrics-description-container"
            data-aos="fade-down"
            data-aos-offset="100"
            data-aos-delay="100"
            data-aos-duration="600"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
          >
            <img
              className="feature-images"
              src={economy}
              alt="economy visual"
            />
            {/* <RadarGraph /> */}
            <p className="metrics-description">
              <p className="metrics-description-title">Economy</p>Economic data
              includes household income, major industries, etc.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
