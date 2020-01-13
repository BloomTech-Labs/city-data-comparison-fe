import React from 'react';
import {Link} from 'react-router-dom'


function Footer(){

     return(
          <div className="footer-container">
               <div className="footer">
                    <div className="footer-CTA">
                         <div className="footer-CTA-description">
                              <p>Find Your Best Place To Live</p>
                              <button className="footer-CTA-button">Start Now</button>
                         </div>
                         <div>
                              <p className="copyright">© City Data Comparison 2019</p>
                         </div>
                    </div>

                    <div className="footer-categories-container">
                         <div className="footer-categories">
                              <h3 className="footer-title">Services</h3>
                              <Link to="/map">Search a City</Link>
                              <Link to="/map">Compare Cities</Link>
                         </div>
                         <div className="footer-categories">
                              <h3 className="footer-title">Company</h3>
                              <Link to="/aboutus">Meet the Team</Link>
                              <Link to="/aboutus">About Us</Link>
                              <Link to="/">Contact Us</Link>
                         </div>
                         <div className="footer-categories">
                              <h3 className="footer-title">Resources</h3>
                              <Link to="/">Data Sources</Link>
                              <Link to="/privacypolicy">Privacy Policy</Link>
                              <Link to="/">Terms of Use</Link>
                         </div>
                    </div>
                    <div>
                         <p className="copyright-mobile">© City Data Comparison 2019</p>
                    </div>
               </div>
          </div>
     )
}

export default Footer;