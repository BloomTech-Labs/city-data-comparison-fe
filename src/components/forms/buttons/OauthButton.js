import React, { useState} from 'react'; 
import axios from 'axios'; 

//stylesheet
import './styles/google.scss'
//assets
import google from `../../../assets/icons/${props.party}.svg`; 

const OauthButton = props => {

        const connectAccount = () => {
            axios
                .get(`https://citrics-staging.herokuapp.com/api/auth/${props.action}/${props.party}`)
                .then(res => {
                    console.log(res)
                })
                .catch(error => console.log(error))
        }    

    return (
        <div className={`${props.party}Button`} onClick={() => {connectAccount()}}>
            <img className={`${props.party}.icon`}src={google} alt={`${props.party} icon`}/>
            <p className={`${props.party}-name`}>{props.action} with {props.party}</p>
        </div>
    )
}

export default OauthButton;