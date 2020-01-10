import React from 'react'; 

//images
import google from '../../assets/logos/google.svg'; 
import facebook from '../../assets/logos/facebook.svg';
import city from '../../assets/forms/nyc_signup_photo.png'; 


//styling
import './forms.scss'; 

const Signup = props => {
    return(
        <div className='signup'>
           
                <div className="inner-form">
                    <div className="form">
                        <h2>Create your account</h2>

                        <div className="auth">
                            <button id="auth-button" className="google">
                                <img className="google" src={google} alt="google logo"/>
                                <p className="button-text">Sign up with Google</p>
                            </button>
                            <button id="auth-button" className="facebook">
                                <img className="fb" src={facebook} alt="facebook logo"/>
                                <p className="button-text">Sign up with Facebook</p>
                            </button>
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