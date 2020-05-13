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
    <div>
      <h1>HI</h1>

      <Housing inputs={inputs} setInputs={setInputs} />
     
      <Location inputs={inputs} setInputs={setInputs} />

    </div>
  );
}
