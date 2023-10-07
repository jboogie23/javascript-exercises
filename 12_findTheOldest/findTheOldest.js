const findTheOldest = function (people) {
  return people.reduce((largest, current) =>
    current > largest ? current : largest
  );
};

// Do not edit below this line
module.exports = findTheOldest;
