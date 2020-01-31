import React, {useState} from 'react'
import {NavLink}  from "react-router-dom";
import Heart from '../map-components/icons/filled_heart.svg'
import User from './icons/user.png'

const SideNav = () => {

    const [burger, setburger] = useState({status: 'closed'})

    const toggleBurger = () => {
        if (burger.status === 'closed') {
            setburger({...burger, status:'open'}) 
        } else if (burger.status === 'open') {
            setburger({...burger, status:'closed'})
        }
    }


    return(
        <div className={`side-nav ${burger.status}`}>
            <div className= {`burger-menu ${burger.status}`} onClick={toggleBurger}>
                        <div className="bar1" key="b1" />
                        <div className="bar2" key="b2" />
                        <div className="bar3" key="b3" />
                    </div>
                    <div className={`slider ${burger.status}`}>
                    <div className={`menu-items ${burger.status}`}>
            <div className='profile-tabs'>
                    <nav className={`nav-items ${burger.status}`}>
                    <NavLink activeClassName='selected' to='/profile/'><img src={User} alt='profile-icon' />Profile</NavLink>
                    {/* <NavLink activeClassName='selected' to='/profile/preferences'>Preferences</NavLink> */}
                    <NavLink activeClassName='selected' to='/profile/favorites'><img src={Heart} alt='favorites-icon'/>Favorites</NavLink>        
                </nav>
            </div>
            </div>
            </div>
        </div>
    )
}

export default SideNav;