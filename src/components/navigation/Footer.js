import React from 'react';
import {Link} from 'react-router-dom'


function Footer(){

     return(
          <div className="footer-container">
               <div className="footer">
                    <div className="footer-CTA">
                         <div className="footer-CTA-description">
                              <p>Find your best place to live</p>
                              <button className="footer-CTA-button">Start Now</button>
                         </div>
                         <div>
                              <p className="copyright">© City Data Comparison 2019</p>
                         </div>
                    </div>

                    <div className="footer-categories-container">
                         <div className="footer-categories">
                              <p className="footer-title">Services</p>
                              <Link to="/map">Search a City</Link>
                              <Link to="/map">Compare Cities</Link>
                         </div>
                         <div className="footer-categories">
                              <p className="footer-title">Company</p>
                              <Link to="/aboutus">Meet the Team</Link>
                              <Link to="/aboutus">About Us</Link>
                              <Link to="/aboutus">Contact Us</Link>
                         </div>
                         <div className="footer-categories">
                              <p className="footer-title">Resources</p>
                              <a href="http://api.citrics.io/docs">Data Sources</a>
                              <Link to="/privacypolicy">Privacy Policy</Link>
                              <Link to="/privatepolicy">Terms of Use</Link>
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