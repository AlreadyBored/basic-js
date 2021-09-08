import { NotImplementedError } from '../extensions/index.js';

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
export default class DepthCalculator {
  calculateDepth(arr, depthArr = [], depthCount = 1) {
    depthArr.push(depthCount);

    for (let i in arr){
      if (Array.isArray(arr[i]))
        this.calculateDepth(arr[i], depthArr, depthCount + 1);
    };

    return depthArr.sort((a, b) => { return parseInt(b) - parseInt(a)})[0];
  }
};