import  React, {useState, useEffect} from "react";
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import MapSearch from "./MapSearch";
import LineGraph from "../graphs/housing/House_price";
import RoomGraph from "../graphs/housing/HousingByRooms";
import RentChart from "../graphs/housing/RentChart";
import Industry from "../graphs/economics/industries";
import Commute from "../graphs/economics/commute";
import BarGraph from "../graphs/economics/HouseIncome_BarGraph";
import EthnicityGraph from "../graphs/culture/EthnicityGraph";
import Population from "../graphs/culture/PopulationGraph";
import EducationGraph from "../graphs/culture/EducationGraph";
import AgeDistributionGraph from "../graphs/culture/AgeDistrubution"
import deleteIcon from "./icons/close_red.png";

const DataDisplay = ({search, selected, toggleSelected, onSearch, setSearch, cityMarkers, viewport, setViewport, selectSearch}) => {

    const [menu, setMenu] = useState({status: 'closed'})
    const [offset, setOffset] = useState(0);

    // fixed sidebar handling
    useEffect( _ => {
        console.log(window.pageYOffset)
    }, [offset])

    if (window.pageYOffset !== offset ){
        console.log('hi')
        setOffset(window.pageYOffset)
    } 
    




    // console.log(selected)

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
                                <h4 className="anchor-header">Housing</h4>
                                <Link activeClass="active" className="anchor-link" to="homeprice" spy={true} smooth={true} duration={500} >Housing Costs</Link>
                                <Link activeClass="active" className="anchor-link" to="rent" spy={true} smooth={true} duration={500} >Rent</Link>
                                <Link activeClass="active" className="anchor-link" to="rooms" spy={true} smooth={true} duration={500} >Rooms</Link>
                                <h4 className="anchor-header">Jobs</h4>
                                <Link activeClass="active" className="anchor-link" to="industries" spy={true} smooth={true} duration={500} >Industries</Link>
                                <Link activeClass="active" className="anchor-link" to="salary" spy={true} smooth={true} duration={500} >Salary</Link>
                                <Link activeClass="active" className="anchor-link" to="commute" spy={true} smooth={true} duration={500} >Commute</Link>
                                <h4 className="anchor-header">Culture</h4>
                                <Link activeClass="active" className="anchor-link" to="education" spy={true} smooth={true} duration={500} >Education</Link>
                                <Link activeClass="active" className="anchor-link" to="ethnicity" spy={true} smooth={true} duration={500} >Ethnicity</Link>
                                <Link activeClass="active" className="anchor-link" to="population" spy={true} smooth={true} duration={500} >Population</Link>
                                <Link activeClass="active" className="anchor-link" to="ageDistribution" spy={true} smooth={true} duration={500} >Age Distribution</Link>
                            </div>
                            : null}
                        </div>
                    </div>
                    <ul>
                        {selected.map(item => <div key={item._id} className={`menu-items ${menu.status}`}><li  key={item._id} onClick={ _ => toggleVisibility(item)}>{item.name_with_com} 
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
                <div className="housing-graphs data-category">
                    <h3>Housing:</h3>
                    <Element name="homeprice" className="element" ><LineGraph selected = {selected} /></Element>
                    <Element name="rent" className="element" ><RentChart edData={selected} /></Element>
                    <Element name="rooms" className="element" ><RoomGraph edData={selected} /></Element>
                </div> 
                

                <div className="jobs-graphs data-category">
                    <h3>Job Market:</h3>
                    <Element name="industries" className="element" ><Industry edData={selected} /></Element>
                    <Element name="salary" className="element" ><BarGraph edData={selected} /></Element>
                    <Element name="commute" className="element" ><Commute edData={selected} /></Element>
                </div>
                <div className="culture-graphs data-category">
                    <h3>Cultural Statistics:</h3>     
                    <Element name="education" className="element" ><EducationGraph edData={selected} /></Element>
                    <Element name="ethnicity" className="element" ><EthnicityGraph ethData = {selected} /></Element>
                    <Element name="population" className="element" ><Population selected = {selected} /></Element>
                    <Element name="ageDistribution" className="element" ><AgeDistributionGraph ethData = {selected} /></Element>
                </div>
                </>
                : <h2 className="map-prompt">Select a city to begin browsing</h2>}
            </div>

        </div>
    );
};

export default DataDisplay;