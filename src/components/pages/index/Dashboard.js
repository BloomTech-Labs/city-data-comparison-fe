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

import landing from "./assets/landing.svg";
import economy from "./assets/economy.svg";
import community from "./assets/community.svg";
import housing from "./assets/housing.svg";
import data from "./assets/visualize.svg";
import location from "./assets/map.svg";
import control from "./assets/control.svg";
import unlock from "./assets/unlock.svg";

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
                <ModalPopup
                  isShowing={isShowing}
                  hide={toggle}
                  component={<FlowContainer />}
                />
                <button
                  className="quiz-btn"
                  onClick={() => {
                    toggle();
                  }}
                >
                  Get Started
                </button>
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
