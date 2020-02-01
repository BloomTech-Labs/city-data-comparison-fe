import React, { useState, useContext } from 'react';
import {Link} from 'react-router-dom';
import Modal from "../modal/modal";
import useModal from "../modal/useModal";
import "../modal/modal.scss";
import AboutUs from "../aboutus/AboutUs";
import PrivacyPolicy from "../legal/PrivacyPolicy";

import {UserContext} from "../../contexts/UserContext";

function Footer(){

     const {user, setToggleSearch} = useContext(UserContext)
     const {isShowing, toggle} = useModal();
     const [modalState, setModalState] = useState();

     return(
          <>
               <Modal
                    isShowing={isShowing}
                    hide={toggle}
                    component={modalState}
               />
               <div className="footer-container">
                    <div className="footer">
                         <div className="footer-CTA">
                              <div className="footer-CTA-description">
                                   <p>Optimized city stats, just for you</p>
                                   { user 
                                        ? null 
                                        : <Link to="/signup"><button className="footer-CTA-button">Start Now</button></Link> }
                              </div>
                              <div>
                                   <p className="copyright">© Citrics 2019</p>
                              </div>
                         </div>

                         <div className="footer-categories-container">
                              <div className="footer-categories">
                                   <p className="footer-title">Services</p>
                                   <Link to="/" onClick={() => {window.scrollTo(0,0); setToggleSearch(true)}}>Search a City</Link>
                                   <Link to="/" onClick={() => {window.scrollTo(0,0); setToggleSearch(false)}}>Compare Cities</Link>
                              </div>
                              <div className="footer-categories">
                                   <p className="footer-title">Company</p>
                                   <a href="#" onClick={() => (setModalState(<AboutUs/>), toggle())} style={{cursor: "pointer"}}>Meet the Team</a>
                                   <a href="#" onClick={() => (setModalState(<AboutUs/>), toggle())} style={{cursor: "pointer"}}>About Us</a>
                                   <a href="#" onClick={() => (setModalState(<AboutUs/>), toggle())} style={{cursor: "pointer"}}>Contact Us</a>
                              </div>
                              <div className="footer-categories">
                                   <p href="#" className="footer-title">Resources</p>
                                   <a href="https://api.citrics.io/docs">Data Sources</a>
                                   <a href="#" onClick={() => (setModalState(<PrivacyPolicy/>), toggle())} style={{cursor: "pointer"}}>Privacy Policy</a>
                                   <a href="#" onClick={() => (setModalState(<PrivacyPolicy/>), toggle())} style={{cursor: "pointer"}}> Terms of Use</a>
                              </div>
                         </div>
                         <div>
                              <p className="copyright-mobile">© Citrics 2019</p>
                         </div>
                    </div>
               </div>
          </>
     )
}

export default Footer;