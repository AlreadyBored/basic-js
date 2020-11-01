const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arr) {
  if ( Array.isArray(arr) === false) return false;
  let newArr = [];
  for(let i=0; i < arr.length; i++){
    if( typeof arr[i] === 'string'){
      let str = arr[i].trim();
       newArr.push(str[0].toUpperCase());            
    } 
  }
  return newArr.sort().join('');
}


