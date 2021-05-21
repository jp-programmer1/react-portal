import React from 'react'
import { createPortal } from "react-dom";

const ModalPortal = ({ title, children, isOpened, onClose }) => {

  if (isOpened) {  
    return createPortal(
      <React.Fragment>
        <div className="portal">
          <div className="body">
            <div className="header-portal">
              <div className="title">
                <h5>{title}</h5>
              </div>
              <div className="close-portal">
                <i onClick={onClose} className="fas fa-times"></i>
              </div>
            </div>
            <div className="line"></div>
            <div className="children">
              {children}
            </div>
          </div>
        </div>
      </React.Fragment>,
      document.getElementById('modal-container')
    );
  } else return null;
}

export default ModalPortal;
