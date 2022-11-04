import React, { useState } from 'react';
import { ReactSVG } from 'react-svg';
import rectangle_write from '../../../../assets/images/rectangle_write.svg';
import checkmark_white from '../../../../assets/images/checkmark-white.svg';
import arrow from '../../../../assets/images/arrow.svg';
import road_selection from '../../../../assets/images/road_selection.svg';

const dataAccounts = [
  { name: 'account.near' },
  { name: 'royo.near' },
  { name: 'igor.near' },
  { name: 'ozymandius.near' },
  { name: 'motzart.near' },
];

const AccountList = ({ name, accountChecked, setAccountChecked, idx }) => {
  const [checked, setChecked] = useState(false);

  return (
    <li
      className="undock__checkbox_box"
      type="checkbox"
      onClick={() => {
        accountChecked !== idx
          ? setAccountChecked(idx)
          : setAccountChecked(null);
      }}
      checked={idx === accountChecked}
    >
      <ReactSVG src={rectangle_write} />
      <ReactSVG
        src={checkmark_white}
        className={
          idx === accountChecked
            ? 'undock__img_write'
            : 'undock__img_write__display'
        }
      />
      <p>{name}</p>
    </li>
  );
};

export default AccountList;
