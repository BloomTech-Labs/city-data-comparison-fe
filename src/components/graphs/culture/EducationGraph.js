import React from 'react';
import {HorizontalBar} from 'react-chartjs-2';

export default function EducationGraph (props) {
 

    return (
      <div className="charts" >
        
          <div className="chart-container" style={{position: "relative", width: `100%`}}>
            <HorizontalBar
              data={{
                labels: ["Less than 9th grade",  "Some High School", "High school",  "Some College", "Associate's Degree", "Bachelor's Degree", "Graduate Degree"],
                datasets: props.edData.map( item => {
                  
                  return {
                    label: item.name_with_com,
                    data: [
                      item["Educational Attainment"]["Less than 9th grade"],
                      item["Educational Attainment"]["9th to 12th grade no diploma"],
                      item["Educational Attainment"]["High school"],
                      item["Educational Attainment"]["Some college no degree"],
                      item["Educational Attainment"]["Associate's degree"],
                      item["Educational Attainment"]["Bachelor's degree"],
                      item["Educational Attainment"]["Graduate degree"]                    
                      
                    ],
                    backgroundColor:item.color
                      

                  }
                })

              }}
              options={{
                title:{
                  display:false,
                  text:'Educational Attainment',
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
                      labelString:'Percent'
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
  