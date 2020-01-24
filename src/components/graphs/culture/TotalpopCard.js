
import React from 'react';
import styled from "styled-components";

// const CenterCard = styled.h3`
// display:flex;
// flex-wrap:wrap;



// `
// const Wrap = styled.div`
// display:flex;
// flex-wrap:wrap;

// `

const Table = styled.table`
width:100%;
`

function TotalPopulation({ethData}) {
    // console.log(ethData, "ETH")
	const colorifier = lat => {

        let arr = String(lat).replace(".","").split("");
    
        let num1 = arr.pop();
        let num2 = arr.pop();
        let num3 = arr.pop();
    
        return `rgb(${num1 * 28}, ${num2 * 28}, ${num3 * 28})`
        }


	
	return (


        // <div className="card">
        // <h1>General Statistics</h1>
            
        //     <div>
        //         <h2 style = {{ marginLeft: "15%"}}>Total Population</h2>
        //             {ethData.map(item => 
        //                  <Wrap style = {{ textAlign: "left", width:"35%"}} key={item._id}>
        //                     <CenterCard style = {{ textAlign: "left", width:"40%"}}> {item["City"]}</CenterCard>
        //                     <CenterCard style = {{ textAlign: "left", width:"40%"}}> {item["Total Population"]}</CenterCard>

        //                  </Wrap>
        //     )}
		// 	</div>
        //     <div>
        //         <h2 >Median Rent</h2>
        //             {ethData.map(item => 
        //                  <Wrap style = {{ textAlign: "center", width:"35%"}} key={item._id}>
                            
        //                     <CenterCard style = {{ textAlign: "center", width:"40%"}}> {item["Median Rent"]}$</CenterCard>

        //                  </Wrap>
        //     )}
		// 	</div>
            
          
        // </div>
        
        <div>
            <h1>General Statistics</h1>
            {ethData.map(item => 
            <Table>
                <tr style = {{ width:"100%"}}>
                    <th style = {{ width:"25%"}}></th>
                    <th style = {{ width:"25%"}}>Population</th> 
                    <th style = {{ width:"25%"}}>Median Rent</th>
                    <th style = {{ width:"25%"}}>Median Age</th>
                </tr>
                <tr style = {{ width:"100%", textAlign:"center"}}>
                    <td >{item["City"]}</td>
                    <td>{item["Total Population"]}</td>
                    <td>{item["Median Rent"]}$</td>
                    <td  style = {{ right:"2rem"}} >{item["Median Age"]} years</td>
                </tr>
              
            </Table>
            )}
    </div>
	);
}

export default TotalPopulation;

