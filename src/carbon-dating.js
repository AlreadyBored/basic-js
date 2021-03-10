const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  var k=0.693/HALF_LIFE_PERIOD;
  if ((typeof sampleActivity !=='string')||
      (isNaN(sampleActivity))||
    (sampleActivity>MODERN_ACTIVITY)||
  (sampleActivity<=0)){
    return false;
  }else{
    var t=Math.log(MODERN_ACTIVITY/sampleActivity)/k;
    t=Math.ceil(t);
  }
return t;
  }
  
