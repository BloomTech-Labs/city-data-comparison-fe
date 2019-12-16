import React from "react";

const Cost = ({selected}) => {
    return (
        <div>
            <h1>Costs of living analysis:</h1>
            {selected.map(item => <h3>{item.city}, {item.state_id}</h3>)}
            
        </div>
    );
  };
  export default Cost;