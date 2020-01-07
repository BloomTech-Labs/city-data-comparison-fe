import React from "react";
import {NavLink, Route}  from "react-router-dom";

import Housing from "./Housing";
import Jobs from "./Jobs";
import Culture from "./Culture";
import MapSearch from "./MapSearch";
import CostNav from "./subnavs/CostNav";
import JobsNav from "./subnavs/JobsNav";
import SafetyNav from "./subnavs/SafetyNav";

import deleteIcon from "./icons/close_red.png";

const DataDisplay = ({search, selected, toggleSelected, onSearch, setSearch, cityMarkers, viewport, setViewport}) => {

    const toggleVisibility = city => {
        console.log("toggling visibility of ", city.city)
    }

    return (
        <div className="data-browser">
            <nav className="data-nav">
                <div className="data-nav-top">
                    <MapSearch 
                        setSearch={setSearch}
                        onSearch={onSearch} 
                        cityMarkers={cityMarkers} 
                        search={search}
                        viewport={viewport}
                        setViewport={setViewport}   
                    />
                    <Route path="/map/housing" component={CostNav} />
                    <Route path="/map/jobs" component={JobsNav} />
                    <Route path="/map/culture" component={SafetyNav} />
                </div>
                <ul>
                    {selected.map(item => <li key={item._id} onClick={ _ => toggleVisibility(item)}>{item.city}, {item.state_id} 
                        <span onClick={ _ => toggleSelected(item)}>
                            <img className="delete-icon" src={deleteIcon} />
                        </span>
                    </li>)}
                </ul>
            </nav>
            <div className="data-by-category">
                <nav className="data-subnav">
                    <NavLink activeClassName="selected" to="/map/housing">Housing</NavLink>
                    <NavLink activeClassName="selected" to="/map/jobs">Job Market</NavLink>
                    <NavLink activeClassName="selected" to="/map/culture">Culture</NavLink>               
                </nav>
                <Route path="/map/housing" render={props => <Housing selected={selected} /> } />
                <Route path="/map/jobs" render={props => <Jobs selected={selected} /> } />
                <Route path="/map/culture" render={props => <Culture selected={selected} /> } />
            </div>
        </div>
    );
  };
  export default DataDisplay;