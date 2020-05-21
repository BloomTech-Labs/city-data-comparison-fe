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
  Select,
  MenuItem,
} from "@material-ui/core";
import styled from "styled-components";
import axios from "axios";

const ReverseUserFlowDialog = styled.div`
  overflow-y: scroll;
  overflow-y: initial !important;
`;

const ReverseUserFlowBody = styled.div`
  height: 42vh
  overflow-y: auto;
`;

const StyledTextField = styled(TextField)`
  width: 70%;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const useStyles = makeStyles((theme) => ({
  form: {
    margin: "auto",
  },
  header: {
    textAlign: "center",
  },
  select: {
    margin: "1.4rem 0",
    [theme.breakpoints.down(1000)]: {},
  },
  submit: {
    margin: "1.4rem 0",
  },
  question: {
    [theme.breakpoints.down(1000)]: {
      paddingLeft: 0,
    },
  },
  fields: {
    // margin: "auto",
  },
}));

const questionValues = {
  location: [
    { label: "Town (0 - 74,999)", value: "town" },
    { label: "Small City (75,000 - 399,999)", value: "small_city" },
    { label: "Medium City (400,000 - 699,999)", value: "medium_city" },
    { label: "Large City (700,000+)", value: "large_city" },
  ],
  weather: [
    { label: "Cold (0 - 49°F)", value: "cold" },
    { label: "Temperate (50 - 69°F)", value: "temperate" },
    { label: "Hot (70 - 80°F)", value: "hot" },
  ],
};

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
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });

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
    <ReverseUserFlowDialog>
      <ReverseUserFlowBody>
        <Form onSubmit={handleSubmit} className={classes.form}>
          <FormControl required="true">
            <label component="location" className={classes.question}>
              1. What is your preferred size of the city you would like to
              reside in?
            </label>
            <Select
              name="location"
              className={classes.select}
              value={locationValue}
              onChange={onChange}
            >
              {questionValues.location.map((answer) => (
                <MenuItem value={answer.value}>{answer.label}</MenuItem>
              ))}
            </Select>

            <label component="weather" className={classes.question}>
              2. What is your preferred climate?
            </label>
            <Select
              name="weather"
              className={classes.select}
              value={weatherValue}
              onChange={onChange}
            >
              {questionValues.weather.map((answer) => (
                <MenuItem value={answer.value}>{answer.label}</MenuItem>
              ))}
            </Select>

            <label component="housing" className={classes.question}>
              3. What is your monthly Housing Budget?
            </label>

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

            <label component="income" className={classes.question}>
              4. What is your expected yearly income?
            </label>
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
              className={classes.submit}
              color="primary"
              variant="contained"
              size="large"
            >
              Submit
            </Button>
          </FormControl>
        </Form>
      </ReverseUserFlowBody>
    </ReverseUserFlowDialog>
  );
}
