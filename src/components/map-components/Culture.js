import React from "react";
import {Route} from "react-router-dom";

import BarGraph from "../graphs/culture/AgeDistrubution";
import EthnicityGraph from "../graphs/culture/EthnicityGraph";
import Population from "../graphs/culture/PopulationGrowth";

import EducationGraph from "../graphs/EducationGraph";

const Culture = ({selected}) => {



    return (
        <div>
            <h1>City Cultural Statistics:</h1>     

            <Route path="/map/culture/crime" component={() => <BarGraph selected = {selected} />} />
            <Route path="/map/culture/demographics" render={() => <EthnicityGraph ethData = {selected} />} />
            <Route path="/map/culture/lifestyle" component={() => <Population selected = {selected} />} />
            <Route path="/map/culture/education" render={ _ => <EducationGraph 
                edData={selected} 
            />} />

        </div>
    );
  };
  export default Culture;