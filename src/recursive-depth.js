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
    if (!arr.some((el) => Array.isArray(el))) return 1;
    
    return 1 + Math.max(...arr.map((el) => (Array.isArray(el) ? this.calculateDepth(el) : 0)));
  }
}

module.exports = {
  DepthCalculator
};
