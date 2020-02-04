
import React from 'react';
import styled from "styled-components";

import world from '../map-components/assets/world.svg'
import pop from '../map-components/assets/population.svg'
import users from '../map-components/assets/users.svg'
import briefcase from '../map-components/assets/briefcase.svg'
import income from '../map-components/assets/dollar.svg'
import FavoriteButton from '../map-components/FavoriteButton'
import Recommendations from "./Recommendations"

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
            <div key={item._id} className="city-overview-container-medium">
            <div className="city-overview-container"> 
            <div className="city-overview-border">
                <p>City overview</p>
                <FavoriteButton city={item}/>
            </div>
            <div className="city-info-container">
                <div className="city-overview-container-one">
                    <div className="overview-title-container-one">
                        <div className="overview-title"> <img alt="world" src={world} /> City</div>
                        <div className="overview-title"> <img alt="people" src={pop} /> Population</div>
                        <div className="overview-title"> <img alt="age" src={users} /> Median age</div>
                    </div>

                    <div className="overview-stats-container-one">
                        <div className="overview-stats">{item["City"]}</div>
                        <div className="overview-stats">{numberCommas(item["Total Population"])}</div>
                        <div className="overview-stats">{item["Median Age"]} years old</div>
                    </div>
                </div>





                <div className="city-overview-container-two">
                    <div className="overview-title-container-two">
                        <div className="overview-title"><img alt="briefcase" src={briefcase} />Median rent</div>
                        <div className="overview-title"><img alt="income" src={income} />Median income</div>
                    </div>


                    <div className="overview-stats-container-two">
                        <div className="overview-stats">${numberCommas(item["Median Rent"])}</div>
                        <div className="overview-stats">${numberCommas(item["Median Per Capita Income"])}</div>
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

