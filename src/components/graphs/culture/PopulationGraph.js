import React, {useState, useEffect} from 'react';
import {Line} from 'react-chartjs-2';

export default function PopGrowthGraph({selected}) {
    const [labels, setLabels] = useState([])
    function numberCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    useEffect(() => {
        let data = selected[0]
        if (data) {
            setLabels(Object.keys(data["Population Growth"]))
        }
    }, [selected])
  

    return (
      <div className="charts" >
        
          <div className="chart-container" style={{position: "relative", width: `100%`}}>
            <Line
              data={{
                labels:  labels,
                datasets: selected.map( item => {
                  
                  return {
                    label: item.name_with_com,
                    fill: false,
                    data: labels.map(label => item["Population Growth"][label]),
                    borderColor: item.color
                      

                  }
                })

              }}
              options={{
                title:{
                  display:false,
                  text:'Population Growth',
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
                      labelString: 'Year'
                    },
                  } 
                  ],
                  yAxes: [ {
                    display: true,
                    gridLines: {
                      display:false,
                    },
                    ticks: {
                      userCallback: (value, index, values) => {
                        return numberCommas(value)
                      }
                    },
                    scaleLabel: {
                      display: true,
                      labelString: 'Population',
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
  