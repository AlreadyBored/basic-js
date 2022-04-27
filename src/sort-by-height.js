const { NotImplementedError } = require('../extensions/index.js');

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
function sortByHeight( arr) {
  Array.prototype.insert = function ( index, item ) { this.splice( index, 0, item ); };
  // var arr = [ 'A', 'B', 'D', 'E' ];   arr.insert(2, 'C');   
  // Answer: [ 'A', 'B', 'C', 'D', 'E' ]
  let searchArr = [...arr]
  let sort_filter = arr.sort((a, b) => a - b).filter(item => item !== -1);
  for (let i = 0; i < searchArr.length; i++) {
   if (searchArr[i] === -1) {
    sort_filter.insert(i, -1)
    } 
  }
  return sort_filter
 }

module.exports = {
  sortByHeight
};
