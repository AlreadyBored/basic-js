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

  let arr1 = [...arr];
  for(let i = 0; i < arr1.length; i++){
    if(arr1[i] == -1){
      arr1.splice(i, 1)
      i--;
    }
  }
  arr1.sort(((a, b) => a - b));
  let k = 0;
  for(let j = 0; j < arr.length; j++){
    if(arr[j] === -1){
      continue;
    }
    arr[j] = arr1[k];
    k = k + 1;
  }
  return arr;
}
module.exports = {
  sortByHeight
};
