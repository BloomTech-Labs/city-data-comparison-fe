import React from 'react';
import archive from '../../map-components/assets/archive.svg'

function TotalPopulation({ethData}) {	
	return (
		<div>
            {ethData.map(item => 
                <div key={item._id} className="unemployment-card-container">
                    <span className="unemployment-title">Unemployment rate</span>
                    <span className="unemployment-num"><img className="archive" src={archive} alt="archive"/> {item["Unemployment Rate"]}%</span>
                    <p className="unemployment-label">are unemployed in {item["City"]}</p>
               </div>
            )}
			
		</div>
	);
}

export default TotalPopulation;