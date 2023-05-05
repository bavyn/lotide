// eqArrays function from previous exercise
let eqArrays = function(list1,list2) {
  for (let i = 0; i < list1.length; i++) {
    if (list1[i] !== list2[i]) {
      return false;
    }
  }
  return true;
};

// assertArraysEqual function from previous exercise

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅ Assertation Passed: ${array1}  === ${array2}`);
  } else {
    console.log(`❌ Assertation Failed: ${array1}  !== ${array2}`);
  }
};

// map function implementation

const flowers = ['sunflower', 'daisy', 'rose', 'chrysanthemum'];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const result1 = map(flowers, flower => flower[0]);
console.log(result1);

// test
console.log(assertArraysEqual([1, 2, 3], [1, 2, 3]));
console.log(assertArraysEqual(result1, ['s', 'd', 'r', 'c']));
