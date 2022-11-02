import React, { useState } from 'react';

const AccountSelection = () => {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(value);
    setValue('');
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
        <input
          type="text"
          required
          value={value}
          onChange={handleChange}
          className="dock__account__input"
          placeholder="Enter seed phrase"
        ></input>
        <p>sjdhfbsjdfhbskdjhbf</p>
        <input
          className="dock__account__button"
          type="submit"
          value="Отправить"
        />
      </form>
    </div>
  );
};

export default AccountSelection;
