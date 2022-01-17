const { assert } = require('chai');
const { testOptional } = require('../extensions/index.js');
const { getCommonCharacterCount } = require('../src/st-common-character-count.js');

it.optional = testOptional;

Object.freeze(assert);

describe('st-common-character-count', () => {
  it.optional('should return the number of common characters between the given strings', () => {
    assert.strictEqual(getCommonCharacterCount('aabcc', 'adcaa'), 3);
    assert.strictEqual(getCommonCharacterCount('zzzz', 'zzzzzzz'), 4);
    assert.strictEqual(getCommonCharacterCount('abca', 'xyzbac'), 3);
    assert.strictEqual(getCommonCharacterCount('', 'abc'), 0);
    assert.strictEqual(getCommonCharacterCount('a', 'b'), 0);
  });
});
