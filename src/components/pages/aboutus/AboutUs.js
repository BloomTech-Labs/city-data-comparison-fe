import React, { useEffect } from "react";

//file that contains information for each user
import team from "./team";
import TeamCard from "./TeamCard";
import Footer from "../../navigation/Footer";

//styling
import "./aboutus.scss";

//component that displays all the information for each users

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="aboutUsHero">
        <div className="aboutUsContainer">
          <div className="aboutUsH1Div">
            <h1 className="aboutUsH1">Meet the team</h1>

            <div className="aboutUsADiv">
              <a className="labslink" href="#labs19">
                Labs 19
              </a>
              <a className="labslink" href="#labs21">
                Labs 21
              </a>
              <a className="labslink" href="#labs23">
                Labs 23
              </a>
            </div>
          </div>
        </div>
      </div>

      <section className="aboutUsSection">
        <div className="sectionContainer">
          <div className="aboutUsH2Div">
            <h2 id="management" className="aboutUsH2">
              Management <span>Team</span>
            </h2>
          </div>

          <div className="cardContainer">
            {team.map((member) => {
              if (member.management) {
                return <TeamCard member={member} />;
              } else return <></>;
            })}
          </div>

          <div className="aboutUsH2Div">
            <h2 id="labs19" className="aboutUsH2">
              Labs 19 <span>Development Team</span>
            </h2>
          </div>

          <div className="cardContainer">
            {team.map((member) => {
              if (member.labs === 19 && member.management !== true) {
                return <TeamCard member={member} />;
              } else {
                return <></>;
              }
            })}
          </div>
          <div className="aboutUsH2Div">
            <h2 id="labs21" className="aboutUsH2">
              Labs 21 <span>Development Team</span>
            </h2>
          </div>

          <div className="cardContainer">
            {team.map((member) => {
              if (member.labs === 21 && member.management !== true) {
                return <TeamCard member={member} />;
              } else {
                return <></>;
              }
            })}
          </div>
          <div className="aboutUsH2Div">
            <h2 id="labs23" className="aboutUsH2">
              Labs 23 <span>Development Team</span>
            </h2>
          </div>

          <div className="cardContainer">
            {team.map((member) => {
              if (member.labs === 23 && member.management !== true) {
                return <TeamCard member={member} />;
              }
            })}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AboutUs;
