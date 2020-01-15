import  React, {useState} from "react";
import {NavLink, Route}  from "react-router-dom";

import MapSearch from "./MapSearch";
import CostNav from "./subnavs/HousingNav";
import JobsNav from "./subnavs/JobsNav";
import SafetyNav from "./subnavs/CultureNav";
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
                            <Route path="/map/housing" component={CostNav} />
                            <Route path="/map/jobs" component={JobsNav} />
                            <Route path="/map/culture" component={SafetyNav} />
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

                <div className="housing-graphs">
                    <h1>Housing:</h1>
                    <LineGraph selected = {selected} />
                    <RoomGraph edData={selected} />
                    <RentChart edData={selected} />
                </div>
                <div>
                    <h1>Job Market:</h1>
                    <Commute edData={selected} />
                    <Industry edData={selected} />
                    <BarGraph edData={selected} />
                </div>
                <div>
                    <h1>Cultural Statistics:</h1>     
                    <EthnicityGraph ethData = {selected} />
                    <Population selected = {selected} />
                    <EducationGraph edData={selected} />
                </div>
            </div>

        </div>
    );
};


export default DataDisplay;