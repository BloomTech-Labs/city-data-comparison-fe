import React, {useState} from 'react';
import styled from "styled-components";
import helpCircle from '../../map-components/assets/helpcircle.svg'
import SmocModal from "../../modal/smocModule";
import useModal from "../../modal/useModal";
import Smoc from "../../modal/SmocCard";
import { Link, Element } from 'react-scroll'
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
               <SmocModal
                    isShowing={isShowing}
                    hide={toggle}
                    component={modalState}
               />
		<div className="homeowner-container">
            <p className="chart-title home-title">Homeowner costs</p>
            {ethData.map(item => 
                <div key={item._id} className="mortgage">
                    <div className="smoc">SMOC 
                    <Link onClick={() => SmocClicked (setModalState(<Smoc/>), toggle())}  style={{cursor: "pointer"}}>
                        <img className="smoc-img"src={helpCircle} alt='smoc reroute'/></Link>
                    
                    </div>



                    <div className="mortgage-label-container"><span className="mortgage-label">Mortgage: </span><span className="mortgage-price">${numberCommas(item["Median Selected Monthly Owner Costs with Mortgage"])}<span className="month-label">/mo</span></span></div>
                    <div className="mortgage-label-container"><span className="mortgage-label">No Mortgage:</span><span className="mortgage-price">${numberCommas(item["Median Selected Monthly Owner Costs without Mortgage"])}<span  className="month-label">/mo</span></span></div>
                    <div className="city-mortgage-title">{item["City"]}</div>
               </div>
            )}
			
		</div>
        </>
	);
}

export default TotalPopulation;
