import React, { useEffect } from "react";

import { useHistory } from "react-router-dom";
import heart_icon from "../assets/heart.svg";
import filled_heart from "../../../../assets/icons/filled-heart.png";

import { useDispatch, useSelector } from "react-redux";
import {
  getFavorites,
  addFavorite,
  removeFavorite,
} from "../../../../redux/actions/userActions";

const FavoriteButton = ({ city }) => {
  const history = useHistory();

  const dispatch = useDispatch();

  const favorites = useSelector((state) => state.userReducer.favorites);
  const user = useSelector((state) => state.userReducer.user);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(getFavorites());
    }
  }, [dispatch]);

  const toggle = () => {
    if (user) {
      if (
        favorites.filter((favorite) => favorite.city_id === city._id).length > 0
      ) {
        dispatch(removeFavorite(city._id));
      } else {
        dispatch(addFavorite(city));
      }
    } else {
      history.push("/signup");
    }
  };

  return (
    <>
      <div
        className="heart-button"
        onClick={() => toggle()}
        style={{
          display: "flex",
          cursor: "pointer",
          alignItems: "center",
          background: "white",
          width: "1.4rem",
          justifyContent: "space-between",
          borderRadius: "0.3rem",
          margin: "0 0.3rem",
          marginLeft: "auto",
        }}
      >
        <img
          style={{ width: "100%" }}
          src={
            favorites &&
            favorites.filter((favorite) => favorite.city_id === city._id)
              .length > 0
              ? filled_heart
              : heart_icon
          }
          alt="add to favorites"
        />
      </div>
    </>
  );
};
export default FavoriteButton;
