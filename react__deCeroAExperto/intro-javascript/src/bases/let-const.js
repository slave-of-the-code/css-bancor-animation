console.log('hola react!');

// var nunca mas
let variableQueSeEdita = '22';
const soloLectura = 'nunca me podras editar';

console.log(variableQueSeEdita);
console.log(soloLectura);

const miObjeto = {
  prop1: 22,
  prop2: true,
  prop3: 'hola'
};
console.log(miObjeto);

miObjeto.prop1 = 33;
console.log(miObjeto);

miObjeto.prop4 = 'puedo agregar propiedades';
console.log(miObjeto);

// miObjeto = {
//   prop5: 'se rompe!'
// }

let cont = 0;
for (cont; cont < 5; cont++) {
  console.log(cont); // 0 -4
}
console.log(cont); // 5

const name = 'gustavo';
if (true) {
  const name = 'Pepe';
  console.log(name); // Pepe
}
console.log(name); // Gustavo
