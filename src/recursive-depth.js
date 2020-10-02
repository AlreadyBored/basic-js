const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  
  calculateDepth(arr) {
    var localDepthArray = 0;

    /* console.log(arr); */

    if (!Array.isArray(arr)) return 0;
    if (arr === null) return 0;
    if (typeof arr == "undefined") return 0;

    for (var i = 0; i < arr.length; i++) {
      var iLocalDepthArray = this.calculateDepth(arr[i]);
      localDepthArray = 
      Math.max(localDepthArray, iLocalDepthArray);
    }

    /* console.log("result:" + (localDepthArray + 1)); */

    return (localDepthArray + 1) ;
  }

};