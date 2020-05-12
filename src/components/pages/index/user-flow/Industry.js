import React, { useState } from "react";

export default function Industry(props) {
  const [jobs, setJobs] = useState("");

  const handleChange = (e) => {
    setJobs(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    props.setInputs({
      ...props.inputs,
      industry: jobs,
    });
  };

  return (
    <div>
      <h2>What type of jobs are you looking for?</h2>
      <input type="text" name="jobs" value={jobs} onChange={handleChange} />
      <button onClick={handleClick}>save</button>
    </div>
  );
}
