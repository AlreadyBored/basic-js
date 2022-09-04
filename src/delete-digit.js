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
**/

function deleteDigit(num) {
  let arr = [];
  
  for (let i = 0; i < String(num).split('').length; i++) {
  	let tempNum = String(num).split('');
  	tempNum.splice(i, 1);
    arr.push(Number(tempNum.join('')));
  }
  
  return Math.max(...arr);
}

module.exports = {
  deleteDigit
};
