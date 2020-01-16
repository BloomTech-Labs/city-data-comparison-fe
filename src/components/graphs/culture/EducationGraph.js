import React from 'react';
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
                    backgroundColor:
                      colorifier(item.lat)
                      

                  }
                })

              }}
              options={{
                title:{
                  display:true,
                  text:'Educational Attainment',
                  fontSize:25
                },
                legend:{
                  display:true,
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
  