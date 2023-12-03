const { assert } = require('chai');
const { testOptional } = require('../extensions/index.js');
const { minesweeper } = require('../src/mine-sweeper.js');

it.optional = testOptional;

Object.freeze(assert);

describe('Minesweeper', () => {
  it.optional('should return minesweeper game setup', () => {
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
