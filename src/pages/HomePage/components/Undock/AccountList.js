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

const AccountList = ({ name, setAccountChecked, onDisabled }) => {
  const [checked, setChecked] = useState(false);

  const chengeCheckbox = () => {
    setChecked(!checked);
    setAccountChecked(!checked);
  };

  return (
    <li
      className="undock__checkbox_box"
      type="checkbox"
      onClick={
        onDisabled
          ? chengeCheckbox
          : () => {
              console.log('no click!');
            }
      }
    >
      <ReactSVG src={rectangle_write} />
      <ReactSVG
        src={checkmark_white}
        className={checked ? 'undock__img_write' : 'undock__img_write__display'}
      />
      <p>{name}</p>
    </li>
  );
};

export default AccountList;
