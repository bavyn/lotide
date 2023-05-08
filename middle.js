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

module.exports = middle;
