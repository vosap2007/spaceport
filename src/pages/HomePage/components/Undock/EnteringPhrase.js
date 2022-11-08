import React, { useState } from 'react';

const EnteringPhrase = () => {
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
    <div className="undock__entering">
      <p className="undock__entering__title">
        Your New Seed Phrase for <span>account.near</span>
      </p>
      <p className="undock__entering__text">
        Please enter the <span>7th word</span>
      </p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={handleChange}
          className="undock__entering__input"
        ></input>

        <button
          className={`undock__entering__button ${
            value.length > 0
              ? 'undock__entering__button__connect'
              : 'undock__entering__button__disconnect'
          }`}
          disabled={value.length > 0 ? false : true}
          type="submit"
        >
          Confirm
        </button>
      </form>
    </div>
  );
};

export default EnteringPhrase;
