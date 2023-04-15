function dateSample(sampleActivity) {
  if (typeof sampleActivity !== "string" || isNaN(Number(sampleActivity)) || Number(sampleActivity) <= 0 || Number(sampleActivity) > MODERN_ACTIVITY) {
    return false;
  }
  const k = 0.693 / HALF_LIFE_PERIOD;
  const t = Math.log(MODERN_ACTIVITY / sampleActivity) / k;
  return Math.ceil(t);
}


/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(/* matrix */) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  countCats
};
