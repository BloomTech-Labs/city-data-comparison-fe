import React from 'react';
import styled from "styled-components";
import clock from '../../map-components/assets/clock.svg'


function TotalPopulation({ethData}) {
    // console.log(ethData, "ETH")
	// const colorifier = lat => {

    //     let arr = String(lat).replace(".","").split("");
    
    //     let num1 = arr.pop();
    //     let num2 = arr.pop();
    //     let num3 = arr.pop();
    
    //     return `rgb(${num1 * 28}, ${num2 * 28}, ${num3 * 28})`
    //     }


	
	return (
		<div>
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
