import React, { useState } from 'react';
import { ReactSVG } from 'react-svg';
import arrow from '../../../../assets/images/arrow.svg';
import road_spaceport from '../../../../assets/images/road_spaceport.svg';
import AccountList from './AccountList';

const dataAccounts = [
  { name: 'NEAR', coin: 'NEAR', balance: '135.00' },
  { name: 'AURORA', coin: 'AURORA', balance: '13.5' },
  { name: 'Octopus', coin: 'OCT', balance: '135.00' },
  { name: 'USN', coin: 'USN', balance: '50.00' },
];

const UndockSpaceport = () => {
  const [accountChecked, setAccountChecked] = useState(null);

  return (
    <div className="undock__selection">
      <p className="undock__selection__title">Confirm Transfer of Assets</p>
      <ul className="undock__selection__accounts">
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
      <ReactSVG src={road_spaceport} className="undock__selection__road" />
    </div>
  );
};

export default UndockSpaceport;
