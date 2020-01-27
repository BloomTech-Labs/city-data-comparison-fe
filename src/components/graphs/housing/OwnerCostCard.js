import React from 'react';
import styled from "styled-components";

const CenterCard = styled.p`
display:flex;
justify-content:center;
text-align:center;
`
function TotalPopulation({ethData}) {
	
	return (
		<div className="homeowner-container">
            <p className="chart-title home-title">Homeowner costs</p>
            {ethData.map(item => 
                <div key={item._id} className="mortgage">
                    <div className="city-mortgage-title">{item["City"]}</div>
                    <div className="mortgage-label-container"><span className="mortgage-label">Mortgage: </span><span className="mortgage-price">${item["Median Selected Monthly Owner Costs with Mortgage"]}<span className="month-label">/mo</span></span></div>
                    <div className="mortgage-label-container"><span className="mortgage-label">Without Mortgage:</span><span className="mortgage-price">${item["Median Selected Monthly Owner Costs without Mortgage"]}<span  className="month-label">/mo</span></span></div>
               </div>
            )}
			
		</div>
	);
}

export default TotalPopulation;
