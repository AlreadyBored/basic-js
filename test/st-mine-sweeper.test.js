import { assert } from 'chai';
import { testOptional } from '../extensions/index.js';
import minesweeper from '../src/st-mine-sweeper.js';

it.optional = testOptional;

Object.freeze(assert);

describe('st-mine-sweeper', () => {
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
