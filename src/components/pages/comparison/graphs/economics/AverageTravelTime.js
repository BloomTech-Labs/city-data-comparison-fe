import React from "react";
import clock from "../../assets/clock.svg";

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
      <p style={{ textAlign: "right", fontSize: "10px" }}>
        Source: U.S. Census (2018)
      </p>
    </>
  );
}

export default AverageTravelTime;
