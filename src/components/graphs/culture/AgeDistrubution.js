import React from 'react';
import {Bar} from 'react-chartjs-2';

export default function AgeDistributionGraph({ethData}) {

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
                labels:  ["Under 5", "5 to 9", "10 to 14", "15 to 19", "20 to 24", "25 to 34", "35 to 44", "45 to 54","55 to 59", "60 to 64","65 to 74", "75 to 84", "85 years and over" ],
                datasets: ethData.map( item => {
                  
                  return {
                    label: item.name_with_com,
                    data: [
                      item["Age Distribution"]["Under 5"],
                      item["Age Distribution"]["5 to 9"],
                      item["Age Distribution"]["10 to 14"],
                      item["Age Distribution"]["15 to 19"],
                      item["Age Distribution"]["20 to 24"],
                      item["Age Distribution"]["25 to 34"],
                      item["Age Distribution"]["35 to 44"],
                      item["Age Distribution"]["45 to 54"],
                      item["Age Distribution"]["55 to 59"],
                      item["Age Distribution"]["60 to 64"],
                      item["Age Distribution"]["65 to 74"],
                      item["Age Distribution"]["75 to 84"],
                      item["Age Distribution"]["85 years and over"]                   
                      
                    ],
                    backgroundColor:
                      colorifier(item.Longitude)
                      

                  }
                })

              }}
              options={{
                title:{
                  display:true,
                  text:'Age Distribution',
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
                      display: false,
                      labelString: 'Age Distribution'
                    },
                  } 
                  ],
                  yAxes: [ {
                    display: true,
                    gridLines: {
                      display:false,
                    },
                    scaleLabel: {
                      display: true,
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
  