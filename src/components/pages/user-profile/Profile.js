import React from "react";

import "./profile.scss";

import Footer from "../../navigation/Footer";
import Favorites from "./Favorites";

import ProfileCard from "./ProfileCard";

function Profile({ selected }) {
  return (
    <div className="profile-body">
      <div className="profile-page">
        <div className="profile-slides">
          <ProfileCard />
          <Favorites />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Profile;