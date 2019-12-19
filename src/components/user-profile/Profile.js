import React, {useState, useEffect} from 'react'
import axios from 'axios'

import 'profile.scss'

function Profile() {

    const [user, setUser] = useState();

    useEffect(() => {
        axios
            .get('')
            .then(res => {
                setUser(res.data)
            })
            .then(err => {
                console.error('Unable to get user information', err);
            });
    })


    return (
        <div>

        </div>
    )
}

export default Profile;