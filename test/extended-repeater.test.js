const assert = require('assert');
const chai = require('chai');
const { expect } = chai;

Object.freeze(assert);

const repeater = require('../src/extended-repeater.js');

describe('Extended repeater', () => {
  // Presence requirement

  describe('variable presence', () => {
    it('function repeater exists', () => {
      expect(repeater).to.not.be.undefined;
    });
  });

  //Specific requirements

  describe('base & functional requirements', () => {
    it('repeats string properly', () => {
      assert.equal(repeater('la', 3), 'la+la+la');
      assert.equal(repeater('single', 1), 'single');
      assert.equal(repeater('12345', 5), '12345+12345+12345+12345+12345');
    });

    it('supports custom separator', () => {
      assert.equal(repeater('la', 3, 's'), 'laslasla');
      assert.equal(repeater('point', 3, '&&&'), 'point&&&point&&&point');
      assert.equal(repeater('12345', 5, '3 words separator'), '123453 words separator123453 words separator123453 words separator123453 words separator12345');
    });

    it('supports basic addition', () => {
      assert.equal(repeater('la', 3, 's', '+', 1), 'la+sla+sla+');
      assert.equal(repeater('LALA', 3, 's', '++', 1), 'LALA++sLALA++sLALA++');
    });

    it('supports missing repeat counters', () => {
      assert.equal(repeater('TESTstr', undefined, 'ds', 'ADD!', undefined, ')))000'), 'TESTstrADD!');
    });
  });

  describe('extended requirements ', () => {   
    it('supports multi words ', () => {
      assert.equal(repeater('my test string', 5, '?!', 'PLUS', 4, '))'), 'my test stringPLUS))PLUS))PLUS))PLUS?!my test stringPLUS))PLUS))PLUS))PLUS?!my test stringPLUS))PLUS))PLUS))PLUS?!my test stringPLUS))PLUS))PLUS))PLUS?!my test stringPLUS))PLUS))PLUS))PLUS');
    });

    it('supports different registers & whitespaces & symbols', () => {
      assert.equal(repeater('аГуСиК ', 3, '♥♥♥  ', ' пОкАкУнЬкАл ', 5, '( ͡° ͜ʖ ͡°)'), 'аГуСиК  пОкАкУнЬкАл ( ͡° ͜ʖ ͡°) пОкАкУнЬкАл ( ͡° ͜ʖ ͡°) пОкАкУнЬкАл ( ͡° ͜ʖ ͡°) пОкАкУнЬкАл ( ͡° ͜ʖ ͡°) пОкАкУнЬкАл ♥♥♥  аГуСиК  пОкАкУнЬкАл ( ͡° ͜ʖ ͡°) пОкАкУнЬкАл ( ͡° ͜ʖ ͡°) пОкАкУнЬкАл ( ͡° ͜ʖ ͡°) пОкАкУнЬкАл ( ͡° ͜ʖ ͡°) пОкАкУнЬкАл ♥♥♥  аГуСиК  пОкАкУнЬкАл ( ͡° ͜ʖ ͡°) пОкАкУнЬкАл ( ͡° ͜ʖ ͡°) пОкАкУнЬкАл ( ͡° ͜ʖ ͡°) пОкАкУнЬкАл ( ͡° ͜ʖ ͡°) пОкАкУнЬкАл ');
    });

    it('supports different str & addition', () => {
      assert.equal(repeater(9.234, 4, '||', {a: 5}, 3, '&&'), '9.234[object Object]&&[object Object]&&[object Object]||9.234[object Object]&&[object Object]&&[object Object]||9.234[object Object]&&[object Object]&&[object Object]||9.234[object Object]&&[object Object]&&[object Object]');
      assert.equal(repeater(-222, 4, '||', new Map(), 3, '&&'), '-222[object Map]&&[object Map]&&[object Map]||-222[object Map]&&[object Map]&&[object Map]||-222[object Map]&&[object Map]&&[object Map]||-222[object Map]&&[object Map]&&[object Map]');
      assert.equal(repeater(new Set(), 3, '??? ', [1, 2, 3, '4'], 2, '!!!'), '[object Set]1,2,3,4!!!1,2,3,4??? [object Set]1,2,3,4!!!1,2,3,4??? [object Set]1,2,3,4!!!1,2,3,4');
      assert.equal(repeater(true, 3, '??? ', false, 2, '!!!'), 'truefalse!!!false??? truefalse!!!false??? truefalse!!!false');
      assert.equal(repeater(null, 3, '??? ', null, 3, '!!!'), 'nullnull!!!null!!!null??? nullnull!!!null!!!null??? nullnull!!!null!!!null');  
    });
  });
});