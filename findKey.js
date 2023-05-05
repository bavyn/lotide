// assertEqual function from previous exercise
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertation Passed: ${actual}  === ${expected}`);
  } else
    console.log(`❌ Assertation Failed: ${actual}  !== ${expected}`);
};

// findKey function implementation

// Implement the function findKey which takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.

/*
const findKeyByValue = function(obj, value) {
  const entries = Object.entries(obj);
  return entries.find(entry => entry[1] === value)?.[0];
};
*/

const findKey = function(object, callback) {
  for (const key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
};


//test

console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2))