import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
export default function countCats(box) {
  throw new NotImplementedError('Not implemented');
  let result = 0;
  let arr = box.flat();
  let a = '^^';
  for (var i = 0; i < arr.length; ++i)
  {
      if (a === arr[i]) {
        result += 1;
      }
  }
  return result;
  // remove line with error and write your code here
}
