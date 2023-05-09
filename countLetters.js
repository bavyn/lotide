const assertEqual = require('./assertEqual');

const countLetters = function(sentence) {
  const counter = {};

  for (let letter in sentence) {
    if (letter !== ' ') {
      if (counter[letter]) {
      counter[letter] += 1;
    } else {
      counter[letter] = 1;
    }
  } 
}
  return counter;
};

module.exports = countLetters;


//test
let result = countLetters('please work');
console.log(result);
assertEqual(countLetters(result));

result = countLetters('lhl');
console.log(result);
