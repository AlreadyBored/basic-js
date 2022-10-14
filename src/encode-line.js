/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let encode = ''
  
  let countOFRepeatedLetters = 1

  for(let i = 0; i < str.length; i++) {
    const currentLetter = str[i]
    
    if(currentLetter === str[i + 1]) {
      countOFRepeatedLetters++

      continue
    }

    encode += countOFRepeatedLetters === 1 ? currentLetter : `${countOFRepeatedLetters}${currentLetter}`

    countOFRepeatedLetters = 1
  }

  return encode
}

module.exports = {
  encodeLine
};
