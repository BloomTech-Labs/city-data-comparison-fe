import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Card from "../../card/Card";

import { getFavorites } from "../../../redux/actions/userActions";

import { cityDataById } from "../../../utils/axiosDataScience";

const Favorite = (props) => {
  const [cityData, setCityData] = useState({});
  useEffect(() => {
    cityDataById()
      .get(`/${props.favorite.city_id}`)
      .then((res) => setCityData(res.data))
      .catch((err) => console.log(err));
  }, [props.favorite]);
  return (
    <div>
      <p>{cityData["name_with_com"]}</p>
    </div>
  );
};

const Favorites = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFavorites());
  }, []);
  const favorites = useSelector((state) => state.userReducer.favorites);
  return (
    <>
      <div className={"favorites"}>
        <div className="update-favorites">
          {favorites.map((favorite) => (
            <Card>
              <Favorite favorite={favorite} />
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default Favorites;
