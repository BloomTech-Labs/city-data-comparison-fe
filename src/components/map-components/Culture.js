import React from "react";
import {Route} from "react-router-dom";
import BarGraph from "../graphs/BarGraph";
import LineGraph from "../graphs/LineGraph";
import PieGraph from "../graphs/PieGraph";
import EducationGraph from "../graphs/EducationGraph";

const Culture = ({selected}) => {



    return (
        <div>
            <h1>City Cultural Statistics:</h1>

            

            <Route path="/map/culture/demographics" component={BarGraph}/>
            <Route path="/map/culture/lifestyle" component={LineGraph}/>
            <Route path="/map/culture/education" render={ _ => <EducationGraph 
                edData={selected} />}/>

        </div>
    );
  };
  export default Culture;