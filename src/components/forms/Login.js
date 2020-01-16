import React, {useState, useEffect} from 'react'; 


import city from '../../assets/forms/sf_sign_in.png'

//butons
import Facebook from './buttons/Facebook.js'; 
import Google from './buttons/Google.js'
import Linkedin from './buttons/Linkedin'





const Login = props => {

   const [validated, validate] = useState(false); 
   const [emailError, setEmailError] = useState(''); 
   const [passwordError, setPasswordError] = useState('')
   const [isLoading, setIsLoading] = useState(false); 
   const [email, setEmail] = useState(''); 
   const [password, setPassword] = useState(''); 


    useEffect(() => {
        if (isLoading) {
            validateLogin()
        }
        setIsLoading(false)
        
    }, [isLoading])
    
    const validateLogin = () => {
        if (validated) {
            //go to next page
        }else {
            

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
                   <form className="fields">
                       <p className='error'>{emailError}</p>
                       <input className="email" type='text' name='email' placeholder="Email" value={email}/>
                       <p>{passwordError}</p>
                       <input className="password" type='password' name='password' placeholder="Password" value={password}/>
                       
                       
                       <div className="login-button" onClick={() => setIsLoading(true)}>Start exploring cities</div>
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