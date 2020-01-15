import React, {useState} from 'react';
import { Link } from "react-router-dom";
import citrics from './citrics-mock.png'
import lock from './lock.svg'



function Navigation(){
     const [offset, setOffset] = useState(0);
     const [displayNav, setDisplayNav] = useState('show-nav')
     const [bgColor, setBgColor] = useState('default-color')
     const defaultNavigation = () => {
          // console.log('called')
          setBgColor('default-color')
          if (offset === 0 ){
               // console.log('calledOffset')
               setDisplayNav('show-nav')
          }else {
               if (displayNav === 'hide-nav'){
                    // console.log('calledAgain')
                    setDisplayNav('show-nav')
               }
          }
     }
     window.addEventListener('scroll', (e) => {   
          if (window.pageYOffset > offset ){
               setDisplayNav('hide-nav')
               setBgColor('no-color')
          }else{
               setDisplayNav('show-nav')
               setBgColor('default-color')
          }
          setOffset(window.pageYOffset)

     })
     let styles={
          float:"right"
     }
     
     // className = {`main-nav ${displayNav}`}

     return(
          <div className={"navigation-container " + bgColor + `main-nav ${displayNav}`} onMouseEnter = {() => {defaultNavigation()} } onMouseLeave = {() => {defaultNavigation()} }>

               <a className="header-logo" href="/"> <img className="mock-logo" src={citrics} alt='logo'/></a>
               <nav>
                    <Link to="/map">Explore</Link>
                    <Link to="/map">Compare</Link>
                    <Link className="login-link" to="/login"><img alt="lock" src={lock}/>Log In</Link>
                    <Link className="signup-link" to="/signup">Get Started</Link>
               </nav> 

               {/* <!-- Dropdown Menu  --> */}
                 <div className="dropdownContainer">
                    <div className="dropdown" style={styles}>
                         <button className="dropbtn">Menu</button>
                              <div className="dropdown-content">
                                   <Link to="/map">Explore</Link>
                                   <Link to="/map">Compare</Link>
                                   <Link to="/login">Log In</Link>
                                   <Link to="/signup">Get Started</Link>
                              </div>
                    </div>
               </div>
          </div>
     )
}
export default Navigation;
