import React, { useState } from 'react';
import Modal from "../modal/modal"
import useModal from "../modal/useModal"
import "../modal/modal.scss";
import AboutUs from "../aboutus/AboutUs"

function Footer(){

     const {isShowing, toggle} = useModal();
     // const {modalState, setModalState} = useState({});

     return(
          <>
               <Modal
                    isShowing={isShowing}
                    hide={toggle}
                    component={<AboutUs/>}
               />
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
                                   <a href="/">Search a City</a>
                                   <a href="/">Compare Cities</a>
                              </div>
                              <div className="footer-categories">
                                   <h3 className="footer-title">Company</h3>
                                   <a href="/">Meet the Team</a>
                                   <a onClick={toggle}>About Us</a>
                                   <a href="/">Contact Us</a>
                              </div>
                              <div className="footer-categories">
                                   <h3 className="footer-title">Resources</h3>
                                   <a href="/">Data Sources</a>
                                   <a href="/">Private Policy</a>
                                   <a href="/">Terms of Use</a>
                              </div>
                         </div>
                         <div>
                              <p className="copyright-mobile">© City Data Comparison 2019</p>
                         </div>
                    </div>
               </div>
          </>
     )
}

export default Footer;