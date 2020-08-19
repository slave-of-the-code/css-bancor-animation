// const url = 'https://jsonplaceholder.typicode.com/photos'
const getRandomPhoto = () => {
  const id = (Math.random() * 100).toFixed(0);
  const urlPhoto = `https://jsonplaceholder.typicode.com/photos?id=${id}`;

  return fetch(urlPhoto);
};

getRandomPhoto()
  .then((response) => response.json())
  .then((data) => showImage(data[0]))
  .catch(console.warn);

function showImage({ url: urlPhoto, id }) {
  const img = document.createElement('img');
  img.src = urlPhoto;

  const h1 = document.createElement('h1');
  h1.innerText = id;

  document.body.append(h1);
  document.body.append(img);

  console.log(id, urlPhoto);
}
