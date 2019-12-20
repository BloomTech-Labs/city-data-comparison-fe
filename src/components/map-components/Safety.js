import React from "react";
import {Route} from "react-router-dom"
import BarGraph from "../graphs/BarGraph"
import LineGraph from "../graphs/LineGraph"
import PieGraph from "../graphs/PieGraph"

const Safety = ({selected}) => {
    return (
        <div>
            <h1>City Safety Statistics:</h1>

            {selected.map(item => <h3>{item.city}, {item.state_id}</h3>)}

            <Route path="/map/safety/crime" component={BarGraph}/>
            <Route path="/map/safety/auto" component={LineGraph}/>
            <Route path="/map/safety/airquality" component={PieGraph}/>

        </div>
    );
  };
  export default Safety;