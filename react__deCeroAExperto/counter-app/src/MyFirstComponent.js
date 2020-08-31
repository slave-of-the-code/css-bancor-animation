import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './MyfirstComponent.css';

const MyFirstComponent = ({ title, userName, date }) => {
  return (
    <>
      <header>
        <h1>{title}</h1>
        <div>
          <h4>{userName}</h4>
          <small>
            <em>{date}</em>
          </small>
        </div>
      </header>
      <hr />
    </>
  );
};

MyFirstComponent.propTypes = {
  title: PropTypes.string.isRequired,
  userName: PropTypes.string,
  date: PropTypes.string
};

export default MyFirstComponent;
