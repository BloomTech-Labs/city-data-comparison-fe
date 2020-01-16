import React, {useState, useEffect} from 'react'; 
import { Link } from 'react-router-dom';
//images

import city from '../../assets/forms/nyc_signup_photo.png'; 


//styling
import './forms.scss'; 

//buttons
import Facebook from './buttons/Facebook.js';
import Google from './buttons/Google.js'
import Linkedin from './buttons/Linkedin';

//modal
//tos modals
import Modal from "../modal/modal"
import useModal from "../modal/useModal"
import './privacypolicyform.scss'; 
import PrivacyPolicy from '../legal/PrivacyPolicy'

const Signup = props => {

    const {isShowing, toggle} = useModal();
    const [modalState, setModalState] = useState();

    return(

        <>
            <Modal
                isShowing={isShowing}
                hide={toggle}
                component={modalState}
                />
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
                            <form className="fields" onSubmit={onSubmit}>
                                <p className='error-signup'>{usernameError}</p>
                                <input className="email" type='text' name='username' placeholder="Username" value={user.username} onChange={onChange}/>
                                <p className='error-signup'>{passwordError}</p>
                                <input className="password" type='password' name='password' placeholder="Password" value={user.password} onChange={onChange}/>
                                <div className="tos">
                                    <input className="checkbox" type="checkbox" name="tos"></input>
                                    <p>
                                        Please accept our 
                                        <a className="tos-text" onClick={() => (setModalState(<PrivacyPolicy/>), toggle())} style={{cursor: "pointer"}}> privacy policy</a>
                                    </p>
                                </div>
                                <button className="signup-button" htmlType="submit" onClick={() => setIsLoading(true)}>Start exploring cities</button>
                                <p class='question'>Have an account? <Link to='/signin'>Sign in</Link> to explore cities</p>
                            </form>
                        </div>
                        <div className="signup-photo">
                            {/*photo*/}
                            
                        </div>
                    </div>
                    
            
            
            </div>
        </>
    )
}

export default Signup; 