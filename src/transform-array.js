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
  if (!Array.isArray(arr) || !arr) {
		throw new Error("'arr' parameter must be an instance of the Array!"); 
	}
  let arrTrans = arr
  for (i=0; i<arrTrans.length; i++) {
    if (arrTrans[i] == '--double-next') {
      arrTrans.slice(i, 1, i+1)
    }
    if (arrTrans[i] == '--double-prev') {
      arrTrans.slice(i, 1, i-1)
    }
    if (arrTrans[i] == '--discard-next') {
      arrTrans.slice(i, 2)
    }
    if (arr[i] == '--discard-prev') {
      arrTrans.slice(i-1, 2)
    }
    if (arrTrans[arrTrans.length - 1] == '--double-next') {
      arrTrans.pop()
    }
    if (arrTrans[arrTrans.length - 1] == '--discard-next') {
      arrTrans.pop()
    }
  }
  if (arrTrans[0] == '--discard-prev') {
    arrTrans.shift()
  } 
  if (arrTrans[0] == '--double-prev') {
    arrTrans.shift()
  } 
  return arrTrans
}

module.exports = {
  transform
};
