import React from "react";
import styled from 'styled-components';

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

const SCPevents = (props) => {
    console.log('propsEvents', props.events)
    return (
        <>
            <CategoryContainer>
                <CategoryTitle>Events</CategoryTitle>
                <CategoryInfo>
                {props.events.events.slice(0,3).map(item => (
                    <CategoryImgContainer>
                        <CategoryImg src={item.image_url} />
                        <CategorySubtitle>{item.name}</CategorySubtitle>
                        <CategoryWebsite href={item.event_site_url}>Event Website</CategoryWebsite>
                    </CategoryImgContainer>
                ))}
                </CategoryInfo>
            </CategoryContainer>
        </> 
    )
};

export default SCPevents;