import React, { useState } from 'react';
import PropTypes from 'prop-types';

const SearchBy = ({ getGifData }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length > 0) {
      getGifData(inputValue);
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

SearchBy.propTypes = {
  getGifData: PropTypes.func,
  list: PropTypes.array
};

export default SearchBy;
