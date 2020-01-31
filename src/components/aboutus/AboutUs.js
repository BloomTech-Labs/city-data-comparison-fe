import React, {useState} from 'react'; 

//file that contains information for each user
import members from './team.js'

//styling
import './aboutus.scss'; 

//component that displays all the information for each users
import Member from './Member'


const AboutUs = props => {
    const [index, setIndex] =useState(0)
     
    return(
        <div className="aboutUs">
            
            <div className="left-arrow" onClick={() =>{ 
                (index <= 0) ? setIndex(members.length - 1) : setIndex(index - 1)
                
                }}></div>

            <Member member={members[index]}/>

            <div className='right-arrow' onClick={() => (index === (members.length - 1)) ? setIndex(0) : setIndex(index + 1)}></div>
        </div>
    )
}

export default AboutUs; 