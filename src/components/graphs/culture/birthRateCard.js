import React from 'react';
import styled from "styled-components";

const CenterCard = styled.h2`
display:flex;
justify-content:center;

`
function TotalPopulation({ethData}) {
	
	return (
		<div className="birth-card-container-mobile">
            {ethData.map(item => 
                <div key={item._id} className="birth-card-container">
                    <span className="birth-title">Birth rate</span>
                    <div className="birth-num"><span className="mothers-num">{item['Recent Mothers']['Birth Rate']['Avg']}</span><span className="birth-rate-label">births per 1000 women</span></div>    
                    <p className="birth-label">{item["City"]}</p>
               </div>
            )}
		</div>
	);
}

export default TotalPopulation;
