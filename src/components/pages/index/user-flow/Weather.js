import React, { useState } from "react";

export default function Weather(props) {
  const [weather, setWeather] = useState("");

  const myStyle = {
    width: "265px"
  }

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
      <h2>What is your preferred climate?</h2>

          Cold (0 - 49°F)

          Cool (50 - 69°F)

          Warm (70 - 80°F)

    </div>
  );
}
