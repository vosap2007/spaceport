import React from 'react';
import { ReactSVG } from 'react-svg';
import header_logo from '../../assets/images/header_logo.svg';

const Header = () => {
  return (
    <header className="header">
      <a href="/">
        <ReactSVG src={header_logo} className="header__logo" />
      </a>

      <div className="header__registration">
        <p className="header__account">motzart.near</p>
        <button
          className="header__sign_out"
          onClick={() => {
            console.log('Sign out click!');
          }}
        >
          Sign out
        </button>
      </div>
    </header>
  );
};

export default Header;
