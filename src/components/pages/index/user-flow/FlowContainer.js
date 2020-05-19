import React, { useState } from "react";
import Card from "../../../card/Card.js";
import {
  Button,
  RadioGroup,
  Radio,
  FormControl,
  FormLabel,
  FormControlLabel,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  header: {
    textAlign: "center",
  },
  buttonGroup: {
    // paddingLeft: "15%",
    marginLeft: '3rem',
    [theme.breakpoints.down(1000)]: {
    },
  },
  titles: {
    // paddingLeft: "5%",
    [theme.breakpoints.down(1000)]: {
      paddingLeft: 0,
      color:'grey'
    },
  },
}));

export default function FlowContainer() {
  const classes = useStyles();

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

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  console.log("CONTAINER INPUTS", inputs);
  // console.log("VALUE", value);
  return (
    <div className="dashboard-modal-container">
      <h2 style={{textAlign:'center'}}>Find the perfect city to live in!</h2>
      <form onSubmit={handleSubmit}>
        <FormControl required="true">
          <FormLabel component="location" className={classes.titles}>
            What is your preferred size of the city you would like to reside in?
          </FormLabel>
          <RadioGroup
            name="location"
            className={classes.buttonGroup}
            value={locationValue}
            onChange={onChange}
          >
            <FormControlLabel
              value="village"
              control={<Radio color="primary" disableRipple="true"/>}
              label="Village (0 - 999)"
            />
            <FormControlLabel
              value="town"
              control={<Radio color="primary" disableRipple="true" />}
              label="Town (1000 - 10000)"
            />
            <FormControlLabel 
              value="large-town"
              control={<Radio color="primary" disableRipple="true" />}
              label="Large Town (10,001 - 100,000)"
            />
            <FormControlLabel 
              value="medium-city"
              control={<Radio color="primary" disableRipple="true" />}
              label="Medium City (100,001 - 300,000)"
            />
            <FormControlLabel 
              value="large-city"
              control={<Radio color="primary" disableRipple="true" />}
              label="Large City (300,001 - 999,999)"
            />
            <FormControlLabel 
              value="metropolis"
              control={<Radio color="primary" disableRipple="true" />}
              label="Metropolis (1,000,000 - 3,000,000)"
            />
            <FormControlLabel 
              value="conurbation"
              control={<Radio color="primary" disableRipple="true" />}
              label="Conurbation (3,000,001 - 10,000,000)"
            />
          </RadioGroup>

          <FormLabel component="weather" className={classes.titles}>
            What is your preferred climate?
          </FormLabel>
          <RadioGroup
            name="weather"
            className={classes.buttonGroup}
            value={weatherValue}
            onChange={onChange}
          >
            <FormControlLabel 
              value="cold"
              control={<Radio color="primary" disableRipple="true" />}
              label="Cold (0 - 49°F)"
            />
            <FormControlLabel 
              value="cool"
              control={<Radio color="primary" disableRipple="true" />}
              label="Cool (50 - 69°F)"
            />
            <FormControlLabel 
              value="warm"
              control={<Radio color="primary" disableRipple="true" />}
              label="Warm (70 - 80°F)"
            />
          </RadioGroup>

          <FormLabel component="housing" className={classes.titles}>
            What is your monthly Housing Budget?
          </FormLabel>
          <RadioGroup
            name="housing"
            className={classes.buttonGroup}
            value={housingValue}
            onChange={onChange}
          >
            <FormControlLabel 
              value="housing-low"
              control={<Radio color="primary" disableRipple="true" />}
              label="Low ($0 - $599)"
            />
            <FormControlLabel 
              value="housing-lower-middle"
              control={<Radio color="primary" disableRipple="true" />}
              label="Lower-Middle ($600 - $1199)"
            />
            <FormControlLabel 
              value="housing-middle"
              control={<Radio color="primary" disableRipple="true" />}
              label="Middle ($1200 - $1799)"
            />
            <FormControlLabel 
              value="housing-upper-middle"
              control={<Radio color="primary" disableRipple="true" />}
              label="Upper-Middle ($1800 - $2399)"
            />
            <FormControlLabel 
              value="housing-high"
              control={<Radio color="primary" disableRipple="true" />}
              label="High ($2400 - $3000)"
            />
          </RadioGroup>

          <FormLabel component="income" className={classes.titles}>
            What is your expected yearly income?
          </FormLabel>
          <RadioGroup
            name="income"
            className={classes.buttonGroup}
            value={incomeValue}
            onChange={onChange}
          >
            <FormControlLabel 
              value="low"
              control={<Radio color="primary" disableRipple="true" />}
              label="Low ($0 - $31,000)"
            />
            <FormControlLabel 
              value="lower-middle"
              control={<Radio color="primary" disableRipple="true" />}
              label="Lower-Middle ($31,001 - $49,999)"
            />
            <FormControlLabel 
              value="middle"
              control={<Radio color="primary" disableRipple="true" />}
              label="Middle ($50,000 - $99,999)"
            />
            <FormControlLabel 
              value="upper-middle"
              control={<Radio color="primary" disableRipple="true" />}
              label="Upper-Middle ($100000 - $349,999)"
            />
            <FormControlLabel 
              value="high"
              control={<Radio color="primary" disableRipple="true" />}
              label="High ($350,000 - $723,000)"
            />
          </RadioGroup>
          <Button color="primary" variant="contained" size="large">
            Submit
          </Button>
        </FormControl>
      </form>
    </div>
  );
}
