import React, {useState, useEffect} from 'react';
import {Bar} from 'react-chartjs-2';

export default function EducationGraph (props) {
  const [chartWidth, setChartWidth] = useState("100%")




  useEffect( () => {
    console.log(props.edData.length)
    setChartWidth((props.edData.length <= 1) ? "100%" : "50%");
  }, [props.edData])

    return (
      <div className="charts" >
        {props.edData.map( item => 
          <div key={item._id} className="chart-container" style={{position: "relative", width: `${chartWidth}`}}>
            <Bar
              data={{
                labels: ["9th to 12th grade no diploma", "Associate's degree", "Bachelor's degree", "Graduate degree", "High school", "Less than 9th grade", "Some college no degree"],
                datasets:[
                  {
                    label:'Population',
                    data:[
                      item["Educational Attainment"]["9th to 12th grade no diploma"],
                      item["Educational Attainment"]["Associate's degree"],
                      item["Educational Attainment"]["Bachelor's degree"],
                      item["Educational Attainment"]["Graduate degree"],
                      item["Educational Attainment"]["High school"],
                      item["Educational Attainment"]["Less than 9th grade"],
                      item["Educational Attainment"]["Some college no degree"]
                    ],
                    backgroundColor:[
                      'rgba(255, 99, 132, 0.6)',
                      'rgba(54, 162, 235, 0.6)',
                      'rgba(255, 206, 86, 0.6)',
                      'rgba(75, 192, 192, 0.6)',
                      'rgba(153, 102, 255, 0.6)',
                      'rgba(255, 159, 64, 0.6)',
                      'rgba(255, 159, 182, 0.6)'
                    ]
                  }
                ]
              }}
              options={{
                title:{
                  display:true,
                  text:'Educational Breakdown For '+ item.name.replace(" city", ""),
                  fontSize:25
                },
                legend:{
                  display:true,
                  position:"top",
                }
              }}
            /> 
          </div>
        )}
        </div>
    )
  }
  