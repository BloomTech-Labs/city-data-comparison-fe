import React, {useState} from "react";

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

  return (
    <div>
      <h2>Do you prefer small towns, average cities, or metropolis'?</h2>
      <input
        type="text"
        name="location"
        value={location}
        onChange={handleChange}
      />
      <button onClick={handleClick}>save</button>
    </div>
  );
}
