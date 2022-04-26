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
  let res=false;
  if ((typeof sampleActivity) === "string")
  {
  let sampleActivityNumber=sampleActivity*1;
  if (sampleActivityNumber && sampleActivityNumber<=15 && sampleActivityNumber>0)
  {
    let k=0.693 / HALF_LIFE_PERIOD
    res=Math.ceil(Math.log(MODERN_ACTIVITY/sampleActivityNumber)/k);
  }
}
return res;
//throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  dateSample
};
