import React from "react";
import { useDispatch } from "react-redux";
import { removeCity } from "../../../../redux/actions/cityActions.js";
import closeIcon from "../../../../assets/icons/close.svg";

const DeselectCityButton = ({ city }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(removeCity(city["_id"]));
  };
  return (
    <div
      style={{
        display: "flex",
        cursor: "pointer",
        alignItems: "center",
        justifyContent: "spaceAround",
        background: "white",
        width: "1.4rem",
        borderRadius: "0.3rem",
        margin: "0 0.3rem",
        marginRight: "0.6rem",
      }}
    >
      <img
        alt={"Deselect city."}
        style={{
          width: "100%",
          opacity: "84%",
          color: "",
        }}
        src={closeIcon}
        onClick={handleClick}
      />
    </div>
  );
};
export default DeselectCityButton;
