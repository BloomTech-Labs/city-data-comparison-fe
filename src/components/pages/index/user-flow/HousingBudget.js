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
      <h2>What is your Housing Budget?</h2>
      <Radio.Group defaultValue="low" buttonStyle="solid" onChange={onChange}>
        <Radio.Button value="low" style={{ width: "250px" }}>
          Low($100-$500)
        </Radio.Button>
        <Radio.Button value="low-middle" style={{ width: "250px" }}>
          Low-Middle($1000-$1500)
        </Radio.Button>
        <Radio.Button value="middle" style={{ width: "250px" }}>
          Middle($10000-$50000)
        </Radio.Button>
        <Radio.Button value="upper-middle" style={{ width: "250px" }}>
          Upper-Middle($100000-$500000)
        </Radio.Button>
        <Radio.Button value="high" style={{ width: "250px" }}>
          High($1000000-$5000000)
        </Radio.Button>
      </Radio.Group>
    </div>
  );
}
