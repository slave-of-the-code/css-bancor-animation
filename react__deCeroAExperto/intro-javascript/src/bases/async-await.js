function showImage({ url: urlPhoto, id }) {
  const img = document.createElement('img');
  img.src = urlPhoto;

  const h1 = document.createElement('h1');
  h1.innerText = id;

  document.body.append(h1);
  document.body.append(img);
}

const showRandomPhotoAsync = async () => {
  const id = (Math.random() * 100).toFixed(0);
  const urlPhoto = `https://jsonplaceholder.typicode.com/photos?id=${id}`;

  const response = await fetch(urlPhoto);
  const data = await response.json();

  showImage(data[0]);
};

showRandomPhotoAsync().catch(console.warn);
