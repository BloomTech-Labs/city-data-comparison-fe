import React, {useEffect, useState, useRef, useCallback} from 'react'; 
import axios from 'axios'; 

//stylesheet
import './styles/google.scss'
//assets
import google from '../../../assets/icons/google.svg'; 

const Google = props => {
    const [isLoggingIn, setIsLoggingIn] = useState(false); 
    const isMounted = useRef(true); 

    useEffect(() => {
        return () => {
            isMounted.current = false; 
        }
    })
    const login = useCallback(async () => {
        if (isLoggingIn) return;
        setIsLoggingIn(true); 
        axios
            .get('/localhost:5000/api/auth/login/google')
            .then(res => console.log(res))
            .catch(error => console.log(error))

            if (isMounted.current)
            setIsLoggingIn(false)

    }, [isLoggingIn])
    return (
        <div className='google-button' onClick={login}>
            <img className="google-icon" src={google} alt="google icon"/>
            <p className="google-name">{props.action} with Google</p>
        </div>
    )
}

export default Google;