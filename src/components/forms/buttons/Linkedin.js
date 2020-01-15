import React, {useState, useEffect, useCallback, useRef} from 'react'; 
import axios from 'axios'; 

//stylesheet
import './styles/linkedin.scss'
//assets
import linkedin from '../../../assets/icons/linkedin.svg'; 

const Linkedin = props => {
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
            .get('/localhost:5000/api/auth/login/linkedin/')
            .then(res => console.log(res))
            .catch(error => console.log(error))

            if (isMounted.current)
            setIsLoggingIn(false)

    }, [isLoggingIn])
    return (
        <div className='linkedin-button' onClick={login}>
            <img className="linkedin-icon" src={linkedin} alt="linkedin icon"/>
            <p className="linkedin-name">{props.action} with Linkedin</p>
        </div>
    )
}

export default Linkedin; 