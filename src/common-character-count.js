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
  let str2=s2,res=0;
  for(let i=0;i<s1.length;i++)
  {
    let commonInd=str2.indexOf(s1[i]);
    if(commonInd>-1)
    {
      if(commonInd>0)
      {
        if(commonInd<(str2.length-1))
        {
str2=str2.substring(0,commonInd)+str2.substring(commonInd+1);
        }
        else
        {
          str2=str2.substring(0,commonInd);
        }
      }
      else
        {
          str2=str2.substring(commonInd+1)
        }
        res++;
    }
  }
  return res;
}

module.exports = {
  getCommonCharacterCount
};
