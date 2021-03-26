const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity ) {
  if (typeof sampleActivity!=='string'||isNaN(sampleActivity)){
    return false
  }

  sampleActivity=parseFloat(sampleActivity)
if(sampleActivity<=0||sampleActivity>MODERN_ACTIVITY|| isNaN(sampleActivity )){
  return false
}
  const k=0.693/HALF_LIFE_PERIOD,
        activity=MODERN_ACTIVITY/sampleActivity
        return Math.ceil(Math.log10(activity/k))
};
