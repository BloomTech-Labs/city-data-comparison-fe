import React from 'react'; 

//assets
import icon from `../../../assets/icons/${props.company}.svg`; 

/*
    I named each icon 'company'.svg 
    company = ( or third party) you would like to create a button for
*/

const OauthButton = props => {


    const connectAccount = _ => window.location.replace(`https://citrics-staging.herokuapp.com/api/auth/login/${props.company}`);  

    return (
        <div className={`${props.company}Button`} onClick={() => {connectAccount()}}>
            <div className='iconContainer'>
                <img className={`${props.company}.icon`}src={icon} alt={`${props.company} icon`}/>
            </div>
            <p className={`${props.company}Name`}>{props.action} with {props.company}</p>
        </div>
    )
}

export default OauthButton;