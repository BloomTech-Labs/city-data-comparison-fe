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
                labels: ["Drives Alone",  "Carpools", "Public Transport",  "Other transport", "Walks", "Works at home"],
                datasets: props.edData.map( item => {
                  
                  return {
                    label: item.name.replace(" city" , ""),
                    data: [
                      item["Commuting to Work"]["Drives Alone"],
                      item["Commuting to Work"]["Carpools"],
                      item["Commuting to Work"]["Public Transport"],
                      item["Commuting to Work"]["Other transport"],
                      item["Commuting to Work"]["Walks"],
                      item["Commuting to Work"]["Works at home"],
                                         
                      
                    ],
                    backgroundColor:
                      colorifier(item.lat)
                      

                  }
                })

              }}
              options={{
                title:{
                  display:true,
                  text:'Ways to Commute',
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
                      labelString: 'Commute'
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
  