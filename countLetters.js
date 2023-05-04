// assertEqual from previous exercise
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertation Passed: ${actual}  === ${expected}`);
  } else
    console.log(`❌ Assertation Failed: ${actual}  !== ${expected}`);
};

// countLetters function implementation
// return an object with a count of all letters in a sentence
// don't count spaces

const countLetters = function(sentence) {
  const counter = {};

  for (let letter of sentence) {
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

let result = countLetters('please work');
console.log(result);

result = countLetters('my dog charlie ate a lip balm today');
console.log(result);

result = countLetters('lhl');
console.log(result);

