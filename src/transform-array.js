const CustomError = require("../extensions/custom-error");

module.exports = function transform( arr) {
  let arrNew = [];
  if(Array.isArray(arr)){
      for(let i = 0; i < arr.length; i++) {
          if(arr[i] === '--discard-next'){
              i++;
          } else if(arr[i] === '--discard-prev'){
              if (arrNew.length !== 0 && arr[i - 2] !== '--discard-next'){
                  arrNew.pop();
              }
          } else if(arr[i] === '--double-next'){
              arrNew.push(arr[i + 1]);
          } else if(arr[i] === '--double-prev'){
              if (i !== 0 && arr[i - 2] !== '--discard-next') {
                  arrNew.push(arr[i - 1]);
              }
          } else {
              arrNew.push(arr[i]);
          }
      };
  } else {
      throw new Error();
  }
  return arrNew.filter(e => e !== undefined); 
};
