const sumAll = function (firstNumber, lastNumber) {
  if (
    firstNumber <= 0 ||
    lastNumber <= 0 ||
    typeof firstNumber != "number" ||
    typeof lastNumber != "number"
  ) {
    return "ERROR";
  } else {
    let totalSum = 0;
    if (firstNumber < lastNumber) {
      for (
        let iterationNumber = 0;
        iterationNumber <= lastNumber - firstNumber;
        iterationNumber++
      ) {
        totalSum = totalSum + firstNumber + iterationNumber;
        console.log(totalSum);
      }
      console.log(totalSum);
    } else {
      for (
        let iterationNumber = firstNumber;
        iterationNumber >= lastNumber;
        iterationNumber--
      ) {
        totalSum = totalSum + iterationNumber;
        console.log(totalSum);
      }
      console.log(totalSum);
    }
    return totalSum;
  }
};

// Do not edit below this line
module.exports = sumAll;

console.log(sumAll(4, 1));
