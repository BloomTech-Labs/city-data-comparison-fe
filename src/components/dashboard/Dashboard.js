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
                    <img className="feature-images" src={data} alt=""/>
                    <img className="feature-images" src={forsale} alt=""/>
                    <img className="feature-images" src={insync} alt=""/>
               </div>


               <div className="dashboard-metrics-container">

               </div>


               <div className="dashboard-compare-container">

               </div>
          </div>
     )
}

export default Dashboard;