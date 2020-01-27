import React from 'react';
import insurance from '../../map-components/assets/activity.svg'

function TotalPopulation({ethData}) {
	
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
