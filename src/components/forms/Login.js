import React, {useState, useEffect} from 'react'; 


import city from '../../assets/forms/sf_sign_in.png'

//butons
import Facebook from './buttons/Facebook.js'; 
import Google from './buttons/Google.js'
import Linkedin from './buttons/Linkedin'

import axios from 'axios';




const Login = ({touched, errors, status}, props)=> {

   const [validated, validate] = useState(false); 
   const [emailError, setEmailError] = useState(''); 
   const [passwordError, setPasswordError] = useState('')
   const [isLoading, setIsLoading] = useState(false); 
   const [user, setUser] = useState({email: '', password: ''})


    useEffect(() => {
        if (isLoading) {
            //axios call

        }
        setIsLoading(false)
        
    }, [isLoading])
    
    const validateLogin = () => {
        if (validated) {
            //go to next page
        }else {
            if (user.email.includes('@')){
                setEmailError('Please enter a valid email'); 
                
            }
            
            
            if (user.email === '') {
                setEmailError('Please enter your email'); 
                return;
            }
            if(!user.email.includes('@') || user.password === ''){
                setEmailError('Please enter a valid email'); 
                setPasswordError('Please enter your password')
                }
            if (user.password === '') {
                setPasswordError("Please enter your password")
                return;
            }
            
        }

    }

    const onChange = e => {
        setUser({...user, [e.target.name] : e.target.value})
        
    }

    const onSubmit = e => {
            e.preventDefault();
            setEmailError('')
            setPasswordError('')
            validateLogin();
            setIsLoading(true)
            
    }
    return(
             <div className='login'>
                  
           
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
                       <p className='error'>{emailError}</p>
                       <input className="email" type='text' name='email' placeholder="Email" value={user.email} onChange={onChange}/>
                       <p>{passwordError}</p>
                       <input className="password" type='password' name='password' placeholder="Password" value={user.password} onChange={onChange}/>
                       
                       
                       <button className="login-button" htmlType="submit" onClick={() => setIsLoading(true)}>Start exploring cities</button>
                       <p className='question'>Have an account? <span>Sign in</span> to explore cities</p>
                   </form>
               </div>
               <div className="login-photo">
                   {/*photo*/}
               </div>
           </div>
           
    
      
   </div>


        
    )
}

export default Login; 