const { describe } = require('node:test');
const assert = require('node:assert');
const { test } = require('../lib');
const { deleteDigit } = require('../src/delete-digit.js');

describe('Delete digit', () => {
  // Presence requirement
  describe('function presence', () => {
    test('function deleteDigit exists', () => {
      assert.strictEqual(typeof deleteDigit, 'function');
    });
  });

  // Functional requirements
  test('should return the maximal number you can obtain by deleting exactly one digit of the given number', () => {
    assert.strictEqual(deleteDigit(152), 52);
    assert.strictEqual(deleteDigit(1001), 101);
    assert.strictEqual(deleteDigit(10), 1);
    assert.strictEqual(deleteDigit(222219), 22229);
    assert.strictEqual(deleteDigit(109), 19);
    assert.strictEqual(deleteDigit(342), 42);
  });
});
