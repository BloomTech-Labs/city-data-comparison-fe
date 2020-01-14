import React, {useEffect} from 'react'; 
import axios from 'axios'; 

//stylesheet
import './styles/google.scss'
//assets
import google from '../../../assets/icons/google.svg'; 

const Google = props => {

    return (
        <div className='google-button'>
            <img className="google-icon" src={linkedin} alt="google icon"/>
            <p className="google-name">{props.action} with Google</p>
        </div>
    )
}

export default Google;