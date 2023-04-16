const { NotImplementedError } = require('../extensions/index.js');



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
const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
function dateSample(str) {
  if(!/^\d+(\.\d+)?$/.test(str)){
    console.log(434)
    return false
  }
  
  if(str === ''){
    console.log(0)
    return false;
  }
  if(/\s/.test(str)){
    return false
  }
  if(str <= 0 || str > 15){
    console.log(12)
    return false
  }

  if(typeof(str)!== 'string'){
    console.log(1)
    return false
  }
  if(str === NaN){
    console.log(2)
    return false
  }

    let a = Math.log(MODERN_ACTIVITY / str);
    let k = 0.693 / HALF_LIFE_PERIOD;
    let itog = Math.ceil(a / k);
    return itog;
  }

console.log(dateSample('9.341'))
console.log(Math.log(15 / '9.59383373526808'));
module.exports = {
  dateSample
};
console.log( '9.341' / 32)
