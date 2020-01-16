import React, {useState, useEffect} from 'react'; 


import city from '../../assets/forms/sf_sign_in.png'

//butons
import Facebook from './buttons/Facebook.js'; 
import Google from './buttons/Google.js'
import Linkedin from './buttons/Linkedin'

//form
import {withFormik, Form, Field} from 'formik'
import * as Yup from 'yup'




const Login = ({touched, errors, status}, props)=> {

   const [validated, validate] = useState(false); 
   const [emailError, setEmailError] = useState(''); 
   const [passwordError, setPasswordError] = useState('')
   const [isLoading, setIsLoading] = useState(false); 
   const [user, setUser] = useState({email: '', password: ''})


    useEffect(() => {
        if (isLoading) {
        
        }
        setIsLoading(false)
        
    }, [isLoading])
    
    const validateLogin = () => {
        if (validated) {
            //go to next page
        }else {
            
            if(!email.includes('@') || password === ''){
                setEmailError('Please enter a valid email'); 
                setPasswordError('Please enter your password')
            }
            
            if (email === '') {
                setEmailError('Please enter your email'); 
                return;
            }

            if (password === '') {
                setPasswordError("Please enter your password")
                return;
            }
            
        }

    }

    const onChange = e => {
        
        
    }

    const onSubmit = e => {
         e.preventDefault();
            console.log("clicked!")
            setIsLoading(true)
            validateLogin();
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