const arr = new Array(100);
arr.push(11);
console.log(arr);

const arr2 = [];
arr2.push(1);
arr2.push(2);
arr2.push(3);
arr2.push(4);
console.log(arr2);

let arr3 = arr2;
console.log(arr2);
console.log(arr3);
arr2.push(5);
console.log(arr2);
console.log(arr3);

arr3 = [...arr2];
arr2.push(6);
console.log('arr2', arr2);
console.log('arr3', arr3);

const arr4 = arr2.map((i) => {
  if (i > 2) return i;
  return 'empty';
});
console.log('arr2', arr2);
console.log('arr4', arr4);

const arr5 = arr2.filter((i) => i % 2);
console.log('arr2', arr2);
console.log('arr5', arr5);
