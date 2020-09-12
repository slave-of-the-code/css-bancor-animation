import React, { useState } from 'react';
import ListGif from './ListGif';
import Add from './Add';

export const GifExpertApp = () => {
  const [list, setList] = useState([]);

  const addNewItem = (item) => {
    setList([...list, item]);
  };

  return (
    <>
      <h1>Gif Expert App</h1>
      <Add addNewItem={addNewItem} />
      <hr />
      <ListGif list={list} />
    </>
  );
};
