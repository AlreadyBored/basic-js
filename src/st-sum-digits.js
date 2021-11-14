import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
export default function getSumOfDigits(n) {
  let nArr = `${n}`.split('')
  let sum = 0;

  for (let i = 0; i < nArr.length; i++){  
    sum = Number(sum) + Number(nArr[i]);
    if (sum > 9){
    let sumOfSum = `${sum}`.split('');
    sum = Number(sumOfSum[0]) + Number(sumOfSum[1]);
    }
  }
  console.log(sum)
  return sum
}

// function getSumOfDigits1(n) {
//   let nArr = `${n}`.split('')
//   let sum = 0;
//   console.log(nArr)
//   for (let i = 0; i < nArr.length; i++){
//     console.log(nArr[i])
//     sum = Number(sum) + Number(nArr[i]);
//   }
//   console.log(sum)
//   return sum
// }

// getSumOfDigits1(91)
