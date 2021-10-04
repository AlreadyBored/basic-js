import { assert } from 'chai';
import { testOptional } from '../extensions/index.js';
import getCommonCharacterCount from '../src/st-common-character-count.js';

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
