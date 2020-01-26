import React, {useState, useEffect} from 'react'; 
import { Link } from 'react-router-dom';

import axios from 'axios'


//styling
import './forms.scss';
 

//buttons
import Facebook from './buttons/Facebook.js';
import Google from './buttons/Google.js'
import Linkedin from './buttons/Linkedin';

//modal
//tos modals
import Modal from "../modal/modal";
import useModal from "../modal/useModal";
import './privacypolicyform.scss'; 
import PrivacyPolicy from '../legal/PrivacyPolicy';

import city from '../../assets/forms/nyc_signup_photo.png'; 

const Signup = props => {

    const [validated, validate] = useState(false);
   const [usernameError, setUsernameError] = useState(''); 
   const [passwordError, setPasswordError] = useState('');
   const [loginError, setLoginError] = useState(''); 
   const [isLoading, setIsLoading] = useState(false); 
   const [user, setUser] = useState({username: '', password: ''})
    console.log(user)

            const signup = () => {
                axios
                    .post('https://citrics-staging.herokuapp.com/api/auth/register', user)
                    .then(res => {
                        setIsLoading(false)
                        sessionStorage.setItem('userId', res.data.id)
                        console.log(res)
                    })
                    .catch(error => {
                        console.log(error)
                       // setLoginError('Email and ')
                    }) 
                }
    
    const validateLogin = () => {
            
            if (user.username === '') {
                setUsernameError('Please enter your username'); 
            }
            if (user.password === '') {
                setPasswordError("Please enter your password")
            
            } else{
                validate(true)
            }


            
        

    }

    const onChange = e => {
        setUser({...user, [e.target.name] : e.target.value})
        
    }

    const onSubmit = e => {
            e.preventDefault();
            setUsernameError('')
            setPasswordError('')
            setLoginError('');
            validateLogin();
            setIsLoading(true)
            
    }

    //modal
    const {isShowing, toggle} = useModal();
    const [modalState, setModalState] = useState();



    return(

        <>
            <Modal
                isShowing={isShowing}
                hide={toggle}
                component={modalState}
                />
            <div className='signup' style={{'background': 'linear-gradient(90deg, #C5CDFD 43.2%, #5D73FA 43.2%)'}}>
            
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
                                <button className="signup-button" htmlType="submit" onClick={() => {setIsLoading(true); signup()}}>Start exploring cities</button>
                                <p class='question'>Have an account? <Link className="link-signup" to='/signin'>Sign in</Link> to explore cities</p>
                            </form>
                        </div>
                        <div className="signup-photo">
                            <img src={city}/>
                            
                        </div>
                    </div>
                    
            
            
            </div>
        </>
    )
}

export default Signup; 