import React, {useState, useContext} from 'react'
import {Link} from "react-router-dom"

import PlacesAutocomplete from 'react-places-autocomplete';
import graph from './assets/graph.svg'
import pointer from './assets/pointer.svg'
import location from './assets/location.svg'
import data from './assets/data_visual.svg'
import control from './assets/control_data.svg'


import { CityContext } from '../../contexts/CityContext';

import AOS from 'aos';
import 'aos/dist/aos.css';

function Dashboard(){

     AOS.init()
     const { cityMarkers, selected, setSelected, viewport, setViewport } = useContext(CityContext)
     // * SEARCH 1 STATE / HANDLECHANGE
     const [search, setSearch] = useState("")
     const [searchCities, setSearchCities] = useState([])
     const handleSelect = async value => {
          setSearch(value)
     };

     const [suggestions, setSuggestions] = useState([]);

     const searchChange= e => {
          const searchText = e.target.value;
          searchText
          ? setSuggestions(cityMarkers.filter(city => city.name.toLowerCase().includes(searchText.toLowerCase())))
          : setSuggestions([]);
          setSearch(searchText)
      };
      
      const chooseSuggestion = city => {
          setSearch(city.name.replace(" city", ""));
          selectSearch(city);
          setSuggestions([]);
          setViewport({
              ...viewport,
              longitude: city.lng,
              latitude: city.lat
            })
          
      }
      
      const selectSearch = cityMarker =>  {
          console.log(cityMarker);
          if (selected.find(item => item === cityMarker)) {
              return;
          } else {
              setSelected([...selected, cityMarker]);
          }
        }

     //* COMPARE 2 STATE / HANDLECHANGE */
     const [cityOne, setCityOne] = useState("")
     const [cityTwo, setCityTwo] = useState("")
     const [compare, setCompare] = useState({
          cityOne:"",
          cityTwo:""
     })
     const handleCityOne = async (value) => {
          setCityOne(value)
          setCompare({
               ...compare,
               cityOne:value
          })
     }
     const handleCityTwo = async (value) => {
          setCityTwo(value)
          setCompare({
               ...compare,
               cityTwo:value
          })
          console.log(value)
     }


     //* SUBMIT SEARCH */
     const submitCity = (event) => {
          event.preventDefault();
          console.log(cityMarkers)
          selectSearch(cityMarkers.filter(city => city.name.replace(" city", "").toLowerCase().includes(search.toLowerCase())))
     }
     
     const submitCities = (event) => {
          event.preventDefault();
          console.log(compare)
     }




     return(
          <div className="dashboard-container">
               {/* SEARCH FUNCTION */}
               <div className="dashboard-search-container">
                    <div className="slanted-san-francisco"></div>
                    {/* <div className="slanted-blue-one"></div> */}
                    <div className="search-function"
                         data-aos="fade-down"
                         data-aos-offset="200"
                         data-aos-delay="50"
                         data-aos-duration="1000"
                         data-aos-easing="ease-in-out"
                         data-aos-mirror="true"
                         data-aos-once="true"
                    >
                         <h1>Choice is YOURS</h1>
                         <p className="cities-description">Search for a city:</p>


                         
                         <form onSubmit={submitCity}>

                                   <div>
                                        <input 
                                        placeholder="San Francisco, CA"
                                        onChange={searchChange}
                                        value={search}
                                        />
                                        <Link to="map/jobs/standards"><button type="submit" className="search-city-button">Go</button></Link>
                                        <div>
                                             

                                             {suggestions.map( (suggestion) => {
                                                  const style = {
                                                       backgroundColor: suggestion.active ? "#F2F9FD" : "#fff",
                                                       cursor: "pointer",
                                                       fontSize:"1rem",
                                                       textAlign:"left",
                                                       padding:"10px",
                                                       boxShadow: "0 1px 16px 0 rgba(0, 0, 0, 0.09)"
                                                  }
                                                  return <div style={style} onClick={() => chooseSuggestion(suggestion)}> <img className="imageStyle" src={pointer}/> {suggestion.name.replace(" city", "")}</div>
                                             })}
                                        </div>
                                   </div>
                              </form> 
                         <p className="cities-description-two">Want to learn about more cities? Click the button below to compare multiple cities.</p>
                         <button className="compare-cities-button">Compare cities</button>
                    </div>
               </div>


               {/* PRODUCT FEATURES */}
               <div className="dashboard-features-container">
                    <div className="feature-descriptions-container"
                         // data-aos="fade-right"
                         // data-aos-offset="200"
                         // data-aos-delay="50"
                         // data-aos-duration="1000"
                         // data-aos-easing="ease-in-out"
                         // data-aos-mirror="true"
                         // data-aos-once="true"
                    >
                         <img className="feature-images" src={control} alt="money" />
                         <div className="feature-descriptions">
                              <p className="feature-title">Control of data</p>
                              <p>Explore cost of living and other data of a single city or compare multiple cities to learn about differences.</p>
                         </div>
                    </div>
                    <div className="feature-descriptions-container"
                         // data-aos="fade-up"
                         // data-aos-offset="200"
                         // data-aos-delay="50"
                         // data-aos-duration="1000"
                         // data-aos-easing="ease-in-out"
                         // data-aos-mirror="true"
                         // data-aos-once="true"
                    >
                         <img className="feature-images" src={data} alt="map"/>
                         <div className="feature-descriptions">
                              <p className="feature-title">Map View</p>
                              <p>View the map to explore what is near cities and how the data compares with different parts of the city.</p>
                         </div>
                    </div>
                    <div className="feature-descriptions-container"
                         // data-aos="fade-left"
                         // data-aos-offset="200"
                         // data-aos-delay="50"
                         // data-aos-duration="1000"
                         // data-aos-easing="ease-in-out"
                         // data-aos-mirror="true"
                         // data-aos-once="true"
                    >
                         <img className="feature-images" src={location} alt="data visual"/>
                         <div className="feature-descriptions">
                              <p className="feature-title">Visualize Data</p>
                              <p>Data visuals help to easily understand in cost of living in multiple cities and provide data from a bird’s eye view.</p>
                         </div>
                    </div>
               </div>

               {/* TOP CITY METRICS */}
               <div className="dashboard-metrics-container">
                    <h2 className="metrics-title">Visualizing data made easier</h2>
                    <div className="dashboard-metrics">
                         <div className="metrics-description-container"
                              // data-aos="fade-up"
                              // data-aos-delay="150"
                              // data-aos-duration="1000"
                              // data-aos-easing="ease-in-out"
                              // data-aos-mirror="true"
                              // data-aos-once="true"
                         >
                              <img src={graph} alt="living cost graph" />
                              <p className="metrics-description">Housing data includes median rent, home prices, monthly homeowner costs, housing by rooms, and etc.</p>
                         </div>
                         <div className="metrics-description-container"
                              // data-aos="fade-up"
                              // data-aos-delay="350"
                              // data-aos-duration="1000"
                              // data-aos-easing="ease-in-out"
                              // data-aos-mirror="true"
                              // data-aos-once="true"
                         >
                              <img src={graph} alt="living cost graph" />
                              <p className="metrics-description">Data for social trends consists of age, ethnicity, education, languages spoken, school enrollment, and etc.</p>
                         </div>
                         <div className="metrics-description-container"
                              // data-aos="fade-up"
                              // data-aos-delay="550"
                              // data-aos-duration="1000"
                              // data-aos-easing="ease-in-out"
                              // data-aos-mirror="true"
                              // data-aos-once="true"
                         >

                              <img src={graph} alt="living cost graph" />
                              <p className="metrics-description">Economic data includes health insurances, household income, major industries and etc.</p>
                         </div>
                    </div>
               </div>



               {/* COMPARE CITIES FUNCTION */}
               <div className="dashboard-compare-container"
                    // data-aos="fade-right"
                    // data-aos-delay="50"
                    // data-aos-duration="1000"
                    // data-aos-easing="ease-in-out"
                    // data-aos-mirror="true"
                    // data-aos-once="true"
               >
                    <div className="dashboard-compare">
                         <h2>Don’t settle for less</h2>
                         <p>Moving to a new city, job hunting or choosing vacation spots? Compare cities to find out differences in cost of living, jobs, and safety.</p>
                         <div className="compare-buttons">
                              <form onSubmit={submitCities}>
                                   <PlacesAutocomplete name="cityOne" value={cityOne} onChange={setCityOne} onSelect={handleCityOne}>
                                        {
                                             ({ getInputProps, getSuggestionItemProps, loading })=>(
                                             <div className="compare-search-function">
                                                  {/* <label className="compare-address-label">Address 1</label> */}
                                                  <input {...getInputProps({placeholder: "City One"})} />
                                                  <div>
                                                       {loading ? <div>...loading</div> : null}

                                                       {suggestions.map( (suggestion) => {
                                                            const style = {
                                                                 backgroundColor: suggestion.active ? "#F2F9FD" : "#fff",
                                                                 cursor: "pointer",
                                                                 fontSize:"1rem",
                                                                 textAlign:"left",
                                                                 padding:"10px",
                                                                 boxShadow: "0 1px 16px 0 rgba(0, 0, 0, 0.09)"
                                                            }
                                                            return <div {...getSuggestionItemProps(suggestion, {style})}> <img className="imageStyle" src={pointer}/> {suggestion.name}</div>
                                                       })}
                                                  </div>
                                             </div>)
                                        }
                                   </PlacesAutocomplete>

                                   {/* <span className="versus">vs.</span> */}

                                   <PlacesAutocomplete name="cityTwo" value={cityTwo} onChange={setCityTwo} onSelect={handleCityTwo}>
                                        {
                                             ({ getInputProps, suggestions, getSuggestionItemProps, loading })=>(
                                             <div className="compare-search-function">
                                                  {/* <label className="compare-address-label">Address 2</label> */}
                                                  <input {...getInputProps({placeholder: "City Two"})}/>
                                                  <div>
                                                       {loading ? <div>...loading</div> : null}

                                                       {suggestions.map( (suggestion) => {
                                                            const style = {
                                                                 backgroundColor: suggestion.active ? "#F2F9FD" : "#fff",
                                                                 cursor: "pointer",
                                                                 fontSize:"1rem",
                                                                 textAlign:"left",
                                                                 padding:"10px",
                                                                 boxShadow: "0 1px 16px 0 rgba(0, 0, 0, 0.09)"
                                                            }
                                                            return <div {...getSuggestionItemProps(suggestion, {style})}> <img className="imageStyle" src={pointer}/> {suggestion.description}</div>
                                                       })}
                                                  </div>
                                             </div>)
                                        }
                                   </PlacesAutocomplete>
                                   <button
                                        // data-aos="zoom-in"
                                        // data-aos-offset="200"
                                        // data-aos-delay="50"
                                        // data-aos-duration="1000"
                                        // data-aos-easing="ease-in-out"
                                        // data-aos-mirror="true"
                                        // data-aos-once="true"
                                   >
                                        Compare
                                   </button>
                              </form>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default Dashboard;





// PROTOTYPE AUTOFILL FUNCTION
 {/* <div>
                    <PlacesAutocomplete value={search} onChange={setSearch} onSelect={handleSelect}>
                         {
                              ({ getInputProps, suggestions, getSuggestionItemProps, loading })=>(
                              <div>
                                   <input {...getInputProps({placeholder: "Type address"})}/>
                                   <div>
                                        {loading ? <div>...loading</div> : null}

                                        {suggestions.map( (suggestion) => {
                                             const style = {
                                                  backgroundColor: suggestion.active ? "#41b6e6" : "#fff"
                                             }

                                             return <div {...getSuggestionItemProps(suggestion, {style})}>{suggestion.description}</div>
                                        })}
                                   </div>
                              </div>)
                         }
                    </PlacesAutocomplete>
               </div> */}