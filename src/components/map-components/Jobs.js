import React from "react";
import {Route} from "react-router-dom";
import Industry from "../graphs/economics/industries";
import Commute from "../graphs/economics/commute";
import BarGraph from "../graphs/economics/HouseIncome_BarGraph";


const Jobs = ({selected}) => {
    return (
        <div>
            <h1>Job Market Breakdown:</h1>
            <Commute edData={selected} />
            <Industry edData={selected} />
            <BarGraph edData={selected} />
        </div>
    );
  };
  export default Jobs;