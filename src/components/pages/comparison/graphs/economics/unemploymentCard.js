import React from 'react';
import archive from '../../assets/archive.svg'
import Card from '../../../../card/Card'

function TotalPopulation({ethData}) {	
	return (
		<Card title={"Unemployment Rate"}>
            <div style={{display: 'flex', flexWrap: 'wrap', width: '100%', justifyContent: 'space-around'}}>
            {ethData.map(item => 
                <div key={item._id} className="unemployment-container">
                    <span className="unemployment-num"><img className="archive" src={archive} alt="archive"/> {item["Unemployment Rate"]}%</span>
                    <p className="unemployment-label">are unemployed in {item["City"]}</p>
               </div>
            )}
			</div>
		</Card>
	);
}

export default TotalPopulation;