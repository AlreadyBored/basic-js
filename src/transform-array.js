const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
    if(!Array.isArray(arr)) throw new Error('\'arr\' parameter must be an instance of the Array!')
    
    let resultArray = new Array()
    const COMMANDS = ['--discard-prev', '--discard-next', '--double-prev', '--double-next']

    for(let i = 0; i < arr.length; i++) {
        if((i === arr.length - 1 || i === 0) && COMMANDS.includes(arr[i])) continue
        if(arr[i] === '--discard-prev') 
            resultArray.pop()
        else if(arr[i] === '--discard-next'){
            resultArray.push(undefined)
            i +=1
        }
        else if(arr[i] === '--double-prev') 
            resultArray.push(resultArray[i - 1])
        else if(arr[i] === '--double-next')
            resultArray.push(arr[i + 1])
        else resultArray.push(arr[i])
    }
    return resultArray.filter((value) => value !== undefined)
}

module.exports = {
  transform
};
