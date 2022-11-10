import React from 'react';
import { ReactSVG } from 'react-svg';
import step_1 from '../../../../assets/images/step_1.svg';
import arrow from '../../../../assets/images/arrow.svg';

const FirstStep = () => {
  return (
    <div className="undock__firststep">
      <p className="undock__firststep__title">
        Follow these steps to enable the passphrase on your NEAR account.
      </p>
      <p className="undock__firststep__text">
        Select the <span>Account</span> tab.
      </p>
      <ReactSVG src={step_1} className="undock__firststep__img" />
      <button
        className="undock__firststep__button undock__firststep__button__connect"
        type="submit"
      >
        Next
        <ReactSVG src={arrow} />
      </button>
    </div>
  );
};

export default FirstStep;
