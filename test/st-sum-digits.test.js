import { assert } from 'chai';
import { testOptional } from '../extensions/index.js';
import getSumOfDigits from '../src/st-sum-digits.js';

it.optional = testOptional;

Object.freeze(assert);

describe('st-sum-digits', () => {
  it.optional('should return the sum of digits', () => {
    assert.strictEqual(getSumOfDigits(91), 1);
    assert.strictEqual(getSumOfDigits(100), 1);
    assert.strictEqual(getSumOfDigits(35), 8);
    assert.strictEqual(getSumOfDigits(99), 9);
    assert.strictEqual(getSumOfDigits(123), 6);
  });
});
