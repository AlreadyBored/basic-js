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
function getCommonCharacterCount(str1, str2) {
  str1 = str1.split('').sort();
  str2 = str2.split('').sort();
   
  let obj1 = {start: 1};
  let obj2 = {start: 1};
  
  let max = obj1;
  let min = obj2;
  
  let result = 0;
  
  const addEl = (arr, obj) => {
    for (let i = 0; i < arr.length; i++) {
      if (obj.hasOwnProperty(arr[i])) {
        obj[arr[i]] = obj[arr[i]] + 1;
      } else {
        obj[arr[i]] = 1;
      }
    }

    delete obj.start;
  }
  
  addEl(str1, obj1);
  addEl(str2, obj2);
  
  if (Object.keys(obj1).length < Object.keys(obj2).length) {
  	max = obj2;
    min = obj1;
  }
  
  for (let key in max) {
    if (min.hasOwnProperty(key)) {
    	result = result + Math.min(max[key], min[key]);
    }
  }
   
  return result;
}

module.exports = {
  getCommonCharacterCount
};
