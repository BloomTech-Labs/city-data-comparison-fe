import React, {useState} from 'react';
import useModal from "../../../../modal/useModal";
import Smoc from "./SmocCard"
import Card from '../../../../card/Card.js'

import ReactGA from "react-ga";

function OwnerCosts({selected}) {

    function numberCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

	return (
        <>
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-around'
            }}>
            {selected.map(item =>
                <div key={item._id} className="mortgage">
                    <div className="mortgage-label-container"><span className="mortgage-label">Mortgage: </span><span className="mortgage-price">${numberCommas(item["Median Selected Monthly Owner Costs with Mortgage"])}<span className="month-label">/mo</span></span></div>
                    <div className="mortgage-label-container"><span className="mortgage-label">No Mortgage: </span><span className="mortgage-price">${numberCommas(item["Median Selected Monthly Owner Costs without Mortgage"])}<span  className="month-label">/mo</span></span></div>
                    <div className="city-mortgage-title">{item["City"]}</div>
               </div>
            )}
            </div>
        </>
	);
}

export default OwnerCosts;
