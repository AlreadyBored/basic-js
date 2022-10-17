const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
const EQUATION = 0.693 / HALF_LIFE_PERIOD

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */

function dateSample(sampleActivity) {
  // console.log(sampleActivity)
  if ((typeof sampleActivity === 'string') && parseFloat(sampleActivity) && sampleActivity) {
    sampleActivity = parseFloat(sampleActivity)
    if ((sampleActivity > MODERN_ACTIVITY) || sampleActivity <= 0) {
      return false
    }
    const cal = (Math.log(MODERN_ACTIVITY / sampleActivity)) / EQUATION
    // console.log('приветули', cal)
    // console.log('приветули1', Math.ceil(cal))
    // !(/\D/.test(sampleActivity))
    return Math.ceil(cal)
  }
  return false
  // console.log(sampleActivity)
}
console.log(dateSample('3.142'))
console.log(dateSample('1.1'))
console.log(dateSample('9.8888'))
console.log(dateSample('9.59383373526808'))
console.log(dateSample('9.122605776326203'))

// assert.equal(dateSample('3.142'), 12923);
// assert.equal(dateSample('1.1'), 21599);
// assert.equal(dateSample('9.8888'), 3445);
// assert.equal(dateSample('9.59383373526808'), 3695);
// assert.equal(dateSample('9.122605776326203'), 4111);

module.exports = {
  dateSample
};
