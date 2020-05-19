import React, { useState, useEffect, useContext } from "react";

import ReactGA from "react-ga";
import { useSelector, useDispatch } from "react-redux"; //import

import Location from "./user-flow/Location";
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
function SearchContainer(props) {
  console.log("search props", props);

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
    <div className="dashboard-function-container">
      <div className="search-and-modal">
        <div className="all-search-container">
          {/* TOGGLE SEARCH VS. COMPARE FUNCTIONALITY */}
          {toggleSearch ? (
            <div className="dashboard-single-search-container">
              <form autoComplete="off" onSubmit={props.submitCity}>
                <div className="search-and-button">
                  <input
                    placeholder="Search for a city"
                    onChange={handleCityOne}
                    value={compare.cityOne}
                    name="cityOne"
                  />
                  <button onClick={props.submitCity} className="compare-button">
                    Go
                  </button>
                </div>
                <div>
                  {cityOneSuggestions.map((suggestion) => {
                    const style = {
                      backgroundColor: suggestion.active ? "#e9e8e9" : "#fff",
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
                        onClick={() => chooseCityOneSuggestion(suggestion)}
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
              <form autoComplete="off" onSubmit={props.submitCity}>
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
                        backgroundColor: suggestion.active ? "#e9e8e9" : "#fff",
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
                          onClick={() => chooseCityOneSuggestion(suggestion)}
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
                  <button onClick={props.submitCity} className="compare-button">
                    Go
                  </button>
                </div>
                <div>
                  {cityTwoSuggestions.map((suggestion) => {
                    const style = {
                      backgroundColor: suggestion.active ? "#e9e8e9" : "#fff",
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
                        onClick={() => chooseCityTwoSuggestion(suggestion)}
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
      </div>
    </div>
  );
}

export default SearchContainer;
