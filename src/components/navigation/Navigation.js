import React, {useState} from 'react';
import { Link } from "react-router-dom";




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
          // console.log(e)
          // console.log(window.pageYOffset)
          // setOffset(window.pageYOffset)
          
          if (window.pageYOffset > offset ){
               // console.log('hi')
               setDisplayNav('hide-nav')
               setBgColor('no-color')
          }else{
               // console.log('show')
               setDisplayNav('show-nav')
               setBgColor('default-color')
          }
          setOffset(window.pageYOffset)

     })
     let styles={
          float:"right"
     }
     

     return(
          <div className={"navigation-container " + bgColor } onMouseEnter = {() => {defaultNavigation()} } onMouseLeave = {() => {defaultNavigation()} }>
               {/* Logo goes here */}
               {/* <Link to="/">Home</Link> */}
               <a className="header-logo" href="/">Home</a>
               <nav className = {displayNav}>
                    <a href="google.com">Link A</a>
                    <Link to="/map">Map</Link>
                    <Link to="/map">Log In</Link>
                    <Link to="/map">Sign Up</Link>
                    {/* <a id="noUnderline" href='https://www.lambdaschool.com/'><button className="sign-up-btn">Log In</button></a>
                    <a id="noUnderline" href='https://www.lambdaschool.com/'><button className="sign-up-btn">Try it Free</button></a> */}
               </nav> 

               {/* <!-- Dropdown Menu  --> */}
                 <div className="dropdownContainer">
                    <div className="dropdown" style={styles}>
                         <button className="dropbtn">Menu</button>
                              <div className="dropdown-content">
                                   <a href="google.com">Link A</a>
                                   <Link to="/map">Map</Link>
                                   <a href="google.com">Log In</a>
                                   <a href="google.com">Sign Up</a>
                              </div>
                    </div>
               </div>
          </div>
     )
}
export default Navigation;
