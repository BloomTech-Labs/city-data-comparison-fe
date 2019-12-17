import React, {useState, useEffect} from 'react'
import data from './assets/data.svg'
import forsale from './assets/forsale.svg'
import insync from './assets/insync.svg'

function Dashboard(){

     // * SEARCH STATE / HANDLECHANGE
     const [search, setSearch] = useState("")
     const searchChange = (event) => {
          event.preventDefault();
          setSearch({
               ...search, 
               [event.target.name]:event.target.value
          })
     }
     
     //* COMPARE STATE / HANDLECHANGE */
     const [compare, setCompare] = useState({
          cityOne:"",
          cityTwo:""
     })
     const compareChange = (event) => {
          event.preventDefault();
          setCompare({
               ...compare,
               [event.target.name]:event.target.value
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
                         <p>Choose the information you want to see about city(ies).</p>
                         
                         <form onSubmit={submitCity}>
                              <input 
                                   type="text"
                                   name="city"
                                   value={search}
                                   onChange={searchChange}
                                   placeholder="City"
                              />
                              <button className="search-city-button">Go</button>
                         </form>
                         <p className="compare-cities-title">Want to learn about more cities? Click the button below to compare multiple cities.</p>
                         <button className="compare-cities-button">Compare cities</button>
                    </div>
               </div>




               {/* PRODUCT FEATURES */}
               <div className="dashboard-features-container">
                    <div className="feature-descriptions">
                         <img className="feature-images" src={data} alt="data"/>
                         <p>PHOTOS WILL CHANGE LATER. Lorem ipsum 90's meh master cleanse taxidermy kickstarter quinoa bespoke craft beer single-origin coffee cray PBR&B put a bird on it photo booth. </p>
                    </div>
                    <div className="feature-descriptions">
                         <img className="feature-images" src={forsale} alt="house-forsale"/>
                         <p>PHOTOS WILL CHANGE LATER. Photo booth bespoke kogi food truck polaroid gentrify post-ironic. Leggings wolf YOLO pork belly, cliche quinoa plaid +1 humblebrag shaman ennui gochujang.</p>
                    </div>
                    <div className="feature-descriptions">
                         <img className="feature-images" src={insync} alt="business-insync"/>
                         <p>PHOTOS WILL CHANGE LATER. Cold-pressed, art party bespoke heirloom fam vinyl copper mug hexagon pour-over offal. Twee aesthetic leggings, post-ironic waistcoat. </p>
                    </div>
               </div>

               {/* TOP CITY METRICS */}
               <div className="dashboard-metrics-container">
                    <div>Data for living costs</div>
                    <div>Data for job prospects</div>
                    <div>Data for safety/crime</div>
               </div>

               {/* COMPARE CITIES FUNCTION */}
               <div className="dashboard-compare-container">
                    <h2>Compare Multiple Cities</h2>
                    <div className="compare-buttons">
                         <form onSubmit={submitCities}>
                              <input 
                                   type="text"
                                   name="cityOne"
                                   value={compare.cityOne}
                                   onChange={compareChange}
                                   placeholder="San Francisco, CA"
                              />
                              <input 
                                   type="text"
                                   name="cityTwo"
                                   value={compare.cityTwo}
                                   onChange={compareChange}
                                   placeholder="Los Angeles, CA"
                              />
                              <button>Compare</button>
                         </form>
                    </div>
               </div>
          </div>
     )
}

export default Dashboard;