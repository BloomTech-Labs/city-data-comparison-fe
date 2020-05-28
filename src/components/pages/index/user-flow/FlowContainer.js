import React, { useState } from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { actionColor } from "../../../../utils/cityColors";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  clearAllCities,
  getSuggestedCity,
} from "../../../../redux/actions/cityActions";

import {
  makeStyles,
  Select,
  MenuItem,
  InputAdornment,
  OutlinedInput,
} from "@material-ui/core";
import styled from "styled-components/macro";

const ReverseUserFlowWrapper = styled.div`
  padding: 0rem;
  overflow-y: hidden;
`;

const ReverseUserFlowBody = styled.div`
  padding: 0;
  max-height: 84vh;
  overflow-y: scroll;
  padding-bottom: 2.8rem;
`;

const Description = styled.p`
  font-size: 0.96rem;
  padding: 1.4rem 2.8rem;

  margin: 0;
  border: 0;
`;

const Question = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.4rem;
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
`;

const Error = styled.p`
  color: red;
  position: relative;
  bottom: 0;
`;

const Button = styled.button`
  border: none;
  border-radius: 5px;
  font-size: 1.7rem;
  font-weight: 500;
  padding: 0;

  background-color: #0066cc;
  color: white;
  width: 38%;
  height: 65px;
  transition: 0.22s ease;
  box-shadow: 0 0px 15px 0 rgba(0, 0, 0, 0.07);
  cursor: pointer;
  min-width: 250px;
  margin-bottom: 0.7rem;

  &.disabled {
    background-color: "grey";
    cursor: default;
  }
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
  industry: [
    "Agriculture, Forestry, Fishing, Hunting, or Mining",
    "Construction",
    "Manufacturing",
    "Wholesale Trade",
    "Retail Trade",
    "Transportation, Warehousing or Utilities",
    "Information",
    "Finance, Insurance, Real Estate, Rental, or Leasing",
    "Professional Scientific, Management, Administrative, or Waste Management Services",
    "Educational Services, Health Care, or Social Assistance",
    "Arts, Entertainment, Recreation, Accommodation, or Food Services",
    "Other",
    "Public Administration",
  ],
};

export default function FlowContainer() {
  const dispatch = useDispatch();
  const history = useHistory();

  const classes = useStyles();
  const mobile = useMediaQuery("(max-width:800px)");

  const [inputs, setInputs] = useState({
    housing: "",
    weather: "",
    location: "",
    income: "",
    industry: "",
    error: "",
  });

  const onChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
      error: "",
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputs.housing && inputs.weather && inputs.location && inputs.income) {
      dispatch(clearAllCities());
      dispatch(getSuggestedCity(inputs));
      history.push("/compare");
    } else {
      setInputs({
        error: "Missing required fields.",
      });
      console.log(inputs.error);
    }
  };

  return (
    <ReverseUserFlowWrapper>
      <ReverseUserFlowBody>
        <Description>
          Using a machine learning model, we will compare your answers with data
          collected on over 28,000 cities and towns in America to find one that
          best suits your preferences and budget.
        </Description>
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
              value={inputs.location}
              onChange={onChange}
              error={inputs.error && !inputs.location}
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
              value={inputs.weather}
              onChange={onChange}
              error={inputs.error && !inputs.weather}
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
              value={inputs.housing}
              onChange={onChange}
              fullWidth={mobile}
              error={inputs.error && !inputs.housing}
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
              value={inputs.income}
              onChange={onChange}
              fullWidth={mobile}
              error={inputs.error && !inputs.income}
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
            />
          </Question>

          <Question>
            <label component="industry">
              5. What industry do you work in? (Optional)
            </label>
            <Select
              variant="outlined"
              name="industry"
              className={classes.select}
              value={inputs.industry}
              onChange={onChange}
            >
              {questionValues.industry.map((answer) => (
                <MenuItem value={answer}>{answer}</MenuItem>
              ))}
            </Select>
          </Question>
          {inputs.error ? <Error>{inputs.error}</Error> : <></>}
          <Button
            type="submit"
            className={
              inputs.housing &&
              inputs.weather &&
              inputs.location &&
              inputs.income
                ? ""
                : "disabled"
            }
          >
            Find A City
          </Button>
        </Form>
      </ReverseUserFlowBody>
    </ReverseUserFlowWrapper>
  );
}
