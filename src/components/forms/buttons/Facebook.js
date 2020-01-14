import React, {useEffect} from 'react'; 
import axios from 'axios'; 

const Facebook = props => {
    useEffect(() => {
        axios
            .get(`api/auth/login/${props.action}`)
            .then(res => console.log(res))
            .catch(error => console.log('Failed to login/signup: ', error))


    })

    return (
        <div className='facebook-button'>
            <div className="facebook-icon">

                <img src={} alt="facebook icon"/>
                
            </div>

            <p className="facebook-name">{props.action} with Facebook</p>
        </div>
    )
}

export default Facebook; 