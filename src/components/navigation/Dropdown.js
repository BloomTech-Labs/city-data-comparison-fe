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
    const Logout = () => {
        setUserValue(null);
        setFavorites([])
        setSelected([])
        localStorage.setItem('user', null)
        localStorage.setItem('jwt', null)
        // props.history.push("/")
    }
    return(
        <div>
            <div onMouseEnter={() => toggle()} onMouseLeave={() => toggle()}>
                {user.userimage == null ? 
                <img src={ProfileImage} style={{maxWidth: "50px", maxHeight: "50px"}} alt="user's avatar" />
                :
                <img src={`https://citrics-staging.herokuapp.com/${user.userimage}`} style={{maxWidth: "50px", maxHeight: "50px"}} alt="user's avatar"/>}
                {dropdownOpen && <div style={{position: "absolute", right: "3vh"}}>
                    <div style={{padding: "5px"}}>Welcome!</div>
                    <div style={{padding: "5px", backgroundColor: "#FB7F72", borderRadius: "5px"}}>
                        <Link to="/profile">Profile</Link>
                    </div>
                    <div style={{padding: "5px", backgroundColor: "#80B1D3", borderRadius: "5px"}}> 
                        <div onClick={() => Logout()}>
                            <Link to="/">Logout</Link>
                        </div>
                    </div>
                </div>}
            </div>
        </div>
    )
}

export default DropMenu;