import React from "react";
import {NavLink} from"react-router-dom";

const SafetyNav = _ => {

    return (
        <>
            <NavLink activeClassName="selected" to="/map/culture/demographics">Demographics</NavLink>
            <NavLink activeClassName="selected" to="/map/culture/populationgrowth">Population Growth</NavLink>
            <NavLink activeClassName="selected" to="/map/culture/education">Education</NavLink>
        </>
    )
}
export default SafetyNav;