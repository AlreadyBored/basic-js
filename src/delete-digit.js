const { NotImplementedError } = require('../extensions/index.js');

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
  let arr = String(n).split("");
  let res = "";
  let index = 0;

  if(arr.length <= 2){
    return Math.max(...arr);
  }

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < arr[i + 1]) {
      index = i;
    }
  }

  let resArr = arr.filter((item, i) => {
    if (i !== index) {
      return item;
    }
  });

  for (let j = 0; j < resArr.length; j++) {
    res += resArr[j];
  }

  return +res;

}

module.exports = {
  deleteDigit
};
