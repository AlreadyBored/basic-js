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
  if(!Array.isArray(arr)){
    throw new Error("'arr' parameter must be an instance of the Array!")
  }
  const discardNext = '--discard-next';
  const discardPrev = '--discard-prev';
  const doubleNext = '--double-next';
  const doublePrev = '--double-prev';
  const arr1 = [...arr];
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === discardPrev) {
      if (i > 0) {
        arr1.splice(i - 1, 2);
        i--;
      } else {
        arr1.splice(i, 1);
      }
    }
    if (arr1[i] === discardNext) {
      if (i < arr1.length - 1) {
        arr1[i + 1] = null;
        arr1.splice(i, 1);
      } else {
        arr1.splice(i, 1);
      }
    }
    if (arr1[i] === doublePrev) {
      if (i < 1 || i === null) {
        arr1.splice(i, 1);
      } else {
        arr1[i] = arr1[i - 1]
      }
    }
    if (arr1[i] === doubleNext) {
      if (i < arr1.length - 1) {
        arr1[i] = arr1[i + 1]
      }else {
        arr1.splice(i, 1);
      }
    }
  }
  for (let j = 0; j < arr1.length; j++) {
    if (arr1[j] === null){
      arr1.splice(j, 2);
    }
  }

  return arr1;
}

console.log(transform([ 1, 2, 3, '--double-next' ]))

module.exports = {
  transform
};
