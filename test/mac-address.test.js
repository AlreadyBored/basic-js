const { describe } = require('node:test');
const assert = require('node:assert');
const { test } = require('../lib');
const { isMAC48Address } = require('../src/mac-address.js');

describe('MAC address', () => {
  // Presence requirement
  test('function isMAC48Address exists', () => {
    assert.strictEqual(typeof isMAC48Address, 'function');
  });

  // Functional requirements
  test('should check if a given string corresponds to MAC-48 address or not', () => {
    assert.strictEqual(isMAC48Address('00-1B-63-84-45-E6'), true);
    assert.strictEqual(isMAC48Address('Z1-1B-63-84-45-E6'), false);
    assert.strictEqual(isMAC48Address('not a MAC-48 address'), false);
    assert.strictEqual(isMAC48Address('FF-FF-FF-FF-FF-FF'), true);
    assert.strictEqual(isMAC48Address('G0-00-00-00-00-00'), false);
  });
});
