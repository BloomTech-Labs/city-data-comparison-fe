import  React, {useState, useEffect} from "react";
import {Route, NavLink} from "react-router-dom"

import MapSearch from "./MapSearch";
import JobsNav from "./subnavs/JobsNav";
import HousingNav from "./subnavs/HousingNav";
import CultureNav from "./subnavs/CultureNav";
import Housing from "./data-categories/Housing";
import Culture from "./data-categories/Culture";
import Jobs from "./data-categories/Jobs";

import deleteIcon from "./icons/close_red.png";

const DataDisplay = ({search, selected, toggleSelected, onSearch, setSearch, cityMarkers, viewport, setViewport, selectSearch}) => {

    const [menu, setMenu] = useState({status: 'closed'})

    const toggleMenu = () => {
        if (menu.status === 'closed') {
            setMenu({...menu, status:'open'}) 
        } else if (menu.status === 'open') {
            setMenu({...menu, status:'closed'})
        }
    }

    const toggleVisibility = city => {
        console.log("toggling visibility of ", city.city)
    }
     
    return (
        <div className="data-browser">
            <nav className="data-nav">
                <div className='top-menu'>

                    {/* Burger stack button */}

                    <div className= {`burger-menu ${menu.status}`} onClick={toggleMenu}>
                        <div className="bar1" key="b1" />
                        <div className="bar2" key="b2" />
                        <div className="bar3" key="b3" />
                    </div>

                    
                </div>

                <div className={`slider ${menu.status}`}>
                    <div className={`menu-items ${menu.status}`}>
                        <div className="data-nav-top">
                            <MapSearch
                            menu={menu.status}
                            setSearch={setSearch}
                            onSearch={onSearch} 
                            cityMarkers={cityMarkers} 
                            search={search}
                            viewport={viewport}
                            setViewport={setViewport}  
                            selectSearch={selectSearch}
                            />
                            {selected.length > 0 
                            ? <div className="anchor-nav">
                                <NavLink activeClassName="selected" to="/map/housing"><h4 className="anchor-header">Housing</h4></NavLink>
                                <Route path="/map/housing" render={ _ => <HousingNav /> } />
                                <NavLink activeClassName="selected" to="/map/jobs"><h4 className="anchor-header">Jobs</h4></NavLink>
                                <Route path="/map/jobs" render={ _ => <JobsNav /> } />
                                <NavLink activeClassName="selected" to="/map/culture"><h4 className="anchor-header">Culture</h4></NavLink>
                                <Route path="/map/culture" render={ _ => <CultureNav /> } />
                            </div>
                            : null}
                        </div>
                    </div>
                    <ul>
                        {selected.map(item => <div key={item._id} className={`menu-items ${menu.status}`}><li  key={item._id} onClick={ _ => toggleVisibility(item)}>{item.name.replace (" city" , "")} 
                            <span onClick={ _ => toggleSelected(item)}>
                                <img className="delete-icon" src={deleteIcon} alt="delete icon" />
                            </span>
                        </li></div>)}
                    </ul>
                </div>    
            </nav>
            <div className="data-by-category">

                {selected.length > 0 
                ? <>
                    <Route path="/map/housing" render={ _ => <Housing selected={selected} /> } />
                    <Route path="/map/culture" render={ _ => <Culture selected={selected} /> } />
                    <Route path="/map/jobs" render={ _ => <Jobs selected={selected} /> } />

                </>
                : <h2 className="map-prompt">Select a city to begin browsing</h2>}
            </div>

        </div>
    );
};


export default DataDisplay;