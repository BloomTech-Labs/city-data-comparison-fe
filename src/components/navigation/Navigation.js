import React, {useState, useEffect, useContext} from 'react';
import { Link } from "react-router-dom";
import citrics from './citrics-mock.png'
import lock from './lock.png'
import { UserContext } from '../../contexts/UserContext';
import DropMenu from "./Dropdown"


function Navigation(props){
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

     console.log('props in nav', props)
     return(
          <>
          {props.location.pathname === "/meet-the-team" ? <MeetTheTeam /> : <NavBar />}
          </>
     )
}

//Nav bar for everthing
function NavBar (){
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


     return (
          <div className={"navigation-container " + bgColor + `main-nav ${displayNav} ${fixedClass}`} onMouseEnter = {() => {defaultNavigation()} } onMouseLeave = {() => {defaultNavigation()} }>

               <a className="header-logo" href="/"> <img className="mock-logo" src={citrics} alt='logo'/></a>
               <nav className="main-nav">
                    <Link to="/" className="nav-button">Home</Link>
                    {user ? <div /> : null}
                    <Link to="/map" className="nav-button">Compare</Link>
                    {user == null ? 
                    <>
                         <Link id="login-link" to="/signin"><img className="lock" alt="lock" src={lock}/>Log In</Link>
                         {/* <Link id="signup-link" to="/signup">Get Started</Link> */}
                    </> :
                    <>
                         <DropMenu/>
                    </>
                    }
               </nav> 
                         {user == null ? 
                         <>
                              <div className="dropdownContainer">
                                   <div className="dropdown" style={styles}>
                                        <button className="dropbtn">Menu</button>
                                        <div className="dropdown-content">
                                             <Link to="/map">Explore</Link>
                                             <Link to="/signin">Log In</Link>
                                             <Link to="/signup">Get Started</Link>
                                        </div>
                                   </div>
                              </div>
                         </>
                         :
                         <div className="dropdownContainer">
                              <DropMenu/>
                         </div>
                    }

          </div>
     )
}

//Nav bar for meet the team Page
function MeetTheTeam (){
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


     return (
          <div className={"navigation-container " + bgColor + `main-nav ${displayNav} ${fixedClass}`} onMouseEnter = {() => {defaultNavigation()} } onMouseLeave = {() => {defaultNavigation()} }>

               <a className="header-logo" href="/"> <img className="mock-logo" src={citrics} alt='logo'/></a>
               <nav className="main-nav">
                    {user ? <div /> : null}
                    <Link to="/map" className="nav-button" style={{ color: 'white' }}>Explore</Link>
                    {user == null ? 
                    <>
                         <Link to="/map" className="nav-button" style={{ color: 'white' }}>Compare</Link>
                         <Link id="login-link" to="/signin"><img alt="lock" src={lock}/>Log In</Link>
                         {/* <Link id="signup-link" to="/signup">Get Started</Link> */}
                    </> :
                    <>
                         <DropMenu/>
                    </>
                    }
               </nav> 
                         {user == null ? 
                         <>
                              <div className="dropdownContainer">
                                   <div className="dropdown" style={styles}>
                                        <button className="dropbtn">Menu</button>
                                        <div className="dropdown-content">
                                             <Link to="/map">Explore</Link>
                                             <Link to="/signin">Log In</Link>
                                             <Link to="/signup">Get Started</Link>
                                        </div>
                                   </div>
                              </div>
                         </>
                         :
                         <div className="dropdownContainer">
                              <DropMenu/>
                         </div>
                    }

          </div>
     )
}

export default Navigation;