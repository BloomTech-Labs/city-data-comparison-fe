import React, {useState, useEffect, useContext} from 'react'
import axios from 'axios'
import { CityContext } from "../../contexts/CityContext"


const ProfileCard = ()=> {

    //state for logged in user
    
    const {user, setUser} = useContext(CityContext);
    console.log('Current user state',user)

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
            <h2>Profile Page</h2>
        </div>
    )
}

export default ProfileCard;