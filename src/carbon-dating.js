const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (sampleActivity === undefined || typeof sampleActivity !== 'string') return false;
  let numActivity = parseInt(sampleActivity, 10);
  if (isNaN(numActivity) || numActivity <= 0 || numActivity >= MODERN_ACTIVITY) return false;
  let k = 0.693 / HALF_LIFE_PERIOD;
  let t = Math.log2(MODERN_ACTIVITY / numActivity) / k;
  return Math.ceil(t);
};