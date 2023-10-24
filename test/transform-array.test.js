const { describe } = require('node:test');
const assert = require('node:assert');
const { test, isThrowingExpectedErrors } = require('../lib');
const { transform } = require('../src/transform-array.js');

const createSimpleArr = (length) => Array.from({ length }, (_, i) => i + 1);

describe('Transform array', () => {
  // Presence requirement
  describe('function presence', () => {
    test('function transform exists', () => {
      assert.strictEqual(typeof transform, 'function');
    });
  });

  // Functional requirements
  describe('functional requirements', () => {
    test('correctly works with an empty array', () => {
      assert.deepStrictEqual(transform([]), []);
    });

    test('throws an Error with message "\'arr\' parameter must be an instance of the Array!" if arr is not an instance of the Array', function () {
      const res = isThrowingExpectedErrors.call(
        this,
        [
          () => transform(3),
          () => transform(3.312312),
          () => transform(false),
          () => transform(null),
          () => transform(undefined),
          () => transform({ foo: 'bar' }),
        ],
        "'arr' parameter must be an instance of the Array!",
      );

      assert.strictEqual(res, true);
    });

    test("doesn't affect simple arrays", () => {
      for (let i = 0; i < 50; i += 1) {
        const randArr = createSimpleArr(50);
        assert.deepStrictEqual(transform(randArr), randArr);
      }
    });

    test('does not apply flags to missing elements', () => {
      const cases = [
        ['--discard-prev', 1, 2, 3],
        ['--double-prev', 1, 2, 3],
        [1, 2, 3, '--double-next'],
        [1, 2, 3, '--discard-next'],
      ];

      cases.forEach((currCase) => {
        assert.deepStrictEqual(transform(currCase), [1, 2, 3]);
      });
    });

    test('advanced sequence interactions work well', () => {
      const cases = {
        doubleDiscarded: {
          input: [1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5],
          expectedOutput: [1, 2, 3, 4, 5],
        },
        doubleDoubled: {
          input: [1, 2, 3, '--double-next', 1337, '--double-prev', 4, 5],
          expectedOutput: [1, 2, 3, 1337, 1337, 1337, 4, 5],
        },
        discardDiscarded: {
          input: [1, 2, 3, '--discard-next', 1337, '--discard-prev', 4, 5],
          expectedOutput: [1, 2, 3, 4, 5],
        },
        discardDoubled: {
          input: [1, 2, 3, '--double-next', 1337, '--discard-prev', 4, 5],
          expectedOutput: [1, 2, 3, 1337, 4, 5],
        },
      };

      Object.values(cases).forEach((currCase) => {
        const { input, expectedOutput } = currCase;
        assert.deepStrictEqual(transform(input), expectedOutput);
      });
    });

    test("doesn't change initial array", () => {
      const cases = [
        [1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5],
        [1, 2, 3, '--double-next', 1337, '--double-prev', 4, 5],
        [1, 2, 3, '--discard-next', 1337, '--discard-prev', 4, 5],
        [1, 2, 3, '--double-next', 1337, '--discard-prev', 4, 5],
      ];
      for (const input of cases) {
        const inputCopy = [...input];
        transform(input);
        assert.deepStrictEqual(input, inputCopy);
      }
    });
  });
});