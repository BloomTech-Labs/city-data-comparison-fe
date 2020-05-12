import React, { useState, useRef } from "react";

export default function Housing(props) {
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

  return (
    <div>
      <h2>What is your Housing Budget?</h2>
      <input type="text" name="budget" value={budget} onChange={handleChange} />
      <button onClick={handleClick}>save</button>
    </div>
  );
}
