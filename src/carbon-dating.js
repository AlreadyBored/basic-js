import { NotImplementedError } from '../extensions/index.js';

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
export default function dateSample(sampleActivity) {
  let year, 
      s = Number(sampleActivity);
    if ( typeof(sampleActivity) !== 'string' 
    || isNaN(s)
    || sampleActivity === undefined
    || sampleActivity.trim() === ''
    || s >= MODERN_ACTIVITY
    || s <= 0
    ) return false;

     year = HALF_LIFE_PERIOD * Math.log2(MODERN_ACTIVITY / s);
     return Math.ceil(year);

}
