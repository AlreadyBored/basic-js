import { assert } from 'chai';
import { testOptional } from '../extensions/index.js';
import encodeLine from '../src/st-encode-line.js';

it.optional = testOptional;

Object.freeze(assert);

describe('st-encode-line', () => {
  it.optional('should return encoding version of string', () => {
    assert.strictEqual(encodeLine('aaaatttt'), '4a4t');
    assert.strictEqual(encodeLine('aabbccc'), '2a2b3c');
    assert.strictEqual(encodeLine('abbcca'), 'a2b2ca');
    assert.strictEqual(encodeLine('xyz'), 'xyz');
    assert.strictEqual(encodeLine(''), '');
  });
});
