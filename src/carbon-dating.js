const CustomError = require("../extensions/custom-error");


module.exports = function dateSample(sampleActivity) {
  if (isNaN(sampleActivity) || sampleActivity <= 0 ||  sampleActivity > 15 || typeof sampleActivity !== 'string') {
    return false;
  }
  const MODERN_ACTIVITY = 15; 
  const HALF_LIFE_PERIOD = 5730;
  const ln = 0.693;
  
  const t = Math.ceil(Math.log(sampleActivity / MODERN_ACTIVITY ) / ln * HALF_LIFE_PERIOD) * -1;
  return t
};