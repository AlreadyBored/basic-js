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
  let counter = 0;
  
  let dict1 = {};
  let dict2 = {};
  let resDict = {};

  function getElements(item, str, dict) {
    let counter = 0;

    for (let i = 0; i < str.length; i++) {
      if (item === str[i]) {
        counter++;
        dict[item] = counter;
      }
    }

    return dict;
  }

  for (let i = 0; i < s1.length; i++) {
    getElements(s1[i], s1, dict1);
  }

  for (let j = 0; j < s2.length; j++) {
    getElements(s2[j], s2, dict2);
  }

  for (let key in dict1) {
    resDict[key] = dict1[key];
  }

  for (let key2 in dict2) {
    if (resDict.hasOwnProperty(key2)) {
      if (resDict[key2] > dict2[key2]) {
        resDict[key2] = dict2[key2];
      }
    }
  }

  for(let key3 in resDict) {
    if(dict2.hasOwnProperty(key3)){
      counter += resDict[key3];
    }
  }

  return counter;

}

module.exports = {
  getCommonCharacterCount
};
