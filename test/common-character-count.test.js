const { describe } = require('node:test');
const assert = require('node:assert');
const { test } = require('../lib');
const { getCommonCharacterCount } = require('../src/common-character-count.js');

describe('Common character count', () => {
  // Presence requirement
  describe('function presence', () => {
    test('function getCommonCharacterCount exists', () => {
      assert.strictEqual(typeof getCommonCharacterCount, 'function');
    });
  });

  // Functional requirements
  test('should return the number of common characters between the given strings', () => {
    assert.strictEqual(getCommonCharacterCount('aabcc', 'adcaa'), 3);
    assert.strictEqual(getCommonCharacterCount('zzzz', 'zzzzzzz'), 4);
    assert.strictEqual(getCommonCharacterCount('abca', 'xyzbac'), 3);
    assert.strictEqual(getCommonCharacterCount('', 'abc'), 0);
    assert.strictEqual(getCommonCharacterCount('a', 'b'), 0);
  });
});
