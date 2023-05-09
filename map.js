const assertArraysEqual = require('./assertArraysEqual');

const flowers = ['sunflower', 'daisy', 'rose', 'chrysanthemum'];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;

const result1 = map(flowers, flower => flower[0]);
console.log(result1);

// test
console.log(assertArraysEqual([1, 2, 3], [1, 2, 3]));
console.log(assertArraysEqual(result1, ['s', 'd', 'r', 'c']));
