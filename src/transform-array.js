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
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case '--discard-prev':
        if (arr[i - 1] !== '*') {
          newArr.pop();
          newArr.push('*');
        }
        break;
      case '--discard-next':
        newArr.push('*');
        i++;
        break;
      case '--double-prev':
        if (newArr.length && newArr[newArr.length - 1] !== '*') {
          newArr.push(newArr[newArr.length - 1]);
        }
        break;
      case '--double-next':
        if (arr[i + 1]) {
          newArr.push(arr[i + 1]);
        }
        break;
      default:
        newArr.push(arr[i]);
        break;
    }
  }
  
  return newArr.filter(el => el !== '*');
}


module.exports = {
  transform
};
