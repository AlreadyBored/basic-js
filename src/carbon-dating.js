const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;
const COEFFICIENT = 0.693 / HALF_LIFE_PERIOD;

module.exports = 
function dateSample(otherActivity) {
  if (  
    typeof(otherActivity) !== 'string' ||
    otherActivity <= 0 ||
    otherActivity > MODERN_ACTIVITY
    )
  return false; 
  let doValid = otherActivity.split('.');
  if (doValid.length > 1) doValid[0] = doValid[0]+'.';
  doValid = doValid.join('');
  otherActivity = doValid;
  if(otherActivity !== parseFloat(otherActivity).toString())
    return false;
  return Math.ceil(Math.log(15/(parseFloat(otherActivity)))/COEFFICIENT); 
}