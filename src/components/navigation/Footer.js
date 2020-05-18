import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Modal from "../modal/modal";
import useModal from "../modal/useModal";
import "../modal/modal.scss";

import { UserContext } from "../../contexts/UserContext";

import { actionColor, navGrey } from "../../utils/cityColors.js";

function Footer() {
  const { isShowing, toggle } = useModal();
  const [modalState, setModalState] = useState();

  return (
    <>
      <Modal isShowing={isShowing} hide={toggle} component={modalState} />
      <div className="footer-container">
        <div className="footer">
          {/* <div className="footer-CTA">
                              <div className="footer-CTA-description">
                                   <p>Optimized city stats, just for you</p>
                                   { user 
                                        ? null 
                                        : <Link to="/signup"><button className="footer-CTA-button">Start Now</button></Link> }
                              </div>
                         </div> */}
          <div className="footer-style">
            <div className="footer1">
              <p className="copyright" style={{ color: actionColor }}>
                © Citrics 2020
              </p>
            </div>

            <div className="footer2">
              <div className="footer3">
                <Link to="/meet-the-team" style={{ color: navGrey }}>
                  Meet the Team
                </Link>
              </div>

              <div className="footer3">
                <a
                  href="https://api.citrics.io/docs"
                  style={{ color: navGrey }}
                >
                  Data Sources
                </a>
              </div>

              <div className="footer3">
                <Link to="/PrivacyPolicy" style={{ color: navGrey }}>
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
          {/* <div className="footer-categories-container">
                              <div className="footer-categories">
                                   <p className="footer-title">Services</p>
                                   <Link to="/" onClick={() => {window.scrollTo(0,0); setToggleSearch(true)}}>Search a City</Link>
                                   <Link to="/" onClick={() => {window.scrollTo(0,0); setToggleSearch(false)}}>Compare Cities</Link>
                              </div>
                              <div className="footer-categories">
                                   <p className="footer-title">Company</p>
                                   
                                   <Link to="/meet-the-team" >About Us</Link>
                                   <Link to="/meet-the-team" >Contact Us</Link>
                              </div>
                              <div className="footer-categories">
                                   <p href="#" className="footer-title">Resources</p>
                                   
                                   
                                   <a href="#" onClick={() => (setModalState(<PrivacyPolicy/>), toggle())} style={{cursor: "pointer"}}> Terms of Use</a>
                              </div>
                         </div> */}
          {/* <div>
                              <p className="copyright-mobile">© Citrics 2020</p>
                         </div> */}
        </div>
      </div>
    </>
  );
}

export default Footer;
