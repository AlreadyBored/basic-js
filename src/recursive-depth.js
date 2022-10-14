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
  calculateDepth(arr, depth = 0) {
    if (Array.isArray(arr)) {
      depth+= 1;
      let deeper = depth;
      for (let i = 0; i < arr.length; i++) {
        deeper = Math.max(deeper, this.calculateDepth(arr[i], depth));
      }
      return deeper;
    } else {
      return depth;
    }
  }
}


module.exports = {
  DepthCalculator
};
