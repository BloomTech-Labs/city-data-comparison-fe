import React, { useState} from 'react'; 
import axios from 'axios'; 

//stylesheet
import './styles/google.scss'
//assets
import google from '../../../assets/icons/google.svg'; 

const Google = props => {
    const [isLoggingIn, setIsLoggingIn] = useState(false); 

        const login = () => {
            axios
                .get("https://citrics-staging.herokuapp.com/api/auth/login/google")
                .then(res => {
                    setIsLoggingIn(false)
                    res.json()
                })
                .catch(error => console.log(error))
        }    

    return (
        <a href='https://citrics-staging.herokuapp.com/api/auth/login/google' className='google-button' onClick={() => {setIsLoggingIn(true); login()}}>
            <img className="google-icon" src={google} alt="google icon"/>
            <p className="google-name">{props.action} with Google</p>
        </a>
    )
}

export default Google;