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
export default function countCats(matrix) {
  let mainArr = matrix;
  let result = 0;

  for (let i = 0; i < mainArr.length; i++){
    let currArr = mainArr[i];

    for (let i = 0; i < currArr.length; i++){
      if(currArr[i] === '^^') {
        result = result + 1;
      }
    }
  }
  console.log(result)
  return result
}



function countCats1(matrix) {
  let mainArr = matrix;
  let result = 0;

  for (let i = 0; i < mainArr.length; i++){
    let currArr = mainArr[i];

    for (let i = 0; i < currArr.length; i++){
      if(currArr[i] === '^^') {
        result = result + 1;
      }
    }
  }
  console.log(result)
}

countCats1([
  ['##', 'dd', '00'],
  ['^^', '..', 'ss'],
  ['AA', 'dd', 'Oo'],
])