import React, { useState, useEffect, useContext } from "react";
import "./profile.scss";

import { UserContext } from "../../../contexts/UserContext";

const ProfileCard = (props) => {
  //state for logged in user
  const { user, setUser, axiosAuth } = useContext(UserContext);
  const [userInfo, setUserInfo] = useState(user);
  const [userImage, setUserImage] = useState({
    userimage: null,
    users_id: userInfo.id,
  });

  const userPost = {
    first_name: userInfo.first_name,
    last_name: userInfo.last_name,
    email: userInfo.email,
    city: userInfo.city,
    state: userInfo.state,
    username: userInfo.username,
  };

  const handleChange = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleFile = (e) => {
    let file = e.target.files[0];
    setUserImage({
      ...userImage,
      userimage: file,
    });
  };
  // Edit state toggle

  const [nameEdit, setNameEdit] = useState({ status: "closed" });
  const [emailEdit, setEmailEdit] = useState({ status: "closed" });
  const [locationEdit, setLocationEdit] = useState({ status: "open" });
  const [imageUpload, setImageUpload] = useState({ status: "closed" });

  const toggleName = () => {
    if (nameEdit.status === "open") {
      setNameEdit({ ...nameEdit, status: "closed" });
    } else if (nameEdit.status === "closed") {
      setNameEdit({ ...nameEdit, status: "open" });
    }
  };

  const toggleEmail = () => {
    if (emailEdit.status === "closed") {
      setEmailEdit({ ...emailEdit, status: "open" });
    } else if (emailEdit.status === "open") {
      setEmailEdit({ ...emailEdit, status: "closed" });
    }
  };

  const toggleLocation = () => {
    if (locationEdit.status === "closed") {
      setLocationEdit({ ...locationEdit, status: "open" });
    } else if (locationEdit.status === "open") {
      setLocationEdit({ ...locationEdit, status: "closed" });
    }
  };

  //User information axios call

  const updateUser = () => {
    axiosAuth()
      .put(`/users/profile`, userPost)
      .then((res) => {
        setUser({ ...user, ...userPost });
      })
      .catch((err) => {
        console.log("Unable to get user information", user);
      });
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return <></>;
};

export default ProfileCard;
