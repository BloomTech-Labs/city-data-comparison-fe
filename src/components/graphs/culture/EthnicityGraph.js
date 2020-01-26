import React from 'react';
import {HorizontalBar} from 'react-chartjs-2';

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
            <HorizontalBar
              data={{
                labels:  ["White", "Hispanic or Latino", "African American", "Asian", "American Indian", "Pacific Islander", "Two or more races", "Other"],
                datasets: ethData.map( item => {
                  
                  return {
                    label: item.name_with_com,
                    data: [
                      item["Ethnicity"]["White"],
                      item["Ethnicity"]["Hispanic or Latino"],
                      item["Ethnicity"]["African American"],
                      item["Ethnicity"]["Asian"],
                      item["Ethnicity"]["American Indian"],
                      item["Ethnicity"]["Pacific Islander"],
                      item["Ethnicity"]["Two or more races"],
                      item["Ethnicity"]["other race"]                   
                      
                    ],
                    backgroundColor:
                      colorifier(item.Longitude)
                      

                  }
                })

              }}
              options={{
                title:{
                  display:false,
                  text:'Ethnicity',
                  fontSize:25
                },
                legend:{
                  display:false,
                  position:"top",
                },
                scales: {
                  xAxes: [ {
                    
                    display: true,
                    gridLines: {
                      display:false,
                    },
                    scaleLabel: {
                      display: true,
                      labelString: 'Percent'
                    },
                  } 
                  ],
                  yAxes: [ {
                    display: true,
                    gridLines: {
                      display:false,
                    },
                    scaleLabel: {
                      display: false,
                      labelString: 'Percent',
                      ticks: {
                        beginAtZero: true
                      }
                    },

                  } ]
                }
              }}
            /> 
          </div>
        
        </div>
    )
  }
  