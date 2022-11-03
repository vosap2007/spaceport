import React from 'react';
import { ReactSVG } from 'react-svg';
import error from '../../../../assets/images/error.svg';

const Error = () => {
  return (
    <div className="dock__error">
      <p className="dock__error__title">
        Spaceport is docking <span> ozymandius.near</span>. DO NOT CLOSE THIS
        SCREEN.
      </p>
      <p className="dock__error__text">
        [Insert error here] e.g. Failed to transfer access keys
      </p>
      <ReactSVG src={error} className="dock__error__image" />
      <p className="dock__error__docking">Docking Unsuccessful</p>
      <p className="dock__error__text_time">
        Time Remaining:{' '}
        <span className="dock__error__text_time__min">Complete</span>
      </p>
    </div>
  );
};

export default Error;
