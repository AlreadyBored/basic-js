const { describe } = require('node:test');
const assert = require('node:assert');
const { test } = require('../lib');
const { sortByHeight } = require('../src/sort-by-height.js');

describe('Sort by height', () => {
  // Presence requirement
  test('function sortByHeight exists', () => {
    assert.strictEqual(typeof sortByHeight, 'function');
  });

  // Functional requirements
  test('should return sorted array without moving -1', () => {
    assert.deepStrictEqual(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]), [-1, 150, 160, 170, -1, -1, 180, 190]);
    assert.deepStrictEqual(sortByHeight([-1, -1, -1, -1, -1]), [-1, -1, -1, -1, -1]);
    assert.deepStrictEqual(sortByHeight([-1]), [-1]);
    assert.deepStrictEqual(sortByHeight([4, 2, 9, 11, 2, 16]), [2, 2, 4, 9, 11, 16]);
    assert.deepStrictEqual(
      sortByHeight([23, 54, -1, 43, 1, -1, -1, 77, -1, -1, -1, 3]),
      [1, 3, -1, 23, 43, -1, -1, 54, -1, -1, -1, 77],
    );
  });
});
