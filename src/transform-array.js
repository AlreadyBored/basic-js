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

  let newArr = arrayCopy(arr);

  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] === '--discard-prev') {
      newArr[i - 1] = null;
      newArr[i] = null;
    } else if (newArr[i] === '--discard-next') {
      newArr[i + 1] = null;
      newArr[i] = null;
    } else if (newArr[i] === '--double-prev') {
      newArr[i] = newArr[i - 1];
    } else if (newArr[i] === '--double-next') {
      newArr[i] = newArr[i + 1];
    }
  }
  let finalArr = newArr.filter((item) => item !== null);
  return finalArr;
}

function arrayCopy(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (
      (arr[i] === '--double-prev' || arr[i] === '--discard-prev') &&
      i === 0
    ) {
      continue;
    } else if (
      (arr[i] === '--discard-next' || arr[i] === '--double-next') &&
      i === arr.length - 1
    ) {
      continue;
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

module.exports = {
  transform,
};
