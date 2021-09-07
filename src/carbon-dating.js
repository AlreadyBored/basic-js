import {
  NotImplementedError
} from '../extensions/index.js';

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
export default function dateSample(str) {
  if ((typeof (str) !== 'string') ||
    isNaN(parseFloat(str)) ||
    (!isNaN(str) && (+str <= 0 || +str > 15))) {
    return false
  }
  return Math.ceil(Math.log(MODERN_ACTIVITY / parseFloat(str)) /
    (0.693 / HALF_LIFE_PERIOD))
}
