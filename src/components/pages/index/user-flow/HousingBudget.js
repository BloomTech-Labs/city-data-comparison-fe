import React, { useState, useRef } from "react";

export default function HousingBudget(props) {
  const [budget, setBudget] = useState("");

  const myStyle = {
    width: "265px"
  }

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
      <h2>What is your monthly Housing Budget?</h2>
  
          Low ($0 - $599)

          Lower-Middle ($600 - $1199)
  
          Middle ($1200 - $1799)

          Upper-Middle ($1800 - $2399)

          High ($2400 - $3000)
   
    </div>
  );
}
