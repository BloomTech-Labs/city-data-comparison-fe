import React from "react";
import {Route} from "react-router-dom";
import Industry from "../graphs/economics/industries";
import Commute from "../graphs/economics/commute";
import FoodStamp from "../graphs/economics/FoodStamp";

const Jobs = ({selected}) => {
    return (
        <div>
            <h1>Job Market Breakdown:</h1>

            {selected.map(item => <h3 key={item._id}>{item.name.replace(" city" , "")}</h3>)}
            
            <Route path="/map/jobs/employment" component={Industry}/>
            <Route path="/map/jobs/salary" component={Commute}/>
            <Route path="/map/jobs/sectors" component={FoodStamp}/> 
        </div>
    );
  };
  export default Jobs;