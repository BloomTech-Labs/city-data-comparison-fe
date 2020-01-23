import React, {useState} from 'react'

import ExpandIcon from './ExpandIcon'

import housingImg from './icons/Housing.png'
import econImg from './icons/Cash.png'
import socialImg from './icons/Social.png'
import checkMark from './icons/checkmark.png'
import infoIcon from './icons/info.png'


const Preferences = ({selected, toggleSelected})=> {

    const [selectedHousing, setSelectedHousing] = useState({status: 'closed'})
    const [selectedEcon, setSelectedEcon] = useState({status: 'closed'})
    const [selectedSocial, setSelectedSocial] = useState({status: 'closed'})
    const [housingExpand, setHousingExpand] = useState({status: 'closed'})
    const [econExpand, setEconExpand] = useState({status: 'closed'})
    const [socialExpand, setSocialExpand] = useState({status: 'closed'})

    const toggleHousingExpand = () => {
        if (housingExpand.status === 'closed') {
            setHousingExpand({...housingExpand, status:'open'}) 
        } else if (housingExpand.status === 'open') {
            setHousingExpand({...housingExpand, status:'closed'})
        }
    }

    const toggleEconExpand = () => {
        if (econExpand.status === 'closed') {
            setEconExpand({...econExpand, status:'open'}) 
        } else if (econExpand.status === 'open') {
            setEconExpand({...econExpand, status:'closed'})
        }
    }

    const toggleSocialExpand = () => {
        if (socialExpand.status === 'closed') {
            setSocialExpand({...socialExpand, status:'open'}) 
        } else if (socialExpand.status === 'open') {
            setSocialExpand({...socialExpand, status:'closed'})
        }
    }

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
                        <img src={infoIcon} alt='info icon'/>
                        <p>As a default, all the categories are displayed. <span>Deselect</span> categories that you wish not to see or click the expand button <span>(=)</span> to view subcategories and make a change.</p>
                    </div>
                </div>
                <div className='pref-tabs'>

                    {/* housing tab */}

                    <div className='tab'>
                        <ExpandIcon name='housing-expand' expand={housingExpand.status} toggle={toggleHousingExpand}/>
                        <div className={`housing-tab ${selectedHousing.status}`} onClick={toggleHousing}>
                            <img className='pref-tabs-img' src={housingImg} alt='housing tab icon'/>
                            <p>Housing</p>
                        </div>
                            <img src={checkMark} className={`housing-tab-check ${selectedHousing.status}`} alt='check icon'/>
                    </div>
                        <div className={`housing-pref ${housingExpand.status}`}>
                            <div className={`housing-contents ${housingExpand.status}`}>
                                <div className='tab-name'>
                                    <div className='checkbox'><img src={checkMark} alt='check icon'/></div>
                                    <p>Median Rent</p>
                                </div>
                                <div className='tab-name'>
                                    <div className='checkbox'><img src={checkMark} alt='check icon'/></div>
                                    <p>Homeowner's costs</p>
                                </div>
                                <div className='tab-name'>
                                    <div className='checkbox'><img src={checkMark} alt='check icon'/></div>
                                    <p>Housing by rooms</p>
                                </div>
                                <div className='tab-name'>
                                    <div className='checkbox'><img src={checkMark} alt='check icon'/></div>
                                    <p>Vacancy rate</p>
                                </div>
                                <div className='tab-name'>
                                    <div className='checkbox'><img src={checkMark} alt='check icon'/></div>
                                    <p>Year home built</p>
                                </div>
                            </div>
                        </div>

                    {/* econ tab     */}
                    
                    <div className='tab'>
                    <ExpandIcon name='econ-expand' expand={econExpand.status} toggle={toggleEconExpand}/>
                        <div className={`econ-tab ${selectedEcon.status}`} onClick={toggleEcon}>
                            <img className='pref-tabs-img' src={econImg} alt='econ icon'/>
                            <p>Economics</p>
                        </div>
                            <img src={checkMark} className={`econ-tab-check ${selectedEcon.status}`} alt='check icon'/>
                    </div>
                    <div calssName={`econ-pref ${selectedEcon.status}`}>
                        <div className={`econ-contents ${econExpand.status}`}>
                                <div className='tab-name'>
                                    <div className='checkbox'><img src={checkMark} alt='check icon'/></div>
                                    <p>Household income</p>
                                </div>
                                <div className='tab-name'>
                                    <div className='checkbox'><img src={checkMark} alt='check icon'/></div>
                                    <p>Health insurance</p>
                                </div>
                                <div className='tab-name'>
                                    <div className='checkbox'><img src={checkMark} alt='check icon'/></div>
                                    <p>Commute</p>
                                </div>
                                <div className='tab-name'>
                                    <div className='checkbox'><img src={checkMark} alt='check icon'/></div>
                                    <p>Unemployment rate</p>
                                </div>
                                <div className='tab-name'>
                                    <div className='checkbox'><img src={checkMark} alt='check icon'/></div>
                                    <p>Public assistance</p>
                                </div>
                                <div className='tab-name'>
                                    <div className='checkbox'><img src={checkMark} alt='check icon'/></div>
                                    <p>Sex of labor force</p>
                                </div>
                            </div>
                        </div>

                    {/* social tab */}

                    <div className='tab'>
                    <ExpandIcon name='social-expand' expand={socialExpand.status} toggle={toggleSocialExpand}/>
                        <div className={`social-tab ${selectedSocial.status}`} onClick={toggleSocial}>
                            <img className='pref-tabs-img' src={socialImg} alt='social icon'/>
                            <p>Social</p>
                        </div>
                            <img src={checkMark} className={`social-tab-check ${selectedSocial.status}`} alt='check icon'/>
                    </div>
                    <div calssName={`social-pref ${selectedSocial.status}`}>
                            <div className={`social-contents ${socialExpand.status}`}>
                                <div className='tab-name'>
                                    <div className='checkbox'><img src={checkMark} alt='check icon'/></div>
                                    <p>Population growth</p>
                                </div>
                                <div className='tab-name'>
                                    <div className='checkbox'><img src={checkMark} alt='check icon'/></div>
                                    <p>Gender</p>
                                </div>
                                <div className='tab-name'>
                                    <div className='checkbox'><img src={checkMark} alt='check icon'/></div>
                                    <p>Ethnicities</p>
                                </div>
                                <div className='tab-name'>
                                    <div className='checkbox'><img src={checkMark} alt='check icon'/></div>
                                    <p>Language</p>
                                </div>
                                <div className='tab-name'>
                                    <div className='checkbox'><img src={checkMark} alt='check icon'/></div>
                                    <p>Marital status</p>
                                </div>
                                <div className='tab-name'>
                                    <div className='checkbox'><img src={checkMark} alt='check icon'/></div>
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