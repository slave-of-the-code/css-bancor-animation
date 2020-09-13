import { useState, useEffect } from 'react';
import { getGif } from '../services/gif.services';

export const useFetchGifs = (query) => {
  const [state, setState] = useState({
    data: [],
    loading: true
  });

  useEffect(() => {
    getGif(query).then((gif) => {
      setTimeout(() => {
        setState({
          data: gif,
          loading: false
        });
      }, 3000);
    });
  }, [query]);
  // ponemos dentro de estas llaves la variable que "activara" el useEffect en caso que cambie
  //...o sea, cuando la variable "query" sufra un cambio, se ejecutara useEffect

  return state;
};
