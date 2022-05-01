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
        let count = 0;
        for(let i = 0; i < arr.length; i++){
            if(Array.isArray(arr[i])) {
                count = Math.max(count, this.calculateDepth(arr[i]));                
            }         
        }
        return ++count;
    }
}

module.exports = {
    DepthCalculator
  };