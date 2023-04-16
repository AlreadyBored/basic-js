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
    let depth = 1; // начинаем с глубины 1
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) { // если элемент массива является массивом
        let newDepth = this.calculateDepth(arr[i]) + 1; // рекурсивно вычисляем глубину вложенного массива
        if (newDepth > depth) { // если глубина вложенного массива больше текущей глубины
          depth = newDepth; // обновляем текущую глубину
        }
      }
    }
    return depth;
  }
  
}


module.exports = {
  DepthCalculator
};
