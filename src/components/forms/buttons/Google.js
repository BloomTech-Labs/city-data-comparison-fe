import React, {useEffect, useState, useRef, useCallback} from 'react'; 
import axios from 'axios'; 

//stylesheet
import './styles/google.scss'
//assets
import google from '../../../assets/icons/google.svg'; 

const Google = props => {
    const [isLoggingIn, setIsLoggingIn] = useState(false); 

    useEffect(() => {
        
        const login = () => {
            axios
                .get("http://localhost:5000/api/auth/login/linkedin")
                .then(res => {
                    setIsLoggingIn(false)
                    res.json()
                })
                .catch(error => console.log(error))
                
        }

        if(isLoggingIn) {login()}

    }, [isLoggingIn])
    return (
        <div className='google-button' onClick={() => setIsLoggingIn(true)}>
            <img className="google-icon" src={google} alt="google icon"/>
            <p className="google-name">{props.action} with Google</p>
        </div>
    )
}

export default Google;