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

    //state for saved cities for specific user
    const [savedCitiesUrl, setSavedCitiesUrl] = useState();
    const [savedCities, setSavedCities] = useState([]);
    console.log('Saved cities url',savedCitiesUrl)
    console.log('Saved cities array state',savedCities)
    

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

    //Users saved cities axios call
    useEffect(() => {
        axios
            .get('')
            .then(res => {
                console.log('Response to get users saved cities urls',res)
                setSavedCitiesUrl(res.data)
                //Once savedCitiesUrl is set, this call will take that information and call our DS db for the acutal information for each city
                axios
                    .get(setSavedCitiesUrl)
                    .then(res => {
                        console.log('Response from getting array of all saved cities', res)
                        setSavedCities(res.data)
                    })
                    .catch(err => {
                        console.error('Error calling DS db', err)
                    })
            })
            .catch(err => {
                console.error('Unable to get saved cities list', err);
            })
    }, []);

    //delete saved city handler
    const handleDelete = e => {
        e.preventDefault();
        axios
            .delete(``)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.error('Error removing city', err);
            })
    };


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