import React, { useContext } from 'react';
import { Route }  from "react-router-dom";

import './profile.scss'

import Footer from '../navigation/Footer'
import Favorites from './Favorites'
import Preferences from './Preferences'
import Settings from './Settings'
import ProfileCard from './ProfileCard'
import SideNav from './SideNav'

function Profile({selected}) {

    return (
        <div className='profile-body'>
        <div className='profile-page'>
            
            {/* Decided against using a side nav, everything is shown on profile now */}
            {/* <SideNav /> */}
            <div className='profile-slides'>
            {/* <Route path='/profile/' render={_ => <ProfileCard selected={selected} />} />
            <Route path='/profile/favorites' render={_ => <Favorites selected={selected} />} />
            <Route path='/profile/preferences' render={_ => <Preferences selected={selected} />} />
            
            <Route path='/profile/settings' render={_ => <Settings selected={selected} />} /> */}
            <ProfileCard />
            <Favorites />
            </div>  
        </div>
        <Footer />
        </div>
    )
}

export default Profile;