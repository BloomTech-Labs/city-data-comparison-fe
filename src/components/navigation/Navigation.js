import React, {useState, useEffect, useContext} from 'react';
import { Link } from "react-router-dom";
import citrics from './citrics-mock.png'
import lock from './lock.svg'
import { UserContext } from '../../contexts/UserContext';
import DropMenu from "./Dropdown"


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

     let styles={
          float:"right"
     }

     return(
          <div className={"navigation-container " + bgColor + `main-nav ${displayNav} ${fixedClass}`} onMouseEnter = {() => {defaultNavigation()} } onMouseLeave = {() => {defaultNavigation()} }>

               <a className="header-logo" href="/"> <img className="mock-logo" src={citrics} alt='logo'/></a>
               <nav className="main-nav">
                    <Link to="/map">Explore</Link>
                    <Link to="/map">Compare</Link>


                    {user == null ? 
                    <>
                         <Link id="login-link" to="/signin"><img alt="lock" src={lock}/>Log In</Link>
                         <Link id="signup-link" to="/signup">Get Started</Link>
                    </> :
                    <>
                         <DropMenu/>
                    </>
                    }

                    
               </nav> 
          </div>
     )
}
export default Navigation;
