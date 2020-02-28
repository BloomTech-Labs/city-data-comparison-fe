import React, {useState} from 'react'; 

import Navigation from '../../components/navigation/Navigation';
import AboutUsCard from './AboutUsCard';

import dariush from '../../assets/team2_photos/Dariush Khansari.png'; 
import songa from '../../assets/team2_photos/Songa Mugenzi.png'; 
import jimmy from '../../assets/team2_photos/Jimmy Smith.png'; 
import eric from '../../assets/team2_photos/Eric Ramon.png'; 
import chris from '../../assets/team2_photos/Christopher Shields.png'; 
import anisha from '../../assets/team2_photos/Anisha Sunkerneni.png'
import kyle from '../../assets/team2_photos/Kyle Porter.jpg';
import ryan from '../../assets/team2_photos/Ryan Cooper.png'; 
import regino from '../../assets/team2_photos/Regino Parragil.png'; 
import thomas from '../../assets/team2_photos/Thomas Rodriguez.png'
import jeremy from '../../assets/team2_photos/Jeremy Rogel.jpg';
import cityHero from '../.././assets/city_photos/MtT_Hero Image.png';

//file that contains information for each user
import members from './team2.js'

//styling
import './aboutus2.scss'; 

//component that displays all the information for each users



const AboutUs2 = () => {
   
    return(
        <>
        <div className="aboutUsHero">
            <div className="aboutUsContainer">
                <div className="aboutUsH1Div">
                    <h1 className="aboutUsH1">Meet the team</h1>

                    <div>
                        <p style={{ color: 'white'}}>Version 1.0</p>
                        <p style={{ color: 'white'}}>Version 2.0</p>
                    </div>
                </div>
            </div>
        </div>     

        <section>
            <div className="sectionContainer">
                <div className="aboutUsH2Div">
                    <h2 className="aboutUsH2">Version 2.0 Development Team</h2>
                </div>

                <div className="cardContainer">
                    <div className="card">
                        <img className="aboutUsImg" src={jeremy} />
                        <h3>Jeremy Rogel</h3>
                        <p className="aboutP">A natural go-getter, Jeremy Rogel applies his knowledge of code and passion for creation by being the best fullstack web developer this side of the Mississippi! Applying his trade in Durham, NC, his passion to keep getting better shines in whatever he sets out to do.</p>
                    </div>

                    <div className="card">
                        <img className="aboutUsImg" src={dariush} />
                        <h3>Dariush Khansari</h3>
                        <p className="aboutP">Dariush Khansari tells stories through visual design and multimedia.</p>
                    </div>

                    <div className="card">
                        <img className="aboutUsImg" src={songa} />
                        <h3>Songa Mugenzi</h3>
                        <p className="aboutP">Songa Mugenzi is a strategy-minded user experience designer passionate about designing applications for emerging technologies. His mission in life is to break through our self-imposed barriers to connecting with each other by spotlighting our shared human experience.</p>
                    </div>

                    <div className="card">
                        <img className="aboutUsImg" src={jimmy} />
                        <h3>Jimmy 'Zeb' Smith</h3>
                        <p className="aboutP">Jimmy "Zeb" Smith is a data scientist in Winchester, TN. Prior to starting Lambda, he obtained his bachelors of science at the University South. He majored in chemistry with a pre-engineering focus in math and physics. His interest lies in using emerging data science technologies for a better tomorrow.</p>
                    </div>

                    <div className="card">
                        <img className="aboutUsImg" src={chris} />
                        <h3>Chris Shields</h3>
                        <p className="aboutP">Chris Shields applies data science to problem solving in Spokane, WA. Having received a liberal arts education in the desert, he is now driven to use software and mathematics to empower and improve.</p>
                    </div>

                    <div className="card">
                        <img className="aboutUsImg" src={eric} />
                        <h3>Eric Ramon</h3>
                        <p className="aboutP">Description</p>
                    </div>
                    <div className="card">
                        <img className="aboutUsImg" src={kyle} />
                        <h3>Kyle Porter</h3>
                        <p className="aboutP">Description</p>
                    </div>

                    <div className="card">
                        <img className="aboutUsImg" src={anisha} />
                        <h3>Anisha Sunkerneni</h3>
                        <p className="aboutP">Description</p>
                    </div>
                    
                    <div className="card">
                        <img className="aboutUsImg" src={ryan} />
                        <h3>Ryan Cooper</h3>
                        <p className="aboutP">Ryan Cooper is a Web Developer from Michigan. He loves learning and is a natural problem-solver! </p>
                    </div>

                    <div className="card">
                        <img className="aboutUsImg" src={regino} />
                        <h3>Regino Parragil</h3>
                        <p className="aboutP">Description</p>
                    </div>

                    <div className="card">
                        <img className="aboutUsImg" src={thomas} />
                        <h3>Thomas Rodriguez</h3>
                        <p className="aboutP">Description</p>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default AboutUs2; 