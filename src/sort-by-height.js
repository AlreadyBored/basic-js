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
function sortByHeight(arr) {
  let arR = arr.filter(e => e !== -1).sort((a,b) => a-b);
  let sortedArr = [];
  let indexOfOne = [];
  arr.forEach((el, i) => el === -1 ? indexOfOne.push(i) : i);
  for (let i = 0; i < arr.length; i++) {
    if (indexOfOne.includes(i)) {
      sortedArr.push(-1)
    } else {
      sortedArr.push(arR.shift())
    }
  };
  return sortedArr
}

module.exports = {
  sortByHeight
};
