import React from 'react';
import {Bar} from 'react-chartjs-2';

export default function AgeDistributionGraph({ethData}) {

  

    return (
      <div className="charts" >
        
          <div className="chart-container" style={{position: "relative", width: `100%`}}>
            <Bar
              data={{
                labels:  ["Under 5", "5 to 9", "10 to 14", "15 to 19", "20 to 24", "25 to 34", "35 to 44", "45 to 54","55 to 59", "60 to 64","65 to 74", "75 to 84", "85 years+" ],
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
                      item["Age Distribution"]["85 years+"]                   
                      
                    ],
                    backgroundColor:item.color
                      

                  }
                })

              }}
              options={{
                title:{
                  display:false,
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
                      display: true,
                      labelString: 'Age'
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
  