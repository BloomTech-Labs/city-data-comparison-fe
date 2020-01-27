import React, {useContext} from 'react';
import queryString from 'query-string' 
import { Redirect } from 'react-router-dom';

import { UserContext } from '../contexts/UserContext';

const Callback = (props) => {

    const { user, setUser } = useContext(UserContext);

    const values = queryString.parse(props.location.search)
    localStorage.setItem('jwt', values.jwt);
    localStorage.setItem('user', values.user);
    setUser(values.user);
    return (
        <>
            {Redirect("/")}
        </>
    )
}

export default Callback;