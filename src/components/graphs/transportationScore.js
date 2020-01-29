import React from 'react';
import bicycle from '../map-components/assets/bicycle.svg'
import walkingThick from '../map-components/assets/walkingThick.svg'
import walkingThin from '../map-components/assets/walkingThin.svg'
import bus from '../map-components/assets/bus.svg'

function Score({ethData}) {
  

	return (
		<div className="travel-scores-container-two">
            {ethData.map(item => 
                <div key={item._id}>
                    <div>
                        <p>Score breakdown</p>
                        <div>
                            <div>
                                <p>90 - 100</p>
                                <p>70 - 89</p>
                                <p>50 - 69</p>
                                <p>25 - 49</p>
                                <p>0 - 24</p>
                            </div>
                            <div>
                                <p>Optimal</p>
                                <p>Excellent</p>
                                <p>Good</p>
                                <p>Minimal</p>
                                <p>Inadequate</p>
                            </div>
                        </div>
                    </div>

                    <div> 
                        <p>Walk score</p>
                        <p>Pedestrian friendliness</p>
                        <div>
                            <p>{item['Walk Score']}</p>
                            <img src={walkingThick} alt="walking person" />
                        </div>
                        <p>{item['City']}</p>
                    </div>


                    <div> 
                        <p>Transit score</p>
                        <p>Public transport accessibility</p>
                        <div>
                            <p>{item['Transit Score']}</p>
                            <img src={bus} alt="bus" />
                        </div>
                        <p>{item['City']}</p>
                    </div>


                    <div> 
                        <p>Bike score</p>
                        <p>Biking infrastructure</p>
                        <div>
                            <p>{item['Bike Score']}</p>
                            <img src={bicycle} alt="bike" />
                        </div>
                        <p>{item['City']}</p>
                    </div>
                    
               </div>
            )}
		</div>
	);
}

export default Score;