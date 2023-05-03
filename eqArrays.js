// function implementation
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertation Passed: ${actual}  === ${expected}`);
  } else
    console.log(`❌ Assertation Failed: ${actual}  !== ${expected}`);
};

let eqArrays = function(list1,list2) {
  for (let i = 0; i < list1.length; i++) {
    if (list1[i] === list2[i]) {
      return true;
    }
  }
  return false;
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false

