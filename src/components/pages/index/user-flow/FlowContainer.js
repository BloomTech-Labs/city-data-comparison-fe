import React, { useState } from "react";
import Card from "../../comparison/graphs/card/GraphCard.js";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { actionColor } from "../../../../utils/cityColors";

import {
  FormControl,
  FormLabel,
  FormControlLabel,
  makeStyles,
  TextField,
  Select,
  MenuItem,
  InputAdornment,
  OutlinedInput,
} from "@material-ui/core";
import styled from "styled-components/macro";
import axios from "axios";

const ReverseUserFlowDialog = styled.div`
  overflow-y: scroll;
`;

const ReverseUserFlowBody = styled.div`
  max-height: 84vh;
`;

const StyledTextField = styled(TextField)`
  width: 70%;
`;

const Question = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2.8rem;
  label {
    align-self: flex-start;
  }
  @media screen and (max-width: 800px) {
    flex-direction: column;
    margin-bottom: 1.4rem;
    label {
      margin-bottom: 0.7rem;
    }
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 2.8rem;
  margin-top: 1.4rem;
`;

const Button = styled.button`
  border: none;
  border-radius: 5px;
  font-size: 1.7rem;
  font-weight: 500;
  padding: 0;
  margin-top: 20px;
  margin-left: 30px;
  background-color: #0066cc;
  color: white;
  width: 38%;
  height: 65px;
  transition: 0.22s ease;
  box-shadow: 0 0px 15px 0 rgba(0, 0, 0, 0.07);
  cursor: pointer;
`;

const useStyles = makeStyles((theme) => ({
  header: {
    textAlign: "center",
  },
  select: {
    minWidth: "210px",

    [theme.breakpoints.down(800)]: {
      width: "100%",
    },
  },
  input: {
    display: "block",
    [theme.breakpoints.down(800)]: {
      justifySelf: "flex-end",
    },
  },
  submit: {
    margin: "1.4rem 0",
    display: "block",
    minWidth: "250px",
    [theme.breakpoints.down(600)]: {
      width: "100%",
    },
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
  const mobile = useMediaQuery("(max-width:800px)");

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
        <Form onSubmit={handleSubmit}>
          <Question>
            <label component="location">
              1. What is your preferred size of the city you would like to
              reside in?
            </label>
            <Select
              variant="outlined"
              name="location"
              className={classes.select}
              value={locationValue}
              onChange={onChange}
            >
              {questionValues.location.map((answer) => (
                <MenuItem value={answer.value}>{answer.label}</MenuItem>
              ))}
            </Select>
          </Question>

          <Question>
            <label component="weather">
              2. What is your preferred climate?
            </label>
            <Select
              variant="outlined"
              name="weather"
              className={classes.select}
              value={weatherValue}
              onChange={onChange}
            >
              {questionValues.weather.map((answer) => (
                <MenuItem value={answer.value}>{answer.label}</MenuItem>
              ))}
            </Select>
          </Question>

          <Question>
            <label component="housing">
              3. What is your monthly Housing Budget?
            </label>

            <OutlinedInput
              className={classes.fields}
              name="housing"
              id="standard-basic"
              type="number"
              value={housingValue}
              onChange={onChange}
              fullWidth={mobile}
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
            />
          </Question>

          <Question>
            <label component="income">
              4. What is your expected yearly income?
            </label>
            <OutlinedInput
              className={classes.fields}
              name="income"
              id="standard-basic"
              type="number"
              value={incomeValue}
              onChange={onChange}
              fullWidth={mobile}
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
            />
          </Question>

          <Button
            type="submit"
            className={classes.submit}
            color={actionColor}
            variant="contained"
            size="large"
          >
            Find A City
          </Button>
        </Form>
      </ReverseUserFlowBody>
    </ReverseUserFlowDialog>
  );
}
