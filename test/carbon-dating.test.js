const dateSample = require('../src/carbon-dating.js');

// Presence requirement

describe ('variable presence', () => {
    it('function dateSample exists', () => {
        expect(dateSample).toBeDefined();
    });
});

//Specific requirements

describe('base requirements', () => {
  it('should return false on wrong type', () => {
    expect(dateSample(3)).toStrictEqual(false);
    expect(dateSample(3.312312)).toStrictEqual(false);
    expect(dateSample(false)).toStrictEqual(false);
    expect(dateSample(null)).toStrictEqual(false);
    expect(dateSample(undefined)).toStrictEqual(false);
    expect(dateSample([3])).toStrictEqual(false);
    expect(dateSample(['3'])).toStrictEqual(false);
    expect(dateSample({'3.14': '3dec'})).toStrictEqual(false);
  });

  it('should return false if no argument', () => {
    expect(dateSample()).toStrictEqual(false);
  });

  it('should validate parameter', () => {
    expect(dateSample('ACTIVITY OVER 9000')).toStrictEqual(false);
    expect(dateSample('one')).toStrictEqual(false);
  });
});

describe('functional requirements ', () => {   
  it('basic examples', () => {
    expect(dateSample('3')).toStrictEqual(13308);
    expect(dateSample('1')).toStrictEqual(22392);
    expect(dateSample('9')).toStrictEqual(4224);
    expect(dateSample('11')).toStrictEqual(2565);
   });

   it('should handle floating-point numbers', () => {
    expect(dateSample('3.142')).toStrictEqual(12926);
    expect(dateSample('1.1')).toStrictEqual(21604);
    expect(dateSample('9.8888')).toStrictEqual(3446);
    expect(dateSample('11.3231.3213124')).toStrictEqual(2326);
   });

   it('should handle inadequate values', () => {
    expect(dateSample('9000')).toStrictEqual(false);
    expect(dateSample('15.1')).toStrictEqual(false);
    expect(dateSample('0')).toStrictEqual(false);
    expect(dateSample('-5')).toStrictEqual(false);
    expect(dateSample('-55.8')).toStrictEqual(false);
  });
});
