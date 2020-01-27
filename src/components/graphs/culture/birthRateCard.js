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
