import React from 'react'

const Modal = ({ isOpened, title, onClose, children }) => {
  if (isOpened) {
    return (
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
      </React.Fragment>
    );

  } else return null;
}

export default Modal;
