import { tasks } from './data/tasks';

function findObjectByKey(array, year, month, day) {
  let newObject = undefined;
  let value;
  if (array && year) {
    value = array.filter((item) => {
      return Object.keys(item)[0] === year;
    });

    if (value.length > 0) {
      newObject = {
        [year]: value[0][year]
      };

      if (month) {
        if (value[0][year][month] === undefined) return undefined;
        newObject = {
          [year]: {
            [month]: value[0][year][month]
          }
        };

        if (day) {
          if (value[0][year][month][day] === undefined) return undefined;
          newObject = {
            [year]: {
              [month]: {
                [day]: value[0][year][month][day]
              }
            }
          };
        }
      }
    }
  }

  return newObject;
}

const result = findObjectByKey(tasks, '2020', 'JAN');
console.log(result);
