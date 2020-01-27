const repeater = require('../src/extended-repeater.js');

// Presence requirement

describe('variable presence', () => {
    it('function repeater exists', () => {
        expect(repeater).toBeDefined();
    });
});

//Specific requirements

describe('base requirements', () => {
  it('repeats string properly', () => {
    expect(repeater('la', 3)).toBe('la+la+la');
    expect(repeater('single', 1)).toBe('single');
    expect(repeater('12345', 5)).toBe('12345+12345+12345+12345+12345');
  });

  it('supports custom separator', () => {
    expect(repeater('la', 3, 's')).toBe('laslasla');
    expect(repeater('point', 3, '&&&')).toBe('point&&&point&&&point');
    expect(repeater('12345', 5, '3 words separator')).toBe('123453 words separator123453 words separator123453 words separator123453 words separator12345');
  });

  it('supports basic addition', () => {
    expect(repeater('la', 3, 's', '+', 1)).toBe('la+sla+sla+');
    expect(repeater('LALA', 3, 's', '++', 1)).toBe('LALA++sLALA++sLALA++');
  });

  it('supports missing repeat counters', () => {
    expect(repeater('TESTstr', undefined, 'ds', 'ADD!', undefined, ')))000'))
      .toBe('TESTstrADD!');
  });
});

describe('extended requirements ', () => {   
    it('supports multi words ', () => {
      expect(repeater('my test string', 5, '?!', 'PLUS', 4, '))')).toBe('my test stringPLUS))PLUS))PLUS))PLUS?!my test stringPLUS))PLUS))PLUS))PLUS?!my test stringPLUS))PLUS))PLUS))PLUS?!my test stringPLUS))PLUS))PLUS))PLUS?!my test stringPLUS))PLUS))PLUS))PLUS');
     });

     it('supports different registers & whitespaces & symbols', () => {
      expect(repeater('аГуСиК ', 3, '♥♥♥  ', ' пОкАкУнЬкАл ', 5, '( ͡° ͜ʖ ͡°)')).toBe('аГуСиК  пОкАкУнЬкАл ( ͡° ͜ʖ ͡°) пОкАкУнЬкАл ( ͡° ͜ʖ ͡°) пОкАкУнЬкАл ( ͡° ͜ʖ ͡°) пОкАкУнЬкАл ( ͡° ͜ʖ ͡°) пОкАкУнЬкАл ♥♥♥  аГуСиК  пОкАкУнЬкАл ( ͡° ͜ʖ ͡°) пОкАкУнЬкАл ( ͡° ͜ʖ ͡°) пОкАкУнЬкАл ( ͡° ͜ʖ ͡°) пОкАкУнЬкАл ( ͡° ͜ʖ ͡°) пОкАкУнЬкАл ♥♥♥  аГуСиК  пОкАкУнЬкАл ( ͡° ͜ʖ ͡°) пОкАкУнЬкАл ( ͡° ͜ʖ ͡°) пОкАкУнЬкАл ( ͡° ͜ʖ ͡°) пОкАкУнЬкАл ( ͡° ͜ʖ ͡°) пОкАкУнЬкАл ');
     });

     it('supports different str & addition', () => {
      expect(repeater(9.234, 4, '||', {a: 5}, 3, '&&')).toBe('9.234[object Object]&&[object Object]&&[object Object]||9.234[object Object]&&[object Object]&&[object Object]||9.234[object Object]&&[object Object]&&[object Object]||9.234[object Object]&&[object Object]&&[object Object]');
      expect(repeater(-222, 4, '||', new Map(), 3, '&&')).toBe('-222[object Map]&&[object Map]&&[object Map]||-222[object Map]&&[object Map]&&[object Map]||-222[object Map]&&[object Map]&&[object Map]||-222[object Map]&&[object Map]&&[object Map]');
      expect(repeater(new Set(), 3, '??? ', [1, 2, 3, '4'], 2, '!!!')).toBe('[object Set]1,2,3,4!!!1,2,3,4??? [object Set]1,2,3,4!!!1,2,3,4??? [object Set]1,2,3,4!!!1,2,3,4');
      expect(repeater(true, 3, '??? ', false, 2, '!!!')).toBe('truefalse!!!false??? truefalse!!!false??? truefalse!!!false');
      expect(repeater(null, 3, '??? ', null, 3, '!!!')).toBe('nullnull!!!null!!!null??? nullnull!!!null!!!null??? nullnull!!!null!!!null');  
     });
});
