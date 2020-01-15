import React, {useEffect, useState, useRef, useCallback} from 'react'; 
import axios from 'axios'; 

//stylesheet
import './styles/facebook.scss'
//assets
import facebook from '../../../assets/icons/white-facebook.svg'; 

const Facebook = props => {
    const [isLoggingIn, setIsLoggingIn] = useState(false); 

    useEffect(() => {
        
        const login = () => {
            axios
                .get("http://localhost:5000/api/auth/login/facebook")
                .then(res => {
                    setIsLoggingIn(false)
                    res.json()
                })
                .catch(error => console.log(error))
                
        }

        if(isLoggingIn) {login()}

    }, [isLoggingIn])

    return (
        <div className='facebook-button' onClick={() => setIsLoggingIn(true)}>
            <img className="fb-icon" src={facebook} alt="facebook icon"/>
            <p className="facebook-name">{props.action} with Facebook</p>
        </div>
    )
}

export default Facebook; 