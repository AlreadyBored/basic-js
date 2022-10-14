const { NotImplementedError } = require('../extensions/index.js');

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
function countCats(matrix=0) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let Number = 0
    for(let i of matrix){console.log(i)
      for(let j=0; j<i.length; j++){console.log(i[j])
        if(i[j]=='^^'){Number=Number+1}
      }
    }
    console.log(Number)
    return Number
  }


module.exports = {
  countCats
};
