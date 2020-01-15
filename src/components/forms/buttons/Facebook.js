import React, {useEffect, useState, useRef, useCallback} from 'react'; 
import axios from 'axios'; 

//stylesheet
import './styles/facebook.scss'
//assets
import facebook from '../../../assets/icons/white-facebook.svg'; 

const Facebook = props => {
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
            .get('/localhost:5000/api/auth/login/facebook')
            .then(res => console.log(res))
            .catch(error => console.log(error))

            if (isMounted.current)
            setIsLoggingIn(false)

    }, [isLoggingIn])

    return (
        <div className='facebook-button' onClick={login}>
            <img className="fb-icon" src={facebook} alt="facebook icon"/>
            <p className="facebook-name">{props.action} with Facebook</p>
        </div>
    )
}

export default Facebook; 