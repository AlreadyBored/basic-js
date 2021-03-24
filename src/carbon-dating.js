const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity ) {
  if(typeof(sampleActivity) =='string'&& parseInt(sampleActivity)){
    const x = parseFloat(sampleActivity);
    const period = 0.693/HALF_LIFE_PERIOD;
    const result = Math.ceil(Math.log(MODERN_ACTIVITY/x)/period);
    if(result <0||!result) return false;
      return result;
}
return false;
};
