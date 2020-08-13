const person = {
  name: 'John',
  age: 40,
  isMale: true
};
console.log(person);

console.log({ person });

console.table({ person });

const people = [
  {
    name: 'John',
    age: 40,
    isMale: true,
    getFullName() {
      return `My name is ${this.name}`;
    }
  },
  {
    name: 'Mary',
    age: 36,
    isMale: false,
    getFullName() {
      return `My name is ${this.name}`;
    }
  },
  {
    name: 'Juliet',
    age: 3,
    isMale: false,
    getFullName() {
      return `My name is ${this.name}`;
    }
  }
];
console.log({ people });

const person1 = person;
console.table({ person });
console.table({ person1 });
person1.name = 'Pepe';
console.table({ person });
console.table({ person1 });

const person2 = { ...person };
console.table({ person });
console.table({ person2 });
person1.name = 'Changed!!';
console.table({ person });
console.table({ person2 });
