import React, { useState } from "react";
import Housing from "./HousingBudget";
import Income from "./Income";
import Location from "./Location";
import Industry from "./Industry";
import Weather from "./Weather";

import { Radio } from "antd";

import Card from "../../../card/Card.js";

export default function FlowContainer() {
  const [inputs, setInputs] = useState({
    housing: "",
    industry: "",
    weather: "",
    location: "",
    income: "",
  });

  const [value, setValue] = useState(null);

  const onChange = (e) => {
    // console.log("radio checked", e.target.value);
    setInputs({
      ...inputs,
      housing: e.target.value,
    });
  };

  console.log("CONTAINER INPUTS", inputs);
  // console.log("VALUE", value);
  return (
    <div className='dashboard-modal-container'>
      <h1>Take this short quiz to be recommended three cities that will best suit you!</h1>
      <Location inputs={inputs} setInputs={setInputs} />
      
      <Income inputs={inputs} setInputs={setInputs} />
      
      <Housing inputs={inputs} setInputs={setInputs} />
      
      <Weather inputs={inputs} setInputs={setInputs} />
      

    </div>
  );
}
