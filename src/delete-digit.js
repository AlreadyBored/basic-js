/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const nString = `${n}`;

  const digits = [];

  for (let i = 0; i < nString.length; i++) {
    const newNum = Number(nString.replace(nString[i], ""));

    digits.push(newNum);
  }

  return Math.max(...digits);
}

module.exports = {
  deleteDigit,
};
