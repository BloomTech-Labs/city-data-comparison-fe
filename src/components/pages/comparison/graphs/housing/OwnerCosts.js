import React, { useState } from "react";
import useModal from "../../../../modal/useModal";
import Smoc from "./SmocCard";
import Card from "../../../../card/Card.js";

import ReactGA from "react-ga";

export function OwnerCosts({ selected }) {
  function numberCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        {selected.map((item) => (
          <div key={item._id} className="mortgage">
            <div className="mortgage-label-container">
              <span className="mortgage-label">Mortgage: </span>
              <span className="mortgage-price">
                $
                {numberCommas(
                  item["Median Selected Monthly Owner Costs with Mortgage"]
                )}
                <span className="month-label">/mo</span>
              </span>
            </div>
            <div className="mortgage-label-container">
              <span className="mortgage-label">No Mortgage: </span>
              <span className="mortgage-price">
                $
                {numberCommas(
                  item["Median Selected Monthly Owner Costs without Mortgage"]
                )}
                <span className="month-label">/mo</span>
              </span>
            </div>
            <div className="city-mortgage-title">{item["City"]}</div>
          </div>
        ))}
      </div>
    </>
  );
}

export function OwnerCostsModalContent(props) {
  return (
    <div>
      <h1 className="smocTitle">Selected Monthly Owner Costs</h1>
      <p className="smocText">
        Selected monthly owner costs are calculated from the sum of payment for
        mortgages, real estate taxes, various insurances, utilities, fuels,
        mobile home costs, and condominium fees. Listing the items separately
        improves accuracy and provides additional detail.
        
        When combined with income, a new item is created -- Selected Monthly
        Owner Costs as a percentage of household income. This item is used to 
        measure housing affordability and excessive shelter costs. For example,
        many government agencies define excessive as costs that exceed 30 percent
        of household income.
      </p>
      <div className="smoc-link">
        <a href="https://factfinder.census.gov/help/en/selected_monthly_owner_costs.htm">
          Source
        </a>
      </div>
    </div>
  );
}

export default OwnerCosts;
