const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let k = 1;
    for (let i of arr) {
      let kk = 1;
      if (Array.isArray(i)) {
        kk += this.calculateDepth(i);
        if (k < kk) {
          k = kk;
        }
      }
    }
   return k;
 }
};