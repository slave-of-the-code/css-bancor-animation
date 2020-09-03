import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({ initCounter }) => {
  const [counter, setCounter] = useState(initCounter);

  const handleClickAdd = (e) => {
    // console.log('e', e);
    setCounter(counter + 1);
  };
  const handleClickReset = () => setCounter(initCounter);
  const handleClickReduce = () => setCounter(counter - 1);

  return (
    <>
      <h4>Counter APP</h4>
      <span>{counter}</span>
      <div>
        <button onClick={handleClickAdd}>+1</button>
        <button onClick={handleClickReset}>reset</button>
        <button onClick={handleClickReduce}>-1</button>
      </div>
    </>
  );
};

CounterApp.propTypes = {
  initCounter: PropTypes.number.isRequired
};
CounterApp.defaultProps = {
  initCounter: 0
};

export default CounterApp;
