import React, {useState, useEffect} from 'react';
import {Bar} from 'react-chartjs-2';

export default function EducationGraph (props) {

  const colorifier = lat => {

    let arr = String(lat).replace(".","").split("");

    let num1 = arr.pop();
    let num2 = arr.pop();
    let num3 = arr.pop();

    return `rgb(${num1 * 28}, ${num2 * 28}, ${num3 * 28})`
  }
  

    return (
      <div className="charts" >
        
          <div className="chart-container" style={{position: "relative", width: `100%`}}>
            <Bar
              data={{
                labels: ["Agriculture forestry fishing and hunting and mining",  "Arts entertainment and recreation and accommodation and food services", "Construction","Educational services and health care and social assistance", "Finance and insurance and real estate and rental and leasing", "Information", "Manufacturing", "Other services except public administration" , "Professional scientific and management and administrative and waste management services" , "Public administration", "Retail trade", "Transportation and warehousing and utilities", "Wholesale trade"],
                datasets: props.edData.map( item => {
                  
                  return {
                    label: item.name.replace(" city" , ""),
                    data: [
                      item["Industry"]["Agriculture forestry fishing and hunting and mining"],
                      item["Industry"]["Arts entertainment and recreation and accommodation and food services"],
                      item["Industry"]["Construction"],
                      item["Industry"]["Educational services and health care and social assistance"],
                      item["Industry"]["Finance and insurance and real estate and rental and leasing"],
                      item["Industry"]["Information"],
                      item["Industry"]["Manufacturing"],
                      item["Industry"]["Other services except public administration"],
                      item["Industry"]["Professional scientific and management and administrative and waste management services"],
                      item["Industry"]["Public administration"],
                      item["Industry"]["Retail trade"],
                      item["Industry"]["Transportation and warehousing and utilities"],
                      item["Industry"]["Wholesale trade"],  
                      
                    ],
                    backgroundColor:
                      colorifier(item.lat)
                      

                  }
                })

              }}
              options={{
                title:{
                  display:true,
                  text:'Industry',
                  fontSize:25
                },
                legend:{
                  display:true,
                  position:"top",
                }
              }}
            /> 
          </div>
        
        </div>
    )
  }
  