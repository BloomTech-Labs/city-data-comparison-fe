import React from 'react';
import {Route, Link} from "react-router-dom";


function Navigation(){
     let styles={
          float:"right"
     }

     return(
          <div className="navigation-container">
               {/* Logo goes here */}
               {/* <Link to="/">Home</Link> */}
               <a className="header-logo">Home</a>
               <nav>
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
