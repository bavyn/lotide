const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

describe("#eqObjects", () => {
  const shirtObject = { color: "red", size: "medium" };
  const anotherShirtObject= { size: "medium", color: "red" };
  it('returns true for (shirtObject, anotherShirtObject', () => {
    assert.strictEqual(eqObjects(shirtObject, anotherShirtObject), true);
  });
  const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
  it('returns false for (shirtObject, longSleeveShirtObject', () => {
    assert.strictEqual(eqObjects(shirtObject, longSleeveShirtObject), false);
  })
});