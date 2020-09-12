import React, { useState } from 'react';

const Add = () => {
  const [inputValue, setInputValue] = useState('joojo');
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Submit from Form');
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

export default Add;
