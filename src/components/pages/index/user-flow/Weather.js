import React, { useState } from "react";

import { Radio } from "antd";

export default function Weather(props) {
  const [weather, setWeather] = useState("");

  const handleChange = (e) => {
    setWeather(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    props.setInputs({
      ...props.inputs,
      weather: weather,
    });
  };

  const onChange = (e) => {
    // console.log("radio checked", e.target.value);
    props.setInputs({
      ...props.inputs,
      weather: e.target.value,
    });
  };

  return (
    <div>
      <h2>What temperature do you prefer living in?</h2>
      <Radio.Group defaultValue="small" buttonStyle="solid" onChange={onChange}>
        <Radio.Button value="cold" style={{ width: "265px" }}>
          Cold (0 - 49°F)
        </Radio.Button>
        <Radio.Button value="cool" style={{ width: "265px" }}>
          Cool (50 - 69°F)
        </Radio.Button>
        <Radio.Button value="warm" style={{ width: "265px" }}>
          Warm (70 - 80°F)
        </Radio.Button>
      </Radio.Group>
    </div>
  );
}
