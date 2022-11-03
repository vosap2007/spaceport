import React, { useState } from 'react';
import { ReactSVG } from 'react-svg';
import rectangle_write from '../../../../assets/images/rectangle_write.svg';
import checkmark_white from '../../../../assets/images/checkmark-white.svg';
import arrow from '../../../../assets/images/arrow.svg';

const AccountSelection = () => {
  const [value, setValue] = useState('');
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(value);
    setValue('');
    checked && setChecked(!checked);
  };

  const chengeCheckbox = () => {
    setChecked(!checked);
  };

  return (
    <div className="dock__account">
      <p className="dock__account__title">
        Enter address of the account you with to Dock
      </p>
      <p className="dock__account__text">
        Type your 12 word recovery phrase, then click below to begin the
        recovery process.
      </p>
      <form onSubmit={handleSubmit}>
        <textarea
          type="text"
          value={value}
          onChange={handleChange}
          className="dock__account__input"
          placeholder="Enter seed phrase"
        ></textarea>
        <div
          className="dock__checkbox_box"
          type="checkbox"
          onClick={chengeCheckbox}
        >
          <ReactSVG src={rectangle_write} />
          <ReactSVG
            src={checkmark_white}
            className={checked ? 'dock__img_write' : 'dock__img_write__display'}
          />
          <p>
            I want to grant full access and transfer all assets to SPACEPORT
            from the selected account.
          </p>
        </div>

        <button
          className={`dock__account__button ${
            checked && value.length > 0
              ? 'dock__account__button__connect'
              : 'dock__account__button__disconnect'
          }`}
          disabled={checked && value.length > 0 ? false : true}
          type="submit"
        >
          Dock Account
          <ReactSVG src={arrow} />
        </button>
      </form>
    </div>
  );
};

export default AccountSelection;
