import React from "react";
import {NavLink, Route}  from "react-router-dom";
import Cost from "./Cost";
import Jobs from "./Jobs";
import Safety from "./Safety";
import MapSearch from "./MapSearch";
import CostNav from "./subnavs/CostNav"
import JobsNav from "./subnavs/JobsNav"
import SafetyNav from "./subnavs/SafetyNav"

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
                    <Route path="/map/cost" component={CostNav} />
                    <Route path="/map/jobs" component={JobsNav} />
                    <Route path="/map/safety" component={SafetyNav} />
                </div>
                <ul>
                    {selected.map(item => <li onClick={ _ => toggleVisibility(item)}>{item.city}, {item.state_id} <span onClick={ _ => toggleSelected(item)}>X</span></li>)}
                </ul>
            </nav>
            <div className="data-by-category">
                <nav className="data-subnav">
                    <NavLink activeClassName="selected" to="/map/cost">Cost of Living</NavLink>
                    <NavLink activeClassName="selected" to="/map/jobs">Job Market</NavLink>
                    <NavLink activeClassName="selected" to="/map/safety">Safety</NavLink>               
                </nav>
                <Route path="/map/cost" render={props => <Cost selected={selected} /> } />
                <Route path="/map/jobs" render={props => <Jobs selected={selected} /> } />
                <Route path="/map/safety" render={props => <Safety selected={selected} /> } />
            </div>
        </div>
    );
  };
  export default DataDisplay;