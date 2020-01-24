import React, {useState} from 'react'; 
import axios from 'axios'; 

//stylesheet
import './styles/facebook.scss'
//assets
import facebook from '../../../assets/icons/white-facebook.svg'; 

const Facebook = props => {
    const [isLoggingIn, setIsLoggingIn] = useState(false); 

        const login = () => {
            axios
                .get("https://citrics-staging.herokuapp.com/api/auth/login/facebook")
                .then(res => {
                    setIsLoggingIn(false)
                    res.json()
                })
                .catch(error => console.log(error))
                
        }




    return (
        <div className='facebook-button' onClick={() => {setIsLoggingIn(true); login()}}>
            <img className="fb-icon" src={facebook} alt="facebook icon"/>
            <p className="facebook-name">{props.action} with Facebook</p>
        </div>
    )
}

export default Facebook; 