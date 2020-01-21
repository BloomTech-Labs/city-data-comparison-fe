import React, {useState, useEffect, useCallback, useRef} from 'react'; 
import axios from 'axios'; 

//stylesheet
import './styles/linkedin.scss'
//assets
import linkedin from '../../../assets/icons/linkedin.svg'; 

const Linkedin = props => {
    const [isLoggingIn, setIsLoggingIn] = useState(false); 

    useEffect(() => {
        
        const login = () => {
            axios
                .get("https://citrics-staging.herokuapp.com/api/auth/login/linkedin")
                .then(res => {
                    setIsLoggingIn(false)
                    res.json()
                })
                .catch(error => console.log(error))
                
        }

        if(isLoggingIn) {login()}

    }, [isLoggingIn])

    return (
        <div className='linkedin-button' onClick={ () => {setIsLoggingIn(true)} }>
            <img className="linkedin-icon" src={linkedin} alt="linkedin icon"/>
            <p className="linkedin-name">{props.action} with Linkedin</p>
        </div>
    )
}

export default Linkedin; 