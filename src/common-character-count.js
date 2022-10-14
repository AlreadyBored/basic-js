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
  let result = 0

  if(!s1 || !s2) return result

  for(let i = 0; i < s1.length; i++) {
    const chekingLetter = s1[i]

    if(s2.includes(chekingLetter)) {
      s2 = s2.replace((chekingLetter), '')

      result++
    }
  }

  return result
}

module.exports = {
  getCommonCharacterCount
};
