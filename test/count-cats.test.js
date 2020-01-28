const assert = require('assert');
const chai = require('chai');
const expect = chai.expect;

Object.freeze(assert);

const countCats = require('../src/count-cats.js');

describe('Count cats!', () => {
  // Presence requirement

  describe('variable presence', () => {
    it('function countCats exists', () => {
      expect(countCats).to.not.be.undefined;
    });
  });

  //Specific requirements

  describe('base requirements', () => {
    it('level 0.1', () => {
      assert.equal(countCats([
        ['##', 'dd', '00'],
        ['^^', '..', 'ss'],
        ['AA', 'dd', 'Oo'],
      ]), 1);
    });

    it('level 0.2', () => {
      assert.equal(countCats([
        ['##', 'dd', '00'],
        ['^ ^', '..', 'ss'],
        ['AA', 'dd', 'Oo'],
      ]), 0);
    });

    it('level 0.3', () => {
      assert.equal(countCats([
        ['##', 'dd', '00'],
        [' ^^ ', '..', 'ss'],
        ['AA', 'dd', 'Oo'],
      ]), 0);
    });

    it('level 0.4', () => {
      assert.equal(countCats([
        ['##', 'dd', '00'],
        ['^', '^', 'ss'],
        ['AA', 'dd', 'Oo'],
      ]), 0);
    });

    it('level 0.5', () => {
      assert.equal(countCats([]), 0);
    });
  });

  describe('functional requirements', () => {   
    it('level 1', () => {
      assert.equal(countCats([
        ["^^", ".", null, 0, false, "", NaN, "^^", 2, true, "dasdas", 1],
        [2, null, 0, 1, ".", "dasdas", true, NaN, "", false, "^^", "^^"],
        [false, ".", 1, 0, "^^", null, "", 2, "dasdas", "^^", NaN, true],
        [".", false, 1, null, NaN, 2, 0, "dasdas", true, "^^", "", "^^"],
        [false, ".", 1, 0, "^^", true, null, "^^", "", NaN, 2, "dasdas"],
        [false, NaN, 1, 0, ".", "^^", null, true, "dasdas", "^^", 2, ""],
        [null, 1, NaN, true, ".", "^^", "^^", 2, "", false, "dasdas", 0],
        [null, NaN, "", false, ".", 1, 0, "^^", "dasdas", true, 2, "^^"],
      ]), 16);
     });

    it('level 2', () => {
      assert.equal(countCats([
        ["^^", ".", null, 0, false, "", NaN, 2, true, "dasdas", 1],
        [2, NaN, "", false, "^^", "^^"],
        [false, ".", 1, 0, "^^", null, "", 2, "dasdas", "^^", NaN, true],
        ["."],
        [false, ".", 1, 0, "^^", true, null, "^^", "", NaN, 2, "dasdas"],
        [false, NaN, 1, 0, ".", "^^"],
        [null, 1, NaN],
        [],
      ]), 8);
    });
  });
});


