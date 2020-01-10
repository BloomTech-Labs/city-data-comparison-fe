import React, {useState, useEffect} from 'react';
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
                    label: item.name.replace(" city" , ""),
                    data: [
                      item["Rent"]["Less than $500"],
                      item["Rent"]["$500 - $999"],
                      item["Rent"]["$1,000 - $1,499"],
                      item["Rent"]["$1,500 - $1,999"],
                      item["Rent"]["$2,000 - $2,499"],
                      item["Rent"]["$2,500 - $2,999"],
                      item["Rent"]["$3,000 or more"]                    
                      
                    ],
                    backgroundColor:
                      colorifier(item.lat)
                      

                  }
                })

              }}
              options={{
                title:{
                  display:true,
                  text:'Rent',
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
  