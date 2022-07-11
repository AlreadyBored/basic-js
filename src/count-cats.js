const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix where you have to find cats by ears "^^"
 * Number of cats found should be number. If no cats found, function should return 0.
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

function countCats(backyard) {
  let number = 0;
  backyard.forEach((line) => {
    line.forEach((element) => {
      if (element == "^^") {
        number += 1;
      }
      return number;
    });
    return number;
  });
  return number;
}

module.exports = {
  countCats,
};
