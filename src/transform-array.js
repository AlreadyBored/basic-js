module.exports = function transform(arr) {
    if (arr.length === 0) {
        return arr;
    }
    if (arr.isArray()){
        throw Error;
    }
    for(i = 0; i < arr.length; i++) {
        if (arr[i] === '--discard-next') {
            splice(arr[i], arr[i + 2]);
        } else if (arr[i] === '--discard-prev') {
            splice(arr[i-1], arr[i + 1]);
        } else if (arr[i] === '--double-next') {
            arr[i] = arr[i + 1];
        } else if (arr[i] === '--double-prev') {
            arr[i] = arr[i - 1];            
        }        
    }
    return arr;
};
