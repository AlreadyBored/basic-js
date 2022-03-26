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
  if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");
  let res = arr.slice(0);
  for (let i = 0; i < res.length; i++) {
    if (res[i] === '--discard-next' && res[i + 1] != undefined) res.splice(i + 1, 1);
    if (res[i] === '--discard-prev' && res[i - 1] != undefined) res.splice(i - 1, 1);
    if (res[i] === '--double-next' && res[i + 1] != undefined) res[i] = res[i + 1];
    if (res[i] === '--double-prev' && res[i - 1] != undefined) res[i] = res[i - 1];
  }
  return res.filter(e => e !== '--discard-next' && e !== '--discard-prev' && e !== '--double-next' && e !== '--double-prev');
}

module.exports = {
  transform
};
