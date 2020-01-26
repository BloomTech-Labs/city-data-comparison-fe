import React from 'react';
import archive from '../../map-components/assets/archive.svg'

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
                <div key={item._id} className="unemployment-card-container">
                    <span className="unemployment-title">Unemployment rate</span>
                    <span className="unemployment-num"><img className="archive" src={archive} alt="archive"/> {item["Unemployment Rate"]}%</span>
                    <p className="unemployment-label">{item["City"]}</p>
               </div>
            )}
			
		</div>
	);
}

export default TotalPopulation;