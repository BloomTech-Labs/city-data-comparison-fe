import React from "react";
import {NavLink} from"react-router-dom";

const DataNav = _ => {

    return (
        <>
            <a href="#home-price">Housing Costs</a>
            <NavLink activeClassName="selected" to="/map/housing/homeinfo">Home Info</NavLink>
            <NavLink activeClassName="selected" to="/map/housing/quality">Quality of Living</NavLink>
            <NavLink activeClassName="selected" to="/map/jobs/jobs">Jobs</NavLink>
            <NavLink activeClassName="selected" to="/map/jobs/standards">Salary/Benefit Standards</NavLink>
            <NavLink activeClassName="selected" to="/map/jobs/commute">Commute</NavLink>
            <NavLink activeClassName="selected" to="/map/culture/demographics">Demographics</NavLink>
            <NavLink activeClassName="selected" to="/map/culture/populationgrowth">Population Growth</NavLink>
            <NavLink activeClassName="selected" to="/map/culture/education">Education</NavLink>
        </>
    )
}
export default DataNav;