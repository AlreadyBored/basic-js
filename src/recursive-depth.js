const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth( arr ) {
    
    let count=1
    for (let i = 0; i < arr.length; i++) {
      if(Array.isArray(i)){
      
        count = 1 + this.calculateDepth(i);
        // if (depthAdd > depth) {
        //   depth = depthAdd;
        // }        
      }
      }
    return count;
    }
    }
