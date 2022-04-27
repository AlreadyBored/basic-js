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
  if (!Array.isArray(arr)) throw Error("\'arr\' parameter must be an instance of the Array!");
  if (arr.every(item => typeof item === 'number')) return arr
  if (!arr.length) return [];
  let transformation = [...arr];
  arr.forEach((item, a, arr) => {
    if (item === '--double-next') {
      transformation[a] = transformation[a+1]
    }
    if (item === '--double-prev') {
      transformation[a] = transformation[a-1]
    }
    if (item === '--discard-next') {
      transformation[a] = null
      transformation[a+1] = null
    }
    if (item === '--discard-prev') {
      transformation[a - 1] = null
      transformation[a] = null
    }
  })
  return transformation.filter(item => {
    return item 
  })
}

module.exports = {
  transform
};
