
import React from 'react';
import styled from "styled-components";
import cities from "../../assets/icons/City.svg"
import population from "../../assets/icons/population.svg"
import money from "../../assets/icons/money.svg"
import baby from "../../assets/icons/Baby.svg"

import world from '../map-components/assets/world.svg'
import pop from '../map-components/assets/population.svg'
import users from '../map-components/assets/users.svg'
import briefcase from '../map-components/assets/briefcase.svg'
import income from '../map-components/assets/dollar.svg'


// const CenterCard = styled.h3`
// display:flex;
// flex-wrap:wrap;




const Wrap = styled.div`
display:flex;
flex-direction:row;



`

const Table = styled.table`
width:100%;
`

function TotalPopulation({ethData}) {
    // console.log(ethData, "ETH")
	const colorifier = lat => {

        let arr = String(lat).replace(".","").split("");
    
        let num1 = arr.pop();
        let num2 = arr.pop();
        let num3 = arr.pop();
    
        return `rgb(${num1 * 28}, ${num2 * 28}, ${num3 * 28})`
        }


	
	return (


        // <div className="card">
        // <h1>General Statistics</h1>
            
        //     <div>
        //         <h2 style = {{ marginLeft: "15%"}}>Total Population</h2>
        //             {ethData.map(item => 
        //                  <Wrap style = {{ textAlign: "left", width:"35%"}} key={item._id}>
        //                     <CenterCard style = {{ textAlign: "left", width:"40%"}}> {item["City"]}</CenterCard>
        //                     <CenterCard style = {{ textAlign: "left", width:"40%"}}> {item["Total Population"]}</CenterCard>

        //                  </Wrap>
        //     )}
		// 	</div>
        //     <div>
        //         <h2 >Median Rent</h2>
        //             {ethData.map(item => 
        //                  <Wrap style = {{ textAlign: "center", width:"35%"}} key={item._id}>
                            
        //                     <CenterCard style = {{ textAlign: "center", width:"40%"}}> {item["Median Rent"]}$</CenterCard>

        //                  </Wrap>
        //     )}
		// 	</div>
            
          
        // </div>
        
    //     <div style = {{marginBottom:"3.5rem"}}>
    //         <h1>General Statistics</h1>
    //         <Wrap>
    //         <img style = {{marginLeft:"5%"}}className="general-icon" src={cities} alt="cities icon"/>
    //         <h2 style = {{ width:"25%", marginLeft:"1%"}}>Cities</h2>
    //         <img style = {{height:"5%", width:"5%", marginLeft:"1%"}}className="general-icon" src={population} alt="population icon"/>
    //         <h2 style = {{ width:"25%", marginLeft:"1%"}}>Population</h2>
    //         <img style = {{height:"7%", width:"6%", marginLeft:"1%"}}className="general-icon" src={money} alt="money icon"/>
    //         <h2 style = {{ width:"25%", marginLeft:"1%"}}>Median Rent</h2>
    //         <img style = {{height:"10%", width:"5%", marginLeft:"1%"}}className="general-icon" src={baby} alt="baby icon"/>
    //         <h2 style = {{ width:"25%", marginLeft:"1%"}}>Median Age</h2>
    //         </Wrap>
    //         {ethData.map(item => 
    //         <Table tyle = {{ width:"100%"}}>
    //             <tr style = {{ width:"100%"}}>
    //                 <th style = {{ width:"25%", paddingBottom:"1rem"}}>{item["City"]}</th>
    //                 <th style = {{ width:"25%"}}>{item["Total Population"]}</th> 
    //                 <th style = {{ width:"25%"}}>${item["Median Rent"]}</th>
    //                 <th style = {{ width:"25%"}}>{item["Median Age"]} years</th>
    //             </tr>
    //         </Table>
    //         )}
    // </div>
        <div>
            {ethData.map(item => 
            <> 
            <div className="city-overview-border">

            </div>
            <div className="city-overview-container">
                <div className="city-overview-container-one">
                    <div>
                        <div> <img alt="world" src={world} /> City</div>
                        <div> <img alt="people" src={pop} /> Population</div>
                        <div> <img alt="age" src={users} /> Median age</div>
                    </div>

                    <div>
                        <div>{item["City"]}</div>
                        <div>{item["Total Population"]}</div>
                        <div>{item["Median Age"]} years old</div>
                    </div>
                </div>





                <div className="city-overview-container-two">
                    <div>
                        <div><img alt="" src={} />Median rent</div>
                        <div><img alt="" src={} />Median income</div>
                    </div>


                    <div>
                        <div>${item["Median Rent"]}</div>
                        <div>$70000</div>
                    </div>


                </div>
            </div>
            </>
            )}
            
        </div>
	);
}

export default TotalPopulation;

