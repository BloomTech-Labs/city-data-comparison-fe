import React from "react";
import { Link } from "react-router-dom";

import { actionColor, navGrey } from "../../utils/cityColors.js";

function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="footer">
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
        </div>
      </div>
    </>
  );
}

export default Footer;
