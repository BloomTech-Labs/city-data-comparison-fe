import React from "react";
import {NavLink} from"react-router-dom";

const CostNav = _ => {

    return (
        <>
            <NavLink activeClassName="selected" to="/map/cost/housing">Housing</NavLink>
            <NavLink activeClassName="selected" to="/map/cost/grocery">Grocery</NavLink>
            <NavLink activeClassName="selected" to="/map/cost/dining">Dining</NavLink>
            <NavLink activeClassName="selected" to="/map/cost/transportation">Transportation</NavLink>
        </>
    )
}
export default CostNav;