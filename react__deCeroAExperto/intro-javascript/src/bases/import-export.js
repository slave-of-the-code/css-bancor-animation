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

export default tasks;

// You can do it this
/*
export default [...]

in the file...
import Tasks from './data/tasks'

===========================================

also...in the same file

export const otherObject = { id: 1, name: 'Pepe'}

in the file...

import Tasks, { otherObject } from './data/tasks'

===========================================

or

export {
  as default : ['1','2','3'],
  otherObject
}

in the file...

import Tasks, { otherObject } from './data/tasks'
*/
