import React, { useContext, useEffect } from "react";
import { UserContext } from "../../../../contexts/UserContext";
import { useHistory } from "react-router-dom";
import heart_icon from "../assets/heart.svg";
import filled_heart from "../../../../assets/icons/filled_heart.svg";
import ReactGA from "react-ga";

const FavoriteButton = ({ city }) => {
  const history = useHistory();
  const { favorites, setFavorites, user, axiosAuth } = useContext(UserContext);

  const favcities = [{}];

  useEffect(() => {
    if (user) {
      axiosAuth()
        .get(`/api/users/favs`)
        .then((response) => {
          response.data.forEach((cityid) => {
            favcities.push(cityid.city_id);
            setFavorites([...favorites, ...favcities]);
          });
        })
        .catch((error) => console.log(error));
    }
  }, []);

  const toggle = () => {
    if (user) {
      if (favorites.includes(city._id)) {
        removeFromFavorites(city);
      } else {
        saveToFavorites(city);
      }
    } else {
      history.push("/signup");
    }
  };
  const saveToFavorites = (city) => {
    if (!user) return;
    ReactGA.event({
      category: "User",
      action: `added city to favorites: ${city.name_with_com}`,
    });
    let cityReq = { city_id: city._id };
    axiosAuth()
      .post(`/users/favs`, cityReq)
      .then((response) => {
        setFavorites([...favorites, city._id]);
      })
      .catch((error) => console.log(error));
  };
  const removeFromFavorites = (city) => {
    if (!user) return;
    let cityReq = { city_id: city._id };
    ReactGA.event({
      category: "User",
      action: `removed city from favorites: ${city.name_with_com}`,
    });
    axiosAuth()
      .delete(`/users/favs`, { data: cityReq })
      .then((response) => {
        setFavorites(favorites.filter((item) => item !== city._id));
      })
      .catch((err) => console.log(err));
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
          justifyContent: "spaceAround",
          background: "white",
          width: "1.4rem",
          justifyContent: "space-around",
          borderRadius: "0.3rem",
          margin: "0 0.3rem",
          "margin-left": "auto",
        }}
      >
        <img
          style={{ width: "100%" }}
          src={
            favorites && favorites.includes(city._id)
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
