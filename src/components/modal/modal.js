import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';



const Modal = ({ isShowing, hide, component, size }) => {
  const ModalComp = styled.div`

  background: white;
  position: ${size === 'large' ? 'absolute' : 'relative'};
  margin: 10vh auto;
  border-radius: 3px;
  max-width: 80vw;
  padding: 1rem;
  margin-top: ${size === 'large' ? '5rem' : '10rem'};
  overflow-x: ${size === 'large' ? 'hidden' : 'none'};
  overflow-y: ${size === 'large' ? 'scroll' : 'none'}:
  `;

  const ModalWrapper = styled.div`
  @media screen and (max-width: 800px) {
    padding-left: 10%;
    padding-right: 10%;
  }
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1050;
  width: 100%;
  height: 100%;
  overflow-x: ${size === 'large' ? 'auto' : 'hidden'};
  overflow-y: ${size === 'large' ? 'none' : 'auto'};
  outline: 0;
  padding-left: ${size === 'large' ? '33%' : '30%'};
  padding-right: ${size === 'large' ? '33%' : '30%'};
  `
  
  return isShowing ? ReactDOM.createPortal(
  <React.Fragment>
    <div className="modal-overlay"/>
    <ModalWrapper aria-modal aria-hidden tabIndex={-1} role="dialog">
      <ModalComp>
        <div className="modal-header">
          <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        {component}
      </ModalComp>
    </ModalWrapper>
  </React.Fragment>, document.body
) : null;}

export default Modal;