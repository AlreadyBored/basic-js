const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  // throw new CustomError('Not implemented');
if (!Array.isArray(arr)){
  throw new Error('THROWN')
}

// let arrTrans=[],
transArray=[...arr],
 arr
//  .filter(e=>e!==(arr[0]==='--discard-prev'))
 .forEach((e,i)=>e==='--discard-next'? arr.splice(i+1, 1): 
 e==='--discard-prev'? arr.splice(i-1, 1):
  e==='--double-prev'? arr.splice(i, 1, arr[i-1]):
e==='--double-next'? arr.splice(i, 1, arr[i+1]) :e )



 return transArray.filter(e=>e!=='--discard-next'&&e!==undefined&&e!=='--discard-prev'&&e!=='--double-prev'&&e!=='--double-next')
}