// eqArrays function from previous exercise
let eqArrays = function(list1,list2) {
  for (let i = 0; i < list1.length; i++) {
    if (list1[i] !== list2[i]) {
      return false;
    }
  }
  return true;
};

// assertArraysEqual function implementation

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅ Assertation Passed: ${array1}  === ${array2}`);
  } else {
    console.log(`❌ Assertation Failed: ${array1}  !== ${array2}`);
  }
};


/* test
console.log(assertArraysEqual([1, 2, 3], [1, 2, 3]));
console.log(assertArraysEqual([1, 2, 3], [100, 200, 300]));
*/