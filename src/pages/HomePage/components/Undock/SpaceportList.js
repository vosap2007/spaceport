import React, { useState } from 'react';

const SpaceportList = ({ name, coin, balance, idx }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

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
        <p className="undock__spaceport__table__line_left__price">{balance}</p>
      </div>
      <div className="undock__spaceport__table__line_rite">
        <button className="undock__spaceport__table__line_rite__button">
          Transfer Max
        </button>
        <input
          className="undock__spaceport__table__line_rite__input"
          type="number"
          min={0}
          // max={100}
          value={value}
          onChange={handleChange}
          // placeholder={0}
        />
      </div>
    </li>
  );
};

export default SpaceportList;
