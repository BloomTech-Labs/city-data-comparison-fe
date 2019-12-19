import React from "react";
import {Route} from "react-router-dom"
import BarGraph from "../graphs/BarGraph"
import LineGraph from "../graphs/LineGraph"
import PieGraph from "../graphs/PieGraph"
import RadarGraph from "../graphs/RadarGraph"

const Cost = ({selected}) => {
    return (
        <div>
            <h1>Costs of living analysis:</h1>
            
            {selected.map(item => <h3>{item.city}, {item.state_id}</h3>)}

            <Route path="/map/cost/housing" component={BarGraph}/>
            <Route path="/map/cost/grocery" component={LineGraph}/>
            <Route path="/map/cost/dining" component={PieGraph}/>
            <Route path="/map/cost/transportation" component={RadarGraph}/>
        </div>
    );
  };
  export default Cost;