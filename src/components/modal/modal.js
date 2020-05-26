import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components/macro";
import closeIcon from "../../assets/icons/close.svg";
import "./modal.scss";

const Modal = ({ isShowing, hide, component, large, title }) => {
  const ModalWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    position: fixed;
    top: 0;
    left: 0;
    z-index: 1050;
    width: 100%;
    height: 100vh;

    outline: 0;
  `;

  const ModalComp = styled.div`
    background: white;
    position: relative;
    border-radius: 3px;
    padding: 1.4rem;
    max-width: ${large ? "1120px" : "500px"};
    margin: 1.4rem 1.4rem;
    width: 100%;
    max-height: 90vh;
    overflow-y: hidden;
  `;

  return isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div className="modal-overlay" />
          <ModalWrapper aria-modal aria-hidden tabIndex={-1} role="dialog">
            <ModalComp>
              <div className="modal-header">
                <h3 className="modal-title">{title}</h3>
                <img
                  className="modal-close-button"
                  alt={"Deselect city."}
                  src={closeIcon}
                  onClick={hide}
                />
              </div>
              {component}
            </ModalComp>
          </ModalWrapper>
        </React.Fragment>,
        document.body
      )
    : null;
};

export default Modal;
