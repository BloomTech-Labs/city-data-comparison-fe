import React, {useEffect} from 'react'; 
import axios from 'axios'; 

//stylesheet
import './styles/facebook.scss'
//assets
import facebook from '../../../assets/icons/white-facebook.svg'; 

const Facebook = props => {

    return (
        <div className='facebook-button'>
            <img className="fb-icon" src={facebook} alt="facebook icon"/>
            <p className="facebook-name">{props.action} with Facebook</p>
        </div>
    )
}

export default Facebook; 