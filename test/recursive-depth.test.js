const { describe } = require('node:test');
const assert = require('node:assert');
const { test } = require('../lib');
const { depthCalculator } = require('../src/recursive-depth.js');

const calculateDepth = depthCalculator.calculateDepth.bind(depthCalculator);

const createFlatArr = (length) => Array.from({ length }, () => Math.floor(Math.random() * length));

describe('Recursive depth', () => {
  // Presence requirement
  describe('function presence', () => {
    test('function calculateDepth exists', () => {
      assert.strictEqual(typeof calculateDepth, 'function');
    });
  });

  // Functional requirements
  describe('functional requirements', () => {
    test('returns correct depth of flat arrays', () => {
      for (let i = 1; i < 100; i++) {
        const flatArr = createFlatArr(i);
        assert.strictEqual(calculateDepth(flatArr), 1);
      }
    });
    
    test('returns correct depth of nested arrays', () => {
      assert.strictEqual(
        calculateDepth([
          1,
          [8, [[]]],
          [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]], []]]], []]]]]]]]], []]]], []]]]]]]]]],
          2,
          3,
          [8, [[[[[[[[[[[[[[]]]]]]]]]]]]]]],
          [8, [[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]],
          4,
          5,
          ['6575', ['adas', ['dfg', [0]]]],
        ]),
        31,
      );
      assert.strictEqual(calculateDepth([1, 2, 3, 4, 5, [1]]), 2);
      assert.strictEqual(calculateDepth([1, [8, [[]]], 2, 3, [8, []], 4, 5, ['6575', ['adas', ['dfg', [0]]]]]), 5);
      assert.strictEqual(calculateDepth([1, 2, 3, [8, [2]], 4, 5, []]), 3);
      assert.strictEqual(calculateDepth([1, 2, 3, [1], 4, 5, [1]]), 2);
      assert.strictEqual(
        calculateDepth([
          1,
          [8, [[]]],
          2,
          3,
          [8, [[[[[[[[[[[[[]]]]]]]]]]]]]],
          [8, [[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]],
          4,
          5,
          ['6575', ['adas', ['dfg', [0]]]],
        ]),
        25,
      );
      assert.strictEqual(calculateDepth([1, [8, [[]]], 2, 3, [8, []], 4, 5, []]), 4);
      assert.strictEqual(
        calculateDepth([1, [8, [[]]], 2, 3, [8, [[[[[[[[[[[[[]]]]]]]]]]]]]], 4, 5, ['6575', ['adas', ['dfg', [0]]]]]),
        15,
      );
    });

    // TODO: uncomment after proper implementation
    /*         test('works recursively', () => {
            const spy1 = sinon.spy(instance, 'calculateDepth');
            assert.strictEqual(calculateDepth([1, 2, 3, 4, [1, 2, [1, 2, [[[]]]]], 5, [1, [[[[[[]]]]]]]]), 8);
            expect(spy1.callCount).to.be.greaterThan(1);
            spy1.restore();
            const spy2 = sinon.spy(instance, 'calculateDepth');
            assert.strictEqual(calculateDepth([[[[[[[[[[]]]]]]]]]]), 10);
            expect(spy2.callCount).to.be.greaterThan(1);
            spy2.restore();
        }); */
  });
});
