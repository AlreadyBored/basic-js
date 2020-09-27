module.exports =  class DepthCalculator {
  calculateDepth(arr) {
    return Array.isArray(arr) ? Math.max(0, ...arr.map(e => this.calculateDepth(e))) +1 : 0;
  }
};