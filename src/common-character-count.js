const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let arrS1 = s1.split('');
  let arrS2 = s2.split('');
  let res = 0;
  let indexS2 = 0;
    for(let i = 0; i < arrS1.length; i++){
      indexS2 = arrS2.indexOf(arrS1[i]);
      if(indexS2 > -1){
        res++;
        arrS2.splice(indexS2, 1);
      }

    }
  return res;
}

module.exports = {
  getCommonCharacterCount
};
