import React from 'react';
import { ReactSVG } from 'react-svg';
import step_2 from '../../../../assets/images/step_2.svg';
import arrow from '../../../../assets/images/arrow.svg';

const SecondStep = () => {
  return (
    <div className="undock__firststep">
      <p className="undock__firststep__title">
        Follow these steps to enable the passphrase on your NEAR account.
      </p>
      <p className="undock__firststep__text_2">
        Click on Enable Passphrase and save it somewhere secure.
      </p>
      <ReactSVG src={step_2} className="undock__firststep__img2" />
      <button
        className="undock__firststep__button_2 undock__firststep__button__connect"
        type="submit"
      >
        Next
        <ReactSVG src={arrow} />
      </button>
    </div>
  );
};

export default SecondStep;
