import React, {useEffect} from 'react'; 
import axios from 'axios'; 

//assets
import facebook from '../../../assets/icons/white-facebook.svg'; 

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

                <img src={facebook} alt="facebook icon"/>
                
            </div>

            <p className="facebook-name">{props.action} with Facebook</p>
        </div>
    )
}

export default Facebook; 