import React, { useState } from "react";
import Housing from "./HousingBudget";
import Income from "./Income";
import Location from "./Location";
import Industry from "./Industry";
import Weather from "./Weather";

import Card from "../../../card/Card.js";
import Testing from "./testing";
import {
  RadioGroup,
  Radio,
  FormControl,
  FormLabel,
  FormControlLabel,
} from "@material-ui/core";

export default function FlowContainer() {
  const [inputs, setInputs] = useState({
    housing: "",
    weather: "",
    location: "",
    income: "",
  });

  const [housingValue, setHousingValue] = useState("");
  const [weatherValue, setWeatherValue] = useState("");
  const [locationValue, setLocationValue] = useState("");
  const [incomeValue, setIncomeValue] = useState("");

  const onChange = (e) => {
    // console.log("radio checked", e.target.value);
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
    // setValue(e.target.value);
    if (e.target.name === "housing") {
      setHousingValue(e.target.value);
    } else if (e.target.name === "weather") {
      setWeatherValue(e.target.value);
    } else if (e.target.name === "location") {
      setLocationValue(e.target.value);
    } else if (e.target.name === "income") {
      setIncomeValue(e.target.value);
    }
  };

  console.log("CONTAINER INPUTS", inputs);
  // console.log("VALUE", value);
  return (
    <div className="dashboard-modal-container">
      <h1>
        Take this short quiz to be recommended three cities that suit you best!
      </h1>
      {/* <Testing /> */}
      <form>
        <FormControl>
          <FormLabel component="location">
            What is your preferred size of the city you would like to reside in?
          </FormLabel>
          <RadioGroup name="location" value={locationValue} onChange={onChange}>
            <FormControlLabel
              value="village"
              control={<Radio />}
              label="Village (0 - 999)"
            />
            <FormControlLabel
              value="town"
              control={<Radio />}
              label="Town (1000 - 10000)"
            />
            <FormControlLabel
              value="large-town"
              control={<Radio />}
              label="Large Town (10,001 - 100,000)"
            />
            <FormControlLabel
              value="medium-city"
              control={<Radio />}
              label="Medium City (100,001 - 300,000)"
            />
            <FormControlLabel
              value="large-city"
              control={<Radio />}
              label="Large City (300,001 - 999,999)"
            />
            <FormControlLabel
              value="metropolis"
              control={<Radio />}
              label="Metropolis (1,000,000 - 3,000,000)"
            />
            <FormControlLabel
              value="conurbation"
              control={<Radio />}
              label="Conurbation (3,000,001 - 10,000,000)"
            />
          </RadioGroup>

          <FormLabel component="weather">
            What is your preferred climate?
          </FormLabel>
          <RadioGroup name="weather" value={weatherValue} onChange={onChange}>
            <FormControlLabel
              value="cold"
              control={<Radio />}
              label="Cold (0 - 49°F)"
            />
            <FormControlLabel
              value="cool"
              control={<Radio />}
              label="Cool (50 - 69°F)"
            />
            <FormControlLabel
              value="warm"
              control={<Radio />}
              label="Warm (70 - 80°F)"
            />
          </RadioGroup>

          <FormLabel component="housing">
            What is your monthly Housing Budget?
          </FormLabel>
          <RadioGroup name="housing" value={housingValue} onChange={onChange}>
            <FormControlLabel
              value="housing-low"
              control={<Radio />}
              label="Low ($0 - $599)"
            />
            <FormControlLabel
              value="housing-lower-middle"
              control={<Radio />}
              label="Lower-Middle ($600 - $1199)"
            />
            <FormControlLabel
              value="housing-middle"
              control={<Radio />}
              label="Middle ($1200 - $1799)"
            />
            <FormControlLabel
              value="housing-upper-middle"
              control={<Radio />}
              label="Upper-Middle ($1800 - $2399)"
            />
            <FormControlLabel
              value="housing-high"
              control={<Radio />}
              label="High ($2400 - $3000)"
            />
          </RadioGroup>

          <FormLabel component="income">
            What is your expected yearly income?
          </FormLabel>
          <RadioGroup name="income" value={incomeValue} onChange={onChange}>
            <FormControlLabel
              value="low"
              control={<Radio />}
              label="Low ($0 - $31,000)"
            />
            <FormControlLabel
              value="lower-middle"
              control={<Radio />}
              label="Lower-Middle ($31,001 - $49,999)"
            />
            <FormControlLabel
              value="middle"
              control={<Radio />}
              label="Middle ($50,000 - $99,999)"
            />
            <FormControlLabel
              value="upper-middle"
              control={<Radio />}
              label="Upper-Middle ($100000 - $349,999)"
            />
            <FormControlLabel
              value="high"
              control={<Radio />}
              label="High ($350,000 - $723,000)"
            />
          </RadioGroup>
        </FormControl>
      </form>
    </div>
  );
}
