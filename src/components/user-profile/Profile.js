import React, {useState, useEffect, useContext} from 'react';
import {NavLink, Route}  from "react-router-dom";
import axios from 'axios';
import { CityContext } from "../../contexts/CityContext"

import './profile.scss'

import Favorites from './Favorites'
import Preferences from './Preferences'
import Settings from './Settings'
import ProfileCard from './ProfileCard'

function Profile({selected}) {
    //state for logged in user
    
    const {user, setUser} = useContext(CityContext);
    console.log('Current user state',user)

    
    
    return (
        <div>
            <div>
                <h1>Profile</h1>
            </div>
            <div className='side-nav'>
                <div className='profile-tabs'>
                    <nav className='nav-items'>
                        <NavLink activeClassName='selected' to='/profile'>Profile</NavLink>
                        <NavLink activeClassName='selected' to='/profile/preferences'>Preferences</NavLink>
                        <NavLink activeClassName='selected' to='/profile/favorites'>Favorites</NavLink>        
                        <NavLink activeClassName='selected' to='/profile/settings'>Settings</NavLink>
                    </nav>
                </div>
                    <Route exact path='/profile/' render={_ => <ProfileCard selected={selected} />} />
                    <Route path='/profile/favorites' render={_ => <Favorites selected={selected} />} />
                    <Route path='/profile/preferences' render={_ => <Preferences selected={selected} />} />
                    <Route path='/profile/settings' render={_ => <Settings selected={selected} />} />
            </div>
        </div>
    )
}

export default Profile;