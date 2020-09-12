import React from 'react';
import PropTypes from 'prop-types';

const ListGif = ({ list }) => {
  return (
    <>
      <ul>
        {list.map((item, index) => {
          const rowLen = item.length;
          return item.map((gif, i) => (
            <>
              <li key={gif.id}>
                <div>
                  <small>{gif.title}</small>
                  <img src={gif.url} alt={gif.title}></img>
                </div>
              </li>
              {rowLen === i + 1 && (
                <li key={i + 1}>
                  <hr />
                </li>
              )}
            </>
          ));
        })}
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
