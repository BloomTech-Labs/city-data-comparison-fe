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
                
                labels: ["Less than $500",  "$500 - $999", "$1,000 - $1,499",  "$1,500 - $1,999", "$2,000 - $2,499", "$2,500 - $2,999", "$3,000 or more"],
                datasets: props.edData.map( item => {
                  
                  return {
                    label: item.name_with_com,
                    data: [
                      item["Rent"]["Less than USD 500"],
                      item["Rent"]["USD 500 - USD 999"],
                      item["Rent"]["USD 1,000 - USD 1,499"],
                      item["Rent"]["USD 1,500 - USD 1,999"],
                      item["Rent"]["USD 2,000 - USD 2,499"],
                      item["Rent"]["USD 2,500 - USD 2,999"],
                      item["Rent"]["USD 3,000 or more"]                    
                      
                    ],
                    backgroundColor:
                      colorifier(item.Longitude)
                      

                  }
                })

              }}
              
              options={{
                title:{
                  display:false,
                  text:'Rent',
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
                      labelString: 'Cost'
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
  