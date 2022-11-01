import React from 'react';
import { ReactSVG } from 'react-svg';
import header_logo from '../../assets/images/header_logo.svg';

const Header = ({ isAuthorized, setIsAuthorized }) => {
  return (
    <header className="header">
      <a href="/">
        <ReactSVG src={header_logo} className="header__logo" />
      </a>

      {isAuthorized ? (
        <div className="header__registration">
          <p className="header__account">motzart.near</p>
          <button
            className="header__sign_out"
            onClick={() => {
              setIsAuthorized(!isAuthorized);
            }}
          >
            Sign out
          </button>
        </div>
      ) : (
        <button
          className="header__sign_out"
          onClick={() => {
            setIsAuthorized(!isAuthorized);
          }}
        >
          Log in with Google
        </button>
      )}
    </header>
  );
};

export default Header;
