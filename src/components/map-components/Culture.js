import React from "react";
import {Route} from "react-router-dom";
import BarGraph from "../graphs/housing/HouseIncome_BarGraph";
import LineGraph from "../graphs/LineGraph";
import PieGraph from "../graphs/PieGraph";

const Culture = ({selected}) => {
    return (
        <div>
            <h1>City Cultural Statistics:</h1>

            {selected.map(item => <h3 key={item._id}>{item.name.replace(" city" , "")}</h3>)}

            <Route path="/map/culture/crime" component={BarGraph}/>
            <Route path="/map/culture/auto" component={LineGraph}/>
            <Route path="/map/culture/airquality" component={PieGraph}/>

        </div>
    );
  };
  export default Culture;