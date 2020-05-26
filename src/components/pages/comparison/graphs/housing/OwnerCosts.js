import React from "react";
import styled from "styled-components/macro";

const FlexContainer = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-gap: 1.4rem;
  height: 100%;
`;

const Mortgage = styled.div`
  height: auto;
  width: auto;
`;
const MortgagePrice = styled.span`
  font-size: 1.15rem;
  color: #444444;
  margin-left: 3px;
`;
const MortgageLabelContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 5px;
`;
const CityMortgageTitle = styled.div`
  color: #2e2f38;
  font-size: 1rem;
  text-align: center;
  margin-top: 8px;
  color: grey;
`;
const MortgageLabel = styled.span`
  color: grey;
  font-size: 1rem;
`;
const MonthLabel = styled.span`
  font-size: 13px;
  color: darkgrey;
`;

const Source = styled.p`
  text-align: right;
  font-size: 10px;
  @media screen and (min-width: 800px) {
    position: absolute;
    bottom: 1.4rem;
    text-align: center;
    width: 55%;
  }
`;

export function OwnerCosts({ selected }) {
  function numberCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <>
      <FlexContainer>
        {selected.map((item) => (
          <div key={item._id} className="mortgage">
            <MortgageLabelContainer>
              <MortgageLabel>Mortgage: </MortgageLabel>
              <MortgagePrice>
                $
                {numberCommas(
                  item["Median Selected Monthly Owner Costs with Mortgage"]
                )}
                <MonthLabel>/mo</MonthLabel>
              </MortgagePrice>
            </MortgageLabelContainer>
            <MortgageLabelContainer>
              <MortgageLabel>No Mortgage: </MortgageLabel>
              <MortgagePrice>
                $
                {numberCommas(
                  item["Median Selected Monthly Owner Costs without Mortgage"]
                )}
                <MonthLabel>/mo</MonthLabel>
              </MortgagePrice>
            </MortgageLabelContainer>
            <CityMortgageTitle>{item["City"]}</CityMortgageTitle>
          </div>
        ))}
      </FlexContainer>
      <Source>Source: U.S. Census (2018)</Source>
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
