import React, {useState} from "react";
import {Link, Route}  from "react-router-dom";
import Cost from "./Cost";
import Jobs from "./Jobs";
import Safety from "./Safety";
import MapSearch from "./MapSearch";

const DataDisplay = ({selected, toggleSelected, onSearch, setSearch}) => {
    return (
        <div className="data-browser">
            <nav className="data-nav">
                <MapSearch 
                    setSearch={setSearch}
                    onSearch={onSearch} />
                
                <Link to="/map/cost">Cost of Living</Link>
                <Link to="/map/jobs">Job Market</Link>
                <Link to="/map/safety">Safety</Link>
                <ul>
                    {selected.map(item => <li>{item.city}, {item.state_id} <button onClick={ _ => toggleSelected(item)}>X</button></li>)}

                </ul>
            </nav>
            <div className="data-by-category">
                <Route path="/map/cost" render={props => <Cost selected={selected} /> } />
                <Route path="/map/jobs" component={Jobs} />
                <Route path="/map/safety" component={Safety} />
            </div>
        </div>
    );
  };
  export default DataDisplay;