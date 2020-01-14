import React, {useEffect} from 'react'; 
import axios from 'axios'; 

//stylesheet
import './styles/facebook.scss'
//assets
import facebook from '../../../assets/icons/white-facebook.svg'; 

const Facebook = props => {
    useEffect(() => {
        axios
            .get(`api/auth/${props.action}`)
            .then(res => console.log(res))
            .catch(error => console.log('Failed to login/signup: ', error))


    })

    return (
        <div className='facebook-button'>
            <img className="fb-icon" src={facebook} alt="facebook icon"/>
            <p className="facebook-name">{props.action} with Facebook</p>
        </div>
    )
}

export default Facebook; 