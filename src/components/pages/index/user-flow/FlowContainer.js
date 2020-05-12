import React, { useState } from "react";
import Housing from "./Housing";
import Income from "./Income";
import Location from "./Location";
import Industry from "./Industry";
import Weather from "./Weather";

export default function FlowContainer() {
  const [inputs, setInputs] = useState({
    housing: "",
    industry: "",
    weather: "",
    location: "",
    income: "",
  });
  console.log("CONTAINER INPUTS", inputs);
  return (
    <div>
      <h1>HI</h1>
      <Housing inputs={inputs} setInputs={setInputs} />
      <Income inputs={inputs} setInputs={setInputs} />
      <Location inputs={inputs} setInputs={setInputs} />
      <Industry inputs={inputs} setInputs={setInputs} />
      <Weather inputs={inputs} setInputs={setInputs} />
    </div>
  );
}
