import React, { useState } from 'react'; 

//icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faGithubSquare, faTwitterSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'; 
//images

import members from './team.js'


//styling
import './aboutus.scss'; 

import Member from './Member'
import team from './team.js';

const AboutUs = props => {
    const [index, setIndex] =useState(0)
     
    return(
        <div className="aboutUs">
            <div className="left-arrow" onClick={() => {
                
                if(index <= 0){
                    setIndex(0)
                }else{
                    setIndex(index - 1); 
                }
                }}>

            </div>

            <Member member={members[index]}/>


            <div className='right-arrow' onClick={() =>{ 
                if(index === (team.length - 1)){
                    setIndex(0)
                }else{
                    setIndex(index + 1)
                }
                }}>

            </div>
        </div>
    )
}

export default AboutUs; 