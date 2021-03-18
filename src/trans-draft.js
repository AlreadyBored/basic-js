const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  // throw new CustomError('Not implemented');
if (!Array.isArray(arr)){
  throw new Error('THROWN')
}


let transArray=[...arr]

transArray.forEach((e,i)=>e==='--discard-next'? transArray.splice(i+1, 1): 
 e==='--discard-prev'? transArray.splice(i-1, 1):
 e==='--double-next'? transArray.splice(i, 1, transArray[i+1]):
  e==='--double-prev'? transArray.splice(i  ,  1, transArray[i-1] ):
  e==='--double-prev'&&!e[i-2]==='--discard-next'? transArray.splice(i  ,  1, transArray[i-1] ):
 e )
 return transArray.filter(e=>e!=='--discard-next'&&e!==null&&e!==undefined&&e!=='--discard-prev'
 &&e!=='--double-prev'&&e!=='--double-next')
}