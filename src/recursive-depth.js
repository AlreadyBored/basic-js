const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {

    calculateDepth(array, level = 1, result = new Array()) {
      result.push(level);
      array.forEach(item => { if (Array.isArray(item)) this.calculateDepth(item, level + 1, result) })
      let depth = 0;
      for (let i = 0; i < result.length; i++) {
          if (result[i] > depth) {
              depth = result[i];
          }
      }
      return depth;
  }}
