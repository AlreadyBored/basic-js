const chai = require('chai');
const { expect, assert } = chai;

Object.freeze(assert);

const VigenereCipheringMachine = require('../src/vigenere-cipher.js');


const createTestString = (length) => {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$(),./|*-&^%';

    let res = '';

    const getRandomChar = () => {
        const randomIndex = Math.floor(Math.random() * alphabet.length);
        return alphabet[randomIndex];
    };

    for (let i = 0; i < length; i += 1) {
        res += getRandomChar();
    }

    return res;
};

const createTestKey = (length) => {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    let res = '';

    const getRandomChar = () => {
        const randomIndex = Math.floor(Math.random() * alphabet.length);
        return alphabet[randomIndex];
    };

    for (let i = 0; i < length; i += 1) {
        res += getRandomChar();
    }

    return res;
};

describe('Vigenere cipher', () => {
    // Presence requirement
    describe ('variables presence', () => {
      it('function VigenereCipheringMachine exists', () => {
        expect(VigenereCipheringMachine).to.exist;
      });
      it('correct inheritance', () => {
        expect(new VigenereCipheringMachine()).to.be.an.instanceof(VigenereCipheringMachine);
      });
      it('has methods', () => {
        expect(new VigenereCipheringMachine()).to.respondTo('encrypt');
        expect(new VigenereCipheringMachine()).to.respondTo('decrypt');
        expect(new VigenereCipheringMachine(false)).to.respondTo('encrypt');
        expect(new VigenereCipheringMachine(false)).to.respondTo('decrypt');
      });
    });
  //Specific requirements
    describe('base requirements', () => {
        const directMachine = new VigenereCipheringMachine();
        const reverseMachine = new VigenereCipheringMachine();

        it('must throw an Error if no args', () => {
            expect(() => directMachine.encrypt('lala')).to.throw(Error);
            expect(() => directMachine.encrypt(undefined, 'key')).to.throw(Error);
            expect(() => directMachine.encrypt()).to.throw(Error);
            expect(() => reverseMachine.encrypt('lala')).to.throw(Error);
            expect(() => reverseMachine.encrypt(undefined, 'key')).to.throw(Error);
            expect(() => reverseMachine.encrypt()).to.throw(Error);
            expect(() => directMachine.decrypt('lala')).to.throw(Error);
            expect(() => directMachine.decrypt(undefined, 'key')).to.throw(Error);
            expect(() => directMachine.decrypt()).to.throw(Error);
            expect(() => reverseMachine.decrypt('lala')).to.throw(Error);
            expect(() => reverseMachine.decrypt(undefined, 'key')).to.throw(Error);
            expect(() => reverseMachine.decrypt()).to.throw(Error);
        });
        
        it('base encryption', () => {
            assert.equal(directMachine.encrypt('attack at dawn!', 'alphonse'), 'AEIHQX SX DLLU!');
            assert.equal(directMachine.encrypt('Example of sequence: 1, 2, 3, 4.', 'lilkey'), 'PFLWTJP WQ CIOFMYMI: 1, 2, 3, 4.');
            assert.equal(directMachine.encrypt('cryptography', 'verylongkeyword'), 'XVPNECTXKTFU');
            assert.equal(directMachine.encrypt('Samelengthkey', 'Samelengthkey'), 'KAYIWIAMMOUIW');
            assert.equal(directMachine.encrypt('Same length key', 'Samelengthkey'), 'KAYI WIAMMO UIW');
        });
        it('base decryption', () => {
            assert.equal(directMachine.decrypt('UWJJW XAGWLNFM VNNNDXHVWWL :)', 'js'), 'LEARN FRONTEND DEVELOPMENT :)');
            assert.equal(directMachine.decrypt('ICWWQAM KECEIK JVZZT EADGG!', 'rollingscopes'), 'ROLLING SCOPES SHOOL RULES!');
            assert.equal(directMachine.decrypt('TRVVFB VT JSUIFMYL!', 'learning'), 'INVEST IN YOURSELF!');
            assert.equal(directMachine.decrypt('HSVD AJAL ^^', 'behappy'), 'GOOD LUCK ^^');
        });
    });

    describe('functional requirements', () => {
        const directMachine = new VigenereCipheringMachine();
        const reverseMachine = new VigenereCipheringMachine(false);

        it('double-sided direct cryptography', () => {
            for (let i = 2; i < 200; i += 1) {
                const testStr = createTestString(i);
                const testKey = createTestKey(i + i % 2);
                const encrypted = directMachine.encrypt(testStr, testKey);
                assert.equal(directMachine.decrypt(encrypted, testKey), testStr);
            }
        });

        it('double-sided reverse cryptography 2', () => {
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