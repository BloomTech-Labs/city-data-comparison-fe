import React, {useState} from 'react'

import housingImg from './icons/Housing.png'
import econImg from './icons/Cash.png'
import socialImg from './icons/Social.png'
import checkMark from './icons/checkmark.png'


const Preferences = ()=> {

    const [selectedHousing, setSelectedHousing] = useState({status: 'closed'})
    const [selectedEcon, setSelectedEcon] = useState({status: 'closed'})
    const [selectedSocial, setSelectedSocial] = useState({status: 'closed'})

    const toggleHousing = () => {
        if (selectedHousing.status === 'closed') {
            setSelectedHousing({...selectedHousing, status:'open'}) 
        } else if (selectedHousing.status === 'open') {
            setSelectedHousing({...selectedHousing, status:'closed'})
        }
    }

    const toggleEcon = () => {
        if (selectedEcon.status === 'closed') {
            setSelectedEcon({...selectedEcon, status:'open'}) 
        } else if (selectedEcon.status === 'open') {
            setSelectedEcon({...selectedEcon, status:'closed'})
        }
    }

    const toggleSocial = () => {
        if (selectedSocial.status === 'closed') {
            setSelectedSocial({...selectedSocial, status:'open'}) 
        } else if (selectedSocial.status === 'open') {
            setSelectedSocial({...selectedSocial, status:'closed'})
        }
    }

    return (
        <div className='pref-container'>
            <h1>Preferences</h1>
            <div className='pref-contents'>
                
                <div className='header'>
                    <div className='head-top'>
                        <p>We are here for you. Personalize your results to view data that matters to you.</p>
                    </div>
                    <div className='head-middle'>
                        <p>Which of the following factors is the most important when moving to a new city?</p>
                    </div>
                    <div className='head-bottom'>
                        <p>As a default, all the categories are displayed. <span>Deselect</span> categories that you wish not to see or click   a  category to view subcategories and make a change.</p>
                    </div>
                </div>
                <div className='pref-tabs'>
                    <div className='tab'>
                        <div className={`housing-tab ${selectedHousing.status}`} onClick={toggleHousing}>
                            <img className='pref-tabs-img' src={housingImg}/>
                            <p>Housing</p>
                        </div>
                            <img src={checkMark} className={`housing-tab-check ${selectedHousing.status}`} />
                    </div>
                    <div className='tab'>
                        <div className={`econ-tab ${selectedEcon.status}`} onClick={toggleEcon}>
                            <img className='pref-tabs-img' src={econImg} />
                            <p>Economics</p>
                        </div>
                            <img src={checkMark} className={`econ-tab-check ${selectedEcon.status}`} />
                    </div>
                    <div className='tab'>
                        <div className={`social-tab ${selectedSocial.status}`} onClick={toggleSocial}>
                            <img className='pref-tabs-img' src={socialImg} />
                            <p>Social</p>
                        </div>
                            <img src={checkMark} className={`social-tab-check ${selectedSocial.status}`} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Preferences;