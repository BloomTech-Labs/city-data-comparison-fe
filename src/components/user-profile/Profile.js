import React, {useState, useEffect, useContext} from 'react';
import {NavLink, Route}  from "react-router-dom";
import axios from 'axios';
import { CityContext } from "../../contexts/CityContext"

import './profile.scss'

import Favorites from './Favorites'
import Preferences from './Preferences'
import Settings from './Settings'

function Profile({selected}) {
    //state for logged in user
    
    const {user, setUser} = useContext(CityContext);
    console.log('Current user state',user)

    // Edit state toggle

    const {edit, setEdit} = useState({status:'open'})

    const toggleMenu = () => {
        if (edit.status === 'closed') {
            setEdit({...edit, status:'open'}) 
        } else if (edit.status === 'open') {
            setEdit({...edit, status:'closed'})
        }
    }
    

    //User information axios call
    useEffect(() => {
        axios
            .get('')
            .then(res => {
                console.log('Response from user call',res)
                setUser(res.data)
            })
            .catch(err => {
                console.error('Unable to get user information', err);
            });
    }, []);





    return (
        <div>
            <h1>Profile</h1>

            <div className='side-nav'>
                <div className='profile-tabs'>
                    <nav className='nav-items'>
                        <NavLink activeClassName='selected' to='/profile'>Profile</NavLink>
                        <NavLink activeClassName='selected' to='/profile/favorites'>Favorites</NavLink>
                        <NavLink activeClassName='selected' to='/profile/preferences'>Preferences</NavLink>
                        <NavLink activeClassName='selected' to='/profile/settings'>Settings</NavLink>
                    </nav>
                </div>
                    <Route path='/profile/favorites' render={_ => <Favorites selected={selected} />} />
                    <Route path='/profile/preferences' render={_ => <Preferences selected={selected} />} />
                    <Route path='/profile/settings' render={_ => <Settings selected={selected} />} />
            </div>
        </div>
    )
}

export default Profile;