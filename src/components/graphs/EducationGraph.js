import React, {useState, useEffect} from 'react';
import {Bar} from 'react-chartjs-2';

export default function EducationGraph (props) {
  const [chartWidth, setChartWidth] = useState("100%")

  useEffect( () => {

    
    
    setChartWidth((props.edData.length <= 1) ? "100%" : "50%");
  }, [props.edData])

    return (
      <div className="charts" >
        
          <div className="chart-container" style={{position: "relative", width: `100%`}}>
            <Bar
              data={{
                labels: ["9th to 12th grade no diploma", "Associate's degree", "Bachelor's degree", "Graduate degree", "High school", "Less than 9th grade", "Some college no degree"],
                datasets: props.edData.map( item => {
                  return {
                    label: item.name.replace(" city" , ""),
                    data: [
                      item["Educational Attainment"]["9th to 12th grade no diploma"],
                      item["Educational Attainment"]["Associate's degree"],
                      item["Educational Attainment"]["Bachelor's degree"],
                      item["Educational Attainment"]["Graduate degree"],
                      item["Educational Attainment"]["High school"],
                      item["Educational Attainment"]["Less than 9th grade"],
                      item["Educational Attainment"]["Some college no degree"]
                    ],
                    backgroundColor:
                      `rgba(${Math.random() * 255}, 99, 132, 0.6)`

                  }
                })

              }}
              options={{
                title:{
                  display:true,
                  text:'Educational Attainment',
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
  