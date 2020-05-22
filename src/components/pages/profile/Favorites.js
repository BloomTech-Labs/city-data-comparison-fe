import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ProfileCard from "./cards/ProfileCard";
import {
  getFavorites,
  removeFavorite,
} from "../../../redux/actions/userActions";
import closeIcon from "../../../assets/icons/close.svg";

import { getCity } from "../../../redux/actions/cityActions";

import { cityDataById } from "../../../utils/axiosDataScience";

const Favorite = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [cityData, setCityData] = useState({});

  useEffect(() => {
    cityDataById()
      .get(`/${props.favorite.city_id}`)
      .then((res) => setCityData(res.data))
      .catch((err) => console.log(err));
  }, [props.favorite]);

  return (
    <div className="single-fav">
      <p className="fav-title">{cityData["name_with_com"]}</p>
      <button
        className="go-btn"
        onClick={() => {
          dispatch(getCity(cityData.name_with_com));
          history.push("/compare");
        }}
      >
        Go to City
      </button>
      <div
        style={{
          display: "flex",
          cursor: "pointer",
          alignItems: "center",
          justifyContent: "spaceAround",
          background: "white",
          width: "1.4rem",
          borderRadius: "0.3rem",
          margin: "0",
          position: "absolute",
          right: "1.4rem",
          top: "2rem",
        }}
      >
        <img
          alt={"Remove favorite"}
          style={{
            width: "100%",
            opacity: "84%",
            color: "",
          }}
          src={closeIcon}
          onClick={() => {
            dispatch(removeFavorite(cityData._id));
          }}
        />
      </div>
    </div>
  );
};

const Favorites = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFavorites());
  }, [dispatch]);

  const favorites = useSelector((state) => state.userReducer.favorites);

  return (
    <>
      <div className={"favorites"}>
        <h1>Favorites</h1>
        <div className="update-favorites">
          {favorites.map((favorite) => (
            <ProfileCard>
              <Favorite favorite={favorite} />
            </ProfileCard>
          ))}
        </div>
      </div>
    </>
  );
};

export default Favorites;
