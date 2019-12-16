import React, {useState} from "react";
import {Link, Route}  from "react-router-dom";
import Cost from "./Cost";
import Jobs from "./Jobs";
import Safety from "./Safety";

const DataDisplay = (props) => {
    return (
        <div className="data-browser">
            <nav className="data-nav">
                <input
                    name="search"
                    placeholder="Search" />
               <Link to="/map/cost">Cost of Living</Link>
               <Link to="/map/jobs">Job Market</Link>
               <Link to="/map/safety">Safety</Link>
            </nav>
            <div className="data-by-category">
                <Route path="/map/cost" component={Cost} />
                <Route path="/map/jobs" component={Jobs} />
                <Route path="/map/safety" component={Safety} />
            </div>
        </div>
    );
  };
  export default DataDisplay;