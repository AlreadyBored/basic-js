const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample( sampleActivity ) {
//  throw new CustomError('Not implemented');
if (sampleActivity === null) return false;
if (sampleActivity === Infinity) return false;
if (Number(sampleActivity) <= 0 ) return false;
if (typeof sampleActivity == "undefined") return false;
if ( typeof sampleActivity !== "string" ) return false;
if ( isNaN(sampleActivity) ) return false;




  var result = Math.ceil((Math.log(MODERN_ACTIVITY/+(Number(sampleActivity))))/(0.693/HALF_LIFE_PERIOD));

  if( result < 0 ) return false;

  return result;
  
};
