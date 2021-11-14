import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
export default function sortByHeight(arr) {
  // -1 to string
  let kkk = arr;
  for (let i = 0; i < kkk.length; i++){
    if (kkk[i] === -1) {kkk[i] = 'm'}
  }

  // sort
  for (let i = 0; i < kkk.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < kkk.length; j++) {
        if (kkk[j] < kkk[min]) {
            min = j;
        }
    }
    if (min != i) {
        let target = kkk[i];
        kkk[i] = kkk[min];
        kkk[min] = target;
    }
  }

  // string to -1

  for (let i = 0; i < kkk.length; i++){
    if (kkk[i] === 'm') {kkk[i] = -1}
  }
  

  return(kkk)
}

function sortByHeight1(arr) {
  let kkk = arr;
  for (let i = 0; i < kkk.length; i++){
    if (kkk[i] === -1) {kkk[i] = 'm'}
  }
  console.log(kkk)

  for (let i = 0; i < kkk.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < kkk.length; j++) {
        if (kkk[j] < kkk[min]) {
            min = j;
        }
    }
    if (min != i) {
        let target = kkk[i];
        kkk[i] = kkk[min];
        kkk[min] = target;
    }
  }

  console.log(kkk)

  for (let i = 0; i < kkk.length; i++){
    if (kkk[i] === 'm') {kkk[i] = -1}
  }
  
  console.log(kkk)
  return(kkk)
}
sortByHeight1([23, 54, -1, 43, 1, -1, -1, 77, -1, -1, -1, 3])