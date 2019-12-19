import React from "react";
import {NavLink, Route} from "react-router-dom"
import BarGraph from "../graphs/BarGraph"
import LineGraph from "../graphs/LineGraph"
import PieGraph from "../graphs/PieGraph"

const Safety = ({selected}) => {
    return (
        <div>
            <h1>Job Market Breakdown:</h1>
            {selected.map(item => <h3>{item.city}, {item.state_id}</h3>)}

            <nav className="data-subnav">
                <NavLink activeClassName="selected" to="/map/safety/crime">Crime/Capita</NavLink>
                <NavLink activeClassName="selected" to="/map/safety/auto">Automobile Accidents/Capita</NavLink>
                <NavLink activeClassName="selected" to="/map/safety/airquality">Air Quality</NavLink>
               
            </nav>

            <Route path="/map/safety/crime" component={BarGraph}/>
            <Route path="/map/safety/auto" component={LineGraph}/>
            <Route path="/map/safety/airquality" component={PieGraph}/>


            
        </div>
    );
  };
  export default Safety;