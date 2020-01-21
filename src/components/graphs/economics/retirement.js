import React from 'react';
import {Pie} from 'react-chartjs-2';

export default function RetirementGraph({ethData}) {

    

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
                labels:  ["With Social Security", "With retirement income", "With Supplemental Security Income"],
                datasets: ethData.map( item => {
                  
                  return {
                    label: item.name_with_com,
                    data: [
                      item["Retirement Percent"]["With Social Security"],
                      item["Retirement Percent"]["With retirement income"],
                      item["Retirement Percent"]["With Supplemental Security Income"],
                                
                    ],
                    backgroundColor:
                      colorifier(item.Longitude)
                      

                  }
                })

              }}
              options={{
                title:{
                  display:true,
                  text:'Retirement Percent',
                  fontSize:25
                },
                legend:{
                  display: true,
                },
                scales: {
                  xAxes: [ {
                    
                    display: false,
                    gridLines: {
                      display:false,
                    },
                    scaleLabel: {
                      display: false,
                      labelString: 'Retirement Percent'
                    },
                  } 
                  ],
                  yAxes: [ {
                    display: false,
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
  