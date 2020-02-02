import React, {useState, useEffect} from 'react';
import {Line} from 'react-chartjs-2';

export default function HousePriceGraph({selected}) {
    const [labels, setLabels] = useState([])
    function numberCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    

    useEffect(() => {
        let data = selected[0];
        if (data["Historical Property Value Data"]["Average Home Value"]) {
            setLabels(Object.keys(data["Historical Property Value Data"]["Average Home Value"]))
        } else if (data["Historical Property Value Data"]["Four Bedroom Houses"]){ 
            setLabels(Object.keys(data["Historical Property Value Data"]["Four Bedroom Houses"]))
        } else if (data["Historical Property Value Data"]["Three Bedroom Houses"]){ 
          setLabels(Object.keys(data["Historical Property Value Data"]["Three Bedroom Houses"]))
        } else if (data["Historical Property Value Data"]["Two Bedroom Houses"]){ 
          setLabels(Object.keys(data["Historical Property Value Data"]["Two Bedroom Houses"]))
        } else {
          setLabels(["This data is currently unavailable."])
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
                    data:  item["Historical Property Value Data"]["Average Home Value"]
                      ? labels.map(label => item["Historical Property Value Data"]["Average Home Value"][label] ? Math.floor(item["Historical Property Value Data"]["Average Home Value"][label]) : null)
                      : item["Historical Property Value Data"]["Four Bedroom Houses"]
                        ? labels.map(label => item["Historical Property Value Data"]["Four Bedroom Houses"][label]) 
                        : item["Historical Property Value Data"]["Three Bedroom Houses"]
                          ? labels.map(label => item["Historical Property Value Data"]["Three Bedroom Houses"][label])
                          : item["Historical Property Value Data"]["Two Bedroom Houses"]

                      ,
                      borderColor: item.color


                  }
                })

              }}
              options={{
                title:{
                  display:false,
                  text:'house price',
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
                    ticks: {
                      userCallback: (value, index, values) => {
                        return `$${numberCommas(value)}`
                      }
                    },
                    gridLines: {
                      display:false,
                    },
                    scaleLabel: {
                      display: true,
                      labelString: 'Amount',
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
  