import React from 'react';

function Score({ethData}) {
  

	return (
		<div className="dataCards">
            {ethData.map(item => 
                <div key={item._id}>
                    <div> City: {item['City']}</div>
                    <div> Bike Score: {item['Bike Score']}%</div>
                    <div> Transit Score: {item['Transit Score']}%</div>
                    <div> Walk Score: {item['Walk Score']}%</div>

               </div>
            )}
			
		</div>
	);
}

export default Score;