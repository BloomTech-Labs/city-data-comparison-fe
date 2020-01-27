import React, {useState, useEffect, useContext} from 'react';
import { Link } from "react-router-dom";
import citrics from './citrics-mock.png'
import lock from './lock.svg'
import { UserContext } from '../../contexts/UserContext';

import ProfileImage from '../user-profile/icons/profileimage.png'



function Navigation(){
     const { user, setUser } = useContext(UserContext)
     const [offset, setOffset] = useState(0);
     const [displayNav, setDisplayNav] = useState('show-nav')
     const [bgColor, setBgColor] = useState('default-color')
     const [fixedClass, setFixedClass] = useState("")
     const defaultNavigation = () => {
          setBgColor('default-color')
          if (offset === 0 ){
               setDisplayNav('show-nav')
          }else {
               if (displayNav === 'hide-nav'){
                    setDisplayNav('show-nav')
               }
          }
     }

     useEffect( _ => {
          if (window.location.href.includes("map")) {
               setFixedClass("unfixed")
          } else {
               setFixedClass("")
          }
     },[window.location])

     let styles={
          float:"right"
     }

     return(
          <div className={"navigation-container " + bgColor + `main-nav ${displayNav}`} onMouseEnter = {() => {defaultNavigation()} } onMouseLeave = {() => {defaultNavigation()} }>

               <a className="header-logo" href="/"> <img className="mock-logo" src={citrics} alt='logo'/></a>
               <nav className="main-nav">
                    <Link to="/map">Explore</Link>
                    <Link to="/map">Compare</Link>


                    {user === null ? 
                    <>
                         <Link id="login-link" to="/signin"><img alt="lock" src={lock}/>Log In</Link>
                         <Link id="signup-link" to="/signup">Get Started</Link>
                    </> :
                    <>
                         <Link to="/profile">Profile</Link>

                         {user.userimage === null ? 
                         <img src={ProfileImage} style={{maxWidth: "50px", maxHeight: "50px"}} alt="user's avatar"/>
                         :
                         <img src={`https://citrics-staging.herokuapp.com/${user.userimage}`} style={{maxWidth: "50px", maxHeight: "50px"}} alt="user's avatar"/>}
                    </>
                    }

                    
               </nav> 

               {/* <!-- Dropdown Menu  --> */}
                 <div className="dropdownContainer">
                    <div className="dropdown" style={styles}>
                         <button className="dropbtn">Menu</button>
                              <div className="dropdown-content">
                                   <Link to="/map">Explore</Link>
                                   <Link to="/map">Compare</Link>
                                   {user === null ? 
                                   <>
                                   <Link to="/signin">Log In</Link> <Link to="/signup">Get Started</Link>
                                   </>
                                    : <Link to="/profile">Profile</Link> }
                                   {/* Uncomment when we have the user's avatar */}
                                   {/* {user != null && 
                                   <img src={user.avatar} alt="user's avatar"/>} */}
                              </div>
                    </div>
               </div>
          </div>
     )
}
export default Navigation;
