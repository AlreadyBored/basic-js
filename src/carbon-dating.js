const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
    let age;
    let result;

    if (typeof sampleActivity != 'string' && typeof + sampleActivity == 'number' && +sampleActivity <= MODERN_ACTIVITY && +sampleActivity > 0) {
        age = HALF_LIFE_PERIOD * (Math.log(MODERN_ACTIVITY / +sampleActivity) / Math.log(2));
        result = Math.ceil(age);
        return result;
    } else {
        return false;
    }

};