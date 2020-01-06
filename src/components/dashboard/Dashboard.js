import React, {useState} from 'react'
import PlacesAutocomplete, {geocodeByAddress, geocodeByPlaceId} from 'react-places-autocomplete';
import dataVisual from './assets/dataVisual.svg'
import map from './assets/map.svg'
import money from './assets/money.svg'
import graph from './assets/graph.svg'


function Dashboard(){

     // * SEARCH 1 STATE / HANDLECHANGE
     const [search, setSearch] = useState("")
     const handleSelect = async value => {
          setSearch(value)
     };


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
     }


     //* SUBMIT SEARCH */
     const submitCity = (event) => {
          event.preventDefault();
          console.log(search)
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
                    <div className="search-function">
                         <h1>Choice is YOURS</h1>
                         <p className="cities-description">Choose the information you want to see about city(ies).</p>
                         
                         <form onSubmit={submitCity}>
                              <PlacesAutocomplete value={search} onChange={setSearch} onSelect={handleSelect}>
                                   {
                                   ({ getInputProps, suggestions, getSuggestionItemProps, loading })=>(
                                   <div>
                                        <input {...getInputProps({placeholder: "San Francisco, CA"})}/>
                                        <button className="search-city-button">Go</button>
                                        <div>
                                             {loading ? <div>...loading</div> : null}

                                             {suggestions.map( (suggestion) => {
                                                  const style = {
                                                       backgroundColor: suggestion.active ? "#F2F9FD" : "#fff"
                                                  }

                                                  return <div {...getSuggestionItemProps(suggestion, {style})}>{suggestion.description}</div>
                                             })}
                                        </div>
                                   </div>)
                                   }
                              </PlacesAutocomplete>
                              {/* <input 
                                   type="text"
                                   name="city"
                                   value={search}
                                   onChange={searchChange}
                                   placeholder="San Francisco, CA"
                              />
                              <button className="search-city-button">Go</button> */}
                         </form>
                         <p className="cities-description-two">Want to learn about more cities? Click the button below to compare multiple cities.</p>
                         <button className="compare-cities-button">Compare cities</button>
                    </div>
               </div>


               {/* PRODUCT FEATURES */}
               <div className="dashboard-features-container">
                    <div className="feature-descriptions">
                         <img className="feature-images money" src={money} alt="money" />
                         <p>Explore cost of living and other data of a single city or compare multiple cities to learn about differences.</p>
                    </div>
                    <div className="feature-descriptions">
                         <img className="feature-images map" src={map} alt="map"/>
                         <p>View the map to explore what is near cities and how the data compares with different parts of the city.</p>
                    </div>
                    <div className="feature-descriptions">
                         <img className="feature-images dataVisual" src={dataVisual} alt="data visual"/>
                         <p>Data visuals help to easily understand in cost of living in multiple cities and provide data from a bird’s eye view.</p>
                    </div>
               </div>

               {/* TOP CITY METRICS */}
               <div className="dashboard-metrics-container">
                    <div className="dashboard-metrics">
                         <div>
                              <img src={graph} alt="living cost graph" />
                              <p>Data for living costs</p>
                         </div>
                         <div>
                              <img src={graph} alt="living cost graph" />
                              <p>Data for job prospects</p>
                         </div>
                         <div>
                              <img src={graph} alt="living cost graph" />
                              <p>Data for safety/crime</p>
                         </div>
                    </div>
               </div>



               {/* COMPARE CITIES FUNCTION */}
               <div className="dashboard-compare-container">
                    <div className="dashboard-compare">
                         <h2>Compare Multiple Cities</h2>
                         <div className="compare-buttons">
                              <form onSubmit={submitCities}>
                                   <PlacesAutocomplete name="cityOne" value={cityOne} onChange={setCityOne} onSelect={handleCityOne}>
                                        {
                                             ({ getInputProps, suggestions, getSuggestionItemProps, loading })=>(
                                             <div>
                                                  <input {...getInputProps({placeholder: "Type address"})} />
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

                                   <span className="versus">vs.</span>
                                   
                                   <PlacesAutocomplete name="cityTwo" value={cityTwo} onChange={setCityTwo} onSelect={handleCityTwo}>
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
                                   <button>Compare</button>
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