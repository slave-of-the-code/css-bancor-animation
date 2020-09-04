import '@testing-library/jest-dom';
import Demo, { DemoString } from './demo';

describe('My demo test', () => {
  test('should be true', () => {
    // assert
    let result = 0;

    // act
    result = 3 + 2;

    // afirm
    expect(result).toBe(5);
  });
});

describe('Test of Demo file', () => {
  test('should be more than', () => {
    const num1 = 30;
    const num2 = 12;

    const result = Demo.isMoreThan(num2, num1);

    expect(result).toBeFalsy();
  });

  test('should sustract', () => {
    const num1 = 30;
    const num2 = 12;

    const result = Demo.sustract(num1, num2);

    expect(result).toBe(18);
  });

  test('should be NaN', () => {
    const num1 = 30;
    const num2 = undefined;

    const result = Demo.sustract(num1, num2);

    expect(result).toBeNaN();
  });
});

describe('Test to DemoString', () => {
  test('should be equals', () => {
    const str1 = 'Gustavo';
    const str2 = 'Gustavo';

    const result = DemoString.areEquals(str1, str2);

    expect(result).toBeTruthy();
  });
});
