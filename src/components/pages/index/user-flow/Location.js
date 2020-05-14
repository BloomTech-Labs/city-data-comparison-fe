import React, { useState } from "react";

import { Radio } from "antd";


export default function Location(props) {
  const [location, setLocation] = useState("");

  const myStyle = {
    width: "265px"
  }

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
    <div className='location-div'>

      <h2>What size city do you want to reside in?</h2>
      <Radio.Group defaultValue="small" buttonStyle="solid" onChange={onChange}>
        <Radio.Button value="village" style={myStyle}>
          Village (0 - 999)
        </Radio.Button>
        <Radio.Button value="town" style={myStyle}>
          Town (1000 - 10000)
        </Radio.Button>
        <Radio.Button value="large-town" style={myStyle}>
          Large Town (10,001 - 100,000)
        </Radio.Button>
        <Radio.Button value="medium-city" style={myStyle}>
          Medium City (100,001 - 300,000)
        </Radio.Button>
        <Radio.Button value="large-city" style={myStyle}>
          Large City (300,001 - 999,999)
        </Radio.Button>
        <Radio.Button value="metropolis" style={myStyle}>
          Metropolis (1,000,000 - 3,000,000)
        </Radio.Button>
        <Radio.Button value="conurbation" style={myStyle}>
          Conurbation (3,000,001 - 10,000,000)
        </Radio.Button>
      </Radio.Group>
    </div>
  );
}
