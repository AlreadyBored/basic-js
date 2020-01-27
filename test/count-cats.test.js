const countCats = require('../src/count-cats.js');

// Presence requirement

describe ('variable presence', () => {
    it('function countCats exists', () => {
        expect(countCats).toBeDefined();
    });
});

//Specific requirements

describe('level 0', () => {
  it('level 0.1', () => {
    expect(countCats([
      ['##', 'dd', '00'],
      ['^^', '..', 'ss'],
      ['AA', 'dd', 'Oo'],
    ])).toStrictEqual(1);
  });
  it('level 0.2', () => {
    expect(countCats([
      ['##', 'dd', '00'],
      ['^ ^', '..', 'ss'],
      ['AA', 'dd', 'Oo'],
    ])).toStrictEqual(0);
  });
  it('level 0.3', () => {
    expect(countCats([
      ['##', 'dd', '00'],
      [' ^^ ', '..', 'ss'],
      ['AA', 'dd', 'Oo'],
    ])).toStrictEqual(0);
  });
  it('level 0.4', () => {
    expect(countCats([
      ['##', 'dd', '00'],
      ['^', '^', 'ss'],
      ['AA', 'dd', 'Oo'],
    ])).toStrictEqual(0);
  });
  it('level 0.5', () => {
    expect(countCats([])).toStrictEqual(0);
  });
});

describe('functional requirements', () => {   
    it('level 1', () => {
      expect(countCats([
        ["^^", ".", null, 0, false, "", NaN, "^^", 2, true, "dasdas", 1],
        [2, null, 0, 1, ".", "dasdas", true, NaN, "", false, "^^", "^^"],
        [false, ".", 1, 0, "^^", null, "", 2, "dasdas", "^^", NaN, true],
        [".", false, 1, null, NaN, 2, 0, "dasdas", true, "^^", "", "^^"],
        [false, ".", 1, 0, "^^", true, null, "^^", "", NaN, 2, "dasdas"],
        [false, NaN, 1, 0, ".", "^^", null, true, "dasdas", "^^", 2, ""],
        [null, 1, NaN, true, ".", "^^", "^^", 2, "", false, "dasdas", 0],
        [null, NaN, "", false, ".", 1, 0, "^^", "dasdas", true, 2, "^^"],
      ])).toStrictEqual(16);
     });
    it('level 2', () => {
      expect(countCats([
        ["^^", ".", null, 0, false, "", NaN, 2, true, "dasdas", 1],
        [2, NaN, "", false, "^^", "^^"],
        [false, ".", 1, 0, "^^", null, "", 2, "dasdas", "^^", NaN, true],
        ["."],
        [false, ".", 1, 0, "^^", true, null, "^^", "", NaN, 2, "dasdas"],
        [false, NaN, 1, 0, ".", "^^"],
        [null, 1, NaN],
        [],
      ])).toStrictEqual(8);
  });
});
