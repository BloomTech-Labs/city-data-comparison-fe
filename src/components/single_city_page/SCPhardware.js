import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

const CategoryContainer = styled.div`
    width: 870px;
    margin-bottom: 30px;
`;

const CategoryTitle = styled.h3`
    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 43px;
    margin: 0;
`;

const CategoryInfo = styled.div`
    display: flex; 
    flex-wrap: wrap; 
    padding: 20px 0;
`;

const CategoryImgContainer = styled.div`
    height: 270px; 
    width: 290px;
`;

const CategoryImg = styled.img`
    height: 170px; 
    width: 270px; 
    margin-right: 20px;
    border-radius: 4.3px;
`;

const CategorySubtitle = styled.h5`
    font-style: normal; 
    font-weight: bold;
    font-size: 24px; 
    line-height: 28px; 
    margin: 10px 0 0 0;
    width: 270px;
`;

const CategoryWebsite = styled.a`
    text-decoration: none;
`;

const SCPhardware = (props) => {

    return (
        <>
            <CategoryContainer>
                <CategoryTitle>Hardware</CategoryTitle>
                <CategoryInfo>
                <Carousel
                    dots={true}
                    infinite
                    slidesPerPage={1}
                    clickToChange={true}
                    itemWidth={290}
                    >    
                {props.data.businesses ? props.data.businesses.map(item => (
                    <CategoryImgContainer>
                        <CategoryImg src={item.image_url} />
                        <CategorySubtitle>{item.name.length<=28?item.name.substring(0,28):`${item.name.substring(0,28)}...`}</CategorySubtitle>
                        <CategoryWebsite href={item.url} target="_blank" >Website</CategoryWebsite>
                    </CategoryImgContainer>
                )) : null }
                </Carousel>
                </CategoryInfo>
            </CategoryContainer>
        </>
    )
}

export default SCPhardware;