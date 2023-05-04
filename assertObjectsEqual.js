// eqArrays function from previous exercise
let eqArrays = function(list1,list2) {
  for (let i = 0; i < list1.length; i++) {
    if (list1[i] !== list2[i]) {
      return false;
    }
  }
  return true;
};
// eqObjects function from previous exercise
const eqObjects = function(object1, object2) {
  const keyArray1 = Object.keys(object1);
  const keyArray2 = Object.keys(object2);
  if (keyArray1.length !== keyArray2.length) {
    return false;
  }
  for (let key1 of keyArray1) {
    if (Array.isArray(object1[key1]) && Array.isArray(object2[key1])) {
      return eqArrays((object1[key1]) , (object2[key1]));
    } else {
    if ((object1[key1] !== object2[key1])) {
      return false;
    } 
  }
  }
  return true;
};

// assertObjectsEqual function implementation
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅ Assertation Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`❌ Assertation Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};
//console.log(`Example label: ${inspect(actual)}`);

// test code
const objectA = {
  a: "aaaaa",
  b: "bbbbb",
  c: "ccccc"
};
const objectB = {
  a: "aaa",
  b: "bbb",
};
console.log(assertObjectsEqual(objectA, objectB));

const objectC = {
  a: "aaaaa",
  b: "bbbbb",
  c: "ccccc"
};
const objectD = {
  a: "aaaaa",
  b: "bbbbb",
  c: "ccccc"
};
console.log(assertObjectsEqual(objectC, objectD));

