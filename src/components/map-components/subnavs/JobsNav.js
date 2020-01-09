import React from "react";
import {NavLink} from"react-router-dom";

const CostNav = _ => {

    return (
        <>
            <NavLink activeClassName="selected" to="/map/jobs/jobs">Jobs</NavLink>
            <NavLink activeClassName="selected" to="/map/jobs/standards">Salary/Benefit Standards</NavLink>
            <NavLink activeClassName="selected" to="/map/jobs/commute">Commute</NavLink>
        </>
    )
}
export default CostNav;