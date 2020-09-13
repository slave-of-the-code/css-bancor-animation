import React from 'react';
import PropTypes from 'prop-types';

const ListGif = ({ list }) => {
  list = list[0] || [];
  return (
    <>
      <ul>
        {list.map((gif, index) => (
          <li key={index}>
            <div>
              <small>{gif.title}</small>
              <img src={gif.url} alt={gif.title}></img>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

ListGif.propTypes = {
  list: PropTypes.array
};
ListGif.defaultProps = {
  list: [{ id: 1, title: 'title', url: 'url image' }]
};

export { ListGif as default };
