import React from 'react';
import {Bar} from 'react-chartjs-2';

export default function EducationGraph (props) {


    return (
      <div className="charts" >
        
          <div className="chart-container" style={{position: "relative", width: `100%`}}>
            <Bar
              data={{
                labels: ["Drives Alone",  "Carpools", "Works at home",  "Public Transport", "Walks", "Other transport"],
                datasets: props.edData.map( item => {
                  
                  return {
                    label: item.name_with_com,
                    data: [
                      item["Commuting to Work"]["Drives Alone"],
                      item["Commuting to Work"]["Carpools"],
                      item["Commuting to Work"]["Works at home"],
                      item["Commuting to Work"]["Public Transport"],
                      item["Commuting to Work"]["Walks"],
                      item["Commuting to Work"]["Other transport"]
                    ],
                    backgroundColor: item.color
                      

                  }
                })

              }}
              options={{
                title:{
                  display:false,
                  text:'Ways to Commute',
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
                      labelString: 'Methods of transportation'
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
  