import React from "react";
import {NavLink} from"react-router-dom";

const CostNav = _ => {

    return (
        <>
            <NavLink activeClassName="selected" to="/map/housing/costs">Housing Costs</NavLink>
            <NavLink activeClassName="selected" to="/map/housing/homeinfo">Home Info</NavLink>
            <NavLink activeClassName="selected" to="/map/housing/quality">Quality of Living</NavLink>
        </>
    )
}
export default CostNav;