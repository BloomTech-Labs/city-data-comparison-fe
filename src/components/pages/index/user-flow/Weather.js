import React, {useState} from "react";

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

  return (
    <div>
      <h2>Do you prefer cold, warm or hot weather?</h2>
      <input
        type="text"
        name="weather"
        value={weather}
        onChange={handleChange}
      />
      <button onClick={handleClick}>save</button>
    </div>
  );
}
