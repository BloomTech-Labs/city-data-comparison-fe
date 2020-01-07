import React from "react";
import {NavLink} from"react-router-dom";

const CostNav = _ => {

    return (
        <>
            <NavLink activeClassName="selected" to="/map/housing/housing">Housing</NavLink>
            <NavLink activeClassName="selected" to="/map/housing/grocery">Grocery</NavLink>
            <NavLink activeClassName="selected" to="/map/housing/dining">Dining</NavLink>
            <NavLink activeClassName="selected" to="/map/housing/transportation">Transportation</NavLink>
        </>
    )
}
export default CostNav;