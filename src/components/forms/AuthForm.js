import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import PrivacySection from './PrivacySection'
import city from '../../assets/illustrations/city_illustration.jpg'

//oauth button
import './OauthButton'

//styling
import './forms.scss'
import OauthButton from './OauthButton'

//icons
import Google from '../../assets/icons/google.svg'
import Facebook from '../../assets/icons/white-facebook.svg'
import Linkedin from '../../assets/icons/linkedin.svg'


const AuthForm = props => {

   //list of companies 
   const companies = [{name:'Google', icon: Google}, /*{name:'Facebook', icon:Facebook}, */{name:'Linkedin', icon:Linkedin}]

   //state used for validating form
   const [usernameError, setUsernameError] = useState('');
   const [passwordError, setPasswordError] = useState('')
   const [loginError, setLoginError] = useState('')
   const [isLoading, setIsLoading] = useState(false)
   const [validated, validate] = useState(false)

   const [user, setUser] = useState({username: '', password: ''})


    useEffect(() => {
        if(validated){
            axios
                .post(`https://citrics-staging.herokuapp.com/api/auth/${props.action}`, user)
                .then(res => {
                    setIsLoading(false)
                    localStorage.getItem('userId', res.data.id)
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

    const onChange = e => {
        setUser({...user, [e.target.name] : e.target.value})
        
    }

    const onSubmit = e => {
            console.log(user)
            validateForm();
            setIsLoading(true)

            setUsernameError('')
            setPasswordError('')
            setLoginError('');
    }

    return(
           
           <div className='authForm'>

               {/*Container for left side of forms */}
               <div className="form">

                   <h2 className="formTitle">{(props.action === 'Login') ? 'Welcome Back!' : 'Create Your Account'}</h2>

                    {/*container for auth buttons */}
                   <div className="auth">
                    {
                        //mapping over list of companies defined on line 20
                        companies.map(company => (<OauthButton action={props.action} company={company.name} icon={company.icon} />))
                    }  
                   </div>

                   <div className="bottomPortion">
                   
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
                            (props.action === 'Register') ? <PrivacySection/> : <div></div>
                        }

                       <button className={`formButton ${props.action}Button`} onClick={() => onSubmit()}>Start exploring cities </button>

                       <div className='question'>
                            {
                                (props.action === 'Login') ? 
                                <div><p>Don't have an account?  </p> <Link className='link-signup' to='/signup'>{` Sign up `}</Link> <p>to explore cities</p></div>
                                :
                               <div> <p>Have an account?  </p> <Link className="link-signup" to='/signin'> Login </Link> <p>  to explore cities</p> </div>
                            }
                        </div>
                   </div>
                   </div>
               </div>
                
                {/*Container for photo to be displayed right of form */}
               <div className={`authFormPhoto ${props.action}Photo`}>
                   <img className="loginPhoto" src={city}/>
               </div>

           </div>
        
    )
}

export default AuthForm; 