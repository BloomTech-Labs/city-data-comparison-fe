import React, {useState} from "react";
import {Link, NavLink, Route}  from "react-router-dom";
import Cost from "./Cost";
import Jobs from "./Jobs";
import Safety from "./Safety";


import MapSearch from "./MapSearch";

const DataDisplay = ({search, selected, toggleSelected, onSearch, setSearch, cityMarkers, viewport, setViewport}) => {
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
                    <NavLink activeClassName="selected" to="/map/cost">Cost of Living</NavLink>
                    <NavLink activeClassName="selected" to="/map/jobs">Job Market</NavLink>
                    <NavLink activeClassName="selected" to="/map/safety">Safety</NavLink>
                </div>
                <ul>
                    {selected.map(item => <li>{item.city}, {item.state_id} <span onClick={ _ => toggleSelected(item)}>X</span></li>)}

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