const { expect, assert } = require('chai');
const { testOptional, checkForThrowingErrors, CONSTANTS } = require('../extensions/index.js');
const { VigenereCipheringMachine } = require('../src/vigenere-cipher.js');

const { CORRECT_RESULT_MSG } = CONSTANTS;

it.optional = testOptional;

Object.freeze(expect);
Object.freeze(assert);

const _0x3a46 = ['random', 'length', 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$(),./|*-&^%', 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'floor']; (function (_0x17e833, _0x3fc88c) { const _0x5d898f = function (_0x50eaa9) { while (--_0x50eaa9) { _0x17e833['push'](_0x17e833['shift']()); } }; _0x5d898f(++_0x3fc88c); }(_0x3a46, 0xa9)); const _0x42a8 = function (_0x17e833, _0x3fc88c) { _0x17e833 = _0x17e833 - 0x0; let _0x5d898f = _0x3a46[_0x17e833]; return _0x5d898f; }; const createTestString = _0x46016b => { const _0x1a8e89 = _0x42a8('0x3'); let _0x450411 = ''; const _0x2e121f = () => { const _0x4a06fa = Math['floor'](Math['random']() * _0x1a8e89[_0x42a8('0x2')]); return _0x1a8e89[_0x4a06fa]; }; for (let _0x1ebd06 = 0x0; _0x1ebd06 < _0x46016b; _0x1ebd06 += 0x1) { _0x450411 += _0x2e121f(); } return _0x450411; }; const createTestKey = _0x349a0c => { const _0x22c5a7 = _0x42a8('0x4'); let _0x2079de = ''; const _0x452ad9 = () => { const _0x13d2ac = Math[_0x42a8('0x0')](Math[_0x42a8('0x1')]() * _0x22c5a7['length']); return _0x22c5a7[_0x13d2ac]; }; for (let _0x4e34f4 = 0x0; _0x4e34f4 < _0x349a0c; _0x4e34f4 += 0x1) { _0x2079de += _0x452ad9(); } return _0x2079de; };

describe('Vigenere cipher', () => {
  // Presence requirement
  describe('variables presence', () => {
    it.optional('class VigenereCipheringMachine exists', () => {
      expect(VigenereCipheringMachine).to.exist;
      expect(VigenereCipheringMachine).to.be.instanceOf(Function);
    });
    it.optional('correct inheritance', () => {
      expect(new VigenereCipheringMachine()).to.be.an.instanceof(VigenereCipheringMachine);
    });
    it.optional('has methods', () => {
      expect(new VigenereCipheringMachine()).to.respondTo('encrypt');
      expect(new VigenereCipheringMachine()).to.respondTo('decrypt');
      expect(new VigenereCipheringMachine(false)).to.respondTo('encrypt');
      expect(new VigenereCipheringMachine(false)).to.respondTo('decrypt');
    });
  });
  //Specific requirements
  describe('base requirements', () => {
    const directMachine = new VigenereCipheringMachine();
    const reverseMachine = new VigenereCipheringMachine(false);

    it.optional('must throw an Error if no args', function () {
      const res = checkForThrowingErrors.call(this, [
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
        () => reverseMachine.decrypt()
      ], 'Incorrect arguments!');

      assert.strictEqual(res.every($ => $ === CORRECT_RESULT_MSG), true);
    });

    it.optional('base encryption', () => {
      assert.equal(directMachine.encrypt('attack at dawn!', 'alphonse'), 'AEIHQX SX DLLU!');
      assert.equal(directMachine.encrypt('Example of sequence: 1, 2, 3, 4.', 'lilkey'), 'PFLWTJP WQ CIOFMYMI: 1, 2, 3, 4.');
      assert.equal(directMachine.encrypt('cryptography', 'verylongkeyword'), 'XVPNECTXKTFU');
      assert.equal(directMachine.encrypt('Samelengthkey', 'Samelengthkey'), 'KAYIWIAMMOUIW');
      assert.equal(directMachine.encrypt('Same length key', 'Samelengthkey'), 'KAYI WIAMMO UIW');
    });
    it.optional('base decryption', () => {
      assert.equal(directMachine.decrypt('UWJJW XAGWLNFM VNNNDXHVWWL :)', 'js'), 'LEARN FRONTEND DEVELOPMENT :)');
      assert.equal(directMachine.decrypt('ICWWQAM KECEIK JVZZT EADGG!', 'rollingscopes'), 'ROLLING SCOPES SHOOL RULES!');
      assert.equal(directMachine.decrypt('TRVVFB VT JSUIFMYL!', 'learning'), 'INVEST IN YOURSELF!');
      assert.equal(directMachine.decrypt('HSVD AJAL ^^', 'behappy'), 'GOOD LUCK ^^');
    });
  });

  describe('functional requirements', () => {
    const directMachine = new VigenereCipheringMachine();
    const reverseMachine = new VigenereCipheringMachine(false);

    it.optional('double-sided direct cryptography', () => {
      for (let i = 2; i < 200; i += 1) {
        const testStr = createTestString(i);
        const testKey = createTestKey(i + i % 2);
        const encrypted = directMachine.encrypt(testStr, testKey);
        assert.equal(directMachine.decrypt(encrypted, testKey), testStr);
      }
    });

    it.optional('double-sided reverse cryptography 2', () => {
      for (let i = 2; i < 200; i += 1) {
        const testStr = createTestString(i);
        const reversedTestStr = testStr.split('').reverse().join('');
        const testKey = createTestKey(i - i % 2);
        const encrypted = reverseMachine.encrypt(reversedTestStr, testKey);
        const reversedEncrypted = encrypted.split('').reverse().join('');
        assert.equal(reverseMachine.decrypt(reversedEncrypted, testKey), testStr);
      }
    });
  });

});