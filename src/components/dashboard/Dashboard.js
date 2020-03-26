import React, {useState, useEffect, useContext} from 'react'
import {Link} from "react-router-dom"
import LineGraph from '../graphs/PieGraph'
import LineGraph2 from '../graphs/TwoGraph'
import RadarGraph from '../graphs/RadarGraph'
import ReactGA from "react-ga";

import pointer from './assets/pointer.svg'
import backwheel from "./assets/motorbike_back_wheel.png"
import edgeblur from "./assets/edge_blur.png"
import driver from "./assets/motorbike_driver.png"
import frontwheel from "./assets/motorbike_front_wheel.png"
import plant from "./assets/motorbike_plant.png"

import { CityContext } from '../../contexts/CityContext';
import { UserContext } from "../../contexts/UserContext"

import AOS from 'aos';
import 'aos/dist/aos.css';
import "../../App.scss"

import landing from '../homepage-imgs/landing.svg'
import economy from '../homepage-imgs/economy.svg'
import community from '../homepage-imgs/community.svg'
import housing from '../homepage-imgs/housing.svg'
import data from '../homepage-imgs/visualize.svg'
import location from '../homepage-imgs/map.svg'
import control from '../homepage-imgs/control.svg'
import unlock from '../homepage-imgs/unlock.svg'

function Dashboard({history}){

     AOS.init()
     const { user, setUser, toggleSearch, setToggleSearch, axiosAuth} = useContext(UserContext);
     const { selected, cityIndex, viewport, setViewport, getCity, getCities, getBestSuggestion, getBestSuggestions } = useContext(CityContext)
     // * SEARCH 1 STATE / HANDLECHANGE
     const [cityOneSuggestions, setCityOneSuggestions] = useState([]);
     const [cityTwoSuggestions, setCityTwoSuggestions] = useState([]);

       useEffect(_ => {
          if(user){
          axiosAuth()
          .get(`/users/profile/image`)
          .then(res => {
               
               const image = res.data[0]
               
               if(image){ 
               setUser({...user, userimage: image.userimage})
               }

          }).catch(err => console.log(err))
     }
          },[])
      
   useEffect( _ => {
          ReactGA.event({ category: 'Selected', 
          action: 'selected a city using dashboard' });
     }, [selected])

     //* COMPARE 2 STATE / HANDLECHANGE */
     const [compare, setCompare] = useState({
          cityOne:"",
          cityTwo:""
     })

     const topPopFilter = arr => {
          let sorted = arr.sort((city1, city2) => city2.population - city1.population);
          if (sorted.length > 5) {
            sorted = sorted.slice(0,5)
          }
          return sorted;
        }

     const handleCityOne = e => {
          const searchText = e.target.value
          searchText
          ? setCityOneSuggestions(topPopFilter(cityIndex.filter(
               city => 
               city.name.toLowerCase().includes(searchText.toLowerCase()))))
          : setCityOneSuggestions([]);
          setCompare({
               ...compare,
               cityOne:e.target.value
          })
     }

     const handleCityTwo = e => {
          const searchText = e.target.value
          searchText
          ? setCityTwoSuggestions(topPopFilter(cityIndex.filter(
               city => 
               city.name.toLowerCase().includes(searchText.toLowerCase()))))
          : setCityTwoSuggestions([]);
          setCompare({
               ...compare,
               cityTwo:e.target.value
          })
     }

     const chooseCityOneSuggestion = city => {
          setCompare({
               ...compare,
               cityOne:city.name.replace(" city", "")
          })
          setCityOneSuggestions([]);
          setViewport({
              ...viewport,
              longitude: city.lng,
              latitude: city.lat
            })  
      }
     const chooseCityTwoSuggestion = city => {
          setCompare({
               ...compare,
               cityTwo:city.name.replace(" city", "")
          })
          setCityTwoSuggestions([]);
          setViewport({
               ...viewport,
               longitude: city.lng,
               latitude: city.lat
               })  
     }


     //* SUBMIT SEARCH */
     const submitCity = async (event) => {
          event.preventDefault();
          // all the below logic should be pulled into app.js and handle things on that end i think
               if (!compare.cityTwo && !compare.cityOne) {
                    history.push("/map")
                    return;
               }     
              

               let found = cityIndex.find(item => item.name.replace(" city", "") === compare.cityOne)
               let found2 = cityIndex.find(item => item.name.replace(" city", "") === compare.cityTwo)
               if ( !compare.cityTwo && compare.cityOne) {
                    if(found){
                    getCity(found);
               }else{ getBestSuggestion(compare.cityOne)

               }
                    history.push("/map");
                    return;
               }
               if ( compare.cityTwo && !compare.cityOne) {
                    if(found2){
                         getCity(found2)
                    }else{getBestSuggestion(compare.cityTwo)}
                    
                    history.push("/map");
                    return;
               }
               if (found && found2) {
                    getCities([found, found2]);              
                    // the viewport set below will require zoom handling based on population
                    setViewport({
                         ...viewport,
                         longitude: found.lng,
                         latitude: found.lat
                    })
               } 
               else if (found && !found2) {
                    getCities([found, compare.cityTwo]);
                   
               } else if (!found && found2) {
                    getCities([compare.cityOne, found2]);
               }
               // if you don't enter the cities by name it goes to the sug
               else {
                    ReactGA.event({ category: 'Data', 
                    action: `used suggestion endpoint: ${compare.cityOne}` });
                    await getBestSuggestions([compare.cityOne, compare.cityTwo]);
               }
          history.push("/map");
     }
     
     //* TOGGLING BUTTONS */
     const [buttonClass, setButtonClass] = useState("")
     // const [toggleSearch, setToggleSearch] = useState(true)

     const toggleClass = () => {
          if(buttonClass === "search-toggle-green"){
               setButtonClass("")
               setToggleSearch(true)
               setCompare({
                    ...compare,
                    cityTwo: ""
               })
          } else {
               setButtonClass("search-toggle-green")
               setToggleSearch(!toggleSearch)
          } 
     }

     const toggleStyle = {
          marginLeft: "15px",
          fontSize:"1.1rem",
          color:"grey",
          color: buttonClass === "search-toggle-green" ? "" : "search-toggle-green"
     }


     return(
          <div className="dashboard-container">
               {/* * LANDING PAGE AND SEARCH FUNCTION */}
               <div className="dashboard-search-container">
                    <div className="dashboard-search-function">
                         {/* LANDING IMAGE */}
                         <div className="dashboard-image">
                              <div className="dashboard-image-header">
                                   
                              
                                   {/* TITLE */}
                                   <p className="dashboard-title">Make Your <br/>Move.</p>
                                   <p className="dashboard-title2">Make <br/>Your <br/>Move.</p>
                                   {/* SEARCH CONTAINER */}
                                   <div className="dashboard-function-container">
                                        {/* TOGGLE SEARCH VS. COMPARE FUNCTIONALITY */}
                                        { toggleSearch ? 
                                        <div className="dashboard-single-search-container">
                                             <form autoComplete="off" onSubmit={submitCity}>
                                                  <div className="search-and-button">
                                                       <input 
                                                       placeholder="Search for a city"
                                                       onChange={handleCityOne}
                                                       value={compare.cityOne}
                                                       name="cityOne"
                                                       />
                                                       <button onClick={submitCity} className="compare-button">Go</button>
                                                       </div>
                                                       <div>
                                                            {cityOneSuggestions.map( (suggestion) => {
                                                                 const style = {
                                                                      backgroundColor: suggestion.active ? "#e9e8e9" : "#fff",
                                                                      cursor: "pointer",
                                                                      fontSize:"1rem",
                                                                      textAlign:"left",
                                                                      padding:"10px",
                                                                      boxShadow: "0 1px 16px 0 rgba(0, 0, 0, 0.09)",
                                                                 }                                                       
                                                                 return <div key={suggestion._id} name="cityOne" style={style} onClick={() => chooseCityOneSuggestion(suggestion)}> <img alt="a pointer" className="imageStyle" src={pointer}/> {suggestion.name.replace(" city", "")}</div>
                                                            })}
                                                       </div>
                                                  
                                             </form>
                                        </div>

                                        :

                                        <div className="dashboard-compare-search-container">
                                             <form autoComplete="off" onSubmit={submitCity}>
                                                  <div>
                                                       <input 
                                                       placeholder="Enter city one"
                                                       onChange={handleCityOne}
                                                       value={compare.cityOne}
                                                       name="cityOne"
                                                       />
                                                                       
                                                       <div>
                                                            {cityOneSuggestions.map( (suggestion) => {
                                                                 const style = {
                                                                      backgroundColor: suggestion.active ? "#e9e8e9" : "#fff",
                                                                      cursor: "pointer",
                                                                      fontSize:"1rem",
                                                                      textAlign:"left",
                                                                      padding:"10px",
                                                                      boxShadow: "0 1px 16px 0 rgba(0, 0, 0, 0.09)"
                                                                 }
                                                                 return <div key={suggestion.name} style={style} onClick={() => chooseCityOneSuggestion(suggestion)}> <img alt="a map pin" className="imageStyle" src={pointer}/> {suggestion.name.replace(" city", "")}</div>
                                                            })}
                                                       </div>
                                                  </div>
                                                  <div style={{ display: 'flex', marginTop: '10px' }}>
                                                       <input 
                                                       placeholder="Enter city two"
                                                       onChange={handleCityTwo}
                                                       value={compare.cityTwo}
                                                       />
                                                       <button onClick={submitCity} className="compare-button">Go</button> 
                                                       </div>
                                                       <div>
                                                            {cityTwoSuggestions.map( (suggestion) => {
                                                                 const style = {
                                                                      backgroundColor: suggestion.active ? "#e9e8e9" : "#fff",
                                                                      cursor: "pointer",
                                                                      fontSize:"1rem",
                                                                      textAlign:"left",
                                                                      padding:"10px",
                                                                      boxShadow: "0 1px 16px 0 rgba(0, 0, 0, 0.09)"
                                                                 }
                                                                 return <div key={suggestion.name} style={style} onClick={() => chooseCityTwoSuggestion(suggestion)}> <img alt="a map pin" className="imageStyle" src={pointer}/> {suggestion.name.replace(" city", "")}</div>
                                                            })}
                                                       </div>
                                                  
                                             </form>
                                        </div>
                                        }

                                        {/* * TOGGLE DIV FOR SEARCH AND GO BUTTON */}
                                        <div className="toggle-div">
                                             <div id="search-toggle">
                                                  <label className="switch">
                                                       <input type="checkbox"
                                                       onClick={toggleClass}
                                                       />
                                                       <span className="slider round"></span>
                                                  </label>
                                                  <p className={buttonClass} style={toggleStyle}>Compare cities</p>                                   
                                             </div>
                                                  
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
               
               
               {/* SIGN UP CALL TO ACTION */}
               <div className="kevinmotor">
               <div className="bonus-features-container"
                    data-aos="fade-right"
                    data-aos-offset="100"
                    // data-aos-delay="50"
                    data-aos-duration="800"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="true"
               >
                    
                    <div className="motoranimationcontainer">
                         <img alt='img of lock' className="unlockfeatures" src={unlock} />
                         
                         {/* <div className="motoranimbackground">
                              <img className="edgeblurleft" src={edgeblur}/>
                              <img className="edgeblurright" src={edgeblur}/>
                         </div>
                         <div className="moving">
                              <img className="motoranim wheel" src={backwheel} alt="backwheel" style={{top:"90px", right:"55px"}}/>
                              <img className="motoranim wheel" src={frontwheel} alt="frontwheel" style={{top:"90px", left:"67px"}}/>
                              <img className="motoranim driver" src={driver} alt="driver" style={{top:"20px"}}/>
                              <img className="motoranim plant" src={plant} alt="plant" style={{top:"27px", right:"60px"}} />
                         </div> */}
                    </div>    
                    <div className="bonus-features-CTA">
                         <p className="bonus-features-title">Unlock bonus features</p>
                         <p className="bonus-features-description">Sign up for free to unlock additional features to export data, review and comment on cities, and view favorited cities. </p>
                         
                         <Link to="/signup"><button className="sign-up-CTA">Sign Up</button></Link>
                    </div>
               </div>
               </div>



               {/* PRODUCT FEATURES */}
               <div className="kevin">
               <div className="dashboard-features-container">
                    <div className="dashboard-features-title">
                    <h3 className="features-title">Features</h3>
               </div>
                    <div className="feature-descriptions-container"
                         data-aos="fade-up"
                         data-aos-offset="100"
                         // data-aos-delay="50"
                         data-aos-duration="500"
                         data-aos-easing="ease-in-out"
                         data-aos-mirror="true"
                         data-aos-once="true"
                    >
                         <img className="feature-images" src={control} alt="money" />
                         <div className="feature-descriptions">
                              <p className="feature-title">Control of data</p>
                              <p>Explore cost of living and other data of a single city or compare multiple cities to learn about differences.</p>
                         </div>
                    </div>
                    <div className="feature-descriptions-container"
                         data-aos="fade-up"
                         data-aos-offset="100"
                         // data-aos-delay="50"
                         data-aos-duration="500"
                         data-aos-easing="ease-in-out"
                         data-aos-mirror="true"
                         data-aos-once="true"
                    >
                         <img className="feature-images" src={location} alt="map"/>
                         <div className="feature-descriptions">
                              <p className="feature-title">Map view</p>
                              <p>View the map to explore what is near cities and how the data compares with different parts of the city.</p>
                         </div>
                    </div>
                    <div className="feature-descriptions-container"
                         data-aos="fade-up"
                         data-aos-offset="100"
                         // data-aos-delay="50"
                         data-aos-duration="500"
                         data-aos-easing="ease-in-out"
                         data-aos-mirror="true"
                         data-aos-once="true"
                    >
                         <img className="feature-images" src={data} alt="data visual"/>
                         <div className="feature-descriptions">
                              <p className="feature-title">Visualize data</p>
                              <p>Data visuals help to easily understand cost of living in multiple cities and provide data from a bird’s eye view.</p>
                         </div>
                    </div>
               </div>
               </div>

               {/* VISUALIZING DATA CONTAINER */}
               <div className="dashboard-metrics-container">
                    <p className="metrics-title">Visualizing data made easier</p>
                    <div className="dashboard-metrics">
                         <div className="metrics-description-container"
                              data-aos="fade-down"
                              data-aos-offset="100"
                              data-aos-delay="100"
                              data-aos-duration="600"
                              data-aos-easing="ease-in-out"
                              data-aos-mirror="true"
                              data-aos-once="true"
                         >
                              <img className="feature-images" src={housing} alt="housing visual"/>     
                              {/* <LineGraph2 /> */}
                              <p className="metrics-description"><p className="metrics-description-title">Housing</p>Housing data includes median rent, home prices, monthly homeowner costs, housing by rooms, and etc.</p>
                         </div>
                         <div className="metrics-description-container"
                              data-aos="fade-down"
                              data-aos-offset="100"
                              data-aos-delay="100"
                              data-aos-duration="600"
                              data-aos-easing="ease-in-out"
                              data-aos-mirror="true"
                              data-aos-once="true"
                         >
                              <img className="feature-images" src={community} alt="community visual"/>
                              {/* <LineGraph /> */}
                              <p className="metrics-description"><p className="metrics-description-title">Community</p>Data for social trends consists of age, ethnicity, education, languages spoken, school enrollment, and etc.</p>
                         </div>
                         <div className="metrics-description-container"
                              data-aos="fade-down"
                              data-aos-offset="100"
                              data-aos-delay="100"
                              data-aos-duration="600"
                              data-aos-easing="ease-in-out"
                              data-aos-mirror="true"
                              data-aos-once="true"
                         >
                              <img className="feature-images" src={economy} alt="economy visual"/>
                              {/* <RadarGraph /> */}
                              <p className="metrics-description"><p className="metrics-description-title">Economy</p>Economic data includes household income, major industries, etc.</p>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default Dashboard;



