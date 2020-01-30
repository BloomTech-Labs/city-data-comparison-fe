import React from 'react';
import styled from "styled-components";
import clock from '../../map-components/assets/clock.svg'


function TotalPopulation({ethData}) {



	
	return (
		<div className="commute-time-container-big">
            {ethData.map(item => 
                <div key={item._id} className="commute-time-container">
                    <span className="commute-city-title">Average commute time</span>
                    <span className="commute-time-num"><img className="commute-clock" src={clock} alt="clock"/>{item["Mean Travel Time"]} min.</span>
                    <p id="commute-label">{item["City"]}</p>
               </div>
            )}
			
		</div>
	);
}

export default TotalPopulation;
