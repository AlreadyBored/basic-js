const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string') {return false}
    let n = parseFloat(sampleActivity);
    result = Math.log(MODERN_ACTIVITY/n)/(0.693/HALF_LIFE_PERIOD);
    if ( result === null || result === undefined || result === Infinity || Number.isNaN(result)) {return false}
    if ( result < 0) {return false}
    return Math.ceil(result)
}
