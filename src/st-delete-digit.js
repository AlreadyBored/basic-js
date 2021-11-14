import { NotImplementedError } from '../extensions/index.js';

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
export default function deleteDigit(n) {
  let nStr = `${n}`
  let nArr = nStr.split('');
  let max = 0;

  for(let i = 0; i < nArr.length; i++){
    let save = nArr[i]
    nArr[i] = '';
    if (Number(nArr.join('')) > max) {
      max = Number(nArr.join(''));
    } 
    nArr[i] = save;
  }
  console.log(max)
  return max
}

// function deleteDigit1(n) {
//   let nStr = `${n}`
//   let nArr = nStr.split('');
//   let max = 0;

//   for(let i = 0; i < nArr.length; i++){
//     let save = nArr[i]
//     nArr[i] = '';
//     if (Number(nArr.join('')) > max) {
//       max = Number(nArr.join(''));
//     } 
//     nArr[i] = save;
//   }
//   console.log(max)
// }
// deleteDigit1('712345')