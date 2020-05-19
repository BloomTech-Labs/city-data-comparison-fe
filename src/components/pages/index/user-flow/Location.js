import React, { useState } from "react";

export default function Location(props) {
  const [location, setLocation] = useState("");

  const myStyle = {
    width: "265px",
  };

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
    <div className="location-div">
      <h2>wut???</h2>
    </div>
  );
}
