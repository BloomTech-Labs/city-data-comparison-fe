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
  TextField,
} from "@material-ui/core";
import styled from "styled-components";
import axios from "axios";

const StyledTextField = styled(TextField)`
  width: 70%;
`;

const useStyles = makeStyles((theme) => ({
  form: {
    margin: "auto"
  },
  header: {
    textAlign: "center",
  },
  buttonGroup: {
    // paddingLeft: "15%",
    marginLeft: "3rem",
    [theme.breakpoints.down(1000)]: {},
  },
  titles: {
    // paddingLeft: "5%",
    [theme.breakpoints.down(1000)]: {
      paddingLeft: 0,
    },
  },
  fields: {
    margin: "auto"
  }
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
    // console.log("INPUTS", inputs);
    // e.history.push('/compare');
    axios
      .get(
        `http://labs23-ds-api-test.us-east-1.elasticbeanstalk.com/jkekal6d6e5si3i2ld66d4dl/reverse?temp=${inputs.weather}&mean_income=${inputs.income}&housing=${inputs.housing}&city_size=${inputs.location}`
      )
      .then((res) => {
        console.log("GET RES", res);
      })
      .catch((err) => {
        console.log("GET RES ERR", err);
      });
    // http://labs23-ds-api-test.us-east-1.elasticbeanstalk.com/jkekal6d6e5si3i2ld66d4dl/reverse?temp=&mean_income=100000&housing=1800&city_size=town
  };

  console.log("CONTAINER INPUTS", inputs);
  // console.log("VALUE", value);
  return (
    <div className="dashboard-modal-container">
      <h2 style={{ textAlign: "center" }}>Find the perfect city to live in!</h2>
      <form onSubmit={handleSubmit} className={classes.form}>
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
              value="town"
              control={<Radio color="primary" disableRipple="true" />}
              label="Town (0 - 74,999)"
            />
            <FormControlLabel
              value="small_city"
              control={<Radio color="primary" disableRipple="true" />}
              label="Small City (75,000 - 399,999)"
            />
            <FormControlLabel
              value="medium_city"
              control={<Radio color="primary" disableRipple="true" />}
              label="Medium City (400,000 - 699,999)"
            />
            <FormControlLabel
              value="large_city"
              control={<Radio color="primary" disableRipple="true" />}
              label="Large City (700,000+)"
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
              value="temperate"
              control={<Radio color="primary" disableRipple="true" />}
              label="Temperate (50 - 69°F)"
            />
            <FormControlLabel
              value="hot"
              control={<Radio color="primary" disableRipple="true" />}
              label="Hot (70 - 80°F)"
            />
          </RadioGroup>

          <FormLabel component="housing" className={classes.titles}>
            What is your monthly Housing Budget?
          </FormLabel>

          <br />
          <TextField
            className={classes.fields}
            name="housing"
            id="standard-basic"
            label="$"
            type="number"
            value={housingValue}
            onChange={onChange}
          />
          <br />

          <FormLabel component="income" className={classes.titles}>
            What is your expected yearly income?
          </FormLabel>
          <br />
          <TextField
          className={classes.fields}
            name="income"
            id="standard-basic"
            label="$"
            type="number"
            value={incomeValue}
            onChange={onChange}
          />
          <br />

          <Button
            type="submit"
            className={classes.titles}
            color="primary"
            variant="contained"
            size="large"
          >
            Submit
          </Button>
        </FormControl>
      </form>
    </div>
  );
}
