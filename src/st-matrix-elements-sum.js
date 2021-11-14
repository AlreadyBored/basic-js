import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
export default function getMatrixElementsSum(matrix) {
  let mainArr = matrix;
  let result = 0;

  for (let ii = 0; ii < mainArr.length; ii++){
    let currArr = mainArr[ii];
    
    for (let i = 0; i < currArr.length; i++){
      if (currArr.join('') === mainArr[0].join('')){

        result = result + currArr[i];
      }


      if (currArr.join('') !== mainArr[0].join('')) {
        if(mainArr[ii - 1][i] !== 0) {

          result = result + currArr[i];
        }
      }
    }
  }
  return result
}



function getMatrixElementsSum1(matrix) {
  let mainArr = matrix;
  let result = 0;

  for (let ii = 0; ii < mainArr.length; ii++){
    let currArr = mainArr[ii];
    
    for (let i = 0; i < currArr.length; i++){
      if (currArr.join('') === mainArr[0].join('')){

        result = result + currArr[i];
      }


      if (currArr.join('') !== mainArr[0].join('')) {
        if(mainArr[ii - 1][i] !== 0) {

          result = result + currArr[i];
        }
      }
    }
  }
  return result
}

getMatrixElementsSum1([
  [1],
  [5],
  [0],
  [2],
])

console.log([0, 1, 1, 2].join('') === [0, 1, 1, 2].join(''))
