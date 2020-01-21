import React, {useState, useEffect} from 'react'; 
import { Link } from 'react-router-dom'

import city from '../../assets/forms/sf_sign_in.png'

//butons
import Facebook from './buttons/Facebook'
import Google from './buttons/Google'
import Linkedin from './buttons/Linkedin'


import axios from 'axios';

import './forms.scss'


const Login = props => {

   const [validated, validate] = useState(false);
   const [usernameError, setUsernameError] = useState(''); 
   const [passwordError, setPasswordError] = useState('');
   const [loginError, setLoginError] = useState(''); 
   const [isLoading, setIsLoading] = useState(false); 
   const [user, setUser] = useState({username: '', password: ''})


    useEffect(() => {
        if (isLoading) {
            //axios call
            if(validated) {
                console.log(user)
                axios
                    .post('https://citrics-staging.herokuapp.com/api/auth/login', user)
                    .then(res => {
                        
                        console.log(res)
                    })
                    .catch(error => {
                        console.log(error)
                        setLoginError('Email and ')
                    }) 
                } 
        }
        setIsLoading(false)
        
    }, [isLoading])
    
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
    return(
             <div className='login' style={{'background': 'linear-gradient(90deg, #FACE8F 43.2%, #F49D20 43.2%)'}}>
                  
           
           <div className="inner-form">
               <div className="form">
                   <h2 className="form-title">Welcome Back!</h2>

                   <div className="auth">
                       
                       <Google action='Sign in '/>
                       <Facebook action="Sign in"/>
                       <Linkedin action="Sign in" />
                       
                   </div>
                   
                   <div className="centerText">
                       <div className="line"></div>
                       <p className="center">or with email</p>
                       <div className="line"></div>
                   </div>
                   <form className="fields" onSubmit={onSubmit}>
                       <p className='error'>{usernameError}</p>
                       <input className="email" type='text' name='username' placeholder="Username" value={user.username} onChange={onChange}/>
                       <p className='error'>{passwordError}</p>
                       <input className="password" type='password' name='password' placeholder="Password" value={user.password} onChange={onChange}/>
                       
                       
                       
                       <button className="login-button" htmlType="submit" onClick={() => setIsLoading(true)}>Start exploring cities</button>
                       <p className='question'>Have an account? <Link className='link-signup' to='/signup'>Sign up</Link> to explore cities</p>
                   </form>
               </div>
               <div className="login-photo">
                   <img src={city}/>
               </div>
           </div>
           
    
      
   </div>


        
    )
}

export default Login; 