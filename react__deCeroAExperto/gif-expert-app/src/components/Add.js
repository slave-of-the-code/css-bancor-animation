import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Add = ({ addNewItem }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length > 0) {
      addNewItem(inputValue);
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      ></input>
    </form>
  );
};

Add.propTypes = {
  addNewItem: PropTypes.func,
  list: PropTypes.array
};

export default Add;
