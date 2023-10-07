const palindromes = function (word) {
  const cleanWord = word.replace(/\!|\@|\,|\.|\s/g, "").toLowerCase();
  console.log(cleanWord);
  const reversedWord = cleanWord.split("").reverse().join("");
  console.log(reversedWord);
  return cleanWord === reversedWord;
};
//
console.log(palindromes("racecar!"));
//
// Do not edit below this line
module.exports = palindromes;
