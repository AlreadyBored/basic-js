module.exports = class DepthCalculator {
    calculateDepth(arr, depthArr = [], depthCount = 1) {
      depthArr.push(depthCount);

      for (i in arr){
        if (Array.isArray(arr[i]))
          this.calculateDepth(arr[i], depthArr, depthCount + 1);
      };

      return depthArr.sort(sortMaxToMin)[0];
    }
};

function sortMaxToMin(a,b) {
  if (parseInt(a) < parseInt(b)) return 1;
  if (parseInt(a) >= parseInt(b)) return -1;
}
