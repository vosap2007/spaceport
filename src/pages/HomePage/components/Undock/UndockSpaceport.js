import React, { useState } from 'react';
import { ReactSVG } from 'react-svg';
import arrow from '../../../../assets/images/arrow.svg';
import road_spaceport from '../../../../assets/images/road_spaceport.svg';
import SpaceportList from './SpaceportList';

const dataAccounts = [
  { name: 'NEAR', coin: 'NEAR', balance: '135.00' },
  { name: 'AURORA', coin: 'AURORA', balance: '13.5' },
  { name: 'Octopus', coin: 'OCT', balance: '135.00' },
  { name: 'USN', coin: 'USN', balance: '50.00' },
];

const UndockSpaceport = () => {
  const [accountChecked, setAccountChecked] = useState(false);

  return (
    <div className="undock__spaceport">
      <p className="undock__spaceport__title">Confirm Transfer of Assets</p>
      <div className="undock__spaceport__columns">
        <div className="undock__spaceport__columns__left">
          <p>Token</p>
          <p>Balance</p>
        </div>
        <p>Transfer Amount</p>
      </div>
      <ul className="undock__spaceport__table">
        {dataAccounts.map(({ name, coin, balance }, idx) => {
          return (
            <SpaceportList
              name={name}
              coin={coin}
              balance={balance}
              key={idx}
              idx={idx}
            />
          );
        })}
      </ul>

      <div
        className={`undock__spaceport__checkbox ${
          accountChecked && 'undock__spaceport__checkbox__check'
        }`}
        type="checkbox"
        onClick={() => {
          setAccountChecked(!accountChecked);
        }}
      >
        <div className="undock__spaceport__write_circle"></div>
        <div
          className={
            accountChecked
              ? 'undock__spaceport__dark_circle'
              : 'undock__spaceport__dark_circle__display'
          }
        ></div>
        <p>Transfer All Assets</p>
      </div>

      <button
        className={`undock__spaceport__button ${
          accountChecked !== null
            ? 'undock__spaceport__button__connect'
            : 'undock__spaceport__button__disconnect'
        }`}
        disabled={accountChecked ? false : true}
        type="submit"
      >
        Next
        <ReactSVG src={arrow} />
      </button>
      <ReactSVG src={road_spaceport} className="undock__spaceport__road" />
    </div>
  );
};

export default UndockSpaceport;
