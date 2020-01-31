import React, {useState} from 'react'
import {NavLink}  from "react-router-dom";
import Heart from '../map-components/icons/filled_heart.svg'
import User from './icons/user.png'

const SideNav = () => {

    const [menu, setMenu] = useState({status: 'closed'})

    const toggleMenu = () => {
        if (menu.status === 'closed') {
            setMenu({...menu, status:'open'}) 
        } else if (menu.status === 'open') {
            setMenu({...menu, status:'closed'})
        }
    }


    return(
        <div className='side-nav'>
            <div className= {`burger-menu ${menu.status}`} onClick={toggleMenu}>
                        <div className="bar1" key="b1" />
                        <div className="bar2" key="b2" />
                        <div className="bar3" key="b3" />
                    </div>
            <div className='profile-tabs'>
                <nav className='nav-items'>
                    <NavLink activeClassName='selected' to='/profile/'><img src={User} alt='profile-icon' />Profile</NavLink>
                    {/* <NavLink activeClassName='selected' to='/profile/preferences'>Preferences</NavLink> */}
                    <NavLink activeClassName='selected' to='/profile/favorites'><img src={Heart} alt='favorites-icon'/>Favorites</NavLink>        
                </nav>
            </div>
        </div>
    )
}

export default SideNav;