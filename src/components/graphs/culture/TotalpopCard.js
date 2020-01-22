import React, { useState, useEffect } from 'react';
import Axios from 'axios';


function TotalPopulation() {
	const [ data, setData ] = useState({});
	const getCity = cityMarker => {
        Axios.get(`http://api.citrics.io/jkekal6d6e5si3i2ld66d4dl/citydata/${cityMarker.ID}`)
        .then(res => {
          setData([...data, res.data])
        })
    }

	console.log(data, "HIIII");
	return (
		<div className="rapper">
            <h1>Total Population</h1>
			<h2>{getCity["Total Population"]}</h2>
			
		</div>
	);
}

export default TotalPopulation;
