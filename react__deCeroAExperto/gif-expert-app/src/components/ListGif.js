import React, { useState } from 'react';

const ListGif = () => {
  const [list, setList] = useState([
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
  ]);

  const handleAddButtonClick = () => {
    setList([
      ...list,
      {
        name: 'Milena Lopez',
        age: 13
      }
    ]);
    // console.log(list);
  };

  return (
    <>
      <button onClick={handleAddButtonClick}>add</button>
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
