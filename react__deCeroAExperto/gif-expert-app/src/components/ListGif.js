import React from 'react';
import PropTypes from 'prop-types';

const ListGif = ({ list, query }) => {
  return (
    <>
      <h3>{query}</h3>
      {list.length === 0 && <p>loading...</p>}
      <ul className="gif-grid">
        {list.map((gif, index) => (
          <li key={index} className="gif-card" title={gif.title}>
            <div>
              <img src={gif.url} alt={gif.title} className="gif-card-img"></img>
              <small className="gif-card-text">{gif.title}</small>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

ListGif.propTypes = {
  list: PropTypes.array,
  query: PropTypes.string,
  loading: PropTypes.bool
};
ListGif.defaultProps = {
  list: [{ id: 1, title: 'title', url: 'url image' }],
  query: '',
  loading: false
};

export { ListGif as default };
