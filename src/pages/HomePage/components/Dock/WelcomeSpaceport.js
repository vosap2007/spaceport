import React from 'react';
import { ReactSVG } from 'react-svg';
import ring_check from '../../../../assets/images/ring_check.svg';

const WelcomeSpaceport = () => {
  return (
    <div className="dock__welcome">
      <p className="dock__welcome__title">Welcome to Spaceport!</p>
      <p className="dock__welcome__text">
        All assets for ozymandius.near have been successfully transferred.
      </p>
      <ReactSVG src={ring_check} className="dock__welcome__image" />
      <p className="dock__welcome__docking">Docking Successful</p>
      <button className="dock__welcome__button">Go to Spaceport Home</button>
    </div>
  );
};

export default WelcomeSpaceport;
