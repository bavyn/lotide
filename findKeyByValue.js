// assertEqual from previous exercise
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertation Passed: ${actual}  === ${expected}`);
  } else
    console.log(`❌ Assertation Failed: ${actual}  !== ${expected}`);
};

// findKeyByValue function implementation

const findKeyByValue = function(obj, value) {
  const entries = Object.entries(obj);
  return entries.find(entry => entry[1] === value)?.[0];
};

// test

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

let result = (findKeyByValue(bestTVShowsByGenre, "cheetah girls"));
console.log(result);

result = (findKeyByValue(bestTVShowsByGenre, "The Wire"));
console.log(result);

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);