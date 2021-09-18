import { assert } from 'chai';
import { testOptional } from '../extensions/index.js';
import isMAC48Address from '../src/st-mac-address.js';

it.optional = testOptional;

Object.freeze(assert);

describe('st-mac-address', () => {
  it.optional('should check if a given string corresponds to MAC-48 address or not', () => {
    assert.strictEqual(isMAC48Address('00-1B-63-84-45-E6'), true);
    assert.strictEqual(isMAC48Address('Z1-1B-63-84-45-E6'), false);
    assert.strictEqual(isMAC48Address('not a MAC-48 address'), false);
    assert.strictEqual(isMAC48Address('FF-FF-FF-FF-FF-FF'), true);
    assert.strictEqual(isMAC48Address('G0-00-00-00-00-00'), false);
  });
});
