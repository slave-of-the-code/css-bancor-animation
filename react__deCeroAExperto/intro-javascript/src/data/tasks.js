const tasks = [
  {
    '2019': {
      JAN: {
        '01': 'Today I did nothing',
        '02': 'Holiday'
      }
    }
  },
  {
    '2020': {
      JAN: {
        '01': 'Today I did nothing',
        '02': 'Holiday'
      },
      FEB: {
        '04': 'I worked again',
        '05': 'I worked again qqq',
        '06': 'I worked again eee'
      }
    }
  }
];

const otherObject = {
  id: 1,
  name: 'Pepe'
};

export { tasks as default, otherObject };

// You can do it this
/*
export default [...]

in the file...
import Tasks from './data/tasks'

===========================================

or...in the same file

export const otherObject = { id: 1, name: 'Pepe'}

in the file...

import Tasks, { otherObject } from './data/tasks'

===========================================

or
const tasks = [...]
export {
  tasks as default,
  otherObject
}

in the file...

import Tasks, { otherObject } from './data/tasks'
*/

/*
This in index.js file
------------------------
import tasks, { otherObject } from './data/tasks';

console.log(tasks);
console.log(otherObject);
*/
