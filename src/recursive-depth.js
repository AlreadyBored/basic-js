const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if (arr[0] == undefined) {
      return 1
    }
    const depths = arr.map(element => {
      return Array.isArray(element) ? 1 + this.calculateDepth(element) : 1
    });
    return Math.max(...depths);
  }
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
};
