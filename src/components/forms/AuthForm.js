import React, {useState, useEffect, useContext} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

//react hook form is used for validation instead of formik
import { useForm } from 'react-hook-form'

import PrivacySection from './PrivacySection'
import city from '../../assets/illustrations/city_illustration.jpg'
import {UserContext} from "../../contexts/UserContext"
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
   const companies = [{name:'Google', icon: Google}, {name:'Facebook', icon:Facebook}, {name:'Linkedin', icon:Linkedin}]

   //state used for react-hook-form
   const {register, handleSubmit, watch, errors} = useForm()


   const [usernameError, setUsernameError] = useState('');
   const [passwordError, setPasswordError] = useState('')
   const [loginError, setLoginError] = useState('')
   const [isLoading, setIsLoading] = useState(false)
   const [validated, validate] = useState(false)
   const {user, setUser} = useContext(UserContext)

   const [login, setLogin] = useState({username: '', password: ''})


    useEffect(() => {
        if(validated){
            axios
                .post(`https://citrics-staging.herokuapp.com/api/auth/${props.action.toLowerCase()}`, login)
                .then(res => {
                    setIsLoading(false)
                    setUser({...user, ...res.data.user})
                    
                    
                    localStorage.setItem('jwt', res.data.token)
                    console.log(user, "USERER")
                    
                    //redirect user to home
                    return res.data.user}).then(user => {
                    axios
                    .get(`https://citrics-staging.herokuapp.com/api/users/profile/${user.id}/image`)
                    .then(res => {
                        console.log(res, "LOLG")
                        if (
                            res.data.length > 0
                            ){
                                setUser({...user, ...res.data[0]})
                            }
                            props.history.push('/')
                            // window.location.reload()
                        })
                        
                 })
                .catch(error => console.log(error)) 
                
        }
    },[validated])
            
    
    const validateForm = _ => {
        if (login.username === '') {
            setUsernameError('Please enter your username'); 
        }
        if (login.password === '') {
            setPasswordError("Please enter your password")
        } 
        else{
            validate(true)
        }
    }

    const onChange = e => {
        setLogin({...login, [e.target.name] : e.target.value})
        
    }

    const onSubmit = e => {
            console.log(login)
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

                   <form className="fields" onSubmit={handleSubmit(onSubmit)}>
                       <p className='error'>{usernameError}</p>
                       <input 
                            className="email" 
                            type='text' name='username' 
                            placeholder="Username" 
                            value={login.username} 
                            onChange={onChange}
                        />
                       <p className='error'>{passwordError}</p>
                       <input 
                            className="password"
                            type='password'
                            name='password'
                            placeholder="Password"
                            value={login.password}
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
                                <div><p>Don't have an account?  </p> <Link className='link-authform' to='/signup'>{` Sign up `}</Link> <p>to explore cities</p></div>
                                :
                               <div> <p>Have an account?  </p> <Link className="link-authform" to='/signin'> Login </Link> <p>  to explore cities</p> </div>
                            }
                        </div>
                   </form>
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