const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let arrDepth = 1;
    
    for (let item of arr) {
      if (Array.isArray(item)) {
        let itemDepth = 1 + this.calculateDepth(item);
        if (itemDepth > arrDepth) {
          arrDepth = itemDepth;
        }
      }
    } return arrDepth;
  }
};