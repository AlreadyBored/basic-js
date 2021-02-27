const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr, maxDeep = 1) {
    let countArr = false;
    let result = [];
    arr.filter(item => {
      if (Array.isArray(item)) {
        let temp = item.filter(el => el);
        result = result.concat(temp);
        countArr = true;
      }
    });

    if (countArr) return this.calculateDepth(result, maxDeep + 1);

    return maxDeep;
  }
}