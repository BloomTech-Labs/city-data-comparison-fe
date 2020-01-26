import React from 'react'; 
import axios from 'axios'; 

//assets
import google from `../../../assets/icons/${props.party}.svg`; 

const OauthButton = props => {

        const connectAccount = url => window.location.replace(url);  

    return (
        <div className={`${props.party}Button`} onClick={() => {connectAccount()}}>
            <div className='iconContainer'>
                <img className={`${props.party}.icon`}src={google} alt={`${props.party} icon`}/>
            </div>
            <p className={`${props.party}Name`}>{props.action} with {props.party}</p>
        </div>
    )
}

export default OauthButton;