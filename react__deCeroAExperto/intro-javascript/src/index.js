import { tasks } from './data/tasks';

function findObjectByKey(array, year, month, day) {
  let newObject = undefined;
  let value;

  const isValueUndefinded = () => {
    if (year && value.length === 0) return true;
    if (month && value[0][year][month] === undefined) return true;
    if (day && value[0][year][month][day] === undefined) return true;
    return false;
  };

  const setYear = () => {
    if (isValueUndefinded()) return undefined;
    newObject = {
      [year]: value[0][year]
    };
  };

  const setMonth = () => {
    if (month) {
      if (isValueUndefinded()) return undefined;
      newObject = {
        [year]: {
          [month]: value[0][year][month]
        }
      };
    }
  };

  const setDay = () => {
    if (day) {
      if (isValueUndefinded()) return undefined;
      newObject = {
        [year]: {
          [month]: {
            [day]: value[0][year][month][day]
          }
        }
      };
    }
  };

  if (array && year) {
    value = array.filter((item) => {
      return Object.keys(item)[0] === year;
    });

    setYear();
    setMonth();
    setDay();
  }

  return newObject;
}

const result = findObjectByKey(tasks, '2019', 'JAN', '02');
console.log(result);
