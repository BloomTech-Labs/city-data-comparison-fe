import React, {useState} from "react";

import { Radio } from "antd";

export default function Income(props) {
  const [income, setIncome] = useState("");

  const handleChange = (e) => {
    setIncome(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    props.setInputs({
      ...props.inputs,
      income: income,
    });
  };

  const onChange = (e) => {
    // console.log("radio checked", e.target.value);
    props.setInputs({
      ...props.inputs,
      income: e.target.value,
    });
  };

  return (
    <div>
      <h2>What is your expected monthly income?</h2>
      <Radio.Group defaultValue="low" buttonStyle="solid" onChange={onChange}>
        <Radio.Button value="low" style={{ width: "265px" }}>
          Low ($0 - $31,000)
        </Radio.Button>
        <Radio.Button value="lower-middle" style={{ width: "265px" }}>
          Lower-Middle ($31,001 - $49,999)
        </Radio.Button>
        <Radio.Button value="middle" style={{ width: "265px" }}>
          Middle ($50,000 - $99,999)
        </Radio.Button>
        <Radio.Button value="upper-middle" style={{ width: "265px" }}>
          Upper-Middle ($100000 - $349,999)
        </Radio.Button>
        <Radio.Button value="high" style={{ width: "265px" }}>
          High ($350,000 - $723,000)
        </Radio.Button>
      </Radio.Group>
    </div>
  );
}
