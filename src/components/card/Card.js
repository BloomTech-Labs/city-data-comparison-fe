import React, { useState } from "react";
import helpCircle from "../../assets/icons/helpcircle.svg";
import useModal from "../modal/useModal";
import ModalPopup from "../modal/modal.js";
import { actionColor } from "../../utils/cityColors.js";
import styled from "styled-components";

function Card(props) {
  const { isShowing, toggle } = useModal();

  const CardContainer = styled.div`
    background-color: white;
    padding: 2.8rem 2.8rem;
    border-radius: 5px;
    position: relative;
    grid-column: span ${props.gridColumn ? props.gridColumn : 12};
    @media only screen and (max-width: 800px) {
      grid-column: span 12;
      padding: 2.8rem 1.4rem;
    }
  `;

  const CardTitle = styled.h4`
    margin: 0;
    font-size: 1.4rem;
    font-weight: normal;
    text-align: left;
    &:only-child {
      text-align: ${props.gridColumn == 3 ? "center" : "left"};
    }
    @media only screen and (max-width: 800px) {
      text-align: left;
    }
  `;

  const CardHeader = styled.div`
    display: flex;
    justify-content: ${props.gridColumn == 3
      ? "space-around"
      : "space-between"};
  `;

  const MoreInfoIcon = styled.img`
    color: ${actionColor};
    justify-self: flex-end;
    position: absolute;
    right: 1.4rem;
  `;

  const CardContent = styled.div`
    padding: 1.4rem;
    @media only screen and (max-width: 1000px) {
      padding: 0;
      padding-top: 2.8rem;
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
