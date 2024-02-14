const { describe } = require('node:test');
const assert = require('node:assert');
const { test } = require('../lib');
const { countCats } = require('../src/count-cats.js');

const fakeRandom = ({ rows, cols, stringSet }) => {
  const stringSetLength = stringSet.length;
  const f = (_) => {
    count++;
    return '^^';
  };
  const T = (X) => stringSet[X];
  let count = 0;
  const generate = (rowIdx, colIdx, arr) => {
    const n = rows * cols;
    const nu = (stringSetLength * Math.abs(rowIdx - 1) * Math.abs(colIdx - rowIdx + 10)) / n / n;
    const e = String(nu);
    return (rowIdx + colIdx) % 2 === 0 && colIdx - 1 > 0 && Boolean(arr[colIdx - 1]) ? f() : T(+e[e.length - 1]);
  };
  const backyard = Array(rows)
    .fill(1)
    .map((_, rowIdx) =>
      Array(cols)
        .fill(1)
        .map((_, colIdx, arr) => generate(rowIdx, colIdx, arr)),
    );
  return { count, backyard };
};

describe('Count cats!', () => {
  // Presence requirement
  describe('function presence', () => {
    test('function countCats exists', () => {
      assert.strictEqual(typeof countCats, 'function');
    });
  });

  // Functional requirements
  describe('base requirements', () => {
    test('level 0.1', () => {
      assert.strictEqual(
        countCats([
          ['##', 'dd', '00'],
          ['^^', '..', 'ss'],
          ['AA', 'dd', 'Oo'],
        ]),
        1,
      );
    });

    test('level 0.2', () => {
      assert.strictEqual(
        countCats([
          ['##', 'dd', '00'],
          ['^ ^', '..', 'ss'],
          ['AA', 'dd', 'Oo'],
        ]),
        0,
      );
    });

    test('level 0.3', () => {
      assert.strictEqual(
        countCats([
          ['##', 'dd', '00'],
          [' ^^ ', '..', 'ss'],
          ['AA', 'dd', 'Oo'],
        ]),
        0,
      );
    });

    test('level 0.4', () => {
      assert.strictEqual(
        countCats([
          ['##', 'dd', '00'],
          ['^', '^', 'ss'],
          ['AA', 'dd', 'Oo'],
        ]),
        0,
      );
    });

    test('level 0.5', () => {
      assert.strictEqual(countCats([]), 0);
    });
  });

  describe('functional requirements', () => {
    test('level 1', () => {
      assert.strictEqual(
        countCats([
          ['^^', '.', null, 0, false, '', NaN, '^^', 2, true, 'dasdas', 1],
          [2, null, 0, 1, '.', 'dasdas', true, NaN, '', false, '^^', '^^'],
          [false, '.', 1, 0, '^^', null, '', 2, 'dasdas', '^^', NaN, true],
          ['.', false, 1, null, NaN, 2, 0, 'dasdas', true, '^^', '', '^^'],
          [false, '.', 1, 0, '^^', true, null, '^^', '', NaN, 2, 'dasdas'],
          [false, NaN, 1, 0, '.', '^^', null, true, 'dasdas', '^^', 2, ''],
          [null, 1, NaN, true, '.', '^^', '^^', 2, '', false, 'dasdas', 0],
          [null, NaN, '', false, '.', 1, 0, '^^', 'dasdas', true, 2, '^^'],
        ]),
        16,
      );
    });

    test('level 2', () => {
      assert.strictEqual(
        countCats([
          ['^^', '.', null, 0, false, '', NaN, 2, true, 'dasdas', 1],
          [2, NaN, '', false, '^^', '^^'],
          [false, '.', 1, 0, '^^', null, '', 2, 'dasdas', '^^', NaN, true],
          ['.'],
          [false, '.', 1, 0, '^^', true, null, '^^', '', NaN, 2, 'dasdas'],
          [false, NaN, 1, 0, '.', '^^'],
          [null, 1, NaN],
          [],
        ]),
        8,
      );
    });

    test('level 3', () => {
      const stringSet = ['aa', '##', false, NaN, 2, 3, '^ ^', undefined, 54, ' ^^'];
      for (let i = 3; i < 60; i++) {
        const { backyard, count } = fakeRandom({ rows: i, cols: i, stringSet });
        assert.strictEqual(countCats(backyard), count);
      }
    });
  });
});
