import React, { useState } from 'react';
import { ReactSVG } from 'react-svg';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import arrow from '../../../../assets/images/arrow.svg';
import copy_generator from '../../../../assets/images/copy_generator.svg';

const phrases = [
  'apple',
  'couch',
  'sit',
  'cranium',
  'corner',
  'washed',
  'people',
  'forehead',
  'sadness',
  'freedom',
  'mouse',
  'soda',
];

const PhraseGenerator = () => {
  const [copy, setCopy] = useState(false);

  return (
    <div className="undock__generator">
      <p className="undock__generator__title">
        Your New Seed Phrase for <span>account.near</span>
      </p>
      <p className="undock__generator__text">
        Be sure to record this phrase and store it somewhere safe. If you lose
        it you will not be able to access your wallet!
      </p>

      <div className="undock__generator__table">
        <ul className="undock__generator__phrases">
          {phrases.map((phrase, idx) => {
            return (
              <li className="undock__generator__phrase" key={idx}>
                <p className="undock__generator__phrase__number">{idx + 1}</p>
                <p>{phrase}</p>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="undock__generator__buttons">
        {copy ? <span style={{ color: 'red' }}>Copied.</span> : null}
        <CopyToClipboard text={phrases} onCopy={() => setCopy(true)}>
          <button className="undock__generator__copy">
            <ReactSVG src={copy_generator} />
            COPY
          </button>
        </CopyToClipboard>

        <button className="undock__generator__button">
          Next
          <ReactSVG src={arrow} />
        </button>
      </div>
    </div>
  );
};

export default PhraseGenerator;
