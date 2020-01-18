import React, {useState} from 'react'

import housingImg from './icons/Housing.png'
import econImg from './icons/Cash.png'
import socialImg from './icons/Social.png'
import checkMark from './icons/checkmark.png'
import infoIcon from './icons/info.png'


const Preferences = ({selected})=> {

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
                        <img src={infoIcon} />
                        <p>As a default, all the categories are displayed. <span>Deselect</span> categories that you wish not to see or click   a  category to view subcategories and make a change.</p>
                    </div>
                </div>
                <div className='pref-tabs'>

                    {/* housing tab */}

                    <div className='tab'>
                        <div className={`housing-tab ${selectedHousing.status}`} onClick={toggleHousing}>
                            <img className='pref-tabs-img' src={housingImg}/>
                            <p>Housing</p>
                        </div>
                            <img src={checkMark} className={`housing-tab-check ${selectedHousing.status}`} />
                    </div>
                        <div calssName={`housing-pref ${selectedHousing.status}`}>
                            <div className='housing-contents'>
                                <div className='tab-name'>
                                    <div className='checkbox'><img src={checkMark} /></div>
                                    <p>Median Rent</p>
                                </div>
                                <div className='tab-name'>
                                    <div className='checkbox'><img src={checkMark} /></div>
                                    <p>Homeowner's costs</p>
                                </div>
                                <div className='tab-name'>
                                    <div className='checkbox'><img src={checkMark} /></div>
                                    <p>Housing by rooms</p>
                                </div>
                                <div className='tab-name'>
                                    <div className='checkbox'><img src={checkMark} /></div>
                                    <p>Vacancy rate</p>
                                </div>
                                <div className='tab-name'>
                                    <div className='checkbox'><img src={checkMark} /></div>
                                    <p>Year home built</p>
                                </div>
                            </div>
                        </div>

                    {/* econ tab     */}
                    
                    <div className='tab'>
                        <div className={`econ-tab ${selectedEcon.status}`} onClick={toggleEcon}>
                            <img className='pref-tabs-img' src={econImg} />
                            <p>Economics</p>
                        </div>
                            <img src={checkMark} className={`econ-tab-check ${selectedEcon.status}`} />
                    </div>
                    <div calssName={`econ-pref ${selectedEcon.status}`}>
                        <div className='econ-contents'>
                                <div className='tab-name'>
                                    <div className='checkbox'><img src={checkMark} /></div>
                                    <p>Household income</p>
                                </div>
                                <div className='tab-name'>
                                    <div className='checkbox'><img src={checkMark} /></div>
                                    <p>Health insurance</p>
                                </div>
                                <div className='tab-name'>
                                    <div className='checkbox'><img src={checkMark} /></div>
                                    <p>Commute</p>
                                </div>
                                <div className='tab-name'>
                                    <div className='checkbox'><img src={checkMark} /></div>
                                    <p>Unemployment rate</p>
                                </div>
                                <div className='tab-name'>
                                    <div className='checkbox'><img src={checkMark} /></div>
                                    <p>Public assistance</p>
                                </div>
                                <div className='tab-name'>
                                    <div className='checkbox'><img src={checkMark} /></div>
                                    <p>Sex of labor force</p>
                                </div>
                            </div>
                        </div>

                    {/* social tab */}

                    <div className='tab'>
                        <div className={`social-tab ${selectedSocial.status}`} onClick={toggleSocial}>
                            <img className='pref-tabs-img' src={socialImg} />
                            <p>Social</p>
                        </div>
                            <img src={checkMark} className={`social-tab-check ${selectedSocial.status}`} />
                    </div>
                    <div calssName={`social-pref ${selectedSocial.status}`}>
                            <div className='social-contents'>
                                <div className='tab-name'>
                                    <div className='checkbox'><img src={checkMark} /></div>
                                    <p>Population growth</p>
                                </div>
                                <div className='tab-name'>
                                    <div className='checkbox'><img src={checkMark} /></div>
                                    <p>Gender</p>
                                </div>
                                <div className='tab-name'>
                                    <div className='checkbox'><img src={checkMark} /></div>
                                    <p>Ethnicities</p>
                                </div>
                                <div className='tab-name'>
                                    <div className='checkbox'><img src={checkMark} /></div>
                                    <p>Language</p>
                                </div>
                                <div className='tab-name'>
                                    <div className='checkbox'><img src={checkMark} /></div>
                                    <p>Marital status</p>
                                </div>
                                <div className='tab-name'>
                                    <div className='Marital statuscheckbox'><img src={checkMark} /></div>
                                    <p>School enrollment</p>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Preferences;