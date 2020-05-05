import React from "react";
import Industry from "../../graphs/economics/industries";
import Commute from "../../graphs/economics/commute";
import BarGraph from "../../graphs/economics/HouseIncome_BarGraph";

const Jobs = ({selected}) => {

    return (
        <div className="jobs-graphs data-category">
            <h3>Job Market:</h3>
            <Industry edData={selected} />
            <BarGraph edData={selected} />
            <Commute edData={selected} />
        </div>
    )
}
export default Jobs;