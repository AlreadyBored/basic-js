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
  calculateDepth(arr) {
    throw new NotImplementedError('Not implemented');

      let lengthCount = 0
      if (arr.length > 0) {
        for (let i = 0; i < arr.length + 1; i++) {
            if (Array.isArray(arr[i])) {
                lengthCount += this.calculateDepth(arr[i])
            }
        }
      }

      return lengthCount
  }
}
// console.log(new DepthCalculator().calculateDepth([1, 2, 3, [8, [2]], 4, 5, []]))

module.exports = {
  DepthCalculator
};
