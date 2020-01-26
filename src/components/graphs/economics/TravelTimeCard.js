import React from 'react';
import styled from "styled-components";

const CenterCard = styled.h2`
display:flex;
justify-content:center;

`
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
                    <span className="commute-city-title">{item["City"]}</span>
                    <span className="commute-time-num">{item["Mean Travel Time"]} min.</span>
               </div>
            )}
			
		</div>
	);
}

export default TotalPopulation;
