import React, { useState } from 'react';
import { ReactSVG } from 'react-svg';
import rectangle_write from '../../../../assets/images/rectangle_write.svg';
import checkmark_white from '../../../../assets/images/checkmark-white.svg';
import arrow from '../../../../assets/images/arrow.svg';
import road_terms from '../../../../assets/images/road_terms.svg';

const TermsConditions = () => {
  const [checked, setChecked] = useState(false);

  const chengeCheckbox = () => {
    setChecked(!checked);
  };

  return (
    <div className="undock__terms">
      <p className="undock__terms__title">Terms and Conditions</p>
      <p className="undock__terms__text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <div
        className="undock__checkbox_box"
        type="checkbox"
        onClick={chengeCheckbox}
      >
        <ReactSVG src={rectangle_write} />
        <ReactSVG
          src={checkmark_white}
          className={
            checked ? 'undock__img_write' : 'undock__img_write__display'
          }
        />
        <p>I have read and accept the terms & conditions.</p>
      </div>

      <button
        className={`undock__terms__button ${
          checked
            ? 'undock__terms__button__connect'
            : 'undock__terms__button__disconnect'
        }`}
        disabled={checked ? false : true}
        type="submit"
      >
        Next
        <ReactSVG src={arrow} />
      </button>
      <ReactSVG src={road_terms} className="undock__terms__road" />
    </div>
  );
};

export default TermsConditions;
