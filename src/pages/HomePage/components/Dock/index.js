import React, { useState } from 'react';
import { ReactSVG } from 'react-svg';
import rectangle from '../../../../assets/images/rectangle.svg';
import check_marker from '../../../../assets/images/check_mark.svg';

const Dock = () => {
  const [checked, setChecked] = useState(false);

  function chengeCheckbox() {
    setChecked(!checked);
  }

  return (
    <div className="dock">
      <h1 className="dock__title">Dock an Account to Spaceport</h1>
      <p className="dock__text">
        SPACEPORT allows users to seamlessly connect to dApps and services in
        the NEAR ecosystem from a secure and simple entry point. If you would
        like to add an existing NEAR account to your Spaceport account, proceed
        below. <br />{' '}
        <span className="dock__text__bold">
          Docking only works with a passphrase (seed phrase).
        </span>
      </p>
      <div className="dock__check_box">
        <p className="dock__attention">
          <span className="dock__check_box__bold">ATTENTION:</span> Docking
          process will delete all security & recovery options
        </p>
        <div
          className="dock__checkbox_box"
          type="checkbox"
          onClick={chengeCheckbox}
        >
          {/* <input className="dock__checkbox" /> */}
          <ReactSVG src={rectangle} />
          <img
            src={check_marker}
            className={checked ? 'dock__img' : 'dock__img__display'}
          />
          <p>I understand and wish to proceed</p>
        </div>
      </div>
      <button
        className="dock__button"
        onClick={() => {
          console.log('click button Connect an Account');
        }}
      >
        Connect an Account
      </button>
    </div>
  );
};

export default Dock;
