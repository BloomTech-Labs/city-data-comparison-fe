import React from "react";
import {Route} from "react-router-dom";
import BarGraph from "../graphs/BarGraph";
import LineGraph from "../graphs/LineGraph";
import PieGraph from "../graphs/PieGraph";

const Culture = ({selected}) => {
    return (
        <div>
            <h1>City Cultural Statistics:</h1>

            {selected.map(item => <h3 key={item._id}>{item.name.replace(" city" , "")}</h3>)}

            <Route path="/map/culture/demographics" component={BarGraph}/>
            <Route path="/map/culture/lifestyle" component={LineGraph}/>
            <Route path="/map/culture/education" component={PieGraph}/>

        </div>
    );
  };
  export default Culture;