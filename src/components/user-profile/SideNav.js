import React from 'react'
import {NavLink}  from "react-router-dom";
import Heart from '../map-components/icons/filled_heart.svg'
import User from './icons/user.png'

const SideNav = () => {


    return(
        <div className='side-nav'>
            <div className='profile-tabs'>
                <nav className='nav-items'>
                    <NavLink activeClassName='selected' to='/profile/'><img src={User} alt='profile-icon' />Profile</NavLink>
                    {/* <NavLink activeClassName='selected' to='/profile/preferences'>Preferences</NavLink> */}
                    <NavLink activeClassName='selected' to='/profile/favorites'><img src={Heart} alt='favorites-icon'/>Favorites</NavLink>        
                </nav>
            </div>
        </div>
    )
}

export default SideNav;