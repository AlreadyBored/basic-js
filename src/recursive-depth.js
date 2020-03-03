module.exports = class DepthCalculator {
    calculateDepth(arr) {
        let count = 0;
        for(let i = 0; i < arr.length; i++){
            if(Array.isArray(arr[i])) {
                count = Math.max(count, this.calculateDepth(arr[i]));                
            }         
        }
        return ++count;
    }
};