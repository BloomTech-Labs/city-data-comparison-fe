import React, { useState } from "react";

import { Radio } from "antd";


export default function Location(props) {
  const [location, setLocation] = useState("");

  const handleChange = (e) => {
    setLocation(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    props.setInputs({
      ...props.inputs,
      location: location,
    });
  };

  const onChange = (e) => {
    // console.log("radio checked", e.target.value);
    props.setInputs({
      ...props.inputs,
      location: e.target.value,
    });
  };

  return (
    <div>
      Small Town, Medium City, Large City
      <h2>What size city do you want to reside in?</h2>
      <Radio.Group defaultValue="small" buttonStyle="solid" onChange={onChange}>
        <Radio.Button value="small" style={{ width: "250px" }}>
          Small Town
        </Radio.Button>
        <Radio.Button value="medium" style={{ width: "250px" }}>
          Medium City
        </Radio.Button>
        <Radio.Button value="large" style={{ width: "250px" }}>
          Large City
        </Radio.Button>
      </Radio.Group>
    </div>
  );
}
