import React from 'react';
import {Bar} from 'react-chartjs-2';

export default function EthnicityGraph({ethData}) {

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
                labels:  ["African American", "American Indian", "Asian", "Hispanic or Latino", "Pacific Islander", "Two or more races", "White", "other race"],
                datasets: ethData.map( item => {
                  
                  return {
                    label: item.name.replace(" city" , ""),
                    data: [
                      item["Ethnicity"]["African American"],
                      item["Ethnicity"]["American Indian"],
                      item["Ethnicity"]["Asian"],
                      item["Ethnicity"]["Hispanic or Latino"],
                      item["Ethnicity"]["Pacific Islander"],
                      item["Ethnicity"]["Two or more races"],
                      item["Ethnicity"]["White"],
                      item["Ethnicity"]["other race"]                   
                      
                    ],
                    backgroundColor:
                      colorifier(item.lat)
                      

                  }
                })

              }}
              options={{
                title:{
                  display:true,
                  text:'Ethnicity',
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
  