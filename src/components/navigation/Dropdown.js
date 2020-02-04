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
        <div className="dropdownContainer-loggedin">
            {/* conditionally renders a user's profile img if it exists or a default img */}
            <div className="dropdown-loggedin" style={{float: "right"}}>
                <div className="dropbtn-loggedin">
                    {user.userimage == null ? 
                    <img src={ProfileImage} style={{maxWidth: "50px", maxHeight: "50px"}} alt="user's avatar" />
                    :
                    <img src={`https://be.citrics.io/${user.userimage}`} style={{maxWidth: "50px", maxHeight: "50px"}} alt="user's avatar"/>}
                    {/* this is the dropdown that appears when the avatar in the top right corner is hovered */}
                    {/* styling should be abstracted to app.scss or a new scss */}
                    {/* the transparent border top is so you don't leave the div and trigger the toggle */}
                </div>
                    <div className="dropdown-content-loggedin">
                        {/* <div>Welcome!</div> */}
                        <Link to="/profile">Profile</Link>
                        <Link to="/map" className="redundant">Explore</Link>
                        <Link to="/map" className="redundant">Compare</Link>
                        <Link onClick={() => Logout()} to="/">Logout</Link>
                    </div>
            </div>
        </div>
    )
}

export default DropMenu;