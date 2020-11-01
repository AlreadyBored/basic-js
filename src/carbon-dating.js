const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(str) {
  let num = Number(str);
if(num !== 'Number') return false;
let k = 0.693/5730;
let result = (Math.log(15/num))/k;
return Math.ceil(result);
};
