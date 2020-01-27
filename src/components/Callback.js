import React, {useContext} from 'react';
import queryString from 'query-string' 
import { Redirect } from 'react-router-dom';

const Callback = (props) => {

    const values = queryString.parse(props.location.search)
    localStorage.setItem('jwt', values.jwt);
    localStorage.setItem('user', values.user);
    return (
        <>
            {Redirect("/")}
        </>
    )
}

export default Callback;