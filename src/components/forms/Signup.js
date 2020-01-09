import React from 'react'; 

//images
import google from '../../assets/logos/google.svg'; 
import facebook from '../../assets/logos/facebook.svg';

//illustrations
import girl from '../../assets/illustrations/girl_signup.svg'

//styling
import './forms.scss'; 

const Signup = props => {
    return(
        <div className='signup'>
            <div className="form-container">
                <div className="inner-form">
                    <div className="form">
                        <h2>Create Your Account</h2>

                        <div className="auth">
                            <div className="google">
                                <img className="google" src={google} alt="google logo"/>
                                <p>Sign up with Google</p>
                            </div>
                            <div className="facebook">
                                <img className="fb" src={facebook} alt="facebook logo"/>
                                <p>Sign up with Facebook</p>
                            </div>
                        </div>
                        
                        <div className="center-text">
                            <div> </div><p>or with email</p><div></div>
                        </div>
                        <div className="fields">
                            <input className="email" type='text' name='email' placeholder="Email"/>
                            <input className="password" type='text' name='password' placeholder="Password"/>
                            
                            <div className="tos">
                                <input className="checkbox" type="checkbox" name="tos"></input>
                                <p>Accept terms of service</p>
                            </div>
                            <div className="signup-button">Start exploring cities</div>
                            <p class='question'>Have an account? Sign in to explore cities</p>
                        </div>
                    </div>
                    <div className="photo">
                        {/*photo*/}

                        <img className="girl" src={girl} alt="girl illustration" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup; 