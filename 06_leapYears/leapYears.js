const leapYears = function (checkYear) {
  if (checkYear % 4 === 0) {
    if (checkYear % 100 === 0) {
      if (checkYear % 400 === 0) {
        return true;
      } else {
        return false;
      }
    } else {
      console.log(checkYear);
      return true;
    }
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = leapYears;
console.log(leapYears(1900));
