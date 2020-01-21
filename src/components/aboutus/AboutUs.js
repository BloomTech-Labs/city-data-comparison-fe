import React, { useState } from 'react'; 

//icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faGithubSquare, faTwitterSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'; 
//images

import members from './team'


//styling
import './aboutus.scss'; 

import Member from './Member'

const AboutUs = props => {
    const [index, setIndex] =useState(0)
     
    return(
        <div className="aboutUs">
            <div className="left-arrow" onClick={() => setIndex(index + 1)}>

            </div>

            <Member

            <div className='right-arrow' onClick={() => setIndex(index - 1)}>

            </div>
        </div>
    )
}

export default AboutUs; 