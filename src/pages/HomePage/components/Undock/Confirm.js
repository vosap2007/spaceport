import React, { useState } from 'react';
import { ReactSVG } from 'react-svg';
import rectangle_write from '../../../../assets/images/rectangle_write.svg';
import checkmark_white from '../../../../assets/images/checkmark-white.svg';
import arrow from '../../../../assets/images/arrow.svg';

const dataAccounts = [
  { name: 'NEAR', coin: 'NEAR', balance: '135.00' },
  { name: 'AURORA', coin: 'AURORA', balance: '13.5' },
  { name: 'Octopus', coin: 'OCT', balance: '135.00' },
  { name: 'USN', coin: 'USN', balance: '50.00' },
];

const Confirm = () => {
  const [value, setValue] = useState('');
  const [checked, setChecked] = useState(false);

  const chengeCheckbox = () => {
    setChecked(!checked);
  };

  return (
    <div className="undock__confirm">
      <p className="undock__confirm__title">
        Confirm transfer of assets from <span>account.near</span>
      </p>

      <div className="undock__confirm__titles_tab">
        <p>Assets</p>
        <p>Transer Amount</p>
      </div>

      <div className="undock__confirm__table">
        {dataAccounts.map(({ name, coin, balance }) => {
          return (
            <li className="undock__spaceport__table__line">
              <div className="undock__spaceport__table__line_left">
                <div className="undock__spaceport__table__line_left__coin">
                  <p className="undock__spaceport__table__line_left__coin__name">
                    {name}
                  </p>
                  <p className="undock__spaceport__table__line_left__coin__sign">
                    {coin}
                  </p>
                </div>
                <p className="undock__spaceport__table__line_left__price">
                  {balance}
                </p>
              </div>
            </li>
          );
        })}
      </div>

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
          I want to grant full access and transfer all assets to SPACEPORT from
          the selected account.
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
    </div>
  );
};

export default Confirm;
