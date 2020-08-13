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

miObjeto.prop2 = false;
console.log(miObjeto);

miObjeto.prop4 = 'puedo agregar propiedades';
console.log(miObjeto)

// miObjeto = {
//   prop5: 'se rompe!'
// }
