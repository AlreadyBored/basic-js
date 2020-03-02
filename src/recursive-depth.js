module.exports = class DepthCalculator {
    calculateDepth(arr) {
        let count = 1;
        for(let i = 0; i < arr.length; i++){
            if(Array.isArray(arr[i])) {
                return count += this.calculateDepth(arr[i]);                
            }         
        }
        return count;
    }
};