import React from "react";
import {Route} from "react-router-dom";

import EthnicityGraph from "../graphs/culture/EthnicityGraph";
import Population from "../graphs/culture/PopulationGraph";
import EducationGraph from "../graphs/culture/EducationGraph";

const Culture = ({selected}) => {



    return (
        <div>
            <h1>Cultural Statistics:</h1>     

            <EthnicityGraph ethData = {selected} />
            <Population selected = {selected} />
            <EducationGraph edData={selected} />
        </div>
    );
  };
  export default Culture;