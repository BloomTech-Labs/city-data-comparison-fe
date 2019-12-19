import React, {useState, useEffect} from 'react'
import axios from 'axios'

import 'profile.scss'

function Profile() {
    //state for logged in user
    const [user, setUser] = useState();
    console.log('Current user state',user)
    //state for saved cities for specific user
    const [savedCities, setSavedCities] = useState([]);
    console.log('Saved city state',savedCities)
    

    //User information axios call
    useEffect(() => {
        axios
            .get('')
            .then(res => {
                console.log('Resonse from user call',res)
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
                console.log('Response from cities call',res)
                setSavedCities(res.data)
            })
            .catch(err => {
                console.error('Unable to get saved cities list', err);
            })
    })


    return (
        <div>

        </div>
    )
}

export default Profile;