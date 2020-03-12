//this component is used to render information for each team member in AboutUs.js

import React from 'react'; 

//icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faGithubSquare, faTwitterSquare, faLinkedin} from '@fortawesome/free-brands-svg-icons'; 

//stylesheet
import './aboutus.scss'

function TeamCard (props) {

    const goToLink = url => window.open(url)

    return (
        <div className="card">
            <div className='member-info'>
                <img className="aboutUsImg" src={props.member.image} />
                <h3>{props.member.name}</h3>
                <p className='memberRole'>{props.member.role}</p>
                <div className="member-social">
                    {props.member.social.github ? <FontAwesomeIcon className='socialIcon' style={{cursor: "pointer"}} icon={faGithubSquare} size="2x" color="#3999fc" target="_blank" onClick={() => goToLink(`https://www.github.com/${props.member.social.github}`)} />
                    : null}
                    {props.member.social.linkedin ? <FontAwesomeIcon className='socialIcon' style={{cursor: "pointer"}} icon={faLinkedin} size="2x" color="#3999fc" target="_blank" onClick={() =>  goToLink(`https://www.Linkedin.com/in/${props.member.social.linkedin}`)}/>
                    : null}
                    {props.member.social.twitter ? <FontAwesomeIcon className='socialIcon' style={{cursor: "pointer"}} icon={faTwitterSquare} size="2x" color="#3999fc" target="_blank" onClick={() => goToLink(`https://www.twitter.com/${props.member.social.twitter}`)}/>
                    : null}
                </div>
                <p className="aboutP">{props.member.about}</p>
            </div>
            {props.member.portfolio ? <div onClick={() => goToLink(props.member.portfolio)} className="member-portfolio">{(props.member.name.charAt(props.member.name.length - 1) === 's') ? `View ${props.member.name}' Portfolio` : `View ${props.member.name}'s Portfolio`}</div> : null}
        </div>
    )
}

export default TeamCard;