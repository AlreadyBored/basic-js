const assert = require('assert');
const chai = require('chai');
const { expect } = chai;

Object.freeze(assert);

const repeater = require('../src/extended-repeater.js');

describe('Extended repeater', () => {
  // Presence requirement

  describe('variable presence', () => {
    it('function repeater exists', () => {
      expect(repeater).to.exist;
    });
  });

  //Specific requirements

  describe('base & functional requirements', () => {
    it('repeats string properly', () => {
      assert.equal(repeater('la', { repeatTimes: 3 }), 'la+la+la');
      assert.equal(repeater('single', { repeatTimes: 1 }), 'single');
      assert.equal(repeater('12345', { repeatTimes: 5 }), '12345+12345+12345+12345+12345');
    });

    it('supports custom separator', () => {
      assert.equal(repeater('la', { repeatTimes: 3, separator: 's' }), 'laslasla');
      assert.equal(repeater('point', { repeatTimes: 3, separator: '&&&' }), 'point&&&point&&&point');
      assert.equal(repeater('12345', { repeatTimes: 5, separator: '3 words separator' }), '123453 words separator123453 words separator123453 words separator123453 words separator12345');
    });

    it('supports basic addition', () => {
      assert.equal(repeater('la', { repeatTimes: 3, separator: 's', addition: '+', additionRepeatTimes: 1 }), 'la+sla+sla+');
      assert.equal(repeater('LALA', { repeatTimes: 3, separator: 's', addition: '++', additionRepeatTimes: 1 }), 'LALA++sLALA++sLALA++');
    });

    it('supports missing repeat counters', () => {
      assert.equal(repeater('TESTstr', { repeatTimes: undefined, separator: 'ds', addition: 'ADD!', additionRepeatTimes: undefined, additionSeparator: ')))000' }), 'TESTstrADD!');
    });
  });

  describe('extended requirements ', () => {   
    it('supports multi words ', () => {
      
      assert.equal(repeater('my test string', { repeatTimes: 5, separator: '?!', addition: 'PLUS', additionRepeatTimes: 4, additionSeparator: '))' }), 'my test stringPLUS))PLUS))PLUS))PLUS?!my test stringPLUS))PLUS))PLUS))PLUS?!my test stringPLUS))PLUS))PLUS))PLUS?!my test stringPLUS))PLUS))PLUS))PLUS?!my test stringPLUS))PLUS))PLUS))PLUS');
    });

    it('supports different registers & whitespaces & symbols', () => {
      
      assert.equal(repeater('аГуСиК ', { repeatTimes: 3, separator: '♥♥♥  ', addition: ' пОкАкУнЬкАл ', additionRepeatTimes: 5, additionSeparator: '( ͡° ͜ʖ ͡°)' }), 'аГуСиК  пОкАкУнЬкАл ( ͡° ͜ʖ ͡°) пОкАкУнЬкАл ( ͡° ͜ʖ ͡°) пОкАкУнЬкАл ( ͡° ͜ʖ ͡°) пОкАкУнЬкАл ( ͡° ͜ʖ ͡°) пОкАкУнЬкАл ♥♥♥  аГуСиК  пОкАкУнЬкАл ( ͡° ͜ʖ ͡°) пОкАкУнЬкАл ( ͡° ͜ʖ ͡°) пОкАкУнЬкАл ( ͡° ͜ʖ ͡°) пОкАкУнЬкАл ( ͡° ͜ʖ ͡°) пОкАкУнЬкАл ♥♥♥  аГуСиК  пОкАкУнЬкАл ( ͡° ͜ʖ ͡°) пОкАкУнЬкАл ( ͡° ͜ʖ ͡°) пОкАкУнЬкАл ( ͡° ͜ʖ ͡°) пОкАкУнЬкАл ( ͡° ͜ʖ ͡°) пОкАкУнЬкАл ');
    });

    it('supports different str & addition', () => {
      assert.equal(repeater(9.234, { repeatTimes: 4, separator: '||', addition: {a: 5}, additionRepeatTimes: 3, additionSeparator: '&&' }), '9.234[object Object]&&[object Object]&&[object Object]||9.234[object Object]&&[object Object]&&[object Object]||9.234[object Object]&&[object Object]&&[object Object]||9.234[object Object]&&[object Object]&&[object Object]');
      assert.equal(repeater(-222, { repeatTimes: 4, separator: '||', addition: new Map(), additionRepeatTimes: 3, additionSeparator: '&&' }), '-222[object Map]&&[object Map]&&[object Map]||-222[object Map]&&[object Map]&&[object Map]||-222[object Map]&&[object Map]&&[object Map]||-222[object Map]&&[object Map]&&[object Map]');
      assert.equal(repeater(new Set(), { repeatTimes: 3, separator: '??? ', addition: [1, 2, 3, '4'], additionRepeatTimes: 2, additionSeparator: '!!!' }), '[object Set]1,2,3,4!!!1,2,3,4??? [object Set]1,2,3,4!!!1,2,3,4??? [object Set]1,2,3,4!!!1,2,3,4');
      assert.equal(repeater(true, { repeatTimes: 3, separator: '??? ', addition: false, additionRepeatTimes: 2, additionSeparator: '!!!' }), 'truefalse!!!false??? truefalse!!!false??? truefalse!!!false');
      assert.equal(repeater(null, { repeatTimes: 3, separator: '??? ', addition: null, additionRepeatTimes: 3, additionSeparator: '!!!' }), 'nullnull!!!null!!!null??? nullnull!!!null!!!null??? nullnull!!!null!!!null');  
    });
  });
});