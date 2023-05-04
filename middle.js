// eqArrays function from previous exercise
let eqArrays = function(list1,list2) {
  for (let i = 0; i < list1.length; i++) {
    if (list1[i] !== list2[i]) {
      return false;
    }
  }
  return true;
};

// assertArraysEqual from previous exercise
const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅ Assertation Passed: ${array1}  === ${array2}`);
  } else {
    console.log(`❌ Assertation Failed: ${array1}  !== ${array2}`);
  }
};

// middle function implementation
/* steps
1. if array has less than 3 elements, return an empty array
2. if array has 3 or more elements, proceed with function
3. if array has odd number of elements, return a single middle element
4. if array has even number of elements, return middle two elements

*/


const middle = function(array) {
  // array is too short to have a middle
  if (array.length < 3) {
    return [];
  }
  const middleValue = array.length / 2;
  if (array.length % 2 === 1) {
    return [array[Math.floor(middleValue)]];
  } else {
    return [array[middleValue - 1], array[middleValue]];
  }
};

// test code

console.log(middle([1, 2, 3, 4, 5]));
console.log(middle([1, 2, 3, 4, 5, 6]));
console.log(middle([1, 2]));