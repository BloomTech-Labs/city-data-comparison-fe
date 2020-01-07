import React from "react";
import {NavLink} from"react-router-dom";

const SafetyNav = _ => {

    return (
        <>
            <NavLink activeClassName="selected" to="/map/culture/crime">Crime/Capita</NavLink>
            <NavLink activeClassName="selected" to="/map/culture/auto">Automobile Accidents/Capita</NavLink>
            <NavLink activeClassName="selected" to="/map/culture/airquality">Air Quality</NavLink>
        </>
    )
}
export default SafetyNav;