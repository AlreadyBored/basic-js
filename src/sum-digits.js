/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  const nStringArray = `${n}`.split('')
  let sum = nStringArray.reduce((accun, value) => accun + +value , 0)

  if(sum <= 9) return sum

  return getSumOfDigits(sum)
}

module.exports = {
  getSumOfDigits
};
