import React from 'react';
import PropTypes from 'prop-types';

const ListGif = ({ list }) => {
  return (
    <>
      <ul>
        {list.map((item, i) => {
          return (
            <li key={i}>
              <p>
                <small>{item}</small>
              </p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

ListGif.propTypes = {
  list: PropTypes.array
};
ListGif.defaultProps = {
  list: ['Gustavo Lopez', 'Fabiana Rivero', 'Lourdes Lopez']
};

export { ListGif as default };
