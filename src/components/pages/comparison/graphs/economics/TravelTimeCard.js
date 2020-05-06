import React from 'react';
import styled from "styled-components";
import clock from '../../assets/clock.svg'
import Card from '../../../../card/Card.js'


function TotalPopulation({ethData}) {



	
	return (
        <Card title={"Average Commute Time"}>
            <div style={{display: 'flex', flexWrap: 'wrap', width: '100%', justifyContent: 'space-around'}}>
           
            {ethData.map(item => 
                <div key={item._id} className="commute-time-container">
                    <span className="commute-time-num"><img className="commute-clock" src={clock} alt="clock"/>{item["Mean Travel Time"]} min.</span>
                    <p id="commute-label">{item["City"]}</p>
               </div>
            )}
             </div>
			
		</Card>
	);
}

export default TotalPopulation;
