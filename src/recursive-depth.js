const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
          let count = 1;
          for (let i=0; i <= arr.length; i++) {
            let n =1;
            if (Array.isArray(arr[i])) {
              n += this.calculateDepth(arr[i]);
              count =Math.max(n, count)
          }
      
        }
        return count;
      }
  }
