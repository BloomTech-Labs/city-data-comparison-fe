import React, { useState, useEffect, useCallback } from "react";
import Axios from "axios";

import recommend from "./recommend-pin.svg";
import ReactGA from "react-ga";

import { useDispatch } from "react-redux";
import { getCity } from "../../../../redux/actions/cityActions.js";

//not using this component as far as we can tell right now
const Recommendations = ({ city }) => {
  const dispatch = useDispatch();
  let [cultureRec, setCultureRec] = useState({ city: "", ID: "" });
  let [housingRec, setHousingRec] = useState({ city: "", ID: "" });
  let [industryRec, setIndustryRec] = useState({ city: "", ID: "" });
  let housingURL =
    "https://api.citrics.io/jkekal6d6e5si3i2ld66d4dl/recommend/housing/";
  let cultureURL =
    "https://api.citrics.io/jkekal6d6e5si3i2ld66d4dl/recommend/culture/";
  let industryURL =
    "https://api.citrics.io/jkekal6d6e5si3i2ld66d4dl/recommend/industry/";
  //get recommendations when component mounts

  const randomKey = useCallback(
    (obj) => {
      const keys = Object.keys(obj);
      const randomIndex = (keys.length * Math.random()) << 0;
      return obj[keys[randomIndex]].id !== city._id
        ? keys[randomIndex]
        : randomKey(obj);
    },
    [city]
  );

  useEffect(
    (_) => {
      Axios.get(`${housingURL}${city._id}`)
        .then((res) => {
          let recName = randomKey(res.data);

          setHousingRec({ city: recName, ID: res.data[recName].id });
        })
        .catch((err) => console.log(err));
      Axios.get(`${cultureURL}${city._id}`)
        .then((res) => {
          let recName = randomKey(res.data);
          setCultureRec({ city: recName, ID: res.data[recName].id });
        })
        .catch((err) => console.log(err));
      Axios.get(`${industryURL}${city._id}`)
        .then((res) => {
          let recName = randomKey(res.data);
          setIndustryRec({ city: recName, ID: res.data[recName].id });
        })
        .catch((err) => console.log(err));
    },
    [city, cultureURL, housingURL, industryURL, randomKey]
  );

  return (
    <div className="recommendation-grid">
      {housingRec.city && cultureRec.city && industryRec.city ? (
        <div className="recommendation-container">
          <div className="recommendation-title">
            Here are some recommendations based on your search.
          </div>
          <div
            className="recommendation"
            onClick={(_) => {
              ReactGA.event({
                category: "Data",
                action: `selected housing rec: ${housingRec.city}`,
              });
              dispatch(getCity(housingRec));
            }}
          >
            <p className="recommendation-subtitle">Similar housing</p> <br />{" "}
            <p className="recommendation-cities">
              <img alt="pinpoint" src={recommend} />
              {housingRec.city}
            </p>{" "}
          </div>
          <div
            className="recommendation"
            onClick={(_) => {
              ReactGA.event({
                category: "Data",
                action: `selected culture rec: ${cultureRec.city}`,
              });
              dispatch(getCity(cultureRec));
            }}
          >
            <p className="recommendation-subtitle">Similar culture</p>
            <br />{" "}
            <p className="recommendation-cities">
              <img alt="pinpoint" src={recommend} />
              {cultureRec.city}
            </p>
          </div>
          <div
            className="recommendation"
            onClick={(_) => {
              ReactGA.event({
                category: "Data",
                action: `selected industry rec: ${industryRec.city}`,
              });
              dispatch(getCity(industryRec));
            }}
          >
            <p className="recommendation-subtitle">Similar industries</p> <br />
            <p className="recommendation-cities">
              <img alt="pinpoint" src={recommend} />
              {industryRec.city}
            </p>
          </div>
        </div>
      ) : (
        <div className="recommendation-container">
          <div className="recommendation-title">
            Here are some recommendations based on your search.
          </div>
          <div className="recommendation">
            <p className="recommendation-subtitle">Similar housing</p> <br />{" "}
            <p className="recommendation-cities">
              <img alt="pinpoint" src={recommend} />
              {housingRec.city}
            </p>{" "}
          </div>
          <div className="recommendation">
            <p className="recommendation-subtitle">Similar culture</p>
            <br />{" "}
            <p className="recommendation-cities">
              <img alt="pinpoint" src={recommend} />
              {cultureRec.city}
            </p>
          </div>
          <div className="recommendation">
            <p className="recommendation-subtitle">Similar industries</p> <br />
            <p className="recommendation-cities">
              <img alt="pinpoint" src={recommend} />
              {industryRec.city}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
export default Recommendations;
