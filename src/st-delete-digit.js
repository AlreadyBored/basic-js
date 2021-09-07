import {
  NotImplementedError
} from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(num) {
  let result = 0,
    num_digits = [];
  while (num) {
    num_digits.push(num % 10);
    num = Math.floor(num / 10);
  }
  for (let index_num = 0; index_num < num_digits.length; index_num++) {
    let n = 0;
    for (let i = num_digits.length - 1; i >= 0; i--) {
      if (i !== index_num) {
        n = n * 10 + num_digits[i];
      }
    }
    result = Math.max(n, result);
  }
  return result;
}
