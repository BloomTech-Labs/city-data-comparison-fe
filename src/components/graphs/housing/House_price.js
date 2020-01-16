import React, {useState, useEffect} from 'react';
import {Line} from 'react-chartjs-2';

export default function HousePriceGraph({selected}) {
    const [labels, setLabels] = useState([])


    const colorifier = lat => {

        let arr = String(lat).replace(".","").split("");

        let num1 = arr.pop();
        let num2 = arr.pop();
        let num3 = arr.pop();

        return `rgb(${num1 * 28}, ${num2 * 28}, ${num3 * 28})`
    }

    useEffect(() => {
        let data = selected[0]
        if (data) {
            setLabels(Object.keys(data["house_price"]))
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
                    data: labels.map(label => item["house_price"][label]),
                    borderColor:
                      colorifier(item.Longitude)
                      

                  }
                })

              }}
              options={{
                title:{
                  display:true,
                  text:'house price',
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
                      labelString: 'Year'
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
                      labelString: 'amount',
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
  