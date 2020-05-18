//this component is used to render information for each team member in AboutUs.js

import React from "react";

//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitterSquare,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

//stylesheet
import "./aboutus.scss";

function TeamCard(props) {
  const goToLink = (url) => window.open(url);

  const fullName = props.member.name;

  return (
    <div className="card">
      <div className="member-info">
        <div className="aboutUsImgDiv">
          <img className="aboutUsImg" src={props.member.image} />
        </div>
        <h3>{props.member.name}</h3>
        <p className="memberRole">{props.member.role}</p>
        <div className="member-social">
          {props.member.social.github ? (
            <FontAwesomeIcon
              className="socialIcon"
              style={{ cursor: "pointer" }}
              icon={faGithub}
              size="2x"
              target="_blank"
              onClick={() =>
                goToLink(`https://www.github.com/${props.member.social.github}`)
              }
            />
          ) : null}
          {props.member.social.linkedin ? (
            <FontAwesomeIcon
              className="socialIcon"
              style={{ cursor: "pointer" }}
              icon={faLinkedin}
              size="2x"
              color="#4c6ef5"
              target="_blank"
              onClick={() =>
                goToLink(
                  `https://www.Linkedin.com/in/${props.member.social.linkedin}`
                )
              }
            />
          ) : null}
          {props.member.social.twitter ? (
            <FontAwesomeIcon
              className="socialIcon"
              style={{ cursor: "pointer" }}
              icon={faTwitterSquare}
              size="2x"
              color="#00acee"
              target="_blank"
              onClick={() =>
                goToLink(
                  `https://www.twitter.com/${props.member.social.twitter}`
                )
              }
            />
          ) : null}
        </div>
        <p className="aboutP">{props.member.about}</p>
      </div>
      {props.member.portfolio ? (
        <div
          onClick={() => goToLink(props.member.portfolio)}
          className="member-portfolio"
        >
          <p>
            {props.member.name.charAt(fullName.split(" ")[0].length - 1) === "s"
              ? `View ${fullName.split(" ")[0]}' Portfolio`
              : `View ${fullName.split(" ")[0]}'s Portfolio`}
          </p>
        </div>
      ) : (
        <div
          onClick={() =>
            goToLink(
              `https://www.Linkedin.com/in/${props.member.social.linkedin}`
            )
          }
          className="member-portfolio"
        >
          <p>
            {props.member.name.charAt(fullName.split(" ")[0].length - 1) === "s"
              ? `View ${fullName.split(" ")[0]}' Portfolio`
              : `View ${fullName.split(" ")[0]}'s Portfolio`}
          </p>
        </div>
      )}
    </div>
  );
}

export default TeamCard;
