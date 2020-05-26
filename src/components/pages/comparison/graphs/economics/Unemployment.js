import React from "react";
import archive from "../../assets/archive.svg";
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

function Unemployment({ selected }) {
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
          <div key={item._id} className="unemployment-container">
            <span className="unemployment-num">
              <img className="archive" src={archive} alt="archive" />{" "}
              {item["Unemployment Rate"]}%
            </span>
            <p className="unemployment-label">
              are unemployed in {item["City"]}
            </p>
          </div>
        ))}
      </div>
      <Source>Source: U.S. Census (2018)</Source>
    </>
  );
}

export default Unemployment;
