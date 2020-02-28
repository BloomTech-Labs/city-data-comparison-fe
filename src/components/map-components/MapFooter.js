import React from 'react';

function Footer(){

     return(
          <div className="footer-container">
               <div className="footer">
                    <div className="footer-CTA">

                        { /* this needs to be placed correctly */ }
                        <p className="copyright">© City Data Comparison 2020</p>

                    </div>

                    <div className="footer-categories-container">
                         <div className="footer-categories">
                         </div>
                         <div className="footer-categories">
                              <h3>Company</h3>
                              <a href="/aboutus">Meet the Team</a>
                              <a href="/">Product Roadmap</a>
                              <a href="/">Contact Us</a>
                         </div>
                         <div className="footer-categories">
                              <h3>Resources</h3>
                              <a href="/">Data Sources</a>
                              <a href="/privacypolicy">Privacy Policy</a>
                              <a href="/">Terms of Use</a>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default Footer;