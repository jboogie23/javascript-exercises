const fibonacci = function (fibNumPos) {
  if (fibNumPos <= 0) {
    return "OOPS";
  }

  let prev = 0;
  let current = 1;

  for (let i = 1; i <= fibNumPos; i++) {
    const next = prev + current;
    prev = current;
    current = next;
  }
  return current;
};

console.log(fibonacci("4"));

// Do not edit below this line
module.exports = fibonacci;
