import React from 'react';

const AccountList = ({ name, accountChecked, setAccountChecked, idx }) => {
  return (
    <li
      className={`undock__selection__checkbox ${
        idx === accountChecked && 'undock__selection__checkbox__check'
      }`}
      type="checkbox"
      onClick={() => {
        accountChecked !== idx
          ? setAccountChecked(idx)
          : setAccountChecked(null);
      }}
      checked={idx === accountChecked}
    >
      <div className="undock__selection__write_circle"></div>
      <div
        className={
          idx === accountChecked
            ? 'undock__selection__dark_circle'
            : 'undock__selection__dark_circle__display'
        }
      ></div>
      <p>{name}</p>
    </li>
  );
};

export default AccountList;
