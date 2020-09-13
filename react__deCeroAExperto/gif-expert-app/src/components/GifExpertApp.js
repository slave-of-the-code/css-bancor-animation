import React, { useState, useEffect } from 'react';
import { getGif } from '../services/gif.services';
import ListGif from './ListGif';
import SearchBy from './SearchBy';

export const GifExpertApp = () => {
  const [list, setList] = useState([]);
  const [query, setQuery] = useState('');

  const getGifData = (query) => {
    setQuery(query);
  };

  useEffect(() => {
    getGif(query).then((gif) => {
      setList([gif]);
      setQuery(query);
    });
  }, [query]); // ponemos dentro de estas llaves la variable que "activara" el useEffect en caso que cambie
  //...o sea, cuando la variable "query" sufra un cambio, se ejecutara useEffect

  return (
    <>
      <h1>Gif Expert App</h1>
      <SearchBy getGifData={getGifData} />
      <hr />
      <ListGif list={list} query={query} />
    </>
  );
};
