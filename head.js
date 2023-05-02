// assertEqual function implementation
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertation Passed: ${actual}  === ${expected}`);
  } else
    console.log(`❌ Assertation Failed: ${actual}  !== ${expected}`);
};

// head function implementation
let head = function(myArray) {
  return myArray[0];
};

// test cases
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([900]), 900);
assertEqual(head([]), 2);