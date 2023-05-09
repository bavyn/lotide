const eqArrays = require('./eqArrays');

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

module.exports = eqObjects;