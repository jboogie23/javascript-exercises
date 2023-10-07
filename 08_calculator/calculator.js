const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (sumArray) {
  const accumulator = 0;
  const currentValue = 0;
  const initialValue = 0;
  return sumArray.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
};

const multiply = function (multiplyArray) {
  return multiplyArray.reduce(
    (accumulator, currentValue) => accumulator * currentValue,
    1
  );
};

const power = function (number, toThePowerOf) {
  return Math.pow(number, toThePowerOf);
};

const factorial = function (num) {
  if (num === 0 || num === 1) {
    return 1;
  } else {
    console.log(num);
    for (let i = num; num > 0; i--) {
      num = num * (num - 1);
    }
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
