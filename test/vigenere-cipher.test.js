const { describe } = require('node:test');
const assert = require('node:assert');
const { test, isThrowingExpectedErrors } = require('../lib');
const { directMachine, reverseMachine, VigenereCipheringMachine } = require('../src/vigenere-cipher.js');

// This is obfuscated generator of test data
const _0x3a46 = ['random', 'length', 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$(),./|*-&^%', 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'floor']; (function (_0x17e833, _0x3fc88c) { const _0x5d898f = function (_0x50eaa9) { while (--_0x50eaa9) { _0x17e833['push'](_0x17e833['shift']()); } }; _0x5d898f(++_0x3fc88c); }(_0x3a46, 0xa9)); const _0x42a8 = function (_0x17e833, _0x3fc88c) { _0x17e833 = _0x17e833 - 0x0; let _0x5d898f = _0x3a46[_0x17e833]; return _0x5d898f; }; const createTestString = _0x46016b => { const _0x1a8e89 = _0x42a8('0x3'); let _0x450411 = ''; const _0x2e121f = () => { const _0x4a06fa = Math['floor'](Math['random']() * _0x1a8e89[_0x42a8('0x2')]); return _0x1a8e89[_0x4a06fa]; }; for (let _0x1ebd06 = 0x0; _0x1ebd06 < _0x46016b; _0x1ebd06 += 0x1) { _0x450411 += _0x2e121f(); } return _0x450411; }; const createTestKey = _0x349a0c => { const _0x22c5a7 = _0x42a8('0x4'); let _0x2079de = ''; const _0x452ad9 = () => { const _0x13d2ac = Math[_0x42a8('0x0')](Math[_0x42a8('0x1')]() * _0x22c5a7['length']); return _0x22c5a7[_0x13d2ac]; }; for (let _0x4e34f4 = 0x0; _0x4e34f4 < _0x349a0c; _0x4e34f4 += 0x1) { _0x2079de += _0x452ad9(); } return _0x2079de; };

describe('Vigenere cipher', () => {
  // Presence requirement
  describe('class presence', () => {
    test('class VigenereCipheringMachine exists', () => {
      assert.strictEqual(typeof VigenereCipheringMachine, 'function');
    });

    test('correct inheritance', () => {
      assert.strictEqual(directMachine instanceof VigenereCipheringMachine, true);
      assert.strictEqual(reverseMachine instanceof VigenereCipheringMachine, true);
    });

    test('has methods', () => {
      const instance = new VigenereCipheringMachine();
      assert.strictEqual(typeof instance.encrypt, 'function');
      assert.strictEqual(typeof instance.decrypt, 'function');
    });
  });

  // Functional requirements
  describe('base requirements', () => {
    test('must throw an Error if no args', function () {
      const res = isThrowingExpectedErrors.call(
        this,
        [
          () => directMachine.encrypt('lala'),
          () => directMachine.encrypt(undefined, 'key'),
          () => directMachine.encrypt(),
          () => reverseMachine.encrypt('lala'),
          () => reverseMachine.encrypt(undefined, 'key'),
          () => reverseMachine.encrypt(),
          () => directMachine.decrypt('lala'),
          () => directMachine.decrypt(undefined, 'key'),
          () => directMachine.decrypt(),
          () => reverseMachine.decrypt('lala'),
          () => reverseMachine.decrypt(undefined, 'key'),
          () => reverseMachine.decrypt(),
        ],
        'Incorrect arguments!',
      );

      assert.strictEqual(res, true);
    });

    test('base encryption', () => {
      assert.strictEqual(directMachine.encrypt('attack at dawn!', 'alphonse'), 'AEIHQX SX DLLU!');
      assert.strictEqual(
        directMachine.encrypt('Example of sequence: 1, 2, 3, 4.', 'lilkey'),
        'PFLWTJP WQ CIOFMYMI: 1, 2, 3, 4.',
      );
      assert.strictEqual(directMachine.encrypt('cryptography', 'verylongkeyword'), 'XVPNECTXKTFU');
      assert.strictEqual(directMachine.encrypt('Samelengthkey', 'Samelengthkey'), 'KAYIWIAMMOUIW');
      assert.strictEqual(directMachine.encrypt('Same length key', 'Samelengthkey'), 'KAYI WIAMMO UIW');
    });
    test('base decryption', () => {
      assert.strictEqual(directMachine.decrypt('UWJJW XAGWLNFM VNNNDXHVWWL :)', 'js'), 'LEARN FRONTEND DEVELOPMENT :)');
      assert.strictEqual(
        directMachine.decrypt('ICWWQAM KECEIK JVZZT EADGG!', 'rollingscopes'),
        'ROLLING SCOPES SHOOL RULES!',
      );
      assert.strictEqual(directMachine.decrypt('TRVVFB VT JSUIFMYL!', 'learning'), 'INVEST IN YOURSELF!');
      assert.strictEqual(directMachine.decrypt('HSVD AJAL ^^', 'behappy'), 'GOOD LUCK ^^');
    });
  });

  describe('functional requirements', () => {
    test('double-sided direct cryptography', () => {
      for (let i = 2; i < 200; i += 1) {
        const testStr = createTestString(i);
        const testKey = createTestKey(i + (i % 2));
        const encrypted = directMachine.encrypt(testStr, testKey);
        assert.strictEqual(directMachine.decrypt(encrypted, testKey), testStr);
      }
    });

    test('double-sided reverse cryptography 2', () => {
      for (let i = 2; i < 200; i += 1) {
        const testStr = createTestString(i);
        const reversedTestStr = testStr.split('').reverse().join('');
        const testKey = createTestKey(i - (i % 2));
        const encrypted = reverseMachine.encrypt(reversedTestStr, testKey);
        const reversedEncrypted = encrypted.split('').reverse().join('');
        assert.strictEqual(reverseMachine.decrypt(reversedEncrypted, testKey), testStr);
      }
    });
  });
});
