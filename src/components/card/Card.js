import React from "react";
import helpCircle from "../../assets/icons/helpcircle.svg";
import useModal from "../../../../modal/useModal";
import ModalPopup from "../../../../modal/modal.js";
import { actionColor } from "../../../../../utils/cityColors.js";
import styled from "styled-components/macro";

function Card(props) {
  const { isShowing, toggle } = useModal();

  const CardContainer = styled.div`
    background-color: white;
    padding: 1.4rem 2.8rem;
    padding-bottom: 0;
    border-radius: 5px;
    position: relative;
    grid-column: span ${props.gridColumn ? props.gridColumn : 12};
    @media only screen and (max-width: 800px) {
      grid-column: span 12;
      padding: 1.4rem 1.4rem;
      padding-bottom: 0rem;
    }
    @media only screen and (max-width: 600px) {
      padding: 1.4rem 0.7rem;
      padding-bottom: 0rem;
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

  const MoreInfoIcon = styled.img`
    color: ${actionColor};
    justify-self: flex-end;
    position: absolute;
    right: 1.4rem;
    top: 1.4rem;
  `;

  const CardContent = styled.div`
    padding: 1.4rem;
    @media only screen and (max-width: 1000px) {
      padding: 0;
      padding-top: 2.8rem;
    }
    @media only screen and (max-width: 600px) {
      padding-top: 1.4rem;
    }
  `;

  return (
    <CardContainer>
      <ModalPopup
        isShowing={isShowing}
        hide={toggle}
        component={props.modalContent}
        title={props.modalTitle}
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
