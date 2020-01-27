import React from 'react';
import {HorizontalBar} from 'react-chartjs-2';

export default function EducationGraph (props) {



    return (
      <div className="charts" >
        
          <div className="chart-container" style={{position: "relative", width: `100%`}}>
            <HorizontalBar
              data={{
                labels: [ "Less than $10,000", "$10,000 - $14,999",  "$15,000 - $24,999", "$25,000 - $34,999",  "$35,000 - $49,999", "$50,000 - $74,999", "$75,000 - $99,999", "$100,000 - $149,999", "$150,000 - $199,999", "$200,000 or more" ],
                datasets: props.edData.map( item => {
                  
                  return {
                    label: item.name_with_com,
                    data: [
                      item["Household Income"]["Less than USD 10,000"],
                      item["Household Income"]["USD 10,000 - USD 14,999"],
                      item["Household Income"]["USD 15,000 - USD 24,999"],
                      item["Household Income"]["USD 25,000 - USD 34,999"],
                      item["Household Income"]["USD 35,000 - USD 49,999"],
                      item["Household Income"]["USD 50,000 - USD 74,999"],
                      item["Household Income"]["USD 75,000 - USD 99,999"],
                      item["Household Income"]["USD 100,000 - USD 149,999"],
                      item["Household Income"]["USD 150,000 - USD 199,999"],
                      item["Household Income"]["USD 200,000 or more"]
                          
                      
                    ],
                    backgroundColor:item.color
                      

                  }
                })

              }}
              options={{
                title:{
                  display:false,
                  text:'Household Income',
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
                      labelString: 'Household income',
                      ticks: {
                        beginAtZero: true
                      }
                    },

                  }]
                }
              }}
            /> 
          </div>
        
        </div>
    )
  }
  