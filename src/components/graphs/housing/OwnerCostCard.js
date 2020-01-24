import React from 'react';
import styled from "styled-components";

const CenterCard = styled.p`
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
		<div className="homeowner-container">
            {ethData.map(item => 
                <div key={item._id} className="mortgage">
                    <CenterCard> {item["City"]}</CenterCard>
                    <CenterCard>Owner Costs with Mortgage: ${item["Median Selected Monthly Owner Costs with Mortgage"]}</CenterCard>
                    <CenterCard>Owner Costs without Mortgage: ${item["Median Selected Monthly Owner Costs without Mortgage"]}</CenterCard>
               </div>
            )}
			
		</div>
	);
}

export default TotalPopulation;
