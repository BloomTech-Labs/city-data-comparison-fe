import React, {useState} from "react";

export default function Income(props) {
  const [income, setIncome] = useState("");

  const myStyle = {
    width: "265px"
  }

  const handleChange = (e) => {
    setIncome(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    props.setInputs({
      ...props.inputs,
      income: income,
    });
  };

  const onChange = (e) => {
    // console.log("radio checked", e.target.value);
    props.setInputs({
      ...props.inputs,
      income: e.target.value,
    });
  };

  return (
    <div>
      <h2>What is your expected yearly income?</h2>

          Low ($0 - $31,000)
 
          Lower-Middle ($31,001 - $49,999)

          Middle ($50,000 - $99,999)

          Upper-Middle ($100000 - $349,999)

          High ($350,000 - $723,000)

    </div>
  );
}
