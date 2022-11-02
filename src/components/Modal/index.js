import React from 'react';

const Modal = ({ isOpened, setIsOpened, titleModal, children }) => {
  isOpened
    ? (document.body.style.overflow = 'hidden')
    : (document.body.style.overflow = 'visible');

  return (
    <div
      className={`modal_wrapper ${
        isOpened ? 'modal_wrapper__open' : 'modal_wrapper__close'
      }`}
    >
      <h1 className="modal_wrapper__title">{titleModal}</h1>
      <button
        onClick={() => {
          setIsOpened(!isOpened);
        }}
      >
        Close
      </button>
      <div className="modal_wrapper__body">{children}</div>
    </div>
  );
};

export default Modal;
