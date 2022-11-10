import React from 'react';
import { ReactSVG } from 'react-svg';
import ring_check from '../../../../assets/images/ring_check.svg';

const UndockingSuccessful = () => {
  return (
    <div className="undock__successful">
      <p className="undock__successful__title">
        Spaceport has undocking <span>ozymandius.near</span>.
      </p>
      <p className="undock__successful__text">Your account is now secure.</p>
      <ReactSVG src={ring_check} className="undock__successful__image" />
      <p className="undock__successful__docking">Undocking Successful</p>
    </div>
  );
};

export default UndockingSuccessful;
