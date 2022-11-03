import React from 'react';
import { ReactSVG } from 'react-svg';
import ring_check from '../../../../assets/images/ring_check.svg';

const DockingSuccessful = () => {
  return (
    <div className="dock__successful">
      <p className="dock__successful__title">
        Spaceport is docking <span>ozymandius.near</span>. DO NOT CLOSE THIS
        SCREEN.
      </p>
      <p className="dock__successful__text">
        Transferring keys and verifying assets to port over...
      </p>
      <ReactSVG src={ring_check} className="dock__successful__image" />
      <p className="dock__successful__docking">Docking Successful</p>
      <p className="dock__successful__text_time">
        Time Remaining:{' '}
        <span className="dock__successful__text_time__min">Complete</span>
      </p>
    </div>
  );
};

export default DockingSuccessful;
