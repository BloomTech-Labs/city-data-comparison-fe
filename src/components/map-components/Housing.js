import React from "react";
import {Route} from "react-router-dom";
import BarGraph from "../graphs/HouseIncome_BarGraph";
import LineGraph from "../graphs/House_price";
import PieGraph from "../graphs/PieGraph";
import RadarGraph from "../graphs/RadarGraph";

const Housing = ({selected}) => {
    return (
        <div>
            <h1>Costs of living analysis:</h1>
            
            {selected.map(item => <h3 key={item._id}>{item.name.replace(" city" , "")}</h3>)}

            <Route path="/map/housing/housing" component={BarGraph}/>
            <Route path="/map/housing/grocery" component={LineGraph}/>
            <Route path="/map/housing/dining" component={PieGraph}/>
            <Route path="/map/housing/transportation" component={RadarGraph}/>
        </div>
    );
  };
  export default Housing;