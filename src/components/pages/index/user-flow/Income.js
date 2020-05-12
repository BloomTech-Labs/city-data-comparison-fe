import React, {useState} from "react";

export default function Income(props) {
  const [income, setIncome] = useState("");

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
  return (
    <div>
      <h2>What is your expected income?</h2>
      <input
        type="number"
        name="income"
        value={income}
        onChange={handleChange}
      />
      <button onClick={handleClick}>save</button>
    </div>
  );
}
