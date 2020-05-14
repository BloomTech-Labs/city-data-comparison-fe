import React, { useState, useRef } from "react";

import { Radio } from "antd";

export default function HousingBudget(props) {
  const [budget, setBudget] = useState("");

  const handleChange = (e) => {
    setBudget(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    props.setInputs({
      ...props.inputs,
      housing: budget,
    });
  };

  const onChange = (e) => {
    // console.log("radio checked", e.target.value);
    props.setInputs({
      ...props.inputs,
      housing: e.target.value,
    });
  };

  return (
    <div>
      <h2>What is your monthly Housing Budget?</h2>
      <Radio.Group defaultValue="low" buttonStyle="solid" onChange={onChange}>
        <Radio.Button value="low" style={{ width: "265px" }}>
          Low ($0 - $599)
        </Radio.Button>
        <Radio.Button value="lower-middle" style={{ width: "265px" }}>
          Lower-Middle ($600 - $1199)
        </Radio.Button>
        <Radio.Button value="middle" style={{ width: "265px" }}>
          Middle ($1200 - $1799)
        </Radio.Button>
        <Radio.Button value="upper-middle" style={{ width: "265px" }}>
          Upper-Middle ($1800 - $2399)
        </Radio.Button>
        <Radio.Button value="high" style={{ width: "265px" }}>
          High ($2400 - $3000)
        </Radio.Button>
      </Radio.Group>
    </div>
  );
}
