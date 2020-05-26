import React from "react";

import styled from "styled-components/macro";

function ProfileCard(props) {
  const CardContainer = styled.div`
    margin-bottom: 1.4rem;
    background-color: white;
    border-radius: 5px;
    position: relative;
    grid-column: span ${props.gridColumn ? props.gridColumn : 12};
    @media only screen and (max-width: 800px) {
      grid-column: span 12;
      padding: 0rem 0.7;
    }
    @media only screen and (max-width: 600px) {
      padding: 0rem 0.7rem;
      padding-bottom: 0.7rem;
      border-radius: 5px;
    }
  `;

  const CardTitle = styled.h4`
    margin: 0;
    font-size: 1.4rem;
    font-weight: normal;
    text-align: left;
    &:only-child {
      text-align: ${props.gridColumn === 3 ? "center" : "left"};
      @media only screen and (max-width: 800px) {
        text-align: left;
      }
    }
    @media only screen and (max-width: 800px) {
      text-align: left;
    }
    @media only screen and (max-width: 600px) {
      padding: 0rem 1.4rem;
    }
  `;

  const CardHeader = styled.div`
    display: flex;
    justify-content: ${props.gridColumn === 3
      ? "space-around"
      : "space-between"};
  `;

  const CardContent = styled.div`
    padding: 0.7rem;
  `;

  return (
    <CardContainer>
      <CardHeader>
        <CardTitle>{props.title}</CardTitle>
      </CardHeader>

      <CardContent>{props.children}</CardContent>
    </CardContainer>
  );
}

export default ProfileCard;
