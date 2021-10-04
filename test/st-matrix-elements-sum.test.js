import { assert } from 'chai';
import { testOptional } from '../extensions/index.js';
import getMatrixElementsSum from '../src/st-matrix-elements-sum.js';

it.optional = testOptional;

Object.freeze(assert);

describe('st-matrix-elements-sum', () => {
  it.optional('should return the sum of the matrix elements that are not below 0', () => {
    assert.strictEqual(getMatrixElementsSum([
      [0, 1, 1, 2],
      [0, 5, 0, 0],
      [2, 0, 3, 3],
    ]), 9);

    assert.strictEqual(getMatrixElementsSum([
      [1, 2, 3, 4],
      [0, 5, 0, 0],
      [2, 0, 3, 3],
    ]), 15);

    assert.strictEqual(getMatrixElementsSum([
      [1, 1, 1],
      [2, 2, 2],
      [3, 3, 3],
    ]), 18);

    assert.strictEqual(getMatrixElementsSum([
      [0],
    ]), 0);

    assert.strictEqual(getMatrixElementsSum([
      [1],
      [5],
      [0],
      [2],
    ]), 6);
  });
});
