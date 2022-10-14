const { NotImplementedError } = require('../extensions/index.js');

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
function transform(arr) {
  let a = 0
  for(let i=0; i<arr.length; i++){
      if(arr[i]==='--discard-next'){
          arr.splice(arr[i+1], 1)
          a = arr.indexOf('--discard-next')+1}
      if(arr[i]==='--discard-prev'){
          arr.splice(arr[i-2], 1)
          a = arr.indexOf('--discard-prev')-1}
      if(arr[i]==='--double-next'){
          arr[i+1]=arr[i+1]*2
          a = arr.indexOf('--double-next')}
      if(arr[i]==='--double-prev'){
          arr[i-1]=arr[i-1]*2}
          a = arr.indexOf('--double-prev')}
      arr.splice(a, 1)
  return arr
  }

module.exports = {
  transform
};
