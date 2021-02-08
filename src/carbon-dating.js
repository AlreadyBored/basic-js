const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15; 
const HALF_LIFE_PERIOD = 5730;
const NAT_LOG_2 = 0.693;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity === 'string' && sampleActivity > 0 && sampleActivity < MODERN_ACTIVITY) {
    return Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) / (NAT_LOG_2 / HALF_LIFE_PERIOD));
  }
  return false;
}