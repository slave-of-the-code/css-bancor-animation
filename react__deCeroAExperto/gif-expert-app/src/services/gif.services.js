export const getGif = async (query) => {
  const getArrayGif = ({ data }) => {
    return data.map((d) => {
      return {
        id: d.id,
        title: d.title,
        url: d.images?.downsized_medium.url
      };
    });
  };

  const API_url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    query
  )}&limit=10&api_key=TjCYtnf48tEUUNRf9wUV1V4rZ5F4jjlL`;
  const resp = await fetch(API_url);
  const API_data = await resp.json();

  if (API_data.meta.status === 200) {
    return getArrayGif(API_data);
  }
  return [];
};
