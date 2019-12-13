import React, {useState, useEffect} from 'react'

function Dashboard(){

     const [city, setCity] = useState("")
     
     const handleChange = (event) => {
          event.preventDefault();
          setCity(event.target.value)
     }
     
     const onSubmit = (event) => {
          event.preventDefault();
     }


     return(
          <div className="dashboard-container">
               <div className="dashboard-search-container">
                    {/* <div>map goes here</div> */}

                    <div>
                         <h1>Choice is YOURS</h1>
                         <p>Choose the information you want to see about city(ies).</p>
                         
                         <form onSubmit={}>
                              <input 
                                   type="text"
                                   name="city"
                                   value={city}
                                   onChange={handleChange}
                                   placeholder="City"
                              />
                              <button>\u279E</button>
                         </form>
                         <p>OR</p>
                         <button>Compare cities</button>
                    </div>
               </div>


               <div className="dashboard-features-container">

               </div>


               <div className="dashboard-metrics-container">

               </div>


               <div className="dashboard-compare-container">

               </div>
          </div>
     )
}

export default Dashboard;