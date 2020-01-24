import React from 'react';
import {HorizontalBar} from 'react-chartjs-2';

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
            <HorizontalBar
              data={{
                labels: ["1 room",  "2 rooms", "3 rooms",  "4 rooms", "5 rooms", "6 rooms", "7 rooms", "8 rooms", "9 rooms or more"],
                datasets: props.edData.map( item => {
                  
                  return {
                    label: item.name_with_com,
                    data: [
                      item["Housing by rooms"]["1 room"],
                      item["Housing by rooms"]["2 rooms"],
                      item["Housing by rooms"]["3 rooms"],
                      item["Housing by rooms"]["4 rooms"],
                      item["Housing by rooms"]["5 rooms"],
                      item["Housing by rooms"]["6 rooms"],
                      item["Housing by rooms"]["7 rooms"],
                      item["Housing by rooms"]["8 rooms"],
                      item["Housing by rooms"]["9 rooms or more"],
                                       
                      
                    ],
                    backgroundColor:
                      colorifier(item.Longitude)
                      

                  }
                })

              }}
              options={{
                title:{
                  display:false,
                  text:'Housing by rooms',
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
  