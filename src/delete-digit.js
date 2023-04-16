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
  n = String(n);
  let arr = n.split('');
  num = 0;
  let arr2 = [];
  for(let i = 0; i < arr.length; i++){
    arr2 = [...arr]
    arr2.splice(i,1)
    if(Number(arr2.join('')) >= num){
      num = Number(arr2.join(''));
    }
  }

  return num

}




module.exports = {
  deleteDigit
};
