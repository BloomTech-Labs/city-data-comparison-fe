import React from "react";
import {NavLink} from"react-router-dom";

const SafetyNav = _ => {

    return (
        <>
            <NavLink activeClassName="selected" to="/map/safety/crime">Crime/Capita</NavLink>
            <NavLink activeClassName="selected" to="/map/safety/auto">Automobile Accidents/Capita</NavLink>
            <NavLink activeClassName="selected" to="/map/safety/airquality">Air Quality</NavLink>
        </>
    )
}
export default SafetyNav;