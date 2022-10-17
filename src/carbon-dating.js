const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

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
  const newStr = parseFloat(sampleActivity);
  if (
    typeof sampleActivity !== 'string' ||
    isNaN(newStr) ||
    newStr > MODERN_ACTIVITY ||
    newStr <= 0
  ) {
    return false;
  }
  const k = 0.693 / HALF_LIFE_PERIOD;
  const ln = Math.log10(MODERN_ACTIVITY / newStr);
  return Math.floor(ln / k);
}

module.exports = {
  dateSample,
};
