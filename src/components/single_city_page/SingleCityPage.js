import React from 'react';

import './SingleCityPage.scss';

import cityscape from '../../assets/single_city_page_photos/cityscape.jpg';
import foodAndDrink from '../../assets/single_city_page_photos/foodAndDrink.jpg';
import attractions from '../../assets/single_city_page_photos/attractions.jpg';
import weather from '../../assets/single_city_page_photos/weather.png';
import recreation from '../../assets/single_city_page_photos/recreation.png';
import cityServices from '../../assets/single_city_page_photos/cityServices.png';
import shopping from '../../assets/single_city_page_photos/shopping.png';
import lodging from '../../assets/single_city_page_photos/lodging.png';


const SingleCityPage = () => {
    return (
        <>
        <div className="SCPhero">
            <img className="SCPheroImg" src={cityscape} />
        </div>
        <section className="SCPcityIntro">
            <div className="SCPweather">

            </div>
            <div className="SCPdescription">
                
            </div>
        </section>

        <section className="SCPmain">
            <section className="SCPsidebar">
                <div className="SCPfilter">
                    <h4>Filter</h4>
                </div>
                <div className="SCPfilterCatContainer">
                    <h4>TEST TEST TEST</h4>
                </div>
            </section>

            <section className="SCPcategories">
                <div className="SCPexplore">
                    <div className="exploreContainer">
                        <div>
                            <h3>Explore</h3>
                        </div>
                        <div className="expCat">
                            <img className="expCatImg" src={foodAndDrink} />
                            <div className="expCatText">
                                <div className="expCatTitle">
                                    <h4>Food and drinks</h4>
                                </div>
                                <div className="expP">
                                    <p>The cuisine of Miami is a reflection of its diverse population, with a heavy influence from Caribbean and Latin American cuisine. By combining the two with American cuisine, it has spawned a unique South Florida style of cooking known as Floribbean... (more)</p>
                                </div>
                            </div>
                        </div>
                        <div className="expCat">
                                <img className="expCatImg" src={attractions}/>
                            <div className="expCatText">
                                <div className="expCatTitle">
                                    <h4>Attractions</h4>
                                </div>
                                <div className="expP">
                                    <p>In addition to annual festivals like the Calle Ocho Festival, Miami is home to many entertainment venues, theaters, museums, parks and performing arts centers. The newest addition to the Miami arts scene is the Adrienne Arsht Center for the ... (more)</p>
                                </div>
                            </div>
                        </div>
                        <div className="expCat">
                                <img className="expCatImg" src={weather}/>
                            <div className="expCatText">
                                <div className="expCatTitle">
                                    <h4>Weather</h4>
                                </div>
                                <div className="expP">
                                    <p>Miami has a tropical monsoon climate (Köppen climate classification Am)[38][39] with a marked drier season in the winter. The city's sea-level elevation, coastal location, position just above the Tropic of Cancer, and proximity to the Gulf Stream shape its climate... (more)</p>
                                </div>
                            </div>
                        </div>
                        <div className="expCat">
                            <img className="expCatImg" src={recreation}/>
                            <div className="expCatText">
                                <div className="expCatTitle">
                                    <h4>Recreation</h4>
                                </div>
                                <div className="expP">
                                    <p>The City of Miami has various lands operated by the National Park Service, the Florida Division of Recreation and Parks, and the City of Miami Department of Parks and Recreation... (more)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="SCPresources">
                    <div>
                        <h3>Resources</h3>
                    </div>
                    <div className="resourcesContainer">
                        <div className="resCat">
                            <img className="resImg" src={cityServices} />
                            <h5>City Services</h5>
                        </div>
                        <div className="resCat">
                            <img className="resImg" src={shopping} />
                            <h5>Shopping</h5>
                        </div>
                        <div className="resCat">
                            <img className="resImg" src={lodging} />
                            <h5>Lodging</h5>
                        </div>
                    </div>
                </div>

                <div className="SCPevents">
                    {/* This is where our Events component will be imported. */}
                    <h4>Events Placeholder</h4>
                </div>
            </section>
        </section>
        </>
    )
}

export default SingleCityPage;