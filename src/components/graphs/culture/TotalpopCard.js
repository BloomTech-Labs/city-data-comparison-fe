
import React from 'react';
import styled from "styled-components";

const Center = styled.h2`
display:block;
justify-content:center;
flex-wrap:wrap;
margin:10px;


`
const Wrap = styled.div`
display:block;
justify-content:center;
flex-wrap:wrap;
width:20%;

`

const NewCard = styled.div`
display:flex;
flex-wrap:wrap;
justify-content:center;

`

const WholeCard = styled.div`
margin-bottom:5%;

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
        <div>
		<WholeCard>
            <h1>Total Population</h1>
            <NewCard>
            {ethData.map(item => 
                <Wrap  key={item._id}>
                    <Center  style={{ background: colorifier(item.Longitude)}} > {item["City"]}</Center>
                    <Center> {item["Total Population"]}</Center>

               </Wrap>
            )}
			</NewCard>
            </WholeCard>
            <WholeCard>
            <h1>Median Rent</h1>
            <NewCard>
            {ethData.map(item => 
                <Wrap key={item._id}>
                    <Center style={{ background: colorifier(item.Longitude)}}> {item["City"]}</Center>
                    <Center> {item["Median Rent"]}$</Center>

               </Wrap>
            )}
            </NewCard>
		</WholeCard>
        </div>
	);
}

export default TotalPopulation;

