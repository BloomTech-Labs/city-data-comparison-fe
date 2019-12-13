import React, {useState, useEffect} from 'react'
import data from './assets/data.svg'
import forsale from './assets/forsale.svg'
import insync from './assets/insync.svg'

function Dashboard(){

     const [city, setCity] = useState("")
     
     const handleChange = (event) => {
          event.preventDefault();
          setCity(event.target.value)
     }
     
     const submitCity = (event) => {
          event.preventDefault();
     }


     return(
          <div className="dashboard-container">
               <div className="dashboard-search-container">
                    {/* <div>map goes here</div> */}
                    <div>
                         <h1>Choice is YOURS</h1>
                         <p>Choose the information you want to see about city(ies).</p>
                         
                         <form onSubmit={submitCity}>
                              <input 
                                   type="text"
                                   name="city"
                                   value={city}
                                   onChange={handleChange}
                                   placeholder="City"
                              />
                              <button>{"\u00BB"}</button>
                         </form>
                         <p>OR</p>
                         <button>Compare cities</button>
                    </div>
               </div>


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


               <div className="dashboard-metrics-container">
                    <div>Data for living costs</div>
                    <div>Data for job prospects</div>
                    <div>Data for safety/crime</div>
               </div>


               <div className="dashboard-compare-container">

               </div>
          </div>
     )
}

export default Dashboard;