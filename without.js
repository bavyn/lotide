const assertArraysEqual = require('./assertArraysEqual');

const without = function(source, itemsToRemove) {
  const itemsToKeep = [];
  for(const items of source) {
    if (!itemsToRemove.includes(items)) {
      itemsToKeep.push(items);
    }
  }
  return itemsToKeep;
};

module.exports = without;

// test
let result = without([1, 2, 3], [1]) // => [2, 3]
console.log(result);
result = without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]
console.log(result);
result = without(['reese cups', 'lollipops', 'apple'], ['apple']) // => ['reese cups', lollipops']
console.log(result);
// test case
const words = ["hello", "world", "lighthouse"];
result = without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
console.log(result);
assertArraysEqual(result, ["hello", "world"]);
