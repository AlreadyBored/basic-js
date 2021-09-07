import {
  NotImplementedError
} from '../extensions/index.js';

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

const DISCARD_NEXT = "--discard-next";
const DISCARD_PREV = "--discard-prev";
const DOUBLE_NEXT = "--double-next";
const DOUBLE_PREV = "--double-prev";

export default function transform(arr) {
  if (!Array.isArray(arr)) {
    throw Error("'arr' parameter must be an instance of the Array!");
  }
  if (arr.length === 0) {
    return arr;
  }

  const transformedArray = [];
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case DISCARD_NEXT:
        i += 1;
        break;
      case DISCARD_PREV:
        if (arr[i - 2] !== DISCARD_NEXT) {
          transformedArray.pop();
        }
        break;
      case DOUBLE_NEXT:
        if (i + 1 < arr.length) {
          transformedArray.push(arr[i + 1]);
        }
        break;
      case DOUBLE_PREV:
        if (i - 1 >= 0 && arr[i - 2] !== DISCARD_NEXT) {
          transformedArray.push(arr[i - 1]);
        }
        break;
      default:
        transformedArray.push(arr[i]);
    }
  }
  return transformedArray;
}
