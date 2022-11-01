import React from 'react';
import { ReactSVG } from 'react-svg';
import title_autorisation from '../../assets/images/title_autorisation.svg';

const AutorisationPage = ({ isAuthorized, setIsAuthorized }) => {
  return (
    <div className="autorisation">
      <ReactSVG src={title_autorisation} />
      <h1 className="autorisation__title">Your Passport into the NEARVERSE</h1>
      <button
        className="autorisation__sign_out"
        onClick={() => {
          setIsAuthorized(!isAuthorized);
        }}
      >
        Log in with Google
      </button>
      <div className="autorisation__bottom">
        <p className="autorisation__text">© Spaceport Labs 2022</p>
      </div>
    </div>
  );
};

export default AutorisationPage;
