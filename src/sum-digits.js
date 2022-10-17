const { NotImplementedError } = require('../extensions/index.js');

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
  n = String(n).split('').reduce((acc, curr)=>Number(acc)+Number(curr),0)
  if(n ==10){
    return 1
  }else{
    return String(n).split('').reduce((acc, curr)=>Number(acc)+Number(curr),0)
  }
}

module.exports = {
  getSumOfDigits
};
