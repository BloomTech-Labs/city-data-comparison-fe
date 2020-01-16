import React, {useState} from 'react'; 


import city from '../../assets/forms/sf_sign_in.png'

//butons
import Facebook from './buttons/Facebook.js'; 
import Google from './buttons/Google.js'
import Linkedin from './buttons/Linkedin'

//tos modals
import Modal from "../modal/modal"
import useModal from "../modal/useModal"
import './privacypolicyform.scss'; 
import PrivacyPolicy from '../legal/PrivacyPolicy'



const Login = props => {

    const {isShowing, toggle} = useModal();
     const [modalState, setModalState] = useState();
    return(
            <>
                <Modal
                    isShowing={isShowing}
                    hide={toggle}
                    component={modalState}
               />
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
                   <div className="fields">
                       <input className="email" type='text' name='email' placeholder="Email"/>
                       <input className="password" type='text' name='password' placeholder="Password"/>
                       
                       <div className="tos">
                           <input className="checkbox" type="checkbox" name="tos"></input>
                           <p>
                                Please accept our 
                                <a onClick={() => (setModalState(<PrivacyPolicy/>), toggle())} style={{cursor: "pointer"}}>privacy policy</a>
                           </p>
                       </div>
                       <div className="login-button">Start exploring cities</div>
                       <p className='question'>Have an account? <span>Sign in</span> to explore cities</p>
                   </div>
               </div>
               <div className="login-photo">
                   {/*photo*/}
               </div>
           </div>
           
    
      
   </div>

   </>
        
    )
}

export default Login; 