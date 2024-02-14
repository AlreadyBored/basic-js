const { describe } = require('node:test');
const assert = require('node:assert');
const { test } = require('../lib');
const { encodeLine } = require('../src/encode-line.js');

describe('Encode line', () => {
  // Presence requirement
  test('function encodeLine exists', () => {
    assert.strictEqual(typeof encodeLine, 'function');
  });

  // Functional requirements
  test('should return encoding version of string', () => {
    assert.strictEqual(encodeLine('aaaatttt'), '4a4t');
    assert.strictEqual(encodeLine('aabbccc'), '2a2b3c');
    assert.strictEqual(encodeLine('abbcca'), 'a2b2ca');
    assert.strictEqual(encodeLine('xyz'), 'xyz');
    assert.strictEqual(encodeLine(''), '');
  });
});
