import React from "react";
import {NavLink} from"react-router-dom";

const CostNav = _ => {

    return (
        <>
            <NavLink activeClassName="selected" to="/map/jobs/employment">Employment</NavLink>
            <NavLink activeClassName="selected" to="/map/jobs/salary">Average Salary</NavLink>
            <NavLink activeClassName="selected" to="/map/jobs/sectors">Active Sectors</NavLink>
        </>
    )
}
export default CostNav;