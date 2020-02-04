import React from 'react';  

/*
    props.company: used to create classes if additional styling is need for a specific instance of this 
    props.action: whether user is logging in or registering a new account
*/

const OauthButton = props => {


    const connectAccount = _ => window.location.replace(`https://be.citrics.io/api/auth/login/${props.company}`);  

    return (
        <div className={`oauthButton ${props.company}Button`} onClick={() => {connectAccount()}}>
            <div className='iconContainer'>
                <img className={`oauthIcon ${props.company}.icon`}src={props.icon} alt={`${props.company} icon`}/>
            </div>
            <p className={`oauthName ${props.company}Name`}>{props.action} with {props.company}</p>
        </div>
    )
}

export default OauthButton;