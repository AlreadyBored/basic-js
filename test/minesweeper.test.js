const { describe } = require('node:test');
const assert = require('node:assert');
const { test } = require('../lib');
const { minesweeper } = require('../src/minesweeper.js');

describe('Minesweeper', () => {
  // Presence requirement
  test('function minesweeper exists', () => {
    assert.strictEqual(typeof minesweeper, 'function');
  });

  // Functional requirements
  test('should return minesweeper game setup', () => {
    assert.deepEqual(
      minesweeper([
        [true, false, false],
        [false, true, false],
        [false, false, false],
      ]),
      [
        [1, 2, 1],
        [2, 1, 1],
        [1, 1, 1],
      ],
    );

    assert.deepEqual(
      minesweeper([
        [false, false, false],
        [false, false, false],
      ]),
      [
        [0, 0, 0],
        [0, 0, 0],
      ],
    );
  });
});
