import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import PrivacySection from './PrivacySection'

//oauth button
import './buttons/OauthButton'

//styling
import './forms.scss'
import OauthButton from './buttons/OauthButton'

//icons
import Google from '../../assets/icons/Google.svg'
import Facebook from '../../assets/icons/Facebook.svg'
import Linkedin from '../../assets/icons/Linkedin.svg'


const AuthForm = props => {

   //list of companies 
   const companies = ['Google', 'Facebook', 'Linkedin']

   const [usernameError, setUsernameError] = useState(''); 
   const [passwordError, setPasswordError] = useState('');
   const [loginError, setLoginError] = useState(''); 
   const [isLoading, setIsLoading] = useState(false); 
   const [validated, validate] = useState(false)
   const [user, setUser] = useState({username: '', password: ''})


    useEffect(() => {
        if(validated){
            axios
                .post(`https://citrics-staging.herokuapp.com/api/auth/${props.action}`, user)
                .then(res => {
                    setIsLoading(false)
                    sessionStorage.setItem('userId', res.data.id)
                    console.log(res)

                    //redirect user to home
                }).catch(error => console.log(error)) 
        }
    },[validated])
            
    
    const validateForm = _ => {
        if (user.username === '') {
            setUsernameError('Please enter your username'); 
        }
        if (user.password === '') {
            setPasswordError("Please enter your password")
        } 
        else{
            validate(true)
        }
    }

    //wonder will this work without being a child of a form element
    //need to create 
    const onChange = e => {
        setUser({...user, [e.target.name] : e.target.value})
        
    }

    const onSubmit = e => {
            e.preventDefault();
            validateForm();
            setIsLoading(true)

            setUsernameError('')
            setPasswordError('')
            setLoginError('');
    }

    return(
           
           <div className={props.action}>

               {/*Container for left side of forms */}
               <div className="form">

                   <h2 className="form-title">{(action === 'login') ? 'Welcome Back!' : 'Create Your Account'}</h2>

                    {/*container for auth buttons */}
                   <div className="auth">
                    {
                        //mapping over list of companies defined on line 20
                        companies.map(company => (<OauthButton action={props.action} company={company} />))
                    }  
                   </div>
                   
                   <div className="centerText">
                       <div className="line"></div>
                       <p className="center">or with email</p>
                       <div className="line"></div>
                   </div>

                   <div className="fields">
                       <p className='error'>{usernameError}</p>
                       <input 
                            className="email" 
                            type='text' name='username' 
                            placeholder="Username" 
                            value={user.username} 
                            onChange={onChange}
                        />
                       <p className='error'>{passwordError}</p>
                       <input 
                            className="password"
                            type='password'
                            name='password'
                            placeholder="Password"
                            value={user.password}
                            onChange={onChange}
                        />
                       

                       {    
                            //if user is signing in display privacy policy checkbox
                            (props.action === 'register') ? <PrivacySection/> : <div></div>
                        }

                       <button className={`form-button ${props.action}Button`} onClick={() => onSubmit()}>Start exploring cities </button>

                       <p className='question'>
                            {
                                (props.action === 'Login') ? 
                                `Have an account? ${<Link className='link-signup' to='/signup'>Sign up</Link>} to explore cities`
                                :
                                `Have an account? ${<Link className="link-signup" to='/signin'>Sign in</Link>} to explore cities`
                            }
                        </p>
                   </div>
               </div>
                
                {/*Container for photo to be displayed right of form */}
               <div className={`authFormPhoto ${props.action}Photo`}>
                   {/*photo*/}
               </div>

           </div>
        
    )
}

export default AuthForm; 