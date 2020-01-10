import React, {useState, useEffect} from 'react';
import {Line} from 'react-chartjs-2';

export default function PopGrowthGraph({selected}) {
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
                    label: item.name.replace(" city" , ""),
                    data: labels.map(label => item["Population Growth"][label]),
                    borderColor:
                      colorifier(item.lat)
                      

                  }
                })

              }}
              options={{
                title:{
                  display:true,
                  text:'Population Growth',
                  fontSize:25
                },
                legend:{
                  display:true,
                  position:"top",
                }
              }}
            /> 
          </div>
        
        </div>
    )
  }
  