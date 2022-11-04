import React, { useState } from 'react';
import { ReactSVG } from 'react-svg';
import arrow from '../../assets/images/arrow.svg';

const Modal = ({ isOpened, setIsOpened, titleModal, children }) => {
  const [showBack, setShowBack] = useState(true);
  const [showExit, setShowExit] = useState(true);

  isOpened
    ? (document.body.style.overflow = 'hidden')
    : (document.body.style.overflow = 'visible');

  return (
    <div
      className={`modal_wrapper ${
        isOpened ? 'modal_wrapper__open' : 'modal_wrapper__close'
      }`}
    >
      <button
        className={showExit ? 'modal_wrapper__exit' : 'modal_wrapper__exit_not'}
        onClick={() => {
          console.log('button modal_wrapper__exit');
        }}
      >
        <ReactSVG src={arrow} />
        Exit Docking Sequence
      </button>
      <h1 className="modal_wrapper__title">{titleModal}</h1>
      <button
        className={
          showBack ? 'modal_wrapper__go_back' : 'modal_wrapper__go_back_not'
        }
        onClick={() => {
          setIsOpened(!isOpened);
        }}
      >
        <ReactSVG src={arrow} />
        Go Back
      </button>
      <div
        className={`modal_wrapper__body ${
          !showBack
            ? 'modal_wrapper__body__absolute'
            : 'modal_wrapper__body__block'
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
