const Demo = {
  sum(num1, num2) {
    return num1 + num2;
  },
  sustract(num2, num1) {
    return num2 - num1;
  },
  isMoreThan(num2, num1) {
    return num2 > num1;
  },
  isLessThan(num2, num1) {
    return num2 < num1;
  }
};

const DemoString = {
  areEquals(str1, str2) {
    return str1.trim() === str2.trim();
  }
};

// export default Demo;
export { Demo as default, DemoString };
