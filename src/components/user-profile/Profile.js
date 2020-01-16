import React, {useState, useEffect, useContext} from 'react';
import {NavLink, Route}  from "react-router-dom";
import axios from 'axios';
import { CityContext } from "../../contexts/CityContext"

import './profile.scss'

import Favorites from './Favorites'
import Preferences from './Preferences'
import Settings from './Settings'
import ProfileCard from './ProfileCard'
import SideNav from './SideNav'

function Profile({selected}) {
    //state for logged in user
    
    const {user, setUser} = useContext(CityContext);
    console.log('Current user state',user)

    
    
    return (
        <div className='profile-page'>
            <SideNav />
            <Route exact path='/profile/' render={_ => <ProfileCard selected={selected} />} />
            <Route path='/profile/favorites' render={_ => <Favorites selected={selected} />} />
            <Route path='/profile/preferences' render={_ => <Preferences selected={selected} />} />
            <Route path='/profile/settings' render={_ => <Settings selected={selected} />} />
        </div>
    )
}

export default Profile;