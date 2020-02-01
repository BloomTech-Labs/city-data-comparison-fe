import React from 'react';
import ReactDOM from 'react-dom';

const SmocModal = ({ isShowing, hide, component }) => isShowing ? ReactDOM.createPortal(
  <React.Fragment>
    <div className="smoc-modal-overlay"/>
    <div className="smoc-modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
      <div className="smoc-modal">
        <div className="smoc-modal-header">
          <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        {component}
      </div>
    </div>
  </React.Fragment>, document.body
) : null;

export default SmocModal;