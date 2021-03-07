const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  // throw new CustomError('Not implemented');
if (!Array.isArray(arr)){
  throw new Error('THROWN')
}
//  let transArray=
//   arr.forEach((e,i)=>e==='--discard-next'? arr.splice(i+1, 1):  e==='--discard-prev'? arr.splice(i-1, 1)
//  :e==='--double-prev'? arr.splice(i, 1, i-1):e==='--double-next'? arr.splice(i, 1, i+1)
//  :e )
 for (let i = 0; i <= arr.length; i++) {
  //  let transArray = [];
  // transArray=arr.push[i]
  if (arr[i]==='--discard-next') {
    arr.splice(arr[i+1], 1)
    } 
    else if (arr[i]==='--discard-prev') {
      arr.splice(arr[i-1], 1)
      } 
  else if (arr[i]==='--double-next') {
    arr.splice(arr[i], 1, arr[i+1])
    } 
      else if(arr[i]==='--double-prev') {
      arr.splice(arr[i], 1, arr[i-1])
      }
  
  // else {arr.push(arr[i])}
   

};
return arr
 }