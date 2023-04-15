let counter = 1;
let result = [];
 
const arrLvl_2 = [
    1,
    [2],
    [2, [3]],
];
const arrLvl_3 = [
    1,
    [2, [3]],
    [2],
]
 
const calculateDepth = (arrLvl_2) => {
    for (const subArr of arrLvl_2) {
      if (Array.isArray(subArr)) {
        counter += 1;
        calculateDepth(subArr);
      }
      result.push(counter);
      counter = 1;
    }
    return Math.max.apply(null, result);
}
 
console.log(calculateDepth(arrLvl_2));


const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(/* arr */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  DepthCalculator
};
