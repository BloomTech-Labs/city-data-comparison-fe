import React from 'react';
import {Pie} from 'react-chartjs-2';

export default function VacancyGraph (props) {

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
            <Pie
              data={{
                
                labels: ["Homeowner vacancy rate", "Rental vacancy rate"],
                datasets: props.edData.map( item => {
                  
                  return {
                    label: item.name_with_com,
                    data: [
                      item["Vacancy Rate"]["Homeowner vacancy rate"],
                      item["Vacancy Rate"]["Rental vacancy rate"],
                                       
                      
                    ],
                    backgroundColor:
                      colorifier(item.Longitude)
                      

                  }
                })

              }}
              
              options={{
                title:{
                  display:true,
                  text:'Vacancy Rate',
                  fontSize:25
                },
                legend:{
                  display:true,
                  position:"top",
                },
                scales: {
                  xAxes: [ {
                    
                    display: false,
                    gridLines: {
                      display:false,
                    },
                    scaleLabel: {
                      display: true,
                      labelString: 'Rate'
                    },
                  } 
                  ],
                  yAxes: [ {
                    display: false,
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
  