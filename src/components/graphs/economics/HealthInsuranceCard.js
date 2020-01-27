import React from 'react';
import insurance from '../../map-components/assets/activity.svg'

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
		<div className="dataCards">
            {ethData.map(item => 
                <div key={item._id} className="healthinsurance-card-container">
                <span className="healthinsurance-title">Health insurance</span>
                <span className="healthinsurance-num"><img className="activity" alt="activity" src={insurance}/>{item["Health Insurance"]}%</span>
                <p className="healthinsurance-label">have health insurance in {item["City"]}</p>
               </div>
            )}
			
		</div>
	);
}

export default TotalPopulation;
