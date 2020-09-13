import React, { useState } from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import ListGif from './ListGif';
import SearchBy from './SearchBy';

export const GifExpertApp = () => {
  const [query, setQuery] = useState('');
  const { data } = useFetchGifs(query);

  return (
    <>
      <h1>Gif Expert App</h1>
      <SearchBy getGifData={setQuery} />
      <hr />
      {query.length > 0 && <ListGif list={data} query={query} />}
    </>
  );
};
