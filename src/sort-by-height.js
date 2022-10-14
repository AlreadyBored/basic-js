const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
var numArray = [140000, 104, 99];
numArray.sort(function(a, b) {
    return a - b;
  });
  console.log(numArray);

module.exports = {
  sortByHeight
};
