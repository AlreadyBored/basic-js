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
    if (!Array.isArray(arr)) return depth;

    arr.forEach(item => {
      depth = Math.max(depth, this.calculateDepth(item))
    })
        
    return depth + 1;
  }
}

module.exports = {
  DepthCalculator
};
