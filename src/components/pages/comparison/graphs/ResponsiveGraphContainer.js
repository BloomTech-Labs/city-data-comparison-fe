import React from "react";
import styled from "styled-components/macro";

function ResponsiveGraphContainer(props) {
  const StyledResponsiveGraphContainer = styled.div`
    min-height: 300px;

    @media screen and (min-width: 600px) {
      min-height: 400px;
    }
    @media screen and (min-width: 800px) {
      min-height: 500px;
    }
  `;

  return (
    <StyledResponsiveGraphContainer>
      {props.children}
    </StyledResponsiveGraphContainer>
  );
}

export default ResponsiveGraphContainer;
