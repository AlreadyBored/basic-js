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
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let Number = 0;
  if(typeof sampleActivity!=="string") return false;
  // if ( !sampleActivity || isNaN(sampleActivity) || sampleActivity <=0 || sampleActivity >15) {return false}
  if (  isNaN(sampleActivity) || sampleActivity <=0 || sampleActivity >15) {return false}
 
  {Number = Math.ceil(Math.log((15/sampleActivity))*5730/(693/1000))}
// console.log(Number)
// console.log(typeof(Number))
// if ( Number <=0 || Number == Infinity) {return false;}
// {
return Number;
// }
}
// console.log(dateSample("3"));

