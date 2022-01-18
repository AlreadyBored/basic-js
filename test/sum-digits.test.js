const { assert } = require('chai');
const { testOptional } = require('../extensions/index.js');
const { getSumOfDigits } = require('../src/sum-digits.js');

it.optional = testOptional;

Object.freeze(assert);

describe('Sum digits', () => {
  it.optional('should return the sum of digits', () => {
    assert.strictEqual(getSumOfDigits(91), 1);
    assert.strictEqual(getSumOfDigits(100), 1);
    assert.strictEqual(getSumOfDigits(35), 8);
    assert.strictEqual(getSumOfDigits(99), 9);
    assert.strictEqual(getSumOfDigits(123), 6);
  });
});
