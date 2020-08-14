function greeting(name) {
  return `Hello ${name}`;
}

console.log(greeting('Gustavo'));

greeting = 33;

console.log(greeting);

const greeting2 = (name) => `Hello ${name}`;
console.log(greeting2('Fabiana'));

this.hello = 'hello function!';
function sayHello() {
  return this.hello;
}
console.log(sayHello()); // undefined
console.log(sayHello.call(this));

this.hello2 = 'hello arrow function!';
const sayHello2 = () => this.hello2;
console.log(sayHello2());

const getUser = () => ({
  name: 'Esteban',
  lastName: 'Quito',
  age: 54,
  isMale: true
});
console.log(getUser());
