import React from 'react';
import { ReactSVG } from 'react-svg';
import ring from '../../../../assets/images/ring.svg';

const Processing = () => {
  return (
    <div className="undock__processing">
      <p className="undock__processing__title">
        Spaceport is undocking <span>ozymandius.near</span>. DO NOT CLOSE THIS
        SCREEN.
      </p>
      <p className="undock__processing__text">
        Transferring keys and verifying assets to port over...
      </p>
      <ReactSVG src={ring} className="undock__processing__image" />
      <p className="undock__processing__text_time">
        Time Remaining:{' '}
        <span className="undock__processing__text_time__min">
          Approximately 2 minutes
        </span>
      </p>
    </div>
  );
};

export default Processing;
