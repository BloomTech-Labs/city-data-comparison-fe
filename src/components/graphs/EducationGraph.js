import React, {useState, useEffect} from 'react';
import {Bar} from 'react-chartjs-2';

export default function EducationGraph (props) {

  const dotRemover = num => {
    return Number(String(num).replace(".",""));
  }
  

    return (
      <div className="charts" >
        
          <div className="chart-container" style={{position: "relative", width: `100%`}}>
            <Bar
              data={{
                labels: ["Less than 9th grade",  "Some High School", "High school",  "Some College", "Associate's Degree", "Bachelor's Degree", "Graduate Degree"],
                datasets: props.edData.map( item => {
                  
                  return {
                    label: item.name.replace(" city" , ""),
                    data: [
                      item["Educational Attainment"]["Less than 9th grade"],
                      item["Educational Attainment"]["9th to 12th grade no diploma"],
                      item["Educational Attainment"]["High school"],
                      item["Educational Attainment"]["Some college no degree"],
                      item["Educational Attainment"]["Associate's degree"],
                      item["Educational Attainment"]["Bachelor's degree"],
                      item["Educational Attainment"]["Graduate degree"]                    
                      
                    ],
                    backgroundColor:
                      `rgb(${dotRemover(item.lat) % 100 * 2.55}, 180, ${(item.lng * 100) % 100 * 2.55})`
                      

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
  