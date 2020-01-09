import React from 'react'; 

//images
import google from '../../assets/logos/google.png'; 
import facebook from '../../assets/logos/facebook.svg';

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
                            <button id="signup-button" className="google"> <img className="google" src={google} alt="google logo"/>Sign up with Google</button>
                            <button id="signup-button" className="facebook"><img className="fb" src={facebook} alt="facebook logo"/>Sign up with Facebook</button>
                        </div>
                        
                        <div className="center-text">
                            <p>or with email</p>
                        </div>
                        <div className="fields">
                            
                        </div>
                    </div>
                    <div className="photo">
                        {/*photo*/}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup; 