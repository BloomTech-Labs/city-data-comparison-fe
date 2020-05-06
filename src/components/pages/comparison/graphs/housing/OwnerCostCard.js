import React, {useState} from 'react';
import useModal from "../../../../modal/useModal";
import Smoc from "./SmocCard"
import { Link, Element } from 'react-scroll'
import Card from '../../../../card/Card.js'

import ReactGA from "react-ga";

function TotalPopulation({ethData}) {
    const {isShowing, toggle} = useModal();
    const [modalState, setModalState] = useState();

    function numberCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    const SmocClicked = link => {
        ReactGA.event({ category: 'Data', 
        action: `clicked ${link} link` });
    }

	return (
        <>
        <Card title={"Homeowner Costs"} modalContent={<Smoc/>}>
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-around'
            }}>
            {ethData.map(item =>
                <div key={item._id} className="mortgage">
                    <div className="mortgage-label-container"><span className="mortgage-label">Mortgage: </span><span className="mortgage-price">${numberCommas(item["Median Selected Monthly Owner Costs with Mortgage"])}<span className="month-label">/mo</span></span></div>
                    <div className="mortgage-label-container"><span className="mortgage-label">No Mortgage: </span><span className="mortgage-price">${numberCommas(item["Median Selected Monthly Owner Costs without Mortgage"])}<span  className="month-label">/mo</span></span></div>
                    <div className="city-mortgage-title">{item["City"]}</div>
               </div>
            )}
            </div>
			
            </Card>
        </>
	);
}

export default TotalPopulation;
