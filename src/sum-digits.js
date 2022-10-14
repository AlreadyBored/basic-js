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
function getSumOfDigits() {
    var temporary_sum = 0, count = 0;
    while(str.length > 1){
        temporary_sum = 0;
        for(i = 0; i < str.length; i++)
            temporary_sum += (str.charAt(i) -'0');
            str = temporary_sum + "";
            count++;
    }
    return count;
}

var s = "91";
console.log(numberofTimes(s));


module.exports = {
  getSumOfDigits
};
