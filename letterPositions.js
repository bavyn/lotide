// return all the indices (zero-based positions) in the string where each character is found.

// For each letter, instead of returning just one number to represent its number of occurrences, multiple numbers may be needed to represent all the places in the string that it shows up

// loop through the sentence string
// skip all spaces
// return an object with a key-value pair, where the key is the letter and the value is an array of each index occurance of the letter

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

// letterPositions function implementation
const letterPositions = function(sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== ' ') {
      if (results[sentence[i]]) {
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [i];
      }
    }
  }
  return results;
};


let test = letterPositions('please work');
console.log(test);
