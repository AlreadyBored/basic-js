const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(input) {

  if (arguments.length == 0) {
    return false
  }
  if (typeof input != 'string') {
    return false
  }
  let digitizedInput = parseFloat(input);
  if (isNaN(digitizedInput)) {
    return false
  }
  if ((digitizedInput > 15) || (digitizedInput <= 0)) {
    return false
  }
  const logValue = 0.693;
  const k = logValue / HALF_LIFE_PERIOD;
  const t = Math.log(MODERN_ACTIVITY/digitizedInput);
  const res = Math.ceil(t / k);
  //console.log(digitizedInput, '=>', res)
  return res
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
};
