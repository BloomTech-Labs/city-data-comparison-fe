import React from "react";
import {Route} from "react-router-dom"
import BarGraph from "../graphs/BarGraph"
import LineGraph from "../graphs/LineGraph"
import PieGraph from "../graphs/PieGraph"

const Jobs = ({selected}) => {
    return (
        <div>
            <h1>Job Market Breakdown:</h1>

            {selected.map(item => <h3 key={item.city}>{item.city}, {item.state_id}</h3>)}
            
            <Route path="/map/jobs/employment" component={BarGraph}/>
            <Route path="/map/jobs/salary" component={LineGraph}/>
            <Route path="/map/jobs/sectors" component={PieGraph}/> 
        </div>
    );
  };
  export default Jobs;