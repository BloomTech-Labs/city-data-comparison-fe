import React from 'react'; 




import city from '../../assets/forms/sf_sign_in.png'

//butons
import Facebook from './buttons/Facebook.js'; 
import Google from './buttons/Google.js'
import Linkedin from './buttons/Linkedin'

const Login = props => {
    return(
       
             <div className='login'>
           
           <div className="inner-form">
               <div className="form">
                   <h2 className="form-title">Welcome Back!</h2>

                   <div className="auth">
                       <Linkedin action="Sign in" />
                       <Google action='Sign in '/>
                       <Facebook action="Sign in"/>
                   </div>
                   
                   <div className="centerText">
                       <div className="line"></div>
                       <p className="center">or with email</p>
                       <div className="line"></div>
                   </div>
                   <div className="fields">
                       <input className="email" type='text' name='email' placeholder="Email"/>
                       <input className="password" type='text' name='password' placeholder="Password"/>
                       
                       <div className="tos">
                           <input className="checkbox" type="checkbox" name="tos"></input>
                           <p className="tos-text">Accept terms of service</p>
                       </div>
                       <div className="login-button">Start exploring cities</div>
                       <p class='question'>Have an account? <span>Sign in</span> to explore cities</p>
                   </div>
               </div>
               <div className="photo">
                   {/*photo*/}

                   <img className="city" src={city} alt="Photo of city" />

                   
               </div>
           </div>
           
    
      
   </div>
        
    )
}

export default Login; 