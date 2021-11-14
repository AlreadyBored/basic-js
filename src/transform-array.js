
import { NotImplementedError } from '../extensions/index.js';

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
export default function transform(arr) {
  let arrAfterCommands = [];
  let memberNames = [];
  let result = '';

  let discardNext = '--discard-next';
  let discardPrev = '--discard-prev';
  let doubleNext = '--double-next';
  let doublePrev = '--double-prev';

  if (!arr.includes(discardNext) &&
      !arr.includes(discardPrev) &&
      !arr.includes(doubleNext) &&
      !arr.includes(doublePrev)) {return arr}

  if (arr.includes(null) ||
      arr.includes(undefined) ||
      arr.includes(false)) {throw new Error("'arr' parameter must be an instance of the Array!")}

  for(let i = 0; i < arr.length; i++){
    if (arr[i] === discardNext) {
      arr[i + 1] = '';
    }
    if (arr[i] === doubleNext) {
      arrAfterCommands.push(arr[i + 1])
    }
    if (arr[i] === discardPrev) {
      if (arrAfterCommands.length > 0){
        arrAfterCommands = arrAfterCommands.filter(x => x !== '')
        arrAfterCommands[arrAfterCommands.length - 1] = '';
      }
    }
    if (arr[i] === doublePrev) {
      if(arrAfterCommands.length > 0) {
        arrAfterCommands.push(arr[i - 1])
      }
    }
    arrAfterCommands.push(arr[i]);
  }
  arrAfterCommands = arrAfterCommands.filter(x => x !== '');

  for (let i = 0; i < arrAfterCommands.length; i++){
    if (typeof(arrAfterCommands[i]) === 'number') {

    memberNames.push(arrAfterCommands[i]);
    } 
  }
   
  result = memberNames;
  return result
}
[1, 2, 3, '--double-next', 1337, '--discard-prev', 4, 5]


function transform1(arr) {
  let arrAfterCommands = [];
  let memberNames = [];
  let result = '';

  let discardNext = '--discard-next';
  let discardPrev = '--discard-prev';
  let doubleNext = '--double-next';
  let doublePrev = '--double-prev';
  
  try {
    for(let i = 0; i < arr.length; i++){
      if (arr[i] === discardNext) {
        arr[i + 1] = '';
      }
      if (arr[i] === doubleNext) {
        arrAfterCommands.push(arr[i + 1])
      }
      if (arr[i] === discardPrev) {
        arrAfterCommands = arrAfterCommands.filter(x => x !== '')
        arrAfterCommands[arrAfterCommands.length - 1] = '';
      }
      if (arr[i] === doublePrev) {
        arrAfterCommands.push(arr[i - 1])
      }
      arrAfterCommands.push(arr[i]);
    }
    arrAfterCommands = arrAfterCommands.filter(x => x !== '');

    for (let i = 0; i < arrAfterCommands.length; i++){
      if (typeof(arrAfterCommands[i]) === 'number') {

      memberNames.push(arrAfterCommands[i]);
      } 
    }
  } catch {
    throw new Error("'arr' parameter must be an instance of the Array!")
  } 
   
  result = memberNames;

  return result
}
transform1([1, 2, 3, '--discard-next', 1337, null, '--discard-prev', 4, 5])

// let lll = [1, 2, 3, '--discard-next', 1337, null, '--discard-prev', 4, 5, null]  
// console.log(lll.indexOf(null))
// console.log(lll.includes(null))