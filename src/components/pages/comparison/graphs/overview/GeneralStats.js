import React from 'react';
import {useState, useEffect} from 'react';
import styled from "styled-components";
import world from '../pages/comparison/map-components/assets/world.svg'
import pop from '../pages/comparison/map-components/assets/population.svg'
import users from '../pages/comparison/map-components/assets/users.svg'
import briefcase from '../pages/comparison/map-components/assets/briefcase.svg'
import income from '../pages/comparison/map-components/assets/dollar.svg'
import weather from '../pages/comparison/map-components/assets/activity.svg'
import FavoriteButton from '../pages/comparison/map-components/FavoriteButton'
import Recommendations from "./Recommendations"
import DeselectCityButton from "../pages/comparison/map-components/DeselectCityButton.js"

// const CenterCard = styled.h3`
// display:flex;
// flex-wrap:wrap;

const Wrap = styled.div`
display:flex;
flex-direction:row;
`
const Table = styled.table`
width:100%;
`
function TotalPopulation({ethData}) {
    function numberCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    return (

        <div className="city-overview-container-small">
            {ethData.map(item => 
            <div key={item._id} className="city-overview-card">
            <div className="city-overview-container"> 
            <div className="city-overview-border">
                <p>{item["City"]}</p>
                <FavoriteButton city={item}  />
                <DeselectCityButton city={item} />
            </div>
            <div className="city-info-container">
                <div className="city-overview-container-one">
                    <div className="overview-title-container-one">
                        <div className="overview-title"><img alt="income" src={income} />Median income</div>
                        <div className="overview-title"><img alt="briefcase" src={briefcase} />Median rent</div>
                    </div>

                    <div className="overview-stats-container-one">
                        <div className="overview-stats">${numberCommas(item["Median Per Capita Income"])}</div>
                        <div className="overview-stats">${numberCommas(item["Median Rent"])}</div>
                    </div>
                </div>





                <div className="city-overview-container-two">
                    <div className="overview-title-container-two">
                        <div className="overview-title"> <img alt="people" src={pop} /> Population</div>
            <div className="overview-title"> <img alt="people" src={weather} /> {new Date().toLocaleString('default', { month: 'long' })} average</div>
                    </div>

                    <div className="overview-stats-container-two">
                        <div className="overview-stats">{numberCommas(item["Total Population"])}</div>
                        <div className="overview-stats">{`${Math.floor(item["weather"]["tavg"][`TAVG-AVG-${new Date().getMonth()}`])}° F`}</div>
                    </div>
                </div>
            </div>
            </div>
                {/* we don't want recommendations on the profile list of favorites */}
                {window.location.href.includes("profile") ? <div style={{marginTop: "1%"}} /> : 
                <div>
                    <Recommendations city={item}/>
                </div>}
            </div>
            )}
            
        </div>
	);
}

export default TotalPopulation;
