import React from 'react';
import archive from '../../assets/archive.svg'

function TotalPopulation({ethData}) {	
	return (
		<>
            {ethData.map(item => 
                <div key={item._id} className="unemployment-card-container">
                    <span className="unemployment-title">Unemployment rate</span>
                    <span className="unemployment-num"><img className="archive" src={archive} alt="archive"/> {item["Unemployment Rate"]}%</span>
                    <p className="unemployment-label">are unemployed in {item["City"]}</p>
               </div>
            )}
			
		</>
	);
}

export default TotalPopulation;