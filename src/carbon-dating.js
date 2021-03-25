const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (sampleActivity <= 0){
    return false;
  }
  if ( typeof sampleActivity !== "string"){
    return false;
  }

  if (sampleActivity === 'no-value'){
    return false;
  }

const activitiFloat = parseFloat(sampleActivity);
if(activitiFloat <= 0){
  return false;
  }
if(activitiFloat > MODERN_ACTIVITY)  {
  return false;
}
if( isNaN(activitiFloat)){
  return false;
}

const k = Math.LN2 / HALF_LIFE_PERIOD;
return Math.ceil(Math.log(MODERN_ACTIVITY / activitiFloat) / k);
 
};
