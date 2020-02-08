const chai = require('chai');
const { expect, assert } = chai;

Object.freeze(assert);

const dateSample = require('../src/carbon-dating.js');


describe('Carbon dating', () => {
  // Presence requirement
    describe ('variable presence', () => {
      it('function dateSample exists', () => {
        expect(dateSample).exist;
      });
  });

  //Specific requirements

  describe('base requirements', () => {
    it('should return false on wrong type', () => {
      assert.equal(dateSample(3), false);
      assert.equal(dateSample(3.312312), false);
      assert.equal(dateSample(false), false);
      assert.equal(dateSample(null), false);
      assert.equal(dateSample(undefined), false);
      assert.equal(dateSample([3]), false);
      assert.equal(dateSample(['3']), false);
      assert.equal(dateSample({'3.14': '3dec'}), false);
    });

    it('should return false if no argument', () => {
      assert.equal(dateSample(), false);
    });

    it('should validate parameter', () => {
      assert.equal(dateSample('ACTIVITY OVER 9000'), false);
      assert.equal(dateSample('one'), false);
    });
  });

  describe('functional requirements ', () => {   
    it('basic examples', () => {
      assert.equal(dateSample('3'), 13308);
      assert.equal(dateSample('1'), 22392);
      assert.equal(dateSample('9'), 4224);
      assert.equal(dateSample('11'), 2565);
    });

    it('should handle floating-point numbers', () => {
      assert.equal(dateSample('3.142'), 12926);
      assert.equal(dateSample('1.1'), 21604);
      assert.equal(dateSample('9.8888'), 3446);
      assert.equal(dateSample('11.3231.3213124'), 2326);
    });

    it('should handle inadequate values', () => {
      assert.equal(dateSample('9000'), false);
      assert.equal(dateSample('15.1'), false);
      assert.equal(dateSample('0'), false);
      assert.equal(dateSample('-5'), false);
      assert.equal(dateSample('-55.8'), false);
    });
  });  
});
