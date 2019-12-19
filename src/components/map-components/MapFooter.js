import React from 'react';

function Footer(){

     return(
          <div className="footer-container">
               <div className="footer">
                    <div className="footer-CTA">


                              <p className="copyright">© City Data Comparison 2019</p>

                    </div>

                    <div className="footer-categories-container">
                         <div className="footer-categories">
                              <h3>Services</h3>
                              <a href="/">Search a City</a>
                              <a href="/">Compare Cities</a>
                         </div>
                         <div className="footer-categories">
                              <h3>Company</h3>
                              <a href="/">Meet the Team</a>
                              <a href="/">About Us</a>
                              <a href="/">Contact Us</a>
                         </div>
                         <div className="footer-categories">
                              <h3>Resources</h3>
                              <a href="/">Data Sources</a>
                              <a href="/">Private Policy</a>
                              <a href="/">Terms of Use</a>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default Footer;