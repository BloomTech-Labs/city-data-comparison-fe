import React from "react";

import "./profile.scss";

import Footer from "../../navigation/Footer";
import Favorites from "./Favorites";

function Profile({ selected }) {
  return (
    <div className="profile-body">
      <div className="profile-page">
        <div className="profile-slides">
          <Favorites />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
