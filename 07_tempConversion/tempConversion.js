const convertToCelsius = function (userFahrenheitInput) {
  return Math.round((userFahrenheitInput - 32) * (5 / 9) * 10) / 10;
};

const convertToFahrenheit = function (userCelsiusInput) {
  return Math.round((userCelsiusInput * (9 / 5) + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
console.log(convertToCelsius(-100));
console.log(convertToFahrenheit(-10));
