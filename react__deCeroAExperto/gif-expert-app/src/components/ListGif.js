import React from 'react';

const ListGif = () => {
  const list = [
    {
      name: 'Gustavo Lopez',
      age: 40
    },
    {
      name: 'Fabiana Rivero',
      age: 36
    },
    {
      name: 'Lourdes Lopez',
      age: 16
    }
  ];

  return (
    <>
      <ul>
        {list.map((item, i) => {
          return (
            <li key={i}>
              <p>
                <small>{item.name}</small>
                <strong>{item.age}</strong>
              </p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ListGif;
