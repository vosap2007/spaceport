import React, { useState } from 'react';
import { ReactSVG } from 'react-svg';
import rectangle_write from '../../../../assets/images/rectangle_write.svg';
import checkmark_white from '../../../../assets/images/checkmark-white.svg';
import arrow from '../../../../assets/images/arrow.svg';

const ConfirmWallet = () => {
  const [checked, setChecked] = useState(false);

  const chengeCheckbox = () => {
    setChecked(!checked);
  };

  return (
    <div className="undock__wallet">
      <p className="undock__wallet__title">Confirm undocking</p>
      <p className="undock__wallet__text">
        Do you confirm that you've done all the steps to secure your account?
      </p>

      <div
        className="dock__checkbox_box"
        type="checkbox"
        onClick={chengeCheckbox}
      >
        <ReactSVG src={rectangle_write} />
        <ReactSVG
          src={checkmark_white}
          className={checked ? 'dock__img_write' : 'dock__img_write__display'}
        />
        <p>
          I understand that Spaceport is no longer responsible for my wallet.
        </p>
      </div>
      <button
        className={`undock__wallet__button ${
          checked
            ? 'undock__wallet__button__connect'
            : 'undock__wallet__button__disconnect'
        }`}
        disabled={checked ? false : true}
        type="submit"
      >
        Next
        <ReactSVG src={arrow} />
      </button>
    </div>
  );
};

export default ConfirmWallet;
