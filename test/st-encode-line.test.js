const { assert } = require('chai');
const { testOptional } = require('../extensions/index.js');
const { encodeLine } = require('../src/st-encode-line.js');

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
