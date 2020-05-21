import React from "react";

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
      <p style={{ textAlign: "right", fontSize: "10px" }}>
        Source: U.S. Census (2018)
      </p>
    </>
  );
}

export function OwnerCostsModalContent(props) {
  return (
    <div>
      <p style={{ margin: "1.4rem", fontWeight: "450" }}>
        "Mortgage" is focused on homeowners who are currently still paying their
        mortgage.
      </p>
      <p style={{ margin: "1.4rem", fontWeight: "450" }}>
        "No Mortgage" is based on homeowners who no longer pay a mortgage, or
        own their home in it's entirety.
      </p>
      <p style={{ margin: "1.4rem", fontStyle: "italic", fontSize: ".92rem" }}>
        Selected monthly owner costs are a measure of the total costs associated
        with home ownership. (Taxes, utilities, insurance, etc.)
      </p>

      <div style={{ textAlign: "center" }}>
        <p>Source: US Census 2018</p>
      </div>
    </div>
  );
}

export default OwnerCosts;
