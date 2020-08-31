import React from 'react';
import PropTypes from 'prop-types';

const GridTasks = ({ title, list }) => {
  const ListItem = () => {
    return (
      <ul>
        {list.map((item, i) => {
          return <li key={i}>{item}</li>;
        })}
      </ul>
    );
  };

  const MgeEmptyTasks = () => {
    return (
      <small>
        <em>Not exist any tasks</em>
      </small>
    );
  };

  return (
    <>
      <section style={{ padding: '1rem', fontSize: '.85rem' }}>
        <h3>{title}</h3>
        {/* { if ( list.length === 0) {
          <span><em></em>No exist any tasks<em></span>
      }}      */}

        {(list.length > 0 && <ListItem />) || <MgeEmptyTasks />}
      </section>
    </>
  );
};

GridTasks.propTypes = {
  title: PropTypes.string.isRequired,
  list: PropTypes.array
};

GridTasks.defaultProps = {
  title: '',
  list: []
};

export default GridTasks;
