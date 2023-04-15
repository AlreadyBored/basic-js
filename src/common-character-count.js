function getCommonCharacterCount(s1, s2) {
  const chars1 = countChars(s1);
  const chars2 = countChars(s2);
  let count = 0;
  for (let char in chars1) {
    if (chars2[char]) {
      count += Math.min(chars1[char], chars2[char]);
    }
  }
  return count;
}

function countChars(str) {
  const chars = {};
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    chars[char] = (chars[char] || 0) + 1;
  }
  return chars;
}

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
function getCommonCharacterCount(/* s1, s2 */) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  getCommonCharacterCount
};
