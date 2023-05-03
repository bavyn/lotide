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

// without function implementation
const without = function(source, itemsToRemove) {
  const itemsToKeep = [];
  for(const items of source) {
    if (!itemsToRemove.includes(items)) {
      itemsToKeep.push(items);
    }
  }
  return itemsToKeep;
};




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
