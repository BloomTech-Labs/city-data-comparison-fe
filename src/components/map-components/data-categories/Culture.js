import React from "react";
import EthnicityGraph from "../../graphs/culture/EthnicityGraph";
import Population from "../../graphs/culture/PopulationGraph";
import EducationGraph from "../../graphs/culture/EducationGraph";
import AgeDistributionGraph from "../graphs/culture/AgeDistrubution"

const Culture = ({selected}) => {

    return (
        <div className="culture-graphs data-category">
            <h3>Cultural Statistics:</h3>     
            <span id="education"><EducationGraph edData={selected} /></span>
            <span id="ethnicity"><EthnicityGraph ethData = {selected} /></span>
            <span id="population"><Population selected = {selected} /></span>
            {/* <span id="population"><AgeDistributionGraph ethData = {selected} /></span> */}
        </div>
    )
}
export default Culture;