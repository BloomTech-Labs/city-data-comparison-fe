import React from 'react'; 

import './forms.scss'; 
const Signup = props => {
    return(
        <div className='signup'>
            <div className="form-container">
                <div className="inner-form">
                    <div className="form">
                        <h2>Create Your Account</h2>

                        <div className="auth">
                            <button className="google">Sign up with Google</button>
                            <button className="facebook">Sign up with Facebook</button>
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