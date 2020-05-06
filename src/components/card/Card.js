import React from "react";

function Card(props) {
  return (
    <div
      style={{
        backgroundColor: "white",
        width: "auto",
        padding: "1.4rem",
        boxShadow: "0 0px 15px 0 rgba(0, 0, 0, 0.09)",
        borderRadius: "5px",
      }}
    >
      <h4
        style={{
            margin: "1.4rem 1.4rem",
          fontSize: "1.4rem",
          fontWeight: "normal"
        }}
      >
        {props.title}
      </h4> <img style={{textAlign: "right"}}></img>
      <div style={{
          padding: "1.4rem 2.8rem"
      }}>{props.children}</div>
    </div>
  );
}

export default Card;