import React, { useState } from "react";
import helpCircle from "../../assets/icons/helpcircle.svg";
import useModal from "../modal/useModal";
import ModalPopup from "../modal/modal.js";

import styled from "styled-components";

function Card(props) {
  const { isShowing, toggle } = useModal();

  const CardContainer = styled.div`
    background-color: white;
    padding: 1.4rem;
    border-radius: 5px;
    position: relative;
    grid-column: span ${props.gridColumn ? props.gridColumn : 12};
    @media only screen and (max-width: 600px) {
      grid-column: span 12;
    }
  `;

  const CardTitle = styled.h4`
    margin: 0;
    margin-left: 1.4rem;
    margin-top: 1.4rem;
    font-size: 1.4rem;
    font-weight: normal;
  `;

  const CardHeader = styled.div`
    display: flex;
    justify-content: space-between;
  `;

  const MoreInfoIcon = styled.img`
    margin: 1.4rem;
  `;

  const CardContent = styled.div`
    padding: 2.8rem;
    @media only screen and (max-width: 600px) {
      padding: 1.4rem;
    }
  `;

  return (
    <CardContainer>
      <ModalPopup
        isShowing={isShowing}
        hide={toggle}
        component={props.modalContent}
      />
      <CardHeader>
        <CardTitle>{props.title}</CardTitle>
        {props.modalContent ? (
          <MoreInfoIcon
            src={helpCircle}
            onClick={() => {
              toggle();
            }}
          />
        ) : (
          <></>
        )}
      </CardHeader>

      <CardContent>{props.children}</CardContent>
    </CardContainer>
  );
}

export default Card;
