import React, { useState } from "react";

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

      <h2>What is your preferred size of the city you would like to reside in?</h2>
  
          Village (0 - 999)
  
          Town (1000 - 10000)
 
          Large Town (10,001 - 100,000)

          Medium City (100,001 - 300,000)

          Large City (300,001 - 999,999)

          Metropolis (1,000,000 - 3,000,000)

          Conurbation (3,000,001 - 10,000,000)

    </div>
  );
}
