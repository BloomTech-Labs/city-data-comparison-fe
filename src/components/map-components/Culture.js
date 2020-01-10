import React from "react";
import {Route} from "react-router-dom";
import BarGraph from "../graphs/culture/AgeDistrubution";
import Ethnicity from "../graphs/culture/ethnicity_graph";
import Population from "../graphs/culture/PopulationGrowth";

const Culture = ({selected}) => {
    return (
        <div>
            <h1>City Cultural Statistics:</h1>

            {selected.map(item => <h3 key={item._id}>{item.name.replace(" city" , "")}</h3>)}

            <Route path="/map/culture/crime" component={() => <BarGraph selected = {selected} />} />
            <Route path="/map/culture/auto" component={() => <Ethnicity selected = {selected} />} />
            <Route path="/map/culture/airquality" component={() => <Population selected = {selected} />} />

        </div>
    );
  };
  export default Culture;