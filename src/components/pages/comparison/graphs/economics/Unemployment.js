import React from "react";
import archive from "../../assets/archive.svg";

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
      <p style={{ textAlign: "right", fontSize: "10px" }}>
        Source: U.S. Census (2018)
      </p>
    </>
  );
}

export default Unemployment;
