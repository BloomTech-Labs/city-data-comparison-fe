import React, {useContext} from 'react';
import queryString from 'query-string' 
import { Redirect } from 'react-router-dom';
import {UserContext} from "../contexts/UserContext"

const Callback = (props) => {
    const {setUser} = useContext(UserContext)
    const values = queryString.parse(props.location.search)
    console.log(values, "values")
    localStorage.setItem('jwt', values.jwt);
    setUser(JSON.parse(values.user));
    return (
        <>
            {Redirect("/")}
        </>
    )
}


export default Callback;