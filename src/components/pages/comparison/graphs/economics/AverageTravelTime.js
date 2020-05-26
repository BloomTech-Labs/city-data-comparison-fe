import React from "react";
import clock from "../../assets/clock.svg";
import styled from "styled-components/macro";

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

function AverageTravelTime({ selected }) {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          width: "100%",
          justifyContent: "space-around",
        }}
      >
        {selected.map((item) => (
          <div key={item._id} className="commute-time-container">
            <span className="commute-time-num">
              <img className="commute-clock" src={clock} alt="clock" />
              {item["Mean Travel Time"]} min.
            </span>
            <p id="commute-label">{item["City"]}</p>
          </div>
        ))}
      </div>
      <Source>Source: U.S. Census (2018)</Source>
    </>
  );
}

export default AverageTravelTime;
