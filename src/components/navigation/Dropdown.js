import React, {useState, useContext} from "react";
import { Link } from "react-router-dom";
import {UserContext} from "../../contexts/UserContext"
import ProfileImage from '../user-profile/icons/profileimage.png'


const DropMenu = (props) => {
    const {user, setUserValue} = useContext(UserContext)
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);
    const Logout = () => {
        setUserValue(null)
        localStorage.setItem('user', null)
        // props.history.push("/")
    }
    return(
        <div isOpen={dropdownOpen} toggle={toggle}>
            <div>
                {user.userimage === null ? 
                <img src={ProfileImage} style={{maxWidth: "50px", maxHeight: "50px"}} alt="user's avatar" />
                :
                <img src={`https://citrics-staging.herokuapp.com/${user.userimage}`} style={{maxWidth: "50px", maxHeight: "50px"}} alt="user's avatar"/>}
            </div>
            <div>
                <div>Welcome!</div>
                <div>
                    <Link to="/profile">Profile</Link>
                </div>
                <div>
                    <div onClick={() => Logout()}>
                        <h4>Logout</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DropMenu;