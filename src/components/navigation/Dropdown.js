import React, {useState, useContext} from "react";
import { Link } from "react-router-dom";
import {CityContext} from "../../contexts/CityContext"
import {UserContext} from "../../contexts/UserContext"
import ProfileImage from '../user-profile/icons/profileimage.png'


const DropMenu = (props) => {
    const {user, setUserValue, setFavorites} = useContext(UserContext)
    const {setSelected} = useContext(CityContext)
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);
    //This logout function should probably be abstracted to the userContext
    //Logout function clears localstorage and resets the userContext
    //could probably be more comprehensive
    const Logout = () => {
        setUserValue(null);
        setFavorites([])
        setSelected([])
        localStorage.setItem('user', null)
        localStorage.setItem('jwt', null)
    }
    //this is what's rendered in the top right corner when the user is logged in
    return(
        <div>
            {/* conditionally renders a user's profile img if it exists or a default img */}
            <div onMouseEnter={() => toggle()} onMouseLeave={() => toggle()} style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                {user.userimage == null ? 
                <img src={ProfileImage} style={{maxWidth: "50px", maxHeight: "50px"}} alt="user's avatar" />
                :
                <img src={`https://citrics-staging.herokuapp.com/${user.userimage}`} style={{maxWidth: "50px", maxHeight: "50px"}} alt="user's avatar"/>}
                {/* this is the dropdown that appears when the avatar in the top right corner is hovered */}
                {/* styling should be abstracted to app.scss or a new scss */}
                {/* the transparent border top is so you don't leave the div and trigger the toggle */}
                <div style={{position: "absolute", borderTop: "75px solid transparent", top: "0%", transform: dropdownOpen ? "scaleY(1)" : "scaleY(0)", transformOrigin: "50% 75px", transition: "transform .3s"}}>
                    <div style={{backgroundColor: "#ceeaee", border: "1px solid #ffd372"}}>
                        <div style={{padding: "5px"}}>Welcome!</div>
                        <div style={{padding: "5px", backgroundColor: "#73c595", borderRadius: "5px", margin: "5px"}}>
                            <Link to="/profile" style={{color: "white"}}>Profile</Link>
                        </div>
                        <div style={{padding: "5px", backgroundColor: "#5666fa", borderRadius: "5px", margin: "5px"}}> 
                            <div onClick={() => Logout()}>
                                <Link to="/"style={{color: "white"}}>Logout</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DropMenu;