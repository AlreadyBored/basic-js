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
  if (Array.isArray(arr) == false){throw new Error("'arr' parameter must be an instance of the Array!")}
  let newArr = [];
  for (let i=0; i<arr.length; i++){
    if (arr[i] === '--discard-next'){i+=2
  } else {if (arr[i] === '--discard-prev'){newArr.pop();}
      else{if (arr[i] === '--double-next'){newArr.push(arr[i+1])}
          else{if (arr[i] === '--double-prev'){newArr.push(arr[i-1])}
              else{newArr.push(arr[i])}
    
  }
  }
  }
  console.log(newArr)
  }
  for (let i=0; i<newArr.length;i++){if(Number.isNaN(newArr[i]) == true){newArr.splice(i, 1)}}
  for (let i=0; i<newArr.length;i++){if(newArr[i] === undefined){newArr.splice(i, 1)}}
  return newArr
  
}

module.exports = {
  transform
};
