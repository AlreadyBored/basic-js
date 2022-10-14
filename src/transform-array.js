const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('\'arr\' parameter must be an instance of the Array!');
  }
  let newArr = [...arr]
  for (let i = 0; i < newArr.length; i++) {
    switch (newArr[i]) {
      case '--discard-next':
        if (newArr[i + 2] === '--double-prev' || '--discard-prev') {
          newArr.splice(i,3)
          i--
        }else {
          newArr.splice(i, 2)
        i--}
        break;
      case '--discard-prev':
        if (i) {
          newArr.splice(i - 1, 2)
          i--
        } else {
          newArr.shift()
          i--
        }
        break;
      case '--double-next':
        if (i !== newArr.length - 1) {
          newArr.splice(i, 1, newArr[i + 1])
        } else {
          newArr.pop()
        }
        break;
      case '--double-prev':
        if (i) {
          newArr.splice(i, 1, newArr[i - 1])
        } else {
          newArr.shift()
          i--
        }
        break;
      default:
        console.log(newArr[i])
    }
  }
  return newArr
}

module.exports = {
  transform
};
