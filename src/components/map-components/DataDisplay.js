import  React, {useState, useEffect} from "react";
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import ReactGA from "react-ga";

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
import AgeDistributionGraph from "../graphs/culture/AgeDistrubution";
import RetirementGraph from "../graphs/economics/retirement";
import VacancyGraph from "../graphs/housing/vacancy";
import UnemploymentCard from "../graphs/economics/unemploymentCard";
import deleteIcon from "./icons/close_red.png";
import GeneralStats from "../graphs/GeneralStats";
import TravelTime from "../graphs/economics/TravelTimeCard";
import HealthInsurance from "../graphs/economics/HealthInsuranceCard";
import OwnerCostCard from "../graphs/housing/OwnerCostCard"
import BirthRateCard from "../graphs/culture/birthRateCard"

const DataDisplay = ({search, selected, toggleSelected, onSearch, setSearch, cityMarkers, viewport, setViewport, selectSearch}) => {

    const [menu, setMenu] = useState({status: 'closed'})

    const dataNavClicked = link => {
        ReactGA.event({ category: 'Data', 
        action: `clicked ${link} link` });
    }

    // fixed sidebar handling
    window.onscroll = _ => scrollAnchor();
    var stickynav = document.getElementById("stickynav");
    var height = document.body.scrollHeight;
    if (stickynav) {
        // This line handles the offset from the main nav bar - If we unfix the main nav bar
        // (i believe we will) - the subtraction will be unnecessary.
        var sticky = stickynav.offsetTop - 83;
    }

    var isScrolledToFooter = _ => 
        window.pageYOffset > document.body.scrollHeight - window.innerHeight - 300;

    const colorifier = lat => {

        let arr = String(lat).replace(".","").split("");
    
        let num1 = arr.pop();
        let num2 = arr.pop();
        let num3 = arr.pop();
    
        return `rgb(${num1 * 28}, ${num2 * 28}, ${num3 * 28})`
        }

    


    const scrollAnchor = _ => {
        if (window.pageYOffset > sticky && !isScrolledToFooter()) {
            stickynav.classList.add("sticky");
        } else {
            stickynav.classList.remove("sticky");
        }
        if (isScrolledToFooter() && selected.length > 0) {
            stickynav.classList.add("nav-bottom-anchor")
        } 
        else {
            stickynav.classList.remove("nav-bottom-anchor")
        }
    }

    

    const toggleMenu = () => {
        if (menu.status === 'closed') {
            setMenu({...menu, status:'open'}) 
        } else if (menu.status === 'open') {
            setMenu({...menu, status:'closed'})
        }
    }
     
    return (
        <div className="data-browser">
            <div className="nav-placeholder">
            <nav id="stickynav" className="data-nav">
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
                                {/* <p className="anchor-header">General Statistics</p> */}
                                <Link onClick={() => dataNavClicked("generalStats")} id="general" activeClass="active" className="anchor-link" to="generalStats" spy={true} smooth={true} duration={500} >First impressions</Link>
                                <p className="anchor-header">Housing</p>
                                <Link onClick={() => dataNavClicked("housing costs")} activeClass="active" className="anchor-link" to="homeprice" spy={true} smooth={true} duration={500} >Housing Costs</Link>
                                <Link onClick={() => dataNavClicked("ownerCosts")} activeClass="active" className="anchor-link" to="ownerCosts" spy={true} smooth={true} duration={500} >Owner Costs</Link>
                                <Link onClick={() => dataNavClicked("rent")} activeClass="active" className="anchor-link" to="rent" spy={true} smooth={true} duration={500} >Rent</Link>
                                <Link onClick={() => dataNavClicked("rooms")} activeClass="active" className="anchor-link" to="rooms" spy={true} smooth={true} duration={500} >Rooms</Link>
                                <Link onClick={() => dataNavClicked("vacancy")} id="nav-spacing" activeClass="active" className="anchor-link" to="vacancy" spy={true} smooth={true} duration={500} >Vacancy</Link>
                                
                                <p className="anchor-header">Jobs</p>
                                <Link onClick={() => dataNavClicked("industries")} activeClass="active" className="anchor-link" to="industries" spy={true} smooth={true} duration={500} >Industries</Link>
                                <Link onClick={() => dataNavClicked("healthInsurance")} activeClass="active" className="anchor-link" to="healthInsurance" spy={true} smooth={true} duration={500} >Health Insurance</Link>
                                <Link onClick={() => dataNavClicked("salary")} activeClass="active" className="anchor-link" to="salary" spy={true} smooth={true} duration={500} >Salary</Link>
                                <Link onClick={() => dataNavClicked("travelTime")} activeClass="active" className="anchor-link" to="travelTime" spy={true} smooth={true} duration={500} >Travel Time to Work</Link>
                                <Link onClick={() => dataNavClicked("commute")} activeClass="active" className="anchor-link" to="commute" spy={true} smooth={true} duration={500} >Commute</Link>
                                <Link onClick={() => dataNavClicked("retirement")} activeClass="active" className="anchor-link" to="retirement" spy={true} smooth={true} duration={500} >retirement</Link>
                                <Link onClick={() => dataNavClicked("unemploymentRate")} id="nav-spacing" activeClass="active" className="anchor-link" to="unemploymentRate" spy={true} smooth={true} duration={500} >Unemployment Rate</Link>

                                <p className="anchor-header">Culture</p>
                                <Link onClick={() => dataNavClicked("education")} activeClass="active" className="anchor-link" to="education" spy={true} smooth={true} duration={500} >Education</Link>
                                <Link onClick={() => dataNavClicked("ethnicity")} activeClass="active" className="anchor-link" to="ethnicity" spy={true} smooth={true} duration={500} >Ethnicity</Link>
                                <Link onClick={() => dataNavClicked("birthRate")} activeClass="active" className="anchor-link" to="birthRate" spy={true} smooth={true} duration={500} >Birth Rate</Link>
                                <Link onClick={() => dataNavClicked("population")} activeClass="active" className="anchor-link" to="population" spy={true} smooth={true} duration={500} >Population</Link>
                                <Link onClick={() => dataNavClicked("ageDistribution")} id="nav-spacing" activeClass="active" className="anchor-link" to="ageDistribution" spy={true} smooth={true} duration={500} >Age Distribution</Link>

                            </div>
                            : null}
                        </div>
                    </div>
                    <ul>
                        {selected.map(item => 
                        <div key={item._id} className={`menu-items ${menu.status}`}>
                            <li key={item._id}><span className="color-legend-text"><div className="color-legend" style={{display: "inline-block", background: colorifier(item.Longitude), height: "1rem", width: "1rem", marginRight: ".5rem"}}></div>{item.name_with_com}</span> 
                                <span onClick={ _ => toggleSelected(item)}>
                                    <img className="delete-icon" src={deleteIcon} alt="delete icon" />
                                </span>
                            </li>
                        </div>)}
                    </ul>
                </div>    
            </nav>
            </div>

            <div className="data-by-category">
                {selected.length > 0 
                ? <> 
                <div className="housing-graphs data-category">
                    <h3>General Statistics:</h3>
                    <Element name="generalStats" className="element" ><GeneralStats ethData = {selected} /></Element>
                    <h3>Housing:</h3>
                    <Element name="homeprice" className="element" ><LineGraph selected = {selected} /></Element>
                    <Element name="ownerCosts" className="element" ><OwnerCostCard ethData = {selected} /></Element>
                    <Element name="rent" className="element" ><RentChart edData={selected} /></Element>
                    <Element name="rooms" className="element" ><RoomGraph edData={selected} /></Element>
                    <Element name="vacancy" className="element" ><VacancyGraph edData={selected} /></Element>
                </div> 
                

                <div className="jobs-graphs data-category">
                    <h3>Job Market:</h3>
                    <Element name="industries" className="element" ><Industry edData={selected} /></Element>
                    <Element name="healthInsurance" className="element" ><HealthInsurance ethData = {selected} /></Element>
                    <Element name="salary" className="element" ><BarGraph edData={selected} /></Element>
                    <Element name="travelTime" className="element" ><TravelTime ethData = {selected} /></Element>
                    <Element name="commute" className="element" ><Commute edData={selected} /></Element>
                    <Element name="retirement" className="element" ><RetirementGraph ethData={selected} /></Element>
                    <Element name="unemploymentRate" className="element" ><UnemploymentCard ethData = {selected} /></Element>

                </div>
                <div className="culture-graphs data-category">
                    <h3>Cultural Statistics:</h3>     
                    <Element name="education" className="element" ><EducationGraph edData={selected} /></Element>
                    <Element name="ethnicity" className="element" ><EthnicityGraph ethData = {selected} /></Element>
                    <Element name="birthRate" className="element" ><BirthRateCard ethData = {selected} /></Element>
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