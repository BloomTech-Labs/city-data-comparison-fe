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
                labels: [ "Less than $10,000", "$10,000 - $14,999",  "$15,000 - $24,999", "$25,000 - $34,999",  "$35,000 - $49,999", "$50,000 - $74,999", "$75,000 - $99,999", "$100,000 - $149,999", "$150,000 - $199,999", "$200,000 or more" ],
                datasets: props.edData.map( item => {
                  
                  return {
                    label: item.name.replace(" city" , ""),
                    data: [
                      item["Household Income"]["Less than $10,000"],
                      item["Household Income"]["$10,000 - $14,999"],
                      item["Household Income"]["$15,000 - $24,999"],
                      item["Household Income"]["$25,000 - $34,999"],
                      item["Household Income"]["$35,000 - $49,999"],
                      item["Household Income"]["$50,000 - $74,999"],
                      item["Household Income"]["$75,000 - $99,999"],
                      item["Household Income"]["$100,000 - $149,999"],
                      item["Household Income"]["$150,000 - $199,999"],
                      item["Household Income"]["$200,000 or more"]
                          
                      
                    ],
                    backgroundColor:
                      colorifier(item.lat)
                      

                  }
                })

              }}
              options={{
                title:{
                  display:true,
                  text:'Household Income',
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
  