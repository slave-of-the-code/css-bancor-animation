// const prom = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const result = (Math.random() * 10).toFixed(0);
//     if (result <= 5) {
//       resolve(result);
//     } else {
//       reject(`ERROR!! el valor es ${result}`);
//     }
//   }, 2000);
// });

// prom
//   .then((v) => {
//     console.log(`El valor es ${v}`);
//   })
//   .catch(console.error);

/* Esto es lo mismo que hacer */

const getRandomValueAsync = () => {
  return new Promise((resolve, reject) => {
    const result = (Math.random() * 10).toFixed(0);
    setTimeout(() => {
      result <= 5
        ? resolve(result)
        : reject(`ERROR!! el valor de result es ${result}`);
    }, 2000);
  });
};

getRandomValueAsync().then(console.log).catch(console.error);
