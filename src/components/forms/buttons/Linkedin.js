import React, {useEffect} from 'react'; 
import axios from 'axios'; 

//stylesheet
import './styles/linkedin.scss'
//assets
import linkedin from '../../../assets/icons/Linkedin.svg'; 

const Linkedin = props => {

    return (
        <div className='linkedin-button'>
            <img className="li-icon" src={linkedin} alt="linkedin icon"/>
            <p className="linkedin-name">{props.action} with Linkedin</p>
        </div>
    )
}

export default Linkedin; 