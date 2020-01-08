import React from "react";
import {NavLink} from"react-router-dom";

const SafetyNav = _ => {

    return (
        <>
            <NavLink activeClassName="selected" to="/map/culture/demographics">Demographyics</NavLink>
            <NavLink activeClassName="selected" to="/map/culture/lifestyle">Lifestyle</NavLink>
            <NavLink activeClassName="selected" to="/map/culture/education">Education</NavLink>
        </>
    )
}
export default SafetyNav;