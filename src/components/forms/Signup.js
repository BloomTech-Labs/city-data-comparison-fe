import React from 'react'; 

//images

import city from '../../assets/forms/nyc_signup_photo.png'; 


//styling
import './forms.scss'; 

//buttons
import Facebook from './buttons/Facebook.js';
import Google from './buttons/Google.js'
import Linkedin from './buttons/Linkedin';

const Signup = props => {
    return(
        <div className='signup'>
           
                <div className="inner-form">
                    <div className="form">
                        <h2 className="form-title">Create your account</h2>
                            <div className="auth">
                                <Google action="Sign up"/>
                                <Facebook action="Sign up"/>
                                <Linkedin action="Sign up"/>
                            </div>
                        <div className="centerText">
                            <div className="line"></div>
                            <p className="center">or with email</p>
                            <div className="line"></div>
                        </div>
                        <div className="fields">
                            <input className="email" type='text' name='email' placeholder="Email"/>
                            <input className="password" type='text' name='password' placeholder="Password"/>
                            
                            <div className="tos">
                                <input className="checkbox" type="checkbox" name="tos"></input>
                                <p>Accept terms of service</p>
                            </div>
                            <div className="signup-button">Start exploring cities</div>
                            <p class='question'>Have an account? <span>Sign in</span> to explore cities</p>
                        </div>
                    </div>
                    <div className="photo">
                        {/*photo*/}

                        <img className="city" src={city} alt="Photo of city" />

                        
                    </div>
                </div>
                
         
           
        </div>
    )
}

export default Signup; 