const { describe } = require('node:test');
const assert = require('node:assert');
const { test } = require('../lib');
const { getSumOfDigits } = require('../src/sum-digits.js');

describe('Sum digits', () => {
  // Presence requirement
  test('function getSumOfDigits exists', () => {
    assert.strictEqual(typeof getSumOfDigits, 'function');
  });

  // Functional requirements
  test('should return the sum of digits', () => {
    assert.strictEqual(getSumOfDigits(91), 1);
    assert.strictEqual(getSumOfDigits(100), 1);
    assert.strictEqual(getSumOfDigits(35), 8);
    assert.strictEqual(getSumOfDigits(99), 9);
    assert.strictEqual(getSumOfDigits(123), 6);
  });
});
