import React, { useState } from 'react';
import { ReactSVG } from 'react-svg';
import rectangle_write from '../../../../assets/images/rectangle_write.svg';
import checkmark_white from '../../../../assets/images/checkmark-white.svg';
import arrow from '../../../../assets/images/arrow.svg';
import road_selection from '../../../../assets/images/road_selection.svg';
import AccountList from './AccountList';

const dataAccounts = [
  { name: 'account.near' },
  { name: 'royo.near' },
  { name: 'igor.near' },
  { name: 'ozymandius.near' },
  { name: 'motzart.near' },
];

const AccountSelection = () => {
  const [accountChecked, setAccountChecked] = useState(null);

  return (
    <div className="undock__selection">
      <p className="undock__selection__title">
        Select the account you wish to Undock
      </p>
      <ul>
        {dataAccounts.map(({ name }, idx) => {
          return (
            <AccountList
              name={name}
              key={idx}
              accountChecked={accountChecked}
              setAccountChecked={setAccountChecked}
              idx={idx}
            />
          );
        })}
      </ul>

      <button
        className={`undock__selection__button ${
          accountChecked !== null
            ? 'undock__selection__button__connect'
            : 'undock__selection__button__disconnect'
        }`}
        disabled={accountChecked ? false : true}
        type="submit"
      >
        Next
        <ReactSVG src={arrow} />
      </button>
      <ReactSVG src={road_selection} className="undock__selection__road" />
    </div>
  );
};

export default AccountSelection;
