import React from 'react';
import styled from "styled-components";
import helpCircle from '../../map-components/assets/helpcircle.svg'

function TotalPopulation({ethData}) {
    function numberCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
	return (
		<div className="homeowner-container">
            <p className="chart-title home-title">Homeowner costs</p>
            {ethData.map(item => 
                <div key={item._id} className="mortgage">
                    <div className="smoc">SMOC <a href="https://factfinder.census.gov/help/en/selected_monthly_owner_costs.htm"><img className="smoc-img"src={helpCircle} alt='smoc reroute'/></a></div>
                    <div className="mortgage-label-container"><span className="mortgage-label">Mortgage: </span><span className="mortgage-price">${numberCommas(item["Median Selected Monthly Owner Costs with Mortgage"])}<span className="month-label">/mo</span></span></div>
                    <div className="mortgage-label-container"><span className="mortgage-label">No Mortgage:</span><span className="mortgage-price">${numberCommas(item["Median Selected Monthly Owner Costs without Mortgage"])}<span  className="month-label">/mo</span></span></div>
                    <div className="city-mortgage-title">{item["City"]}</div>
               </div>
            )}
			
		</div>
	);
}

export default TotalPopulation;
