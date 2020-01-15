import  React, {useState, useEffect} from "react";
import {NavLink} from "react-router-dom";
import MapSearch from "./MapSearch";
import DataNav from "./DataNav";
import LineGraph from "../graphs/housing/House_price";
import RoomGraph from "../graphs/housing/HousingByRooms";
import RentChart from "../graphs/housing/RentChart";
import Industry from "../graphs/economics/industries";
import Commute from "../graphs/economics/commute";
import BarGraph from "../graphs/economics/HouseIncome_BarGraph";
import EthnicityGraph from "../graphs/culture/EthnicityGraph";
import Population from "../graphs/culture/PopulationGraph";
import EducationGraph from "../graphs/culture/EducationGraph";

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

    useEffect( _ => {
        console.log(selected)
    },[selected])
     
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
                            <div className="anchor-nav">
                                <h4 className="anchor-header">Housing</h4>
                                <a href="#homeprice">Housing Costs</a>
                                <a href="#rent">Rent</a>
                                <a href="#rooms">Rooms per House</a>
                                <h4 className="anchor-header">Jobs</h4>
                                <a href="#industries">Industries</a>
                                <a href="#salary">Salary</a>
                                <a href="#commute">Commute</a>
                                <h4 className="anchor-header">Culture</h4>
                                <a href="#education">Education</a>
                                <a href="#ethnicity">Ethnicity</a>
                                <a href="#population">Population</a>
                            </div>
                        </div>
                    </div>
                    <ul>
                        {selected.map(item => <div key={item._id} className={`menu-items ${menu.status}`}><li  key={item._id} onClick={ _ => toggleVisibility(item)}>{item.name.replace (" city" , "")} 
                            <span  onClick={ _ => toggleSelected(item)}>
                                <img className="delete-icon" src={deleteIcon} alt="delete icon" />
                            </span>
                        </li></div>)}
                    </ul>
                </div>    
            </nav>
            <div className="data-by-category">
                {/* <nav className="data-subnav">
                    <NavLink activeClassName="selected" to="/map/housing">Housing</NavLink>
                    <NavLink activeClassName="selected" to="/map/jobs">Job Market</NavLink>
                    <NavLink activeClassName="selected" to="/map/culture">Culture</NavLink>  
                </nav> */}

                {selected.length > 0 
                ? <div className="housing-graphs data-category">
                    <h3>Housing:</h3>
                    <span id="homeprice"><LineGraph selected = {selected} /></span>
                    <span id="rent"><RentChart edData={selected} /></span>
                    <span id="rooms"><RoomGraph edData={selected} /></span>
                </div> 
                : <h2>Select a city to begin browsing</h2>}
                {selected.length > 0 
                ? <div className="jobs-graphs data-category">
                    <h3>Job Market:</h3>
                    <span id="industries"><Industry edData={selected} /></span>
                    <span id="salary"><BarGraph edData={selected} /></span>
                    <span id="commute"><Commute edData={selected} /></span>
                </div>
                : null}
                {selected.length > 0 
                ? <div className="culture-graphs data-category">
                    <h3>Cultural Statistics:</h3>     
                    <span id="education"><EducationGraph edData={selected} /></span>
                    <span id="ethnicity"><EthnicityGraph ethData = {selected} /></span>
                    <span id="population"><Population selected = {selected} /></span>
                </div>
                : null}
            </div>

        </div>
    );
};


export default DataDisplay;