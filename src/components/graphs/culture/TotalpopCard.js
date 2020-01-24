
import React from 'react';
import styled from "styled-components";

const CenterCard = styled.h3`
display:flex;
flex-wrap:wrap;



`
const Wrap = styled.div`
display:flex;
flex-wrap:wrap;

`

function TotalPopulation({ethData}) {
    // console.log(ethData, "ETH")
	// const colorifier = lat => {

    //     let arr = String(lat).replace(".","").split("");
    
    //     let num1 = arr.pop();
    //     let num2 = arr.pop();
    //     let num3 = arr.pop();
    
    //     return `rgb(${num1 * 28}, ${num2 * 28}, ${num3 * 28})`
    //     }


	
	return (
        <div className="card">
        <h1>General Statistics</h1>
            
            <div>
                <h2 style = {{ marginLeft: "15%"}}>Total Population</h2>
                    {ethData.map(item => 
                         <Wrap style = {{ textAlign: "left", width:"35%"}} key={item._id}>
                            <CenterCard style = {{ textAlign: "left", width:"40%"}}> {item["City"]}</CenterCard>
                            <CenterCard style = {{ textAlign: "left", width:"40%"}}> {item["Total Population"]}</CenterCard>

                         </Wrap>
            )}
			</div>
            <div>
                <h2 >Median Rent</h2>
                    {ethData.map(item => 
                         <Wrap style = {{ textAlign: "center", width:"35%"}} key={item._id}>
                            
                            <CenterCard style = {{ textAlign: "center", width:"40%"}}> {item["Median Rent"]}$</CenterCard>

                         </Wrap>
            )}
			</div>
            
          
		</div>
	);
}

export default TotalPopulation;

