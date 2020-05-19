import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import citrics from "./citrics-mock-dark.png";
import signInLock from "./signInLockDark.png";
import { UserContext } from "../../contexts/UserContext";
import DropMenu from "./Dropdown";
import { actionColor, navGrey } from "../../utils/cityColors.js";

//Nav bar for everthing
function Navigation() {
  const { user, setUser } = useContext(UserContext);
  const [offset, setOffset] = useState(0);
  const [displayNav, setDisplayNav] = useState("show-nav");
  const [bgColor, setBgColor] = useState("default-color");

  const defaultNavigation = () => {
    setBgColor("default-color");
    if (offset === 0) {
      setDisplayNav("show-nav");
    } else {
      if (displayNav === "hide-nav") {
        setDisplayNav("show-nav");
      }
    }
  };

  let styles = {
    float: "right",
  };

  return (
    <div
      className={"navigation-container " + bgColor + `main-nav ${displayNav}`}
      onMouseEnter={() => {
        defaultNavigation();
      }}
      onMouseLeave={() => {
        defaultNavigation();
      }}
    >
      <a className="header-logo" href="/">
        {" "}
        <img className="mock-logo" src={citrics} alt="logo" />
      </a>
      <nav className="main-nav">
        <Link to="/" className="nav-button" style={{ color: navGrey }}>
          Home
        </Link>
        {user ? <div /> : null}
        <Link to="/compare" className="nav-button" style={{ color: navGrey }}>
          Compare
        </Link>
        {user == null ? (
          <>
            <Link id="login-link" to="/signin" style={{ color: actionColor }}>
              <img className="lock" alt="lock" src={signInLock} />
              Log In
            </Link>
            {/* <Link id="signup-link" to="/signup">Get Started</Link> */}
          </>
        ) : (
          <>
            {/* DROPDOWN NAVBAR MENU FOR MOBILE STARTS HERE */}
            <DropMenu />
          </>
        )}
      </nav>
      {user == null ? (
        <>
          <div className="dropdownContainer">
            <div className="dropdown" style={styles}>
              <button className="dropbtn">Menu</button>
              <div className="dropdown-content">
                <Link to="/compare">Explore</Link>
                <Link to="/signin">Log In</Link>
                <Link to="/signup">Get Started</Link>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="dropdownContainer">
          <DropMenu />
        </div>
      )}
    </div>
  );
}

export default Navigation;
