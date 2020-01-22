import React, { useState, useEffect } from 'react';
import styled from "styled-components";

const CenterCard = styled.h2`
display:flex;
justify-content:center;

`
function TotalPopulation({ethData}) {
    // console.log(ethData, "ETH")
	const colorifier = lat => {

        let arr = String(lat).replace(".","").split("");
    
        let num1 = arr.pop();
        let num2 = arr.pop();
        let num3 = arr.pop();
    
        return `rgb(${num1 * 28}, ${num2 * 28}, ${num3 * 28})`
        }


	
	return (
		<div className="dataCards">
            <h1>Mean Travel Time To Work</h1>

            {ethData.map(item => 
                <div key={item._id}>
                    <CenterCard> {item["City"]}</CenterCard>
                    <CenterCard> {item["Mean Travel Time"]}min.</CenterCard>

               </div>
            )}
			
		</div>
	);
}

export default TotalPopulation;
