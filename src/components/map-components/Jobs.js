import React from "react";
import {Route} from "react-router-dom";
import Industry from "../graphs/economics/industries";
import Commute from "../graphs/economics/commute";
import BarGraph from "../graphs/economics/HouseIncome_BarGraph";


const Jobs = ({selected}) => {
    return (
        <div>
            <h1>Job Market Breakdown:</h1>

            {selected.map(item => <h3 key={item._id}>{item.name.replace(" city" , "")}</h3>)}
            
            <Route path="/map/jobs/commute" render={ _ => <Commute edData={selected} />} />
            <Route path="/map/jobs/jobs" render={ _ => <Industry edData={selected} />} />
            <Route path="/map/jobs/standards"  render={ _ => <BarGraph edData={selected} />} />
        </div>
    );
  };
  export default Jobs;