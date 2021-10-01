import { NotImplementedError } from "../extensions/index.js";

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
export default function countCats(matrix) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let Number =0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      console.log(`  item {${i}, ${j}} - ${matrix[i][j]}`);
      if (matrix[i][j] == "^^") {Number=Number+1}
    }
  }
return Number;
}
// countCats([
//   [0, 1, '^^'],
//    [0, '^^', 2],
//   ['^^', 1, 2]
//   ]) 