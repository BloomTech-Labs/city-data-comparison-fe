import React from 'react';
import {HorizontalBar} from 'react-chartjs-2';

export default function RetirementGraph({ethData}) {

  

    return (
      <div className="charts" >
        
          <div className="chart-container" style={{position: "relative", width: `100%`}}>
            <HorizontalBar
              data={{
                labels:  ["SSI","Retirement income", "Social Security"],
                datasets: ethData.map( item => {
                  
                  return {
                    label: item.name_with_com,
                    data: [
                      item["Retirement Percent"]["With Supplemental Security Income"],
                      item["Retirement Percent"]["With retirement income"],
                      item["Retirement Percent"]["With Social Security"],
                    ],
                    backgroundColor:item.color
                      

                  }
                })

              }}
              options={{
                title:{
                  display:false,
                  text:'Retirement Percent',
                  fontSize:25
                },
                legend:{
                  display: false,
                },
                scales: {
                  xAxes: [ {
                    display: true,
                    gridLines: {
                      display:false,
                    },
                    scaleLabel: {
                      display: true,
                      labelString: 'Percent of retirees using income source'
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
                      labelString: 'Types of retirement income source',
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
  