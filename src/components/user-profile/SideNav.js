import React from 'react'
import {NavLink}  from "react-router-dom";


const SideNav = () => {


    return(
        <div className='side-nav'>
            <div className='profile-tabs'>
                <nav className='nav-items'>
                    <NavLink activeClassName='selected' to='/profile/'>Profile</NavLink>
                    <NavLink activeClassName='selected' to='/profile/preferences'>Preferences</NavLink>
                    <NavLink activeClassName='selected' to='/profile/favorites'>Favorites</NavLink>        
                </nav>
            </div>
        </div>
    )
}

export default SideNav;