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
  const res = []
  if (Array.isArray(arr)){
    let del = false
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      if (element === '--discard-next'){
        i++
        del = true
      } else if (element === '--discard-prev'){
        if ((res.length !== 0) && (!del)) {
          res.pop()
        }
        del = false
      } else if (element === '--double-next'){
        if ((i+1) < arr.length){
          res.push(arr[i+1])
        }
        del = false
      } else if (element === '--double-prev'){
        if (((i-1) > 0) && (!del)){
          res.push(arr[i-1])
        } 
        del = false
      } else {
        res.push(element)
        del = false
      }
    }
  } else {
    throw new Error("'arr' parameter must be an instance of the Array!")
  }
  return res
}

module.exports = {
  transform
};
